
var bio = {
    "name": "Julian Cook",
    "role": "Front End Developer",
    "contacts": {
        "mobile": "860-614-9115",
        "email": "jcook894@icloud.com",
        "github": "https://github.com/Jcook894",
        "linkedin" : "https://www.linkedin.com/in/julian-cook-a89019127",
        "location": "Hartford, CT"

    },
    "welcomeMessage": "A self-motivated Front-End web developer with a passion for code!",
    "skills": [
        "HTML", "CSS", "JavaScript", "jQuery", "Knockout.js", "Bootstrap", "Jasmine"
    ],
    "biopic": "pictures/fry.jpg"
};

//work info.
var work = {
    "jobs": [{
            "employer": "Marco Polo",
            "title": "Waiter",
            "location": "East Hartford,CT",
            "dates": "2012 to present",
            "description": "Serves tables and cleans up after restaurant"

        }

    ]
};

// Education Info.
var education = {
    "schools": [{
        "name": "East Hartford Highschool",
        "location": "East Hartford",
        "degree": "Highschool diploma",
        "dates": "2008-2012",
        "majors": "General Studies",
        "url": "http://www.easthartford.org/page.cfm?p=8956"
    }],
    "onlineCourses": [{
        "title": "Frontend-Nanodegree",
        "school": "Udacity",
        "dates": "Sept, 2015 - Nov, 2016",
        "url": "https://www.udacity.com/"

    }],
};

var projects = {
    "projects": [{
        "title": "Portfolio",
        "dates": "2016",
        "description": "Mockup Portfolio page for udacity project. ",
      }],
    "project1":[{
      "title" : "Frogger-style arcade game",
      "dates" : "2016",
      "description" : "A frogger-style game made using HTML5 and JavaScript. ",
    }],
    "project2":[{
        "title": "Website Performance Optimization",
        "dates": "2016",
        "description" : "Took a very janky web application and optimizied it to run at 60fps with a pagespeed of 90. ",
    }],
    "project3":[{
      "title": "Neighborhood Map projects",
      "dates": "2016",
      "description": "Used a variety of API's to create a map application. "
    }],
    "project4":[{
      "title": "Using testing frameworks",
      "dates": "2016",
      "description": "Used the jasmine to test the functionality of a web application. "
    }],
        "images":[ "pictures/ProjectPort.png",
      ],
        "image1":["pictures/Arcade-game.png",
      ],
        "image2":["pictures/web_opt.png",
      ],
        "image3":["pictures/Neighborhood.png",
      ],
        "image4":["pictures/Jasmine_proj.png",
      ]


};

bio.display = function() {


    var formattedRole =
        HTMLheaderRole.replace("%data%", bio.role);
    var formattedName =
        HTMLheaderName.replace("%data%", bio.name);
    var formattednameRole = formattedName + formattedRole;
    $("#header").prepend(formattednameRole);
    var formattedMobile =
        HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts,#footerContacts").append(formattedMobile);
    var formattedEmail =
        HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts,#footerContacts").append(formattedEmail);
    var formattedGithub =
        HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts,#footerContacts").append(formattedGithub);
    var formattedLinkedin = HTMLtwitter.replace('%data%', bio.contacts.linkedin);
    $('#topContacts, #footerContacts').append(formattedLinkedin);
    var formattedPic =
        HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").prepend(formattedPic);
    var formattedWelcomeMessage =
        HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedWelcomeMessage);




    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        for (var i = 0; i < bio.skills.length; i++) {
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
            $("#skills").append(formattedSkill);
        }
    }


};

bio.display();


//// Work


work.display = function() {

    work.jobs.forEach(function(job) {

        console.log(job);
        $("#workExperience").append(HTMLworkStart);

        formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
        formattedTitle = HTMLworkTitle.replace("%data%", job.title);
        formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);
        formattedworkLocation = HTMLworkLocation.replace("%data%", job.location);
        $(".work-entry:last").append(formattedworkLocation);
        formattedworkDates = HTMLworkDates.replace("%data%", job.dates);
        $(".work-entry:last").append(formattedworkDates);
        formattedworkDescrip = HTMLworkDescription.replace("%data%", job.description);
        $(".work-entry:last").append(formattedworkDescrip);


    });
};
work.display();



