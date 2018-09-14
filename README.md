# React Native Laravel RESTful API
This project is a simple example and a boilerplate on how to use a react native application with larevel backend using RESTful API.

# Table of Contents:
* [Laravel configuration](#laravel-configuration)
* [Mobile configuration](#mobile-configuration)
* [usage](#usage)
* [Testing](#test)
## Laravel configuration:
```sh
$ cd web
$ composer install
```
Then rename the **.env.example** file to **.env**, open it and add your database name, your username and password, then run these commands to generate the key, create tables and insert some data:
```sh
$ php artisan key:generate
$ php artisan migrate --seed
```
Then serve your project with this flag to let any device from your local network to access your project.
```sh
$ php artisan serve --host=0.0.0.0
```
## Mobile configuration:
```sh
$ cd mobile
$ npm install
```
Then go to services/END_POINTS.js, and add your URL where your laravel project will be hosted (your local IP adress:port).
Go to your database and copy the **Laravel Password Grant Client** from the **oauth_clients** table and past it in services/AUTH.js file.
## Usage:
```
$ react-native run-android
```
Or 
```
$ react-native run-ios
```

