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
  
  
##PHASE 2 - creating a new project ##

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


##PHASE 3 - Growcery list app v1.0 - List view##

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
  

##PHASE 4 - Growcery list app v2.0 - Master detail##
