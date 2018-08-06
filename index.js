// dependencies
'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const http = require('https');
var unirest = require("unirest");
let errorResposne = {
    results: []
};
var port = process.env.PORT || 8080;
// create serve and configure it.
const server = express();
server.use(bodyParser.json());
server.post('/',function (request,response)  {
    if(request.body.queryResult.intent.displayName == 'StartEngine') {
        
        //start - socket io
        var socket = require('socket.io-client')('wss://jcbcontroller.herokuapp.com');
        socket.on('connect', function(){
            console.log('connected');
                        
            socket.on('login', function(data){
                console.log('login');
                socket.emit('new message', 'StartEngine'); //sends message to chat server
            });
            
            socket.on('got message', function() {
                socket.disconnect();
            });
            
            socket.emit('add user', 'Assistant'); //login as "Assistant"
        });
        //end - socket io

        //start - response to google assistant

        response.setHeader('Content-Type', 'application/json');
        response.send(JSON.stringify({
                "fulfillmentText": "Okay",
                "fulfillmentMessages": [
                ]
            }
        )); 
    }
    else if(request.body.queryResult.intent.displayName == 'SideView') {
        
        //start - socket io
        var socket = require('socket.io-client')('wss://jcbcontroller.herokuapp.com');
        socket.on('connect', function(){
            console.log('connected');
                        
            socket.on('login', function(data){
                console.log('login');
                socket.emit('new message', 'SideView'); //sends message to chat server
            });
            
            socket.on('got message', function() {
                socket.disconnect();
            });
            
            socket.emit('add user', 'Assistant'); //login as "Assistant"
        });
        //end - socket io

        //start - response to google assistant

        response.setHeader('Content-Type', 'application/json');
        response.send(JSON.stringify({
                "fulfillmentText": "There you go",
                "fulfillmentMessages": [
                ]
            }
        )); 
    }
    else if(request.body.queryResult.intent.displayName == 'Cabin') {
        
        //start - socket io
        var socket = require('socket.io-client')('wss://jcbcontroller.herokuapp.com');
        socket.on('connect', function(){
            console.log('connected');
                        
            socket.on('login', function(data){
                console.log('login');
                socket.emit('new message', 'Cabin'); //sends message to chat server
            });
            
            socket.on('got message', function() {
                socket.disconnect();
            });
            
            socket.emit('add user', 'Assistant'); //login as "Assistant"
        });
        //end - socket io

        //start - response to google assistant

        response.setHeader('Content-Type', 'application/json');
        response.send(JSON.stringify({
                "fulfillmentText": "Here it is",
                "fulfillmentMessages": [
                ]
            }
        )); 
    }
    else if(request.body.queryResult.intent.displayName == 'ShowAlert') {
        
        //start - socket io
        var socket = require('socket.io-client')('wss://jcbcontroller.herokuapp.com');
        socket.on('connect', function(){
            console.log('connected');
                        
            socket.on('login', function(data){
                console.log('login');
                socket.emit('new message', 'ShowAlert'); //sends message to chat server
            });
            
            socket.on('got message', function() {
                socket.disconnect();
            });
            
            socket.emit('add user', 'Assistant'); //login as "Assistant"
        });
        //end - socket io

        //start - response to google assistant

        response.setHeader('Content-Type', 'application/json');
        response.send(JSON.stringify({
                "fulfillmentText": "Hmm",
                "fulfillmentMessages": [
                ]
            }
        )); 
    }
    else if(request.body.queryResult.intent.displayName == 'TroubleshootOne') {
        
        //start - socket io
        var socket = require('socket.io-client')('wss://jcbcontroller.herokuapp.com');
        socket.on('connect', function(){
            console.log('connected');
                        
            socket.on('login', function(data){
                console.log('login');
                socket.emit('new message', 'TroubleshootOne'); //sends message to chat server
            });
            
            socket.on('got message', function() {
                socket.disconnect();
            });
            
            socket.emit('add user', 'Assistant'); //login as "Assistant"
        });
        //end - socket io

        //start - response to google assistant

        response.setHeader('Content-Type', 'application/json');
        response.send(JSON.stringify({
                "fulfillmentText": "Hmm",
                "fulfillmentMessages": [
                ]
            }
        )); 
    }
    else if(request.body.queryResult.intent.displayName == 'TroubleshootTwo') {
        
        //start - socket io
        var socket = require('socket.io-client')('wss://jcbcontroller.herokuapp.com');
        socket.on('connect', function(){
            console.log('connected');
                        
            socket.on('login', function(data){
                console.log('login');
                socket.emit('new message', 'TroubleshootTwo'); //sends message to chat server
            });
            
            socket.on('got message', function() {
                socket.disconnect();
            });
            
            socket.emit('add user', 'Assistant'); //login as "Assistant"
        });
        //end - socket io

        //start - response to google assistant

        response.setHeader('Content-Type', 'application/json');
        response.send(JSON.stringify({
                "fulfillmentText": "Hmm",
                "fulfillmentMessages": [
                ]
            }
        )); 
    }
    else if(request.body.queryResult.intent.displayName == 'Pause') {
        
        //start - socket io
        var socket = require('socket.io-client')('wss://jcbcontroller.herokuapp.com');
        socket.on('connect', function(){
            console.log('connected');
                        
            socket.on('login', function(data){
                console.log('login');
                socket.emit('new message', 'Pause'); //sends message to chat server
            });
            
            socket.on('got message', function() {
                socket.disconnect();
            });
            
            socket.emit('add user', 'Assistant'); //login as "Assistant"
        });
        //end - socket io

        //start - response to google assistant

        response.setHeader('Content-Type', 'application/json');
        response.send(JSON.stringify({
                "fulfillmentText": "Okay",
                "fulfillmentMessages": [
                ]
            }
        )); 
    }
    else if(request.body.queryResult.intent.displayName == 'Forward') {
        
        //start - socket io
        var socket = require('socket.io-client')('wss://jcbcontroller.herokuapp.com');
        socket.on('connect', function(){
            console.log('connected');
                        
            socket.on('login', function(data){
                console.log('login');
                socket.emit('new message', 'Forward'); //sends message to chat server
            });
            
            socket.on('got message', function() {
                socket.disconnect();
            });
            
            socket.emit('add user', 'Assistant'); //login as "Assistant"
        });
        //end - socket io

        //start - response to google assistant

        response.setHeader('Content-Type', 'application/json');
        response.send(JSON.stringify({
                "fulfillmentText": "Okay",
                "fulfillmentMessages": [
                ]
            }
        )); 
    }
    else if(request.body.queryResult.intent.displayName == 'Backward') {
        
        //start - socket io
        var socket = require('socket.io-client')('wss://jcbcontroller.herokuapp.com');
        socket.on('connect', function(){
            console.log('connected');
                        
            socket.on('login', function(data){
                console.log('login');
                socket.emit('new message', 'Backward'); //sends message to chat server
            });
            
            socket.on('got message', function() {
                socket.disconnect();
            });
            
            socket.emit('add user', 'Assistant'); //login as "Assistant"
        });
        //end - socket io

        //start - response to google assistant

        response.setHeader('Content-Type', 'application/json');
        response.send(JSON.stringify({
                "fulfillmentText": "Okay",
                "fulfillmentMessages": [
                ]
            }
        )); 
    }
    else if(request.body.queryResult.intent.displayName == 'Lift') {
        
        //start - socket io
        var socket = require('socket.io-client')('wss://jcbcontroller.herokuapp.com');
        socket.on('connect', function(){
            console.log('connected');
                        
            socket.on('login', function(data){
                console.log('login');
                socket.emit('new message', 'Lift'); //sends message to chat server
            });
            
            socket.on('got message', function() {
                socket.disconnect();
            });
            
            socket.emit('add user', 'Assistant'); //login as "Assistant"
        });
        //end - socket io

        //start - response to google assistant

        response.setHeader('Content-Type', 'application/json');
        response.send(JSON.stringify({
                "fulfillmentText": "Okay",
                "fulfillmentMessages": [
                ]
            }
        )); 
    }
    else if(request.body.queryResult.intent.displayName == 'FrontView') {
        
        //start - socket io
        var socket = require('socket.io-client')('wss://jcbcontroller.herokuapp.com');
        socket.on('connect', function(){
            console.log('connected');
                        
            socket.on('login', function(data){
                console.log('login');
                socket.emit('new message', 'FrontView'); //sends message to chat server
            });
            
            socket.on('got message', function() {
                socket.disconnect();
            });
            
            socket.emit('add user', 'Assistant'); //login as "Assistant"
        });
        //end - socket io

        //start - response to google assistant

        response.setHeader('Content-Type', 'application/json');
        response.send(JSON.stringify({
                "fulfillmentText": "There it is",
                "fulfillmentMessages": [
                ]
            }
        )); 
    }
    else if(request.body.queryResult.intent.displayName == 'Rotate') {
        
        //start - socket io
        var socket = require('socket.io-client')('wss://jcbcontroller.herokuapp.com');
        socket.on('connect', function(){
            console.log('connected');
                        
            socket.on('login', function(data){
                console.log('login');
                socket.emit('new message', 'Rotate'); //sends message to chat server
            });
            
            socket.on('got message', function() {
                socket.disconnect();
            });
            
            socket.emit('add user', 'Assistant'); //login as "Assistant"
        });
        //end - socket io

        //start - response to google assistant

        response.setHeader('Content-Type', 'application/json');
        response.send(JSON.stringify({
                "fulfillmentText": "Okay",
                "fulfillmentMessages": [
                ]
            }
        )); 
    }
    else if(request.body.queryResult.intent.displayName == 'StartDemo') {
        
        //start - socket io
        var socket = require('socket.io-client')('wss://jcbcontroller.herokuapp.com');
        socket.on('connect', function(){
            console.log('connected');
                        
            socket.on('login', function(data){
                console.log('login');
                socket.emit('new message', 'StartDemo'); //sends message to chat server
            });
            
            socket.on('got message', function() {
                socket.disconnect();
            });
            
            socket.emit('add user', 'Assistant'); //login as "Assistant"
        });
        //end - socket io

        //start - response to google assistant

        response.setHeader('Content-Type', 'application/json');
        response.send(JSON.stringify({
                "fulfillmentText": "Okay",
                "fulfillmentMessages": [
                ]
            }
        )); 
    }

});
server.get('/getName',function (req,res){
    res.send('Devesh Garg');
});
server.get('/',function (req,res){
    res.send('Welcome to the application');
});
server.listen(port, function () {
    console.log("Server is up and running...");
});
