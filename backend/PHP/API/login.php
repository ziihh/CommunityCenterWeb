<?php
session_start();
$username = $password = '';
$username_err = $password_err = '';
$json = file_get_contents('php://input'); // gets POST body content.
$data = json_decode($json, true);

/**
 * Handles the authentication of user and response with a meningfull statusCode.
 *
 * @param      <DBModel>  $DB object represent the database.
 */
function authenticateUser($DB){
    if($GLOBALS["data"]["username"] != "" && $GLOBALS["data"]["password"] != ""){
        $dbResult = $DB->userExist($GLOBALS["data"]["username"], $GLOBALS["data"]["password"]);

        // validates the password.
        if(password_verify($GLOBALS["data"]["password"], $dbResult->getPassword())){
            $DB->writeSessionToFile("\nauthenticated," . $GLOBALS["data"]["username"] . "," . date("Y-m-d"));
            echo jsonResponse("Authenticated", 200);
        } else {
            $DB->writeSessionToFile("\nnotAuthenticated," . $GLOBALS["data"]["username"] . "," . date("Y-m-d"));
            echo jsonResponse("Not Authenticated", 401);
        }

    } else {
        $DB->writeSessionToFile("\nnotAuthenticated," . $GLOBALS["data"]["username"] . "," . date("Y-m-d"));
        echo jsonResponse("Bad Request", 400);
    }
}

// Ref for years, months and days calculation: https://stackoverflow.com/questions/676824/how-to-calculate-the-difference-between-two-dates-using-php
function isAuthenticated($DB){
    $sessionData = $DB->readLastSessionFromFile();
    if(sizeof($sessionData) == 3){
        $diff = abs(strtotime($sessionData[2]) - strtotime(date("Y-m-d")));
        $years = floor($diff / (365*60*60*24));
        $months = floor(($diff - $years * 365*60*60*24) / (30*60*60*24));
        $days = floor(($diff - $years * 365*60*60*24 - $months*30*60*60*24)/ (60*60*24));

        if($sessionData[0] == "authenticated" && $days < 1){
            echo '{"authenticated": true}';
        } else {
            echo '{"authenticated": false}';
        }
    } else {
        echo '{"authenticated": false}';
    }

}



/**
 * Creates the json response
 *
 * @param      string   $message   The message
 * @param      integer  $code      The code
 * @param      string   $username  The username
 * @param      string   $password  The password
 *
 * @return     json   json object contructed with parameter values.
 */
function jsonResponse($message = null, $code = 200){

    // set the actual code
    http_response_code($code);
    // set the header to make sure cache is forced
    header("Cache-Control: no-transform,public,max-age=300,s-maxage=900");
    // treat this as json
    header('Content-Type: application/json');
    $status = array(
        200 => '200 OK',
        400 => '400 Bad Request',
        401 => '401 Not Authenticated',
        500 => '500 Internal Server Error'
    );
    // ok, validation error, or failure
    header('Status: '.$status[$code]);
    // return the encoded json
    return json_encode(array(
        'statusCode' => $code, // success or not?
        'message' => $message,
        )
    );
}

 ?>