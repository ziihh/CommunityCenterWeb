
<?php

include_once("Model/DBModel.php");
include_once("API/login.php");
include_once("API/timeLine.php");
include_once("API/partner.php");
include_once("API/footer.php");
include_once("API/events.php");
header('Content-Type: application/json');

class Controller {
    public $model;
    public function __construct() {
        $this->model = new DBModel(); // create database object. 
    }

    /**
     * invokes API functionalities based upon user set variables. 
     */
    public function invoke() {
        if(isset($_GET["login"])){
            authenticateUser($this->model);
            
        } else if(isset($_GET["timeline"])){
            fetchTimeLineData($this->model);

        } else if(isset($_GET["authenticated"])){           // This is not return the correct output to front-end.
            isAuthenticated($this->model);

        } else if(isset($_GET["addTimeLine"])){
            addTimeLines($this->model);

        } else if(isset($_GET["showTimeLineDB"])){
           fetchTimeLineData($this->model);

        } else if(isset($_GET["events"])){
            fetchEventData($this->model);
        
        } else if(isset($_GET["addEvent"])){
            addEvents($this->model);

        } else if(isset($_GET["partner"])){
            fetchPartnerData($this->model);
        
        } else if(isset($_GET["addPartner"])){
            addPartner($this->model);

        } else if(isset($_GET["footer"])){
            fetchFooterData($this->model);
        
        } else if(isset($_GET["addFooter"])){
            addFooter($this->model);
        
        } else if(isset($_GET["deleteStory"])){
            deleteRow($this->model);
            
        } else if(isset($_GET["getStory"]) && isset($_GET["storyId"])){
            fetchTimeLineById($this->model, $_GET["storyId"]);
            
        } else if(isset($_GET["updateTimeLineId"])){
            updateTimeLineByStoryId($this->model);
            
        } else if(isset($_GET["users"])){
            getUsers($this->model);
            
        }
  
    }
}
?>
