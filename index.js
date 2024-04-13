punkt1 = document.querySelector('#punktfirst');
punkt2 = document.querySelector('#punktsecond');
punkt3 = document.querySelector('#punktthird');
punkt4 = document.querySelector('#punktfour');
punkt5 = document.querySelector('#punktfive');

line1 = document.querySelector("#line1");
line2 = document.querySelector("#line2")
line3 = document.querySelector("#line3");
line4 = document.querySelector("#line4")

arrowleft = document.querySelector('#arrowleft')
arrowright = document.querySelector('#arrowright')

xmark2 = document.querySelector("#xmark2")
xmark3 = document.querySelector("#xmark3")
xmark4 = document.querySelector("#xmark4")
xmark5 = document.querySelector("#xmark5")

check2 = document.querySelector("#check2")
check3 = document.querySelector("#check3")
check4 = document.querySelector("#check4")
check5 = document.querySelector("#check5")

value = 0




arrowright.addEventListener("click",e => { 
    value++;

    
  if(value >= 1){
    punkt2.style.borderColor = "green"
    line1.style.backgroundColor = "green"
    xmark2.style.display = "none"
    check2.style.display = "block"

  }

  if(value >= 2){
    punkt3.style.borderColor = "green"
    line2.style.backgroundColor = "green"
    xmark3.style.display = "none"
    check3.style.display = "block"
  }

  if(value >= 3){
    punkt4.style.borderColor = "green"
    line3.style.backgroundColor = "green"
    xmark4.style.display = "none"
    check4.style.display = "block"
  }

  if(value >= 4){
    punkt5.style.borderColor = "green"
    line4.style.backgroundColor = "green"
    xmark5.style.display = "none"
    check5.style.display = "block"
  }
})


arrowleft.addEventListener("click", e => {
  value--;

  if(value <= 0){
    punkt2.style.borderColor = "gray"
    line1.style.backgroundColor = "gray"
    xmark2.style.display = "block"
    check2.style.display = "none"
  }

  if(value <= 1){
    punkt3.style.borderColor = "gray"
    line2.style.backgroundColor = "gray"
    xmark3.style.display = "block"
    check3.style.display = "none"
  }

  if(value <= 2){
    punkt4.style.borderColor = "gray"
    line3.style.backgroundColor = "gray"
    xmark4.style.display = "block"
    check4.style.display = "none"
  }

  if(value <= 3){
    punkt5.style.borderColor = "gray"
    line4.style.backgroundColor = "gray"
    xmark5.style.display = "block"
    check5.style.display = "none"
  }
})



if(value >= 0){
  punkt1.style.borderColor = "green"
}
