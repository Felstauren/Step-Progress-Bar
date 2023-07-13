const check1 = document.getElementById("punktfirst");
const line1 = document.getElementById("line1");
const step1 = document.getElementById("punktsecond");
const arrowright = document.getElementById("arrowright");
const arrowleft = document.getElementById("arrowleft");
const step2 = document.getElementById("punktthird");
const line2 = document.getElementById("line2");
const step3 = document.getElementById("punktfour");
const line3 = document.getElementById("line3");


check1.style.border = "4px solid green";


function further(){
    if (check1.style.border === "4px solid green"){
    line1.style.backgroundColor = "green";
    step1.style.border = "4px solid green";
    }
    
    if (step1.style.border === "4px solid green"){
        line2.style.backgroundColor = "green";
        step2.style.border = "4px solid green";
        }
    }

function back(){
    if (step1.style.border == "4px solid green" && step2.style.border == "4px solid gray"){
        line1.style.backgroundColor = "gray";
        step1.style.border = "4px solid gray";
    }

    if (step2.style.border == "4px solid green" && step1.style.border == "4px solid green"){
        line2.style.backgroundColor = "gray";
        step2.style.border = "4px solid gray";
    }
}