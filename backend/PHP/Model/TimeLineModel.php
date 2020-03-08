<?php
class TimeLineModel implements JsonSerializable {
 
    public $title; 
    public $year; 
    public $image; 
    public $description; 
    public $story; 
    public $storyId;
    
    public function __construct($title, $year, $image, $description, $story, $storyId=-1) {
        $this->storyId = $storyId;
        $this->title = $title; 
        $this->year = $year; 
        $this->image = $image; 
        $this->description = $description; 
        $this->story = $story; 
    }    
    
    public function jsonSerialize() {
        return array(
             'storyId' =>$this->storyId,
             'title' => utf8_encode($this->title),
             'year' => $this->year,
             'image' => utf8_encode($this->image),
             'description' => utf8_encode($this->description),
             'story' => utf8_encode($this->story),
        );
    }
    
   public function setId($storyId){
       $this->storyId = $storyId;
       
   }
    
    
}
?>
