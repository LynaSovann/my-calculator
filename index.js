const container = document.querySelector(".container");
const inputBtn = document.querySelectorAll(".input-btn input"); //2
const btn = document.querySelectorAll(".btn button"); //4
const total = document.getElementById("total");
const clear = document.getElementById("clear");

clear.addEventListener("click", () => {
    window.location.reload();
    console.log(clear);
})

const addTwoNumber = () => {
    if(inputBtn[0].value == '' || inputBtn[1].value == '') return;
    else {
        const addition = Number(inputBtn[0].value) + Number(inputBtn[1].value);
        total.innerText = `${inputBtn[0].value} + ${inputBtn[1].value} = ${Number(addition)}`;
    }
}

const subTwoNumber = () => {
    if(inputBtn[0].value == '' || inputBtn[1].value == '') return;
    else {
        const addition = Number(inputBtn[0].value) - Number(inputBtn[1].value);
        total.innerText = `${inputBtn[0].value} - ${inputBtn[1].value} = ${Number(addition)}`;
    }
}

const divTwoNumber = () => {
    if(inputBtn[0].value == '' || inputBtn[1].value == '') return;
    else {
        const addition = Number(inputBtn[0].value) / Number(inputBtn[1].value);
        total.innerText = `${inputBtn[0].value} / ${inputBtn[1].value} = ${Number(addition)}`;
    }
}

const mulTwoNumber = () => {
    if(inputBtn[0].value == '' || inputBtn[1].value == '') return;
    else {
        const addition = Number(inputBtn[0].value) * Number(inputBtn[1].value);
        total.innerText = `${inputBtn[0].value} x ${inputBtn[1].value} = ${Number(addition)}`;
    }
}

btn[0].addEventListener("click", addTwoNumber);
btn[1].addEventListener("click", subTwoNumber);
btn[2].addEventListener("click", mulTwoNumber);
btn[3].addEventListener("click", divTwoNumber);