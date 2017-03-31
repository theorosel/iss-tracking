        </div>

        <!-- JS import -->
        <script src="<?= URL ?>assets/js/TweenMax.min.js"></script>
        <script src="<?= URL ?>assets/js/CustomEase.min.js"></script>
        
        <!-- $landing ase  -->
        <?php if ($page == 'landing'): ?>
            <script src="<?= URL ?>assets/js/landing.js"></script>
        <?php endif; ?>

        <!-- $home case  -->
        <?php if ($page == 'home'): ?>
            <script src="<?= URL ?>assets/js/lethargy.min.js"></script>
            <script src="<?= URL ?>assets/js/app.js"></script>
            <script src="<?= URL ?>assets/js/team.js"></script>
            <script src="<?= URL ?>assets/js/live.js"></script>
            <script src="https://www.youtube.com/iframe_api"></script>
        <?php endif; ?>

        <!-- $404 case -->
        <?php if ($page == '404'): ?>
            <script src="<?= URL ?>assets/js/404.js"></script>
        <?php endif; ?>
    </body>
</html>
