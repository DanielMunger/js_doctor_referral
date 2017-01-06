var DoctorList = require('./../doctors.js').DoctorModule;


$(document).ready(function() {
  var newDoctorList = new DoctorList();
  $('#doctorForm').submit(function(event) {
    event.preventDefault();
    var symptom = $('#symptom').val();
    DoctorList.apiCall(symptom);

  });


});
