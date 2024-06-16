AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Software Developer",
    cardImage: "assets/images/experience-page/download.png",
    place: "Newgen Software",
    time: "(April, 2021 - present)",
    desp: "<li>Writing a clean, scalable code and also writing of test cases for unit testing, system testing, negative testing. </li> <li>Documenting and demonstrating solutions by developing documentation, flowcharts, layouts, diagram, charts, code. comments and clear code; Ensuring that project task are completed in defined effort and timelines. </li> <li>Developing software solutions by studying information needs, conferring with users, studying system flow, data usage and work processes, investigating problem areas and following delivery cycle.</li>",
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


