const workers = [
  {
    imgWorker:"wayne-barnett-founder-ceo.jpg",
    name:"Wayne Barnett",
    assignment: "Founder & CEO",
  },
  {
    imgWorker:"angela-caroll-chief-editor.jpg",
    name:"Angela Caroll",
    assignment: "Chief Editor",
  },
  {
    imgWorker:"walter-gordon-office-manager.jpg",
    name:"Walter Gordon",
    assignment: "Office Manager",
  },
  {
    imgWorker:"angela-lopez-social-media-manager.jpg",
    name:"Angela Lopez",
    assignment: "Social Media Manager",
  },
  {
    imgWorker:"scott-estrada-developer.jpg",
    name:"Scott Estrada",
    assignment: "Developer",
  },
  {
    imgWorker:"barbara-ramos-graphic-designer.jpg",
    name:"Barbara Ramos",
    assignment: "Graphic Designer",
  },
];
console.log(workers);

const rowElem = document.querySelector(".row");
let workersElem = "";

// stampo le informazioni per ogni lavoratore in console
for (let i = 0; i < workers.length; i++) {
  const curWorkers = workers[i];
  workersElem += `
    <div class="col">
      <div class="card">
        <img src="img/${curWorkers.imgWorker}" alt="imagine of workers">
        <h3>${curWorkers.name}</h3>
        <h4>${curWorkers.assignment}</h4>
      </div>
    </div>
  `;
  console.log(curWorkers.imgWorker);
  console.log(curWorkers.name);
  console.log(curWorkers.assignment);
  console.log("---------------------------");
};

rowElem.innerHTML = workersElem;