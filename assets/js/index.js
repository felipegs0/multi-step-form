const btNext = document.querySelector("#btNext");
const inName = document.querySelector("#inName");
const inEmail = document.querySelector("#inEmail");
const inNumber = document.querySelector("#inNumber");
const frmInfo = document.querySelector("#formInfo");

function goToStep(current, next) {
    current.classList.remove("activated");
    next.classList.add("activated")
}

let user = {
    "userName": "",
    "userEmail": "",
    "userNumber": 0
}

const step1 = document.querySelector(".step-1")
const step2 = document.querySelector(".step-2")

frmInfo.addEventListener("submit", (e) => {
    e.preventDefault();

    user.userName = inName.value;
    user.userEmail = inEmail.value;
    user.userNumber = inNumber.value;

    console.log(user)

    goToStep(step1, step2)
    nextNumber()
})

const frmPlan = document.querySelector("#formPlan");
const btBack = document.querySelector(".btBack");

btBack.addEventListener("click", () => {
    goToStep(step2, step1)
    prevNumber()
})

const steps = document.querySelectorAll(".step");
const numbers = document.querySelectorAll(".container-number");
let currentStep = 0;

function showSteps(index) {
    steps.forEach((step, i) => {
        step.classList.toggle("activated", i === index);
    })

    numbers.forEach((number, i) => {
        number.classList.toggle("numberActivated", i === index);
    });
}

function nextNumber() {
    currentStep++;
    showSteps(currentStep);
}

function prevNumber() {
    currentStep--;
    showSteps(currentStep);
}