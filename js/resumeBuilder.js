//Name and role
//
//////////////////////


var formattedName = HTMLheaderName.replace("%data%","Julian Cook");

$("#header").prepend(formattedName);

var formattedRole = HTMLheaderRole.replace("%data%","Front-End Web developer");

$("#header").append(formattedRole);


//bio area
//
////////////////

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


var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
var formattedWelcome = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
var formattedSkills = HTMLskills.replace("%data%",bio.skills);
var formattedBioPic = HTMLbioPic.replace("%data%",bio.bioPic);


$("#header").append(formattedBioPic);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGithub);
$("#header").append(formattedLocation);
$("#header").append(formattedSkills);
$("#header").append(formattedWelcome);

///work
//
////////

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
var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs.employer);
var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs.title);
var formattedworkLocation = HTMLworkLocation.replace("%data%")
$("#workExperience").append(formattedEmployer);


var education =
{
  "schools" : [
    {
      "name" : "East Hartford Highschool",
      "location" : "East Hartford",
      "degree" : "Highschool diploma",
      "dates" : "2008-2012",
      "url" : "http://www.easthartford.org/page.cfm?p=8956",
    }
  ],
  "onlineCourses" : [
    {
      "title": "frontend-nanodegree",
      "school": "Udacity",
      "dates" : "2015-currently enrolled",
      "url" : "https://www.udacity.com/",

    }
  ],
};
