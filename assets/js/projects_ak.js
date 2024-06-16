// Define project data
const projects = [
    {
        title: "Advanced Database Management",
        overview: "Designed an ETL pipeline using MSSQL and Python, populated a DataMart with Hospital Administration Dataset.",
        skills: "ETL design, MSSQL, Python, data modeling, visualization.",
        reason: "Demonstrates proficiency in database management and decision-making support in healthcare."
    },
    {
        title: "US House Price Prediction Analysis",
        overview: "Conducted data wrangling and EDA on the US Housing Price Dataset.",
        skills: "Data manipulation, visualization, statistical analysis using Python.",
        reason: "Showcases ability to perform detailed data analysis and derive insights for decision-making."
    },
    {
        title: "Statistical Data Mining Project",
        overview: "Analyzed the relationship between gun control laws and violent crime rates using panel data.",
        skills: "Data collection, panel data analysis, statistical modeling, visualization.",
        reason: "Highlights ability to conduct complex statistical analyses and provide policy recommendations."
    }
];

// Function to display projects
function displayProjects(projects) {
    const projectContainer = document.querySelector('.projectcards');

    projects.forEach(project => {
        const projectCard = `
            <div class="col-md-4">
                <div class="card mb-4 shadow-sm">
                    <div class="card-body">
                        <h5 class="card-title">${project.title}</h5>
                        <p class="card-text"><strong>Overview:</strong> ${project.overview}</p>
                        <p class="card-text"><strong>Skills Demonstrated:</strong> ${project.skills}</p>
                        <p class="card-text"><strong>Reason for Inclusion:</strong> ${project.reason}</p>
                    </div>
                </div>
            </div>
        `;
        projectContainer.innerHTML += projectCard;
    });
}

// Call the function to display projects
displayProjects(projects);
