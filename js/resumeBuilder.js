
 var bio = {
  "name" : "Julian Cook",
  "role" : "Web Developer",
  "contacts" : {
    "mobile" : "860-614-9115",
    "email" : "jcook894@icloud.com",
    "github" : "https://github.com/Jcook894",
    "location" : "Hartford,CT"

  },
  "welcomeMessage" : "Welcome to the Resume!",
  "skills" : [
    "HTML","CSS","JavaScript"
  ],
  "bioPic" : "pictures/fry.jpg"
}

$('#main').append(internationalizeButton);

function inName(intNames) {

    intNames = intNames.trim().split(" ");
    var firstName = intNames[0][0].toUpperCase() + intNames[0].slice(1).toLowerCase();
    var lastName = intNames[1].toUpperCase();
    console.log($("#name").text());
    return firstName + " " + lastName;
}

inName(bio.name);



$(document).ready(function() {
$('button').click(function() {
var iName = inName($("#name").text()) || function(){};
$('#name').html(iName);
});
});


var formattedName = HTMLheaderName.replace("%data%",bio.name);
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
var formattedWelcome = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
var formattedSkill = HTMLskills.replace("%data%",bio.skills);
var formattedBioPic = HTMLbioPic.replace("%data%",bio.bioPic);


if(bio.skills.length > 0){
  $("#header").append(HTMLskillsStart);

  var formattedSkill = HTMLskills.replace("%data%",bio.skills[0]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%",bio.skills[1]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%",bio.skills[2]);
  $("#skills").append(formattedSkill);




}

$("#header").prepend(formattedName);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedBioPic);
$("#topContacts").prepend(formattedMobile);
$("#topContacts").prepend(formattedEmail);
$("#topContacts").prepend(formattedGithub);
$("#topContacts").prepend(formattedLocation);
$("#header").append(formattedWelcome);

///work
//
/////////////////////

var work =
{
  "jobs" : [
    {
      "employer" : "Marco Polo",
      "title" : "Waiter",
      "location" : "East Hartford,CT",
      "dates" : "2012 to present",
      "description" : "Serves tables and cleans up after restaurant"

    }

  ]

};


function displayWork() {



    for(jobs in work.jobs){
    $("#workExperience").append(HTMLworkStart);
    formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[jobs].employer);
    formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[jobs].title);

    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);

    formattedworkLocation = HTMLworkLocation.replace("%data%",work.jobs[jobs].location);
    $(".work-entry:last").append(formattedworkLocation);
    formattedworkDates = HTMLworkDates.replace("%data%",work.jobs[jobs].dates);
    $(".work-entry:last").append(formattedworkDates);
    formattedworkDescrip = HTMLworkDescription.replace("%data%",work.jobs[jobs].description);
    $(".work-entry:last").append(formattedworkDescrip);



  }
};



displayWork();


//education
//
///////////////////////////////




var education =
{
  "schools" : [
    {
      "name" : "East Hartford Highschool",
      "location" : "East Hartford",
      "degree" : "Highschool diploma",
      "dates" : "2008-2012",
    }
  ],
  "onlineCourses" : [
    {
      "title": "Frontend-Nanodegree",
      "school": "Udacity",
      "dates" : "2015-currently enrolled",
      "url" : "https://www.udacity.com/"

    }
  ],
};


education.display =  function () {

      for (school in education.schools){
        $("#education").append(HTMLschoolStart);

        var formattedonlineName = HTMLschoolName.replace("%data%",education.schools[school].name);
        $(".education-entry:last").append(formattedonlineName);
        var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
        $(".education-entry:last").append(formattedLocation);
        var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
        $(".education-entry:last").append(formattedDegree);
        var formattedonlineDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
        $(".education-entry:last").append(formattedonlineDates);






      }



      for (school in education.onlineCourses){
          $("#education").append(HTMLschoolStart);
          $(".education-entry:last").append(HTMLonlineClasses);

          var formattedTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[school].title);
          $(".education-entry:last").append(formattedTitle);
          var formattedName = HTMLonlineSchool.replace("%data%",education.onlineCourses[school].school);
          $(".education-entry:last").append(formattedName);
          var formattedDates = HTMLonlineDates.replace("%data%",education.onlineCourses[school].dates);
          $(".education-entry:last").append(formattedDates);
          var formattedUrl = HTMLonlineURL.replace("%data%",education.onlineCourses[school].url);
          $(".education-entry:last").append(formattedUrl);


      }




}

education.display();


//projects
//
////////////////////////////////

var projects =
  {
      "projects": [
      {
        "title": "Portfolio",
        "dates": "2016",
        "description":"Mockup Portfolio page for udacity project",
        "image": "pictures/ProjectPort.jpg"






    }
   ],
  }


projects.display = function (){

  for (project in projects.projects){
    $("#projects").append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
    $(".project-entry:last").append(formattedTitle);
    var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
    $(".project-entry:last").append(formattedDates);
    var formattedDescript = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
    $(".project-entry:last").append(formattedDescript);
    var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[project].image);
    $(".project-entry:last").append(formattedImage);


  }
};

projects.display();


$("#mapDiv").append(googleMap);
