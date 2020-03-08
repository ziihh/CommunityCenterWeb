<?php
include("TimeLineModel.php");
include("UserModel.php");
include("eventmodel.php");
include("partnermodel.php");
include("footermodel.php");

class DBModel{
    protected $db = null;

    public function __construct($db = null){
        if ($db) {
            $this->db = $db;
        } else {
            try {
                $this->db = new PDO("mysql:host=localhost;dbname=prestgarn;", "root", ""); // creates PDO object.
            } catch (PDOException $e) {
                echo "Error ocurred!";
                echo $e->getMessage();
            }
        }
    }

    /**
     * Check if user exist in db,
     *
     * @param      string  $username  The username
     * @param      string  $password  The password
     *
     * @return     <type>  if true then return the user
     */
    public function userExist($username, $password){
        $request = $this->db->prepare("SELECT * FROM users WHERE username = :username");
        $request->bindValue(':username', $username, PDO::PARAM_STR);
        $request->execute();
        $results = $request->fetch(PDO::FETCH_ASSOC);
        $user = new UserModel($results["username"], $results["password"]);
        return $user;
    }

    
    /**
     * Fetches events.
     *
     * @return     array  An array of events objects.
     */
    
    public function fetchEvents() {
        $eventRow = array();
        $eventArray = array();

        $request = $this->db->prepare("SELECT * FROM events");
        $request->execute();
        $result = $request->fetchAll(PDO::FETCH_ASSOC);

        foreach ($result as $row) {
            $eventRow = new EventModel(
              $row["eventId"],
              $row["title"],
              $row["date"],
              $row["time"],
              $row["image"],
              $row["imagealt"],
              $row["description"],
              $row["tags"]
            );

            array_push($eventArray, $eventRow);
        }
        return $eventArray;
    }

    public function postEvent($events){
        
            $request = $this->db->prepare("INSERT INTO events(title, date, time, image, imagealt, description, tags) VALUES(:title, :date, :time, :image, :imagealt, :description, :tags)");
            
            $request->bindValue(':title', $events->title, PDO::PARAM_STR);
            $request->bindValue(':date', $events->date, PDO::PARAM_STR);
            $request->bindValue(':time', $events->time, PDO::PARAM_STR);
            $request->bindValue(':image', $events->image, PDO::PARAM_STR);
            $request->bindValue(':imagealt', $events->imagealt, PDO::PARAM_STR);
            $request->bindValue(':description', $events->description, PDO::PARAM_STR);
            $request->bindValue(':tags', $events->tags, PDO::PARAM_STR);

            $request->execute();
    }


/**
     * Fetches partner.
     *
     * @return     array  An array of partner objects.
     */
    
    public function fetchPartner() {
        $partnerRow = array();
        $partnerArray = array();

        $request = $this->db->prepare("SELECT * FROM partner");
        $request->execute();
        $result = $request->fetchAll(PDO::FETCH_ASSOC);

        foreach ($result as $row) {
            $partnerRow = new PartnerModel(
              $row["partnerId"],
              $row["title"],
              $row["image"],
              $row["description"]
            );

            array_push($partnerArray, $partnerRow);
        }
        return $partnerArray;
    }

    public function postPartner($partner){
        
            $request = $this->db->prepare("INSERT INTO partner(title, image, description) VALUES(:title, :image, :description)");
            
            $request->bindValue(':title', $partner->title, PDO::PARAM_STR);
            $request->bindValue(':image', $partner->image, PDO::PARAM_STR);
            $request->bindValue(':description', $partner->description, PDO::PARAM_STR);

            $request->execute();
    }

    /**
     * Fetches footer.
     *
     * @return     array  An array of footer objects.
     */
    
    public function fetchFooter() {
        $footerRow = array();
        $footerArray = array();

        $request = $this->db->prepare("SELECT * FROM footer");
        $request->execute();
        $result = $request->fetchAll(PDO::FETCH_ASSOC);

        foreach ($result as $row) {
            $footerRow = new FooterModel(
              $row["footerId"],
              $row["title"],
              $row["description"]
            );

            array_push($footerArray, $footerRow);
        }
        return $footerArray;
    }

