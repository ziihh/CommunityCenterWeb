<?php


class UserModel {

	private $username;
	private $password;

	function __construct($username, $password){
		$this->username = $username;
		$this->password = $password;
	}

	function getPassword(){
		return $this->password;
	}
}

?>