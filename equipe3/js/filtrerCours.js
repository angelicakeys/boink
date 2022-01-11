
(function () { //IIFE

    //variables déclarés
    let btnP = document.querySelector("#btnProgrammation");
   
    let btnC = document.querySelector("#btnCreation");

    let btnTotal = document.querySelector("#btnTout");
    let cours = document.querySelectorAll(".session a");
   // console.log(cours.length);
  for (let elem of cours){
     // elem.classList
     // console.log(elem.classList);
  }


   // let btnA = document.getElementsByClassName("btnAutres");

    ///////////////////////////////////////////////////////////

/****** AFFICHE COURS PROGRAMMATION **********/
btnP.addEventListener('mousedown', function(){
    
    for (let elem of cours){
        // elem.classList
       //  console.log(elem.classList);
      // console.log(elem.classList.contains("programmation"));
      //console.log(elem.parentElement.tagName);


       if(elem.classList.contains("programmation") == true){
        elem.parentElement.style.display= "block";
        elem.parentElement.classList.add('triageCours');
       }else{
           elem.parentElement.style.display= "none";
       }
     
     }

//console.log('click');

})


  /**********************************************************/

/****** AFFICHE COURS CRÉATION **********/
btnC.addEventListener('mousedown', function(){

    for (let elem of cours){
        // elem.classList
       //  console.log(elem.classList);
      // console.log(elem.classList.contains("programmation"));
      //console.log(elem.parentElement.tagName);


       if(elem.classList.contains("creation") == true){
        elem.parentElement.style.display= "block";
        elem.parentElement.classList.add('triageCours');
       }else{
           elem.parentElement.style.display= "none";
       }
     
     }

    //console.log('click');
    
    })
 
  /**********************************************************/
/****** AFFICHE COURS TOUT **********/

  btnTotal.addEventListener('mousedown', function(){

    for (let elem of cours){
        // elem.classList
       //  console.log(elem.classList);
      // console.log(elem.classList.contains("programmation"));
      console.log(elem.parentElement.tagName);
        elem.parentElement.style.display= "block";
        elem.parentElement.classList.add('triageCours');
     }

    console.log('click');
    
    })


}()); //Fin IFFE