<?php

class PartnerModel implements JsonSerializable
{
    public $partnerId;
    public $title;
    public $image;
    public $description;

    public function __construct($partnerId, $title, $image, $description)
    {
        $this->partnerId = $partnerId;
        $this->title = $title;
        $this->image = $image;
        $this->description = $description;
    }

    public function jsonSerialize()
    {
        return array(
             'partnerId' => $this->partnerId,
             'title' => utf8_encode($this->title),
             'image' => $this->image,
             'description' => utf8_encode($this->description)
        );
    }
}
?>
