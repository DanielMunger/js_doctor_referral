var DoctorList = require('./../js/doctors.js').doctorModule;


$(document).ready(function() {
  var newDoctorList = new DoctorList();
  $('#doctor-form').submit(function(event) {
    event.preventDefault();
    var symptom = $('#symptom').val();
    //DoctorList.apiCall(symptom);

  });


});
