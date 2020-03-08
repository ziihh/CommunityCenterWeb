<?php
$json = file_get_contents('php://input'); // gets POST body content.
$data = json_decode($json, true);
function fetchFooterData($DB){
    $dbResult = $DB->fetchFooter();    
    $entries = array();
    foreach ($dbResult as $footerObj) {
        $entries[] = $footerObj->jsonSerialize();
    }
    $data["data"] = $entries;
    $data["statuscode"] = 200;
    $temp = json_encode($data);
    echo $temp;
}
function addFooter($DB){
    $footerObj = new FooterModel(
      $GLOBALS["data"]["footerId"],
      $GLOBALS["data"]["title"],
      $GLOBALS["data"]["description"]
    );
    $DB->postFooter($footerObj);
    echo '{"statusCode": 200}';
}
?>