// selecting div with id of "show-projects"
var showProjects = document.querySelector('#show-projects');
// console.log(showProjects)
// making a list/array of objects/dictionaries
var projects = [
  {
    name: "Python Project",
    language_type: "Python",
    description: "Utilized Python requests, APIs, and JSON traversals to plot the weather of over 500 cities across the world",
    url: "https://github.com/willcpope/python-api-challenge"
  },
  {
    name: "SQL Project",
    language_type: "SQL",
    description: "Building and joining tables with coroporate employee data using POSTGRESQL",
    url: "https://github.com/willcpope/sql-challenge"
  },
  {
    name: "Mongo Project",
    language_type: "Python, MongoDB, HTML",
    description: "Web application that scrapes various websites for Mars data and displays the information in a single HTML page.",
    url: "https://github.com/willcpope/web-scraping-challenge"
  },
  {
    name: "Web Project",
    language_type: "HTML, CSS, JS",
    description: "Map that plots worldwide earthquake data based on magnitude, latitude, and longitude.",
    url: "https://github.com/willcpope/leaflet-challenge"
  },
  {
    name: "Tableau Project",
    language_type: "Tableau",
    description: "Coming Soon",
    url: "https://github.com/willcpope/"
  },
  {
    name: "Machine Learning Project",
    language_type: "Mixture",
    description: "Coming Soon",
    url: "https://github.com/willcpope/"
  },
  {
    name: "Big Data Project",
    language_type: "Mixture",
    description: "Coming Soon",
    url: "https://github.com/willcpope/"
  },
];

// loop through list/array of dictionaries/objects
projects.map(function (project) {
  // print projects to console
  // console.log(project);
  // create a div for each project in array/list
  var projectDiv = document.createElement("div");
  // add css class to each div created
  projectDiv.classList.add("col-lg-3", "card");
  // text to show inside each div
  projectDiv.innerHTML = `
  <h3 class="text-center card-header">${project.name}</h3>
  <div class="card-body">
  <p class="text-center card-title">${project.language_type}</p>
  <p class="text-center card-text mb-4">${project.description}</p>
  <p class="text-center learn-project"><a class="btn btn-primary" href="${project.url}">Learn More</a></p>
  </div>
  `;
  // append each div created to show-projects div in HTML
  showProjects.appendChild(projectDiv);
});

// selecting div with id of "show-experience"
var showExperiences = document.querySelector('#show-experiences');
// console.log(showExperience)
// making a list/array of objects/dictionaries
var experiences = [
  {
    name: "Halo: Outpost Discovery",
    language_type: "Strategy, Partnership Marketing, Management, Event Management",
    description: " In partnership with Microsoft-owned 343 Industries and Xbox, this weekend-long event was a first of its kind touring experience that came to Orlando, Philadelphia, Chicago, Houston, and Anaheim.",
    url: "https://vimeo.com/349659018"
  },
  {
    name: "Camellia Bowl & FCS Kickoff",
    language_type: "Entrepreneurship, Cross-Functional Team Leadership, Management, Event Management, Budget Management, Operations, Brand Management, Marketing, Sales, Activation, Ticket Operations, Public Relations, Production",
    description: "Week-long internationally televised, ESPN-owned events.",
    url: "https://vimeo.com/148421119"
  },
  {
    name: "The College Football All-Star Classic",
    language_type: "Entrepreniurship, Cross-Functional Team Leadership, Event Management, Operations, Brand Management, Marketing, Sales, Activation, Ticket Operations",
    description: "Week-long event televised live on CBS Sports Network with ver 130 NFL scouts and 80 future NFL players. ",
    url: "https://www.youtube.com/watch?v=b85VtXCSyBc&feature=emb_title"
  },
  {
    name: "Alabama Football",
    language_type: "Management, Football Operations, Football Personnel, Recruiting Analysis",
    description: "Hired by Coach Saban to partner with the Associate Athletic Director for Football in all aspects of football operations and oversee recruiting data analysis. 2009 SEC and National Champions.",
    url: "https://www.facebook.com/watch/?v=331086607841547"
  },
  {
    name: "Jacksonville State University",
    language_type: "Sports Business Consulting, Field Marketing, Digital Marketing, Sales, Entrepreneurship",
    description: "Consulted JSU on premium seat marketing.",
    url: "https://www.youtube.com/watch?v=3czKjwaO3K4"
  },
  {
    name: "University of North Alabama",
    language_type: "Sports Business, Consulting, Analysis, Strategy, Entreprenuership",
    description: "Authored strategic plan for D1 move.",
    url: "https://www.youtube.com/watch?v=6wevnbt17kY&t"
  },
  {
    name: "Columbus State University",
    language_type: "Sports Business, Consulting, Analysis, Strategy, Budget Management, Entrepreneurship",
    description: "Authored D1 move feasibility study and budget review.",
    url: "https://news.columbusstate.edu/columbus-state-names-former-alabama-and-troy-administrator-as-interim-athletic-director-as-sparks-departs/"
  },
];

// loop through list/array of dictionaries/objects
experiences.map(function (experience) {
  // print projects to console
  // console.log(project);
  // create a div for each project in array/list
  var experienceDiv = document.createElement("div");
  // add css class to each div created
  experienceDiv.classList.add("col-lg-3", "card");
  // text to show inside each div
  experienceDiv.innerHTML = `
  <h3 class="text-center card-header">${experience.name}</h3>
  <div class="card-body">
  <p class="text-center card-title">${experience.language_type}</p>
  <p class="text-center card-text mb-4">${experience.description}</p>
  <p class="text-center learn-project"><a class="btn btn-primary" href="${experience.url}" target="_blank">Learn More</a></p>
  </div>
  `;
  // append each div created to show-projects div in HTML
  showExperiences.appendChild(experienceDiv);
});

