<?php
$json = file_get_contents('php://input'); // gets POST body content.
$data = json_decode($json, true);
function fetchPartnerData($DB){
    $dbResult = $DB->fetchPartner();    
    $entries = array();
    foreach ($dbResult as $partnerObj) {
        $entries[] = $partnerObj->jsonSerialize();
    }
    $data["data"] = $entries;
    $data["statuscode"] = 200;
    $temp = json_encode($data);
    echo $temp;
}
function addPartner($DB){
    $partnerObj = new PartnerModel(
      $GLOBALS["data"]["partnerId"],
      $GLOBALS["data"]["title"],
      $GLOBALS["data"]["image"],
      $GLOBALS["data"]["description"]
    );
    $DB->postPartner($partnerObj);
    echo '{"statusCode": 200}';
}
?>