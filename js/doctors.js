var apiKey = require('./../.env').apiKey;

function Doctor()
{

}

Doctor.prototype.getAllDoctors = function (symptom, displayFunction) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ symptom +'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=100&user_key=' + apiKey).then(function(result) {
      //console.log(result.data);
      displayFunction(result.data);
    })
   .fail(function(error){

    });
};
Doctor.prototype.getSpecialties = function (displayFunction) {
  $.get('https://api.betterdoctor.com/2016-03-01/specialties?user_key=' + apiKey).then(function(result) {
    console.log(result);
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
