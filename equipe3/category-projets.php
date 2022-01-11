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

	<main id="primary" class="site-main">

	

		<?php if ( have_posts() ) : ?>

	<header class="page-header">
		<div class="enteteProjet">
			<div class="btnEntete">
		<h1 class="titreProjets"> Projets</h1>
		
		</div>
		<div class="btnTrieProjets">
	   <div id="btnWeb"> Web </div>
		<div id="btnDesign">Design  </div>
		<div id="btnImagerie"> 3D </div>
		<div id="btnVideo"> Video </div>
		<div id="btnJeu"> Jeu </div>
		<div id="btnToutProjet"> Tout </div>
		</div>
		
		</div> <!-- fin de div entete projet -->
	</header>

		<section class="galerieProjets">
			
		<?php
			/* Start the Loop */
			while ( have_posts() ) :
				the_post();
				convertirTableau($tPropriété);
				?>
				
				
			<?php	get_template_part( 'template-parts/content', 'projets'); ?>

		<?php endwhile;?>
			</section>

		<?php endif; ?>




	</main><!-- #main -->

<?php
get_footer();


function convertirTableau(&$tPropriété)
{

	$tPropriété['titre'] = get_the_title(); 
	$tPropriété['typeProjets'] = get_field('type_de_projets');
	//print_r($tPropriété);
}
