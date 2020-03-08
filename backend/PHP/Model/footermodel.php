<?php

class FooterModel implements JsonSerializable
{
    public $footerId;
    public $title;
    public $image;
    public $description;

    public function __construct($footerId, $title, $description)
    {
        $this->footerId = $footerId;
        $this->title = $title;
        $this->description = $description;
    }

    public function jsonSerialize()
    {
        return array(
             'footerId' => $this->footerId,
             'title' => utf8_encode($this->title),
             'description' => utf8_encode($this->description)
        );
    }
}
?>
