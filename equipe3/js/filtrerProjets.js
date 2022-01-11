
(function () { //IIFE

    //variables déclarés
    let btnWeb = document.querySelector("#btnWeb");
    let btnDesign = document.querySelector("#btnDesign");
    let btnImagerie = document.querySelector("#btnImagerie");
    let btnVideo = document.querySelector("#btnVideo");
    let btnJeu = document.querySelector("#btnJeu");

    let btnToutProjet = document.querySelector("#btnToutProjet");
    let projets = document.querySelectorAll(".projets > a");
   // console.log(cours.length);
  


   // let btnA = document.getElementsByClassName("btnAutres");

    ///////////////////////////////////////////////////////////

/****** AFFICHE PROJETS WEB **********/
btnWeb.addEventListener('mousedown', function(){
    
    for (let elem of projets){
        // elem.classList
       //  console.log(elem.classList);
      // console.log(elem.classList.contains("programmation"));
      //console.log(elem.parentElement.tagName);


       if(elem.classList.contains("web") == true){
        elem.parentElement.style.display= "block";
       }else{
           elem.parentElement.style.display= "none";
       }
     
     }

//console.log('click');

})


  /**********************************************************/

/****** AFFICHE PROJETS DESIGN  **********/
btnDesign.addEventListener('mousedown', function(){

    for (let elem of projets){
        // elem.classList
       //  console.log(elem.classList);
      // console.log(elem.classList.contains("programmation"));
      //console.log(elem.parentElement.tagName);


       if(elem.classList.contains("design") == true){
        elem.parentElement.style.display= "block";
       }else{
           elem.parentElement.style.display= "none";
       }
     
     }

    //console.log('click');
    
    })
 
  /**********************************************************/
/****** AFFICHE PROJETS 3D **********/

btnImagerie.addEventListener('mousedown', function(){

    for (let elem of projets){
        // elem.classList
       //  console.log(elem.classList);
      // console.log(elem.classList.contains("programmation"));
      //console.log(elem.parentElement.tagName);


       if(elem.classList.contains("imagerie") == true){
        elem.parentElement.style.display= "block";
       }else{
           elem.parentElement.style.display= "none";
       }
     
     }

    console.log('click');
    
    })

/****** AFFICHE PROJETS VIDEO **********/
 
btnVideo.addEventListener('mousedown', function(){

    for (let elem of projets){
        // elem.classList
       //  console.log(elem.classList);
      // console.log(elem.classList.contains("programmation"));
      //console.log(elem.parentElement.tagName);


       if(elem.classList.contains("video") == true){
        elem.parentElement.style.display= "block";
       }else{
           elem.parentElement.style.display= "none";
       }
     
     }

    console.log('click');
    
    })

/****** AFFICHE PROJETS JEU **********/

btnJeu.addEventListener('mousedown', function(){

        for (let elem of projets){
            // elem.classList
           //  console.log(elem.classList);
          // console.log(elem.classList.contains("programmation"));
          //console.log(elem.parentElement.tagName);
    
    
           if(elem.classList.contains("Jeu") == true){
            elem.parentElement.style.display= "block";
           }else{
               elem.parentElement.style.display= "none";
           }
         
         }
    
        console.log('click');
        
        })

/****** AFFICHE PROJETS TOUT **********/

btnToutProjet.addEventListener('mousedown', function(){

    for (let elem of projets){
       
      console.log(elem.parentElement.tagName);
        elem.parentElement.style.display= "block";
     
     
     }

    console.log('click');
    
    })


    


}()); //Fin IFFE