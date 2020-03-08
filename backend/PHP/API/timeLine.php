<?php

$json = file_get_contents('php://input'); // gets POST body content.
$data = json_decode($json, true);

/**
 *  Fetch timelines and set response status code 200.
 *
 * @param      <DBModel>  $DB object represent the database.
 */
function fetchTimeLineData($DB){
    $dbResult = $DB->fetchTimeLine();
    // loops throught result as timeline object.
    foreach($dbResult as $timeLineObj){
        $entries[] = $timeLineObj->jsonSerialize(); // jsonfiy the objects.
    }
    $data["data"] = $entries;
    $data["statusCode"] = 200;
    $temp = json_encode($data);
    echo $temp;
}

/**
 *  Insert new timeline.
 *
 * @param      <DBModel>  $DB object represent the database.
 */
function addTimeLines($DB){
    $timeLineObj = new TimeLineModel(
     $GLOBALS["data"]["title"],
     $GLOBALS["data"]["year"],
     $GLOBALS["data"]["image"],
     $GLOBALS["data"]["description"],
     $GLOBALS["data"]["story"]);
    $DB->postTimeLine($timeLineObj);
    echo '{"statusCode": 200}';
}

/**
 *  Delete the timeline row based on url parameter.
 *
 * @param      <DBModel>  $DB object represent the database.
 */
function deleteRow($DB){
   $DB->deleteTimeLineRow($GLOBALS["data"]["storyId"]);
}

function fetchTimeLineById($DB, $storyId){
    $timeLine = $DB->getTimeLineRow($storyId);

    $data["data"] = $timeLine->jsonSerialize(); // jsonfiy the objects.;
    $data["statusCode"] = 200;
    $temp = json_encode($data);
    echo $temp;
}

function updateTimeLineByStoryId($DB){
    $timeLineObj = new TimeLineModel($GLOBALS["data"]["title"], $GLOBALS["data"]["year"],$GLOBALS["data"]["image"],$GLOBALS["data"]["description"], $GLOBALS["data"]["story"], $GLOBALS["data"]["storyId"]);

    $success = $DB->updateTimeLine($timeLineObj);


    if($success) {
        $data["statusCode"] = 200;
        $temp = json_encode($data);
        echo $temp;
    } else {
        $data["statusCode"] = 404;
        $temp = json_encode($data);
        echo $temp;
    }
}

?>
