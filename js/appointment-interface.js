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
