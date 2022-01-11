<?php
/**
 * Template part for displaying posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package equipe3
 */
global $tPropriété;

?>





<article class="projets">

  <a class="<?php echo $tPropriété['typeProjets']; ?>" href="<?php echo get_permalink() ?>">
    <?php echo $tPropriété['titre']; ?><?php the_title(); ?></a>

  <?php the_post_thumbnail('large'); ?>  
  <?php //echo get_the_post_thumbnail('thumbnail'); ?> 
  <div class="content-overlay">
    <h3 class="content-title">
      <a href="<?php //echo get_permalink(); ?>">
        <?php the_title(); ?>
      </a>
    </h3>
    <p> <?php echo get_the_content();?></p>
  </div>
 


</article>