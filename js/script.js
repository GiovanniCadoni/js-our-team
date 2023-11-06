//Creiamo il nostro array con all'interno i vari dipendenti e le loro informazioni
const employee = [
    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        image: "./img/wayne-barnett-founder-ceo.jpg",
    },
    {
        name: "Angela Caroll",
        role: "Chief Editor",
        image: "./img/angela-caroll-chief-editor.jpg",
    },
    {
        name: "Walter Gordon",
        role: "Office Manager",
        image: "./img/walter-gordon-office-manager.jpg",
    },
    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        image: "./img/angela-lopez-social-media-manager.jpg",
    },
    {
        name: "Scott Estrada",
        role: "Developer",
        image: "./img/scott-estrada-developer.jpg",
    },
    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        image: "./img/barbara-ramos-graphic-designer.jpg",
    },
];
console.log(employee);

//Dichiariamo una variabile e assegniamoli come destinazione la parte del file html in cui andremo ad inserire le varie card
const rowEmployee = document.querySelector(".row");
console.log(rowEmployee);

//Creiamo una variabile da supporto che conterrà tutto ciò che dovrà essere scritto nel html
let employeeElem = "";

//Creiamo un ciclo per creare e scrivere la card per ogni dipendente
for(let i = 0; i < employee.length; i++)
{
    const curEmployee = employee[i];
    employeeElem += `
    <div class="card">
        <img src="${curEmployee.image}" class="card-img-top pt-3" alt="${curEmployee.name}">
        <div class="card-body">
            <p class="card-text text-center fw-bolder fs-5">${curEmployee.name}</p>
            <p class="card-text text-center text-secondary">${curEmployee.role}</p>
        </div>
    </div>`;
}

//Andiamo ad inserire la nostra variabile da supporto all'interno dell'html nel punto che avevamo scelto in precedenza
rowEmployee.innerHTML = employeeElem;
