# WebDev 2014 - Frontend Track 4 repository #

##PHASE 1 - prepareing work environment##

0. Have Chrome installed from [here](http://www.google.com/chrome/)  

1. Instal node  

  ```bash
  $ sudo apt-get install nodejs
  ```

2. Make symbolic link if node is not defined (if writing node -v does not show you the version)  

  ```bash
  $ sudo ln -s /usr/bin/nodejs /usr/bin/node  
  ```

3. Install npm  

  ```bash
  $ sudo apt-get install npm
  ```
  
4. Install Ionic framework 

  ```bash
  $ sudo npm install -g ionic
  ```
  
5. Install Cordova  

  ```bash
  $ sudo npm install -g cordova
  ```
  
##PHASE 2 - Install Android development environment##   

1. remove standard java sdk  (if java not installed)  

  ```bash
  sudo apt-get purge openjdk-\*
  ```

2. install java sdk 
  
  ```bash
  sudo apt-get install default-jdk
  ```
  
3. instal 32bit libraries  
  
  ```bash
  sudo apt-get install lib32z1 lib32ncurses5 lib32bz2-1.0
  ```
  
4. install ant  

  ```bash
  sudo apt-get install ant
  ```

5. get Android SDK, [here](https://developer.android.com/sdk/index.html?hl=i)

6. unpack
  * ``` $ cd ~/Downloads```
  * ``` unzip adt-bundle-linux-x86_64-20140702.zip -d ~/Documents/Android ```

7. add android to path:
  * ``` $ nano ~/.bashrc```
  * copy at the end
  ``` 
  #AndroidDev variables
  export PATH=${PATH}:~/Documents/Android/adt-bundle-linux-x86_64-20140702/sdk/tools
  export PATH=${PATH}:~/Documents/Android/adt-bundle-linux-x86_64-20140702/sdk/platform-tools
  ```
  * save, exit restart terminal
  
8. start android ```$ android``` and install Android 4.4.2 (API 19) and Android 4.3.1 (API 18)

9. create emulator ``` $ android avd```
  

##PHASE 3 - creating a new project ##

1. Navigate to work folder  

  ```bash
  $ cd [work_folder]
  ```
  
2. Create an ionic blank project  

  ```bash
  $ ionic start myAwesomeApp
  ```
3. Navigate to app folder  

  ```bash
  $ cd myAwesomeApp
  ```
  
4. Start the ionic server  

  ```bash
  $ ionic serve
  ```
5. Open Chrome and folow [http://localhost:8100](http://localhost:8100) to view your app  

6. Explore project structure  

  ```bash
  ├── bower.json     // bower dependencies
  ├── config.xml     // cordova configuration
  ├── gulpfile.js    // gulp tasks
  ├── ionic.project  // ionic configuration
  ├── package.json   // node dependencies
  ├── hooks          // custom cordova hooks to execute on specific commands
  ├── platforms      // iOS/Android specific builds will reside here
  ├── plugins        // where your cordova/ionic plugins will be installed
  ├── scss           // scss code, which will output to www/css/
  └── www            // application - JS code and libs, CSS, images, etc.
      ├── css             
      │    └── style.css  // main style file for app
      ├── img             // app image assets
      ├── js              // scripts folder - will contain controllers, services, partial views etc.
      │    └── app.js     // angular init file
      ├── lib             // lybraries placeholder folder
      └── index.html      // application entry point
  ````

7. Create the following structure in the '''js''' folder  

```bash
  └── js     
      ├── controllers             
      ├── partials        // app image assets
      ├── resources       // scripts folder - will contain controllers, services, partial views etc.
      └── services        // application entry point
      
```


##PHASE 4 - Growcery list app v1.0 - List view##

###USEFUL LINKS###

*  [Ionic CSS components](http://ionicframework.com/docs/components/)
*  [Ionic JS directives](http://ionicframework.com/docs/api/)
*  [Ionicons](http://ionicons.com/)


1. In ```index.html``` :  
  a. empty ```<body>``` tag  
  b. create an ```<ion-pane>``` element with an ```<ion-header-bar>``` and ```<ion-content>``` inside
  c. in the content tag, create ```<ion-list>``` with the following components:
    * an input field and a button to add entries (in the same item element)
    * a title for a list (as an item-divider) that will also contain the number of items in the list
    * the next elements are ```<ion-item>```'s as grocery list entries
2. Create a controller for the grocery list that contains an array of items and methods to add and remove as well as empty the list; add it as a ```ng-controller``` for the ```<ion-pane>```
3. in ```index.html``` remove the statically created entries and replace it with one ```<ion-item>``` that uses ```ng-repeat``` to generate the list
4. inside the ```<ion-item>``` add an ```<ion-option-button>``` that will delete the respective item list entry
5. add a button in the ```<ion-header-bar>``` that will empty the list
  

##PHASE 5 - Growcery list app v2.0 - Master detail##

###USEFUL LINKS###

*  [AngularJS ui-router](https://github.com/angular-ui/ui-router)


1. In ```index.html``` :  
  a. copy the html inside the ```<ion-pane>``` into a new partial html (main list partial)
  b. place an ```<ion-nav-view >``` in the pane
2. In ```app.js```
  * create 3 states for ```$stateProvider``` : main list, grocery type list, grocery details list
3. Create 3 partials (root element is ```<ion-view>```):
  * main list
    * header with "add item" button
    * list with added grocery items 
    * every item should have a delete button and a batge with number of times an item has been addded to the list
    * a footer displaying total price of grocery list
  * grocery types 
    * header with "back" and "add new" buttons
    * list for grocery types displayng the names; click on list item adds it to main list
    * an ```<ion-option-button>``` button for each list item
  * grocery type detail
    * header with "back" button
    * 3 input fields for name, description and price
    * save button
  * navigation between the partials:  
    ```
    MAIN LIST <--- (add item || clickitem/back) ---> GROCERY TYPES <--- (add/edit type || save type/back  ) ---> GROCERY TYPE DETAIL
    ```
4. Create a Grocery service that serves a list of grocery types to be added to grocery list
  * the grocery item has the following structure:  
  ``` {
        name : string,
        description : string,
        price : number,
        id : integer, autoincrement
      }```
  * add methods to get full grocery type list, a single item (by id) and to add a new item
5. Create controllers fo the partials:
  * root controller
    * contains the main grocery list, and method to add a new item
  * main list
    * methods to delete and calculate total cost
    * click handler for add new item, change the state to grocery type view
  * grocery types 
    * get grocerie types list from service
    * methods to add to main list, edit type and make a new type (by going to grocery type state, and passing the selected id, if it is the case)
  * grocery type detail
    * get grocery type details (if id is present in ```$stateParams```)
    * save details and go back to type list

##PHASE 6 - Growcery list app v3.0 - Firebase connection##   

1. create firebase account [here](https://www.firebase.com/signup/)
2. create firebase app from [dashboard](https://www.firebase.com/account/) (name it wbdv-your_full_name)
3. import json file in the resources folder in version 3 of the app
4. instal angularfire: ```bower install firebase angularfire```
5. inject firebase service: ```var app = angular.module('GroceryListApp', ['ionic',"firebase"])```
6. inject it in GroceryService
7. create a new reference for firebase app ```var ref = new Firebase("https://wbdv-andrei.firebaseio.com/");```
8. create a sync conection ```var sync = $firebase(ref);```
9. get your data ```sync.$asArray();```
10. update the edit and add methods:
  * ```$add```
  * ```.set()```

##PHASE 7 - Publish App on Android emulator ##

1. go to app directory
2. add android platform

  ```bash
  ionic platform add adnroid
  ```

3. build android project

  ```bash
  ionic build android

  ```
4. run on emulator (emulator must be started)

  ```bash
  ionic run android
  ```