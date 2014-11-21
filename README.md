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

##PHASE 3 - prepareing work environment##
