<?php
/**
 * Template part l'affichage des bloc de cours dans front-page.php
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package theme4w4
 */
global $tPropriété;
?>
<article>
<?php if ($tPropriété['typeCours']== 'programmation'):
                    echo '<p>' .' <i class="fas fa-laptop-code"></i>' . '</p>'; endif?>
<?php if ($tPropriété['typeCours']== 'creation'):
                        echo '<p>' .' <i class="fas fa-palette"></i>' . '</p>';endif ?>
<?php if ($tPropriété['typeCours']== "Autres"):
                    echo '<p>' .'<i class="fas fa-book-reader"></i>' . '</p>'; endif?>
    <a class="<?php echo $tPropriété['typeCours'] ; ?>" href="<?php echo get_permalink() ?>"><?php echo $tPropriété['titrePartiel']; ?></a>
    <p>Session : <?php echo $tPropriété['session']; ?></p>
</article>