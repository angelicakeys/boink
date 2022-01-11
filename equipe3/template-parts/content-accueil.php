<?php
/**
 * Template part l'affichage des bloc de cours dans front-page.php
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package theme4w4
 */
?>
  <!-- //content-->
<section class="sectionAccueil">
    <div class="titreEntete">
        <div class="titrePrincipal">L'harmonie entre<br> la &nbsp;<span class="boldTitre">logique </span>et le&nbsp;<span class="boldTitre">créatif </span></div>
        <div class="sous-titre">
        Le Tim est un programme dans lequel on étudie diverses techniques en lien avec la conception et la programmation. 
        On réalise du montage vidéo, du design,des jeux vidéos,  de la programmation des sites web, de la 3D et bien plus.
        </div>
    </div>
<div class="englobeCaroussel">
    <div class="carouselAccueil">
            <div class="slide">
                <img class="imageUne" src="<?php echo get_site_url() . "/wp-content/uploads/2021/11/vehicule.jpeg" ?>"/>
            </div>
            <div class="slide">
                <img class="imageDeux" src="<?php echo get_site_url() . "/wp-content/uploads/2021/11/college.jpg" ?>"/>
            </div>
            <div class="slide">
                <img class="imageTrois" src="<?php echo get_site_url() . "/wp-content/uploads/2021/12/P1010672.jpg"?>"/>
            </div>
</div>
<div class="boutonsCarouAccueil">
    <button id="boutonCarre1"><i class="fas fa-angle-up"></i></button>
    <button id="boutonCarre2"></button>
    <button id="boutonCarre3"><i class="fas fa-angle-down"></i></button>
</div>
</div><!-- englobeCaroussel -->
</section>