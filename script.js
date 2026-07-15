/* =====================================
SVF LENIN NAGAR WEBSITE JAVASCRIPT
===================================== */



// ===============================
// NAVBAR SCROLL EFFECT
// ===============================


window.addEventListener("scroll", function(){

    const header = document.querySelector(".header");


    if(window.scrollY > 50){

        header.style.background = "rgba(255,255,255,0.95)";
        header.style.boxShadow =
        "0 10px 30px rgba(0,0,0,0.15)";

    }

    else{

        header.style.background =
        "rgba(255,255,255,0.85)";

        header.style.boxShadow =
        "0 5px 20px rgba(0,0,0,.08)";

    }

});




// ===============================
// SMOOTH SCROLL
// ===============================

window.addEventListener("scroll", function(){

    const header=document.querySelector(".header");

    if(window.scrollY > 80){

        header.classList.add("scrolled");

    }

    else{

        header.classList.remove("scrolled");

    }

});






// ===============================
// DIGITAL COUNTER ANIMATION
// ===============================


function animateCounter(element,target){


    let count = 0;


    let speed = target / 150;



    let update = ()=>{


        count += speed;



        if(count < target){


            element.innerHTML =
            Math.floor(count)
            .toLocaleString();


            requestAnimationFrame(update);


        }

        else{


            element.innerHTML =
            target.toLocaleString()+"+";


        }


    };


    update();


}






// Example counters

let counters = document.querySelectorAll(".counter-number");



let counterObserver =
new IntersectionObserver((entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


animateCounter(
entry.target,
Number(entry.target.dataset.target)
);


counterObserver.unobserve(entry.target);


}


});


});



counters.forEach(counter=>{

counterObserver.observe(counter);

});









// ===============================
// EMI CALCULATOR
// ===============================



function calculateEMI(){


let price =
Number(document.getElementById("price").value);



let down =
Number(document.getElementById("down").value);



let rate =
Number(document.getElementById("rate").value);



let years =
Number(document.getElementById("years").value);




let loan =
price - down;



let monthlyRate =
rate / 12 / 100;



let months =
years * 12;



let emi =
(
loan *
monthlyRate *
Math.pow(1+monthlyRate,months)
)

/

(
Math.pow(1+monthlyRate,months)-1
);




document.getElementById("emi").innerHTML =
Math.round(emi)
.toLocaleString();



}









// ===============================
// IMAGE REVEAL ANIMATION
// ===============================



let revealElements =
document.querySelectorAll(
".highlight-card,.amenity-card,.gallery-item,.detail-box"
);



let revealObserver =
new IntersectionObserver(
(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.style.opacity="1";

entry.target.style.transform=
"translateY(0)";


}


});


},
{
threshold:0.2
}

);



revealElements.forEach(el=>{


el.style.opacity="0";

el.style.transform=
"translateY(40px)";

el.style.transition=
"0.8s";


revealObserver.observe(el);


});








// ===============================
// HERO LOAD ANIMATION
// ===============================


window.addEventListener("load",()=>{


const hero =
document.querySelector(".hero-content");


if(hero){


hero.style.opacity="0";

hero.style.transform=
"translateY(40px)";


setTimeout(()=>{


hero.style.transition="1s";


hero.style.opacity="1";


hero.style.transform=
"translateY(-50%)";



},300);


}


});