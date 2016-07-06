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
  "bioPic" : "pictures/profilepic.jpg"
}


var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
var formattedWelcome = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
var formattedSkills = HTMLskills.replace("%data%",bio.skills);
var formattedBioPic = HTMLbioPic.replace("%data%",bio.bioPic);


$("#header").prepend(formattedBioPic);
$("#header").append(formattedMobile);
$("#header").append(formattedEmail);
$("#header").append(formattedGithub);
$("#header").append(formattedLocation);
$("#header").append(formattedSkills);
$("#header").append(formattedWelcome);
