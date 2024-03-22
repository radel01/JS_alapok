window.addEventListener("load", function () {
    elemekElerese1();
    elemekElerese2();
    elemekElerese3();
    elemekElerese4();
    elemekFormazasa1();
    esemenyKezeles1();
    elemekElerese7();
    elemekElerese8();
    elemekElerese9();
});

function elemekElerese1() {
    const ELEM=document.querySelectorAll("section h2")[0]
    console.log(ELEM.innerHTML)
}
function elemekElerese2() {
    const ELEM=document.querySelectorAll("#ide")[0]
    ELEM.innerHTML="<p>Jó reggelt!</p>"
}
function elemekElerese3() {
    const ELEM=document.querySelectorAll(".ide")[0]
    ELEM.innerHTML="<p>Jó reggelt!</p>"
}

function elemekElerese4(){
    const ELEM=document.getElementsByClassName("lista")
    let txt=`<ul>`
    for (let index = 0; index < 5; index++) {
        let szam=Math.random()*20+10
        txt+=`<li>${Math.floor(szam)}</li>` 
    }txt+=`</ul>`
    
    ELEM[0].innerHTML=txt

}

function elemekFormazasa1(){
    const ELEM=document.getElementsByClassName("lista")
    ELEM[0].classList.add("formazott")
}

function esemenyKezeles1(){
    const ELEM=document.getElementsByClassName("lista")[0]
    ELEM.addEventListener("esemeny", fvenynev)
}

function elemekElerese7(){
    
}

function elemekElerese8(){
    
}

function elemekElerese9(){
    
}