education.display = function() {


    $("#education").append(HTMLschoolStart);
    $("#education").append(HTMLschoolStart);
    education.schools.forEach(function(school) {



        $("#education").append(HTMLschoolStart);


        var formattedName = HTMLschoolName.replace("%data%", school.name);
        var formattedLocation = HTMLschoolLocation.replace("%data%", school.location);
        $(".education-entry:last").append(formattedLocation);
        var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
        var formattedschoolDegree = formattedName + formattedDegree;
        $(".education-entry:last").prepend(formattedschoolDegree);
        var formattedDates = HTMLschoolDates.replace("%data%", school.dates);
        $(".education-entry:last").append(formattedDates);
        var formattedMajor = HTMLschoolMajor.replace("%data%", school.majors);
        $(".education-entry:last").append(formattedMajor);




    });


    education.onlineCourses.forEach(function(online) {



        $(".education-entry:last").append(HTMLonlineClasses);

        var formattedTitle = HTMLonlineTitle.replace("%data%", online.title);
        var formattedName = HTMLonlineSchool.replace("%data%", online.school);
        var formattedonlineTitle = formattedTitle + formattedName;
        $(".education-entry:last").append(formattedonlineTitle);
        var formattedDates = HTMLonlineDates.replace("%data%", online.dates);
        $(".education-entry:last").append(formattedDates);
        var formattedUrl = HTMLonlineURL.replace("%data%", online.url);
        $(".education-entry:last").append(formattedUrl);




    });
};

education.display();


//projects
//
////////////////////////////////



projects.display = function() {

    projects.projects.forEach(function(project) {

        $('#projects').append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
        $(".project-entry:last").append(formattedTitle);
        var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
        $(".project-entry:last").append(formattedDates);
        var formattedDescript = HTMLprojectDescription.replace("%data%", project.description);
        $(".project-entry:last").append(formattedDescript);

    });

    projects.images.forEach(function(img) {

      $("#projects").append(HTMLprojectStart);
      var formattedImage = HTMLprojectImage.replace("%data%",img);
      $(".project-entry:last").append(formattedImage);


    });

    projects.project1.forEach(function(project) {
        $('#projects').append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
        $(".project-entry:last").append(formattedTitle);
        var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
        $(".project-entry:last").append(formattedDates);
        var formattedDescript = HTMLprojectDescription.replace("%data%", project.description);
        $(".project-entry:last").append(formattedDescript);

    });

    projects.image1.forEach(function(img) {

      $("#projects").append(HTMLprojectStart);
      var formattedImage = HTMLprojectImage.replace("%data%",img);
      $(".project-entry:last").append(formattedImage);


    });
    projects.project2.forEach(function(project) {
        $('#projects').append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
        $(".project-entry:last").append(formattedTitle);
        var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
        $(".project-entry:last").append(formattedDates);
        var formattedDescript = HTMLprojectDescription.replace("%data%", project.description);
        $(".project-entry:last").append(formattedDescript);

    });

    projects.image2.forEach(function(img) {

      $("#projects").append(HTMLprojectStart);
      var formattedImage = HTMLprojectImage.replace("%data%",img);
      $(".project-entry:last").append(formattedImage);


    });

    projects.project3.forEach(function(project) {
        $('#projects').append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
        $(".project-entry:last").append(formattedTitle);
        var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
        $(".project-entry:last").append(formattedDates);
        var formattedDescript = HTMLprojectDescription.replace("%data%", project.description);
        $(".project-entry:last").append(formattedDescript);

    });

    projects.image3.forEach(function(img) {

      $("#projects").append(HTMLprojectStart);
      var formattedImage = HTMLprojectImage.replace("%data%",img);
      $(".project-entry:last").append(formattedImage);


    });

    projects.project4.forEach(function(project) {
        $('#projects').append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
        $(".project-entry:last").append(formattedTitle);
        var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
        $(".project-entry:last").append(formattedDates);
        var formattedDescript = HTMLprojectDescription.replace("%data%", project.description);
        $(".project-entry:last").append(formattedDescript);

    });

    projects.image4.forEach(function(img) {

      $("#projects").append(HTMLprojectStart);
      var formattedImage = HTMLprojectImage.replace("%data%",img);
      $(".project-entry:last").append(formattedImage);

    });

};


projects.display();

$("#mapDiv").append(googleMap);
