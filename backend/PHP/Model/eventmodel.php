<?php

class EventModel implements JsonSerializable
{
    public $eventId;
    public $title;
    public $date;
    public $time;
    public $image;
    public $imagealt;
    public $description;
    public $tags;

    public function __construct($eventId, $title, $date, $time, $image, $imagealt, $description, $tags)
    {
        $this->eventId = $eventId;
        $this->title = $title;
        $this->date = $date;
        $this->time = $time;
        $this->image = $image;
        $this->imagealt = $imagealt;
        $this->description = $description;
        $this->tags = $tags;
    }

    public function jsonSerialize()
    {
        return array(
             'eventId' => $this->eventId,
             'title' => utf8_encode($this->title),
             'date' => $this->date,
             'time' => $this->time,
             'image' => $this->image,
             'imagealt' => utf8_encode($this->imagealt),
             'description' => utf8_encode($this->description),
             'tags' => utf8_encode($this->tags),
        );
    }
}
?>
