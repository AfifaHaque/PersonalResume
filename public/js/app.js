
// =================================
// 1. PROFILE INFORMATION
// =================================

const profileName = document.querySelector(".hero h1");

profileName.textContent = "Afifa Haque";


// =================================
// 2. PROJECT INFORMATION==
// FETCH PROJECTS FROM DATABASE
async function loadProjects() {
    try {
        const response = await fetch('/api/projects');
        const projects = await response.json();

        const projectsContainer = document.getElementById('projectsContainer');

        projectsContainer.innerHTML = '';

        projects.forEach(function(project) {

            const card = document.createElement('div');
            card.classList.add('project-card');

            const title = document.createElement('h3');
            title.textContent = project.title;

            const description = document.createElement('p');
            description.textContent = project.description;

            const technologies = document.createElement('span');
            technologies.classList.add('project-tech');
            technologies.textContent = project.technologies;

            card.appendChild(title);
            card.appendChild(description);
            card.appendChild(technologies);

            projectsContainer.appendChild(card);
        });

    } catch (error) {
        console.error('Error loading projects:', error);
    }
}

loadProjects();
// FETCH EXPERIENCE FROM DATABASE
async function loadExperience() {
    try {
        const response = await fetch('/api/experience');
        const experiences = await response.json();

        const experienceContainer = document.getElementById('experienceContainer');

        experienceContainer.innerHTML = '';

        experiences.forEach(function(experience) {

            const card = document.createElement('div');
            card.classList.add('experience-card');

            const position = document.createElement('h3');
            position.textContent = experience.position;

            const organization = document.createElement('h4');
            organization.textContent = experience.organization;

            const description = document.createElement('p');
            description.textContent = experience.description;

            card.appendChild(position);
            card.appendChild(organization);
            card.appendChild(description);

            experienceContainer.appendChild(card);
        });

    } catch (error) {
        console.error('Error loading experience:', error);
    }
}

loadExperience();
// Select all navigation links
const navLinks = document.querySelectorAll(".nav-link");

// Add a click event to each link
navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        // Remove active class from all links
        navLinks.forEach(function(nav) {
            nav.classList.remove("active");
        });

        // Add active class to clicked link
        link.classList.add("active");

    });

});
profileName.textContent = "Afifa Haque";
profileName.firstChild.textContent = "Afifa Haque";

// SKILLS DATA

const skills = [
    {
        name: "Programming",
        description: "Java, JavaScript, Python, C"
    },

    {
        name: "Web Development",
        description: "HTML, CSS, JavaScript, Node.js"
    },

    {
        name: "Database",
        description: "MySQL, Database Management"
    },

    {
        name: "Tools",
        description: "Git, VS Code, IntelliJ IDEA"
    }
];
// FETCH SKILLS FROM DATABASE
async function loadSkills() {
    try {
        const response = await fetch('/api/skills');
        const skills = await response.json();

        const skillsContainer = document.getElementById('skillsContainer');

        skillsContainer.innerHTML = '';

        skills.forEach(function(skill) {

            const card = document.createElement('div');
            card.classList.add('skill-card');

            const heading = document.createElement('h3');
            heading.textContent = skill.category;

            const description = document.createElement('p');
            description.textContent = skill.name;

            card.appendChild(heading);
            card.appendChild(description);

            skillsContainer.appendChild(card);
        });

    } catch (error) {
        console.error('Error loading skills:', error);
    }
}

loadSkills();

// Load education data from the database
async function loadEducation() {
    try {
        const response = await fetch('/api/education');
        const educationData = await response.json();

        const container = document.getElementById('educationContainer');
        container.innerHTML = '';

        educationData.forEach(education => {
            const card = document.createElement('div');
            card.classList.add('content-card', 'timeline-item');

            const date = document.createElement('span');
            date.classList.add('timeline-date');

            const startYear = new Date(education.start_date).getFullYear();

            date.textContent = education.end_date
                ? `${startYear} – ${new Date(education.end_date).getFullYear()}`
                : 'CURRENT';

            const heading = document.createElement('h3');
            heading.textContent = `${education.degree} in ${education.field_of_study}`;

            const institution = document.createElement('p');
            institution.textContent = education.institution;

            const description = document.createElement('p');
            description.classList.add('muted-text');
            description.textContent = education.description;

            card.appendChild(date);
            card.appendChild(heading);
            card.appendChild(institution);
            card.appendChild(description);

            container.appendChild(card);
        });

    } catch (error) {
        console.error('Error loading education:', error);
    }
}
loadEducation();
// FETCH EXPERIENCE FROM DATABASE
async function loadExperience() {
    try {
        const response = await fetch('/api/experience');
        const experiences = await response.json();

        const experienceContainer = document.getElementById('experienceContainer');

        experienceContainer.innerHTML = '';

        experiences.forEach(function(experience) {

            const card = document.createElement('div');
            card.classList.add('content-card', 'timeline-item');

            // Format experience dates
            const startYear = new Date(experience.start_date).getFullYear();

            const endYear = experience.end_date
                ? new Date(experience.end_date).getFullYear()
                : 'Present';

            const date = document.createElement('span');
            date.classList.add('timeline-date');
            date.textContent = startYear + ' – ' + endYear;

            const position = document.createElement('h3');
            position.textContent = experience.position;

            const organization = document.createElement('p');
            organization.textContent = experience.organization;

            const description = document.createElement('p');
            description.classList.add('muted-text');
            description.textContent = experience.description;

            card.appendChild(date);
            card.appendChild(position);
            card.appendChild(organization);
            card.appendChild(description);

            experienceContainer.appendChild(card);
        });

    } catch (error) {
        console.error('Error loading experience:', error);
    }
}

loadExperience();
// FETCH PROFILE INFORMATION
async function loadProfile() {
    try {
        const response = await fetch('/api/profile');
        const profileData = await response.json();

        const profile = profileData[0];

        // Update hero name
        const heroName = document.querySelector('.hero h1');
        heroName.firstChild.textContent = profile.name;

        // Update sidebar name
        const sidebarName = document.querySelector('.profile-info h3');
        sidebarName.textContent = profile.name;

    } catch (error) {
        console.error('Error loading profile:', error);
    }
}

loadProfile();