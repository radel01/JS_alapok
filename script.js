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
    const ELEM=$(".section h2")
    console.log(ELEM.innerHTML)
}
function elemekElerese2() {
    const ELEM=$("#ide")
    ELEM.html("<p>Jó reggelt!</p>")
}
function elemekElerese3() {
    const ELEM=$(".ide")
    ELEM.html("<p>Jó reggelt!</p>")
}

function elemekElerese4(){
    const ELEM=$(".lista")
    let txt=`<ul>`
    for (let index = 0; index < 5; index++) {
        let szam=Math.random()*20+10
        txt+=`<li>${Math.floor(szam)}</li>` 
    }txt+=`</ul>`
    
    ELEM.eq(0).html(txt)

}

function elemekFormazasa1(){
    const ELEM=$(".lista")
    ELEM.eq(0).addClass("formazott")
}

function esemenyKezeles1(){
    const KATTINTASUTAN=$(".kattintasutan")
    const ELEM=$(".lista")
    ELEM.on("click", function(){
        KATTINTASUTAN.eq(0).html(ELEM.html())
        ELEM.empty()
    })
    
}

function elemekElerese7(){
    const ELEM=$(".feladat_1")
    

}

function elemekElerese8(){
    
}

function elemekElerese9(){
    
}
