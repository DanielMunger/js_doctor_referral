(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "6e11e04e9beaed3cfd208be03b05722a";

},{}],2:[function(require,module,exports){
var apiKey = require('./../.env').apiKey;

function Doctor()
{

}

Doctor.prototype.getAllDoctors = function (symptom, displayFunction) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ symptom +'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey).then(function(result) {
      //console.log(result.data);
      displayFunction(result.data);
    })
   .fail(function(error){

    });
};

Doctor.prototype.getFirstName = function (doctor) {
  var firstName = doctor.profile.first_name;
  return firstName;
};
Doctor.prototype.getLastName = function (doctor) {
  var lastName = doctor.profile.last_name;
  return lastName;
};
Doctor.prototype.getTitle = function (doctor) {
  var title = doctor.profile.title;
  return title;
};
Doctor.prototype.getBio = function (doctor) {
  var bio = doctor.profile.bio;
  return bio;
};
Doctor.prototype.getPicture = function (doctor) {
 var image = doctor.profile.image_url;
 return image;
};

exports.doctorModule = Doctor;

},{"./../.env":1}],3:[function(require,module,exports){
var Doctor = require('./../js/doctors.js').doctorModule;


$(document).ready(function() {
  var newDoctorList = new Doctor();
  $('#doctor-form').submit(function(event) {
    event.preventDefault();

    var symptom = $('#symptom').val();

    newDoctorList.getAllDoctors(symptom, displayDoctors);

  });


});

var displayDoctors = function(doctors)
{
  for(var i = 0; i<doctors.length; i++)
  {
    $("#output").append("<div class='doctor'></div>")
    var newDoctor = new Doctor();
    var firstName = newDoctor.getFirstName(doctors[i]);
    var lastName = newDoctor.getLastName(doctors[i]);
    var title = newDoctor.getTitle(doctors[i]);
    var bio = newDoctor.getBio(doctors[i]);
    var image = newDoctor.getPicture(doctors[i]);

    console.log(doctors[i].profile);

    $('.doctor:nth-child(' + (i + 1) + ')').append("<img class ='doctor-image' src='"+image+"'>");

    $('.doctor:nth-child(' + (i + 1) + ')').append("<div class ='doctorinfo'></div>");

    $('.doctor:nth-child(' + (i + 1) + ') .doctorinfo').append("<div class ='doctor-name'>" + "<strong>" + firstName + " " + lastName + ", " + title + "</strong>" + "</div>");
    $('.doctor:nth-child(' + (i + 1) + ') .doctorinfo').append("<div class ='doctor-bio'>" + bio + "</div>");
  }
}

},{"./../js/doctors.js":2}]},{},[3]);
