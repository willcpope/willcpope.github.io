// selecting div with id of "show-projects"
var showProjects = document.querySelector('#show-projects');
// console.log(showProjects)
// making a list/array of objects/dictionaries
var projects = [
  {
    name: "Affordable Care Act Analysis",
    language_type: "Python (Pandas, Matplotlib, Scipy, Numpy)",
    description: "Evaluated the effects of the Affordable Care Act on uninsured rates, utilization of emergency services, mortality rates and/or healthcare expenditure.",
    url: "https://github.com/willcpope/ACA_Analysis"
  },
  {
    name: "College Football Advertising Strategy",
    language_type: "Python (Beautiful Soup), SQL, PostgreSQL",
    description: "ETL project to build a database of Southeastern Conference college football data from 2012-2018 including: revenues, expenses, attendance, and television ratings.",
    url: "https://github.com/willcpope/cfb-advertising-strategy"
  },
  {
    name: "European Alcohol Analysis",
    language_type: "Python (SQLAlchemy), SQL, PostgreSQL, HTML, CSS, Javascript (D3, Leaflet), Mapbox API",
    description: "Data exploration and visualization of alcohol consumption, alcohol production, alcohol related deaths and traffic related deaths in European countries.",
    url: "https://github.com/willcpope/alcohol-analysis"
  },
  {
    name: "Mars Web Scraping Application",
    language_type: "Python (Beautiful Soup, PyMongo, Splinter, Requests), MongoDB, HTML",
    description: "Built a web application that scrapes various websites for data related to the Mission to Mars and displays the information in a single HTML page.",
    url: "https://github.com/willcpope/web-scraping-challenge"
  },
    {
    name: "Big Data: Amazon Review Analysis",
    language_type: "PySpark, SQL, Amazon Web Services",
    description: "Performed the ETL process completely in the cloud, uploaded to an RDS instance, and analyzed with PySpark and SQL.",
    url: "https://github.com/willcpope/big-data-challenge"
  },
  {
    name: "Citi Bike Usage in NYC",
    language_type: "Tableau",
    description: "Visualizations of the March year-over-year affect of the COVID-19 pandemic on Citi Bike usage in New York City by generation.",
    url: "https://public.tableau.com/profile/will.pope#!/vizhome/COVID-19AffectonNYCCitiBikeUsagebyGeneration/YoYStory"
  },
  {
    name: "NASA Machine Learning",
    language_type: "Python (Pandas, Scikit-learn, Tensorflow/Keras, Matplotlib)",
    description: "Machine learning models capable of classifying candidate exoplanets from the NASA Kepler space telescope dataset.",
    url: "https://github.com/willcpope/machine-learning-challenge"
  },
  {
    name: "Movie Box Office Predictor",
    language_type: "Python (Pandas, Scikit-learn, Matplotlib, Flask), Tableau, HTML, CSS",
    description: "Machine learning model that predicts a movie’s financial performance based on critical reception.",
    url: "https://github.com/willcpope/box_office_predictor"
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
  <p class="text-center learn-project"><a class="btn btn-primary" href="${project.url}" target="_blank">Learn More</a></p>
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
    name: "Inspire Brands",
    language_type: "Data Analysis, CRM & Campaign Analytics, Python, SQL, Tableau",
    description: "Analyzing big data at Inspire Brands, the 2nd largest restaurant company in the U.S. with over 200M customers and $27B+ in global sales. Managing the CRM to build and own customer models for segmenting, targeting, and personalizing communication",
    url: "https://inspirebrands.com"
  },
  {
    name: "Cardlytics",
    language_type: "Data Operations Analysis,	Python, SQL, Tableau",
    description: "Analyzing big data at Cardlytics, one of the largest digital ad platforms with over 167M customers and $3.6T in consumer spend each year. Created new tools to communicate the status of our data to our internal data users",
    url: "https://www.cardlytics.com"
  },
  {
    name: "Halo: Outpost Discovery (Herschend Live)",
    language_type: "Strategy, Partnership Marketing, Management, Event Management",
    description: "In partnership with Microsoft-owned 343 Industries and Xbox, this weekend-long event was a first of its kind touring experience that came to Orlando, Philadelphia, Chicago, Houston, and Anaheim.",
    url: "https://vimeo.com/349659018"
  },
  {
    name: "Camellia Bowl & FCS Kickoff (ESPN Events)",
    language_type: "Entrepreneurship, Cross-Functional Team Leadership, Management, Event Management, Budget Management, Operations, Brand Management, Marketing, Sales, Activation, Ticket Operations, Public Relations, Production",
    description: "Week-long internationally televised, ESPN-owned events.",
    url: "https://vimeo.com/148421119"
  },
  {
    name: "The College Football All-Star Classic",
    language_type: "Entrepreneurship, Cross-Functional Team Leadership, Event Management, Operations, Brand Management, Marketing, Sales, Activation, Ticket Operations",
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
    language_type: "Sports Business, Consulting, Analysis, Strategy, Entrepreneurship",
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

