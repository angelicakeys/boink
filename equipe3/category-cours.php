<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package equipe3
 */
get_header();
?>
<!--  <h1 class="titreCours"> cours</h1> -->
    <main id="primary" class="site-main">
    <?php if ( have_posts() ) : ?>
<!--        <div class="btnTrieCours">
       <div id="btnProgrammation"> Programmation </div>
        <div id="btnCreation">Création  </div>
        <div id="btnTout"> Tout </div>
    </div> -->
        <section class="gabaritCours">
            <div class="enteteCours">
                <div class="nomEntente">
                <h1 class="titreCours"> cours</h1>
                <p id="sous-titreCours"> Trié par session</p>
                </div>
        <div class="btnTrieCours">
       <div id="btnProgrammation"> Programmation </div>
        <div id="btnCreation">Création  </div>
        <div id="btnTout"> Tout </div>
    </div>
    </div>
        <?php
            /* Start the Loop */
            $precedent = 0;
            //echo '<section>';
            while ( have_posts() ) :
                the_post();
                convertirTableau($tPropriété);
                if ($precedent != $tPropriété['session']){ //commence une nouvelle session
                    echo '</section>';
                    //div entete est par-dessus de chaque session
                    //echo '<div class="enteteSession">' . $tPropriété['session'] . '<p class="nomSession"> session </p>'. '</div>';
                    //div entete est dans chaque session
                    echo '<section class="session">';
                    echo '<div class="enteteSession">' . $tPropriété['session'] .'</div>';
                    //echo '<div class="enteteSession">' . $tPropriété['session'] . '<p class="nomSession"> session </p>'. '</div>';AVANT AVEC SESSION NOM
                    //echo $tPropriété['session'];
            /*      if ($tPropriété['typeCours']== 'programmation'):
                    echo '<p>' .' <i class="fas fa-anchor"></i>' . '</p>';
                    endif;
                    if ($tPropriété['typeCours']== 'creation'):
                    echo '<p>' .' <i class="fas fa-palette"></i>' . '</p>';
                    endif;
                     */
                }
//if ($precedent != $tPropriété['session']){ }  //si est différent
                    //echo '</section>';
                $precedent = $tPropriété['session'];
                get_template_part( 'template-parts/content', 'cours');
            endwhile;?>
            <section> <!-- ferme classe session-->
        <?php endif; ?>
    </main><!-- #main -->
<?php
//get_sidebar();
get_footer();
function convertirTableau(&$tPropriété)
{
    $tPropriété['titre'] = get_the_title(); 
    $tPropriété['sigle'] = substr($tPropriété['titre'], 0, 3);
     $tPropriété['nbHeure'] = substr($tPropriété['titre'],-6,7); 
    $tPropriété['titrePartiel'] = substr($tPropriété['titre'],4,-5);
    $tPropriété['session'] = substr($tPropriété['titre'], 0,1);
    $tPropriété['typeCours'] = get_field('type_de_cours');
    //print_r($tPropriété);
}