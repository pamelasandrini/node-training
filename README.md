# node training

## Steps to create a new project

first create a server.js file and define the http module and the port

execute the **npm init command** to make it a node project

then execute **npm install express** command 
> (**@4.16.3 --save-exact**) optional

change the server.js to use express module instead of http.

to reload automatically **npm install nodemon@1.18.4 --save-dev --save-exact**

install nodemon globally in your system **npm install -g nodemon@1.18.4 --save-exact**

## Execute the project

For the first time you have to execute **npm install** to download the dependencies.

To execute the project you can execute **node server.js** command
or execute with nodemon **nodemon server.js**
or execute with start sript **npm start**