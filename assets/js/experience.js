AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Data Engineer",
    cardImage: "\assets\images\experience-page/Capgemini-Logo.wine.png",
    place: "Capgemini Technology Services",
    time: "(Mar, 2021 - july 2023)",
    desp: "<li>Spearheaded end-to-end data management initiatives at Capgemini, leveraging a sophisticated tech stack including Microsoft Business Intelligence suite (ETL) with SSIS and Power BI, alongside Python for advanced preprocessing and manipulation, resulting in streamlined processes and a 20% increase in operational efficiency. 
               Successfully migrated on-premises data to Azure cloud services with minimal downtime, ensuring data integrity and achieving a 98% data transfer success rate.
               Managed migration of UK HR Redundancy calculator reports from Qlik to SSRS, optimizing query performance with SSIS platforms, enhanced Stored Procedures, and Python scripts for data transformation, resulting in a 30% decrease in report generation time.
               Demonstrated adeptness in data integrity and flow management, maintaining a remarkable 98% issue resolution rate within SLAs using advanced SQL scripting, SQL job automation, and Python, resulting in improved data accuracy and reliability. 
               Engineered comprehensive reporting solutions and dynamic analytics dashboards, incorporating Tableau, and advanced data visualization libraries for actionable insights. </li>",
  },
  
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);


