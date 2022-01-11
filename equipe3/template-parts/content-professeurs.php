
<?php
/**
 * Template part for displaying posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package equipe3
 */

?>
            <article class="professeurs">
                <div class="profs">
                    <?php echo the_post_thumbnail(); ?>
                    <div class="Informations">
                        <div class="bouton-fermeture">
                            <button id="btnProf" type="button">X</button>
                        </div>
                        <h2 id="titreInfos"><?php echo get_the_content() ?></h2>
                    </div>
                </div>
            </article>
            
                    
                    