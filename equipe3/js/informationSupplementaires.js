const imageOuverture = document.querySelectorAll('.attachment-post-thumbnail.size-post-thumbnail.wp-post-image');
const boutonFermer = document.querySelectorAll('.bouton-fermeture');
const InformationsSupplementaires = document.querySelectorAll('.Informations');

for(let i = 0; i < boutonFermer.length; i++){
    boutonFermer[i].addEventListener("click", function(){
        InformationsSupplementaires[i].style.opacity = 0;
        InformationsSupplementaires[i].style.zIndex = -1;
    });
}
for(let i = 0; i < imageOuverture.length; i++){
    imageOuverture[i].addEventListener("click", function(){
        InformationsSupplementaires[i].style.opacity = 1;
        InformationsSupplementaires[i].style.zIndex = 90;
    })
}


