(function(){

    /***SÉLÉCTIONNE TOUT LES BOUTONS DU CONTENUR BTNTRIECOURS ****/
    let lesBoutons = document.querySelectorAll(".btnTrieCours div");  

    for (let btn = 0; btn < lesBoutons.length; btn++){
    lesBoutons[btn].addEventListener('mousedown', function(){

        intialiseBtnCours();
        ajouteAnimBtn (btn);
        
    })
  }

  /*** Fait en sorte que la couleur reste lorsqu'on clique *******/
    function ajouteAnimBtn (btn){ 
    lesBoutons[btn].classList.add('animationBoutonsSelect');
    console.log(lesBoutons);
}

 /*** Fait en sorte que la couleur s'enlève lorsqu'on clique sur une autre bouton *******/
    function intialiseBtnCours(){
    for (let btn = 0; btn < lesBoutons.length; btn++){ 
        lesBoutons[btn].classList.remove('animationBoutonsSelect');
    }
}

  

})()