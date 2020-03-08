<?php

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