(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "6e11e04e9beaed3cfd208be03b05722a";

},{}],2:[function(require,module,exports){
var apiKey = require('./../.env').apiKey;

function DoctorList()
{

}

DoctorList.prototype.getDoctors = function (symptom) {
  console.log("hello");
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ symptom +'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey).then(function(result) {
      console.log(result);
    })
   .fail(function(error){
      console.log("fail");
    });

};




exports.doctorModule = DoctorList;

},{"./../.env":1}],3:[function(require,module,exports){
var DoctorList = require('./../js/doctors.js').doctorModule;


$(document).ready(function() {
  var newDoctorList = new DoctorList();
  $('#doctor-form').submit(function(event) {
    event.preventDefault();
    var symptom = $('#symptom').val();
    newDoctorList.getDoctors(symptom);

  });


});

},{"./../js/doctors.js":2}]},{},[3]);
