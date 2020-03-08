<?php
$json = file_get_contents('php://input'); // gets POST body content.
$data = json_decode($json, true);
function fetchEventData($DB){
    $dbResult = $DB->fetchEvents();    
    $entries = array();
    foreach ($dbResult as $eventObj) {
        $entries[] = $eventObj->jsonSerialize();
    }
    $data["data"] = $entries;
    $data["statuscode"] = 200;
    $temp = json_encode($data);
    echo $temp;
}
function addEvents($DB){
    $eventObj = new EventModel(
      $GLOBALS["data"]["eventId"],
      $GLOBALS["data"]["title"],
      $GLOBALS["data"]["date"],
      $GLOBALS["data"]["time"],
      $GLOBALS["data"]["image"],
      $GLOBALS["data"]["imagealt"],
      $GLOBALS["data"]["description"],
      $GLOBALS["data"]["tags"]
    );
    $DB->postEvent($eventObj);
    echo '{"statusCode": 200}';
}
?>