    public function postFooter($footer){
        
            $request = $this->db->prepare("INSERT INTO footer(title, description) VALUES(:title, :description)");
            
            $request->bindValue(':title', $footer->title, PDO::PARAM_STR);
            $request->bindValue(':description', $footer->description, PDO::PARAM_STR);

            $request->execute();
    }


    /**
     * Fetches a time line.
     *
     * @return     array  An array of timeline objects.
     */
    public function fetchTimeLine()
    {
        $timeLineRow = array();
        $timeLineArray = array();

        $request = $this->db->prepare("SELECT * FROM timeline");
        $request->execute();
        $result = $request->fetchAll(PDO::FETCH_ASSOC);
        // loops throught result as row and makes timeline object.
        foreach($result as $row){
             $timeLineRow = new TimeLineModel($row["title"],$row["year"], $row["image"], $row["description"],$row["story"],$row["storyId"]);

            array_push($timeLineArray, $timeLineRow);
        }
        return $timeLineArray;

    }

    /**
     * Posts a time line.
     *
     * @param      string  $timeLine  The time line
     *
     * @return     bool  if succeeded return true.
     */
    public function postTimeLine($timeLine){

        $request = $this->db->prepare("INSERT INTO timeline(title, year, image, description, story) VALUES(:title, :year, :image, :description, :story)");
        $request->bindValue(':title', $timeLine->title, PDO::PARAM_STR);
        $request->bindValue(':year', $timeLine->year, PDO::PARAM_STR);
        $request->bindValue(':image', $timeLine->image);
        $request->bindValue(':description', $timeLine->description, PDO::PARAM_STR);
        $request->bindValue(':story', $timeLine->story, PDO::PARAM_STR);

        $res = $request->execute();
        $timeLine->setId($this->db->lastInsertId());
        return $res;

    }

    /**
     * Delete the timeline
     *
     * @param      integar  $timeLineId  The time line identifier
     */
    public function deleteTimeLineRow($timeLineId){
        $request = $this->db->prepare("DELETE FROM timeline WHERE storyId = :storyId");

        $request->bindValue(':storyId', $timeLineId, PDO::PARAM_INT);

        $request->execute();

    }
    
    public function getTimeLineRow($timeLineId){
        $request = $this->db->prepare("SELECT * FROM timeline WHERE storyId=:storyId");
        $request->bindValue(':storyId', $timeLineId, PDO::PARAM_INT);

        $request->execute();
        $row = $request->fetch(PDO::FETCH_ASSOC);

        $timeLine = new TimeLineModel( $row["title"],$row["year"], $row["image"], $row["description"],$row["story"],$row["storyId"]);

        return $timeLine;
    }
    
    public function updateTimeLine($timeLine){
        $request = $this->db->prepare("UPDATE timeline SET title = :title, year = :year, image = :image, description = :description, story = :story WHERE storyId = :storyId");

        $request->bindValue(':title', $timeLine->title, PDO::PARAM_STR);
        $request->bindValue(':year', $timeLine->year, PDO::PARAM_STR);
        $request->bindValue(':image', $timeLine->image);
        $request->bindValue(':description', $timeLine->description, PDO::PARAM_STR);
        $request->bindValue(':story', $timeLine->story, PDO::PARAM_STR);  
        $request->bindValue(':storyId', $timeLine->storyId, PDO::PARAM_INT);
        
        $res = $request->execute();
        return $res;
    }
    
    function writeSessionToFile($content, $mode="a", $filename="Model/session.csv"){
        $file = fopen($filename, $mode);
        fwrite($file, $content);

        fclose($file);
    }
    
    function readLastSessionFromFile(){
        $rows = file('Model/session.csv');
        $last_row = array_pop($rows);
        $data = str_getcsv($last_row);
        return $data;
    }
}   

?>
