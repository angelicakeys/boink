(function(){

    /***SÉLÉCTIONNE TOUT LES BOUTONS DU CONTENUR BTNTRIEPROJET ****/
    let lesBoutonsProjet = document.querySelectorAll(".btnTrieProjets div");  

    for (let btnPro = 0; btnPro < lesBoutonsProjet.length; btnPro ++){
    lesBoutonsProjet[btnPro].addEventListener('mousedown', function(){

        intialiseBtnProjets();
        ajouteAnimBtnPro (btnPro);
        
    })
  }

  /*** Fait en sorte que la couleur reste lorsqu'on clique *******/
    function ajouteAnimBtnPro (btnPro){ 
    lesBoutonsProjet[btnPro].classList.add('animationBoutonsSelect');
    console.log(lesBoutonsProjet);
}

 /*** Fait en sorte que la couleur s'enlève lorsqu'on clique sur une autre bouton *******/
    function  intialiseBtnProjets(){
    for (let btnPro = 0; btnPro < lesBoutonsProjet.length; btnPro ++){ 
        lesBoutonsProjet[btnPro].classList.remove('animationBoutonsSelect');
    }
}

  

})()