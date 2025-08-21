const btNext = document.querySelector("#btNext");
const inName = document.querySelector("#inName");
const inEmail = document.querySelector("#inEmail");
const inNumber = document.querySelector("#inNumber");
const frm = document.querySelector("form");

const numbers = document.querySelectorAll(".container-number")

let user = {
    "userName": "",
    "userEmail": "",
    "userNumber": 0
}

const step1 = document.querySelector(".step-1")
const step2 = document.querySelector(".step-2")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    user.userName = inName.value;
    user.userEmail = inEmail.value;
    user.userNumber = inNumber.value;

    console.log(user)

    step1.classList.remove("activated")
    step2.classList.add("activated")
})

