Group members: 
Leif Christian Brenna, stud. nr: 489049
Stian Hjulstad Nilsen, stud. nr: 997834
Bjørn Bordewich Gyles, stud. nr: 490199
Zain Butt,             stud. nr: 490188

# Install guide

- Clone the repository.
- Install [node.js](https://nodejs.org/en/)
- Open terminal, navigate to webproject directory and run the following commands.

  - `npm install`
  - `npm start`
  - `npm install i vertical-timeline-component-for-react`
  - `npm install --save react-router-dom`
  - `npm install --save react-modal`

- Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## How to start web-application?

### Windows

- Install [XAMPP](https://www.apachefriends.org/download.html)
- Navigate to `c:\xampp\htdocs` and put backend folder.
- Upload prestgarn.sql file in [phpMyAdmin](http://localhost/phpmyadmin/)

### MAC

- Install [XAMPP](https://www.apachefriends.org/download.html)(NATIVE not VM to be sure it works properly)
- Navigate to `Applications\xampp\htdocs` and put backend folder.
- Upload prestgarn.sql file in [phpMyAdmin](http://localhost/phpmyadmin/)

### XAMPP Settings

- To make sure inserting events through backend works properly, or if it does not work.
    - Edit the my.ini/my.cnf for mySQL in `XAMPP_folder/etc/my.cnf`
    - Change these settings in the config file to the following:
      - max_allowed_packet = 16M
      - innodb_log_file_size = 128M

# Assignment 3

The group had choice to do assignment 3 from Programmering for web 2 seprate or collaborate with Webproject's project. The group chose to do the assignment 3 in Webproject course since the assignment requirment was to implement admin panel and content mangement system. This was something that Webproject's project required as well for it becomes an dynamic website.

## Admin page

The group implemented the Admin panel and Content mangement system. There is no sign of login option on website since there is no need for user login option in website. The login option is only for Admin for edit/upload or delete content from website.

- Admin to login navigate to http://localhost:3000/admin

## Backoffice

After admin log-in he/she will be redirect to following url

- http://localhost:3000/backoffice

Here admin will find backoffice for the website where new content can be added or update existing content can modified.

To access these priviliges admin will be presented a panel with different button. Among all button only timelime and event is implemented. Upon click on any of implemented button admin will be presented forms for upload new content. Under the forms the table will shown which represents what is in the database. Buttons for deleting or updating will be shown beside each row of table.


## Assignment 3 explaination

To insert a new timeline, admin needs to give title, year of the story, URL address of image, small description of image (ALT-text) and the main story. After submitting the form, it will insert new data in database and system will display that new content in website automatically.

URL address of image is the option the group decided to use because the images the admin will post are mostly not taken by him. By law the admin mustgive credits to the photographerand then post in Præstgar’n website. This can be done by uploading images on third-party website where the admin can give credits to photographerand get the URL address of image.

When clicking on partner button in back office, admin will be presented with a form which only post the form and display the partner on webpage. 

At this point, you are only able to delete content from partner page when you manually go into the database and delete a row. The same goes for the footer and events page.

## Back-end structure

The group have used MVC pattern in this project to have code structure. View is front-end part of the system, whilst Controller and Model are the back-end part of the system.

Backend

- PHP
    - API 
        - timeLine.php 
        - login.php 
        - events.php
        - footer.php
	    	- partner.php
    - Controller
        - Controller.php
    - Model
        - DBModel.php
        - TimeLineModel.php
        - UserModel.php
        - eventmodel.php
        - session.csv
		    - partnermodel.php
        - footermodel.php
  - index.php
- SQL
  - prestgarn.sql

## Back-end explaination

Files within the API folder are entry points for handling the user request. Controller.php is responsible for invoking API entry points. Files within the Model folder contains models that represent entities from the database. DBModel.php is responsible for validation and handling the data from Database.


## Front-end structure

- Prestgarn
  - BackEnd
  - Webproject
    - node_modules
    - public
      - index.html
    - src
      - components
      - css
      - images
      - App.js
      - sendAPIRequest
      - index.js
      - gallery-image.js
      - package-lock.json
      - package.json
  - README.md

## Front-end explaination

This is the Front-end part system. This system is used as View part from the MVC. The components folder contains all the components for the website. App.js is responsible for the all components will render and sendAPIRequest is responsible to send a GET or POST request to back-end.
