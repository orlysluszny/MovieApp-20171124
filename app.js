// Code goes here

var app = angular.module("movieApp", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "home.html"
    })
    .when("/Actor", {
        templateUrl: "actors/actor.html"
        /*controller: "actorCtrl"*/
    })
    .when("/movie", {
        templateUrl: "movie/movie.html"
    })
    
 
    });    
