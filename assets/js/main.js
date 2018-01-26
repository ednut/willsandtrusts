$(window).load(function() {


    $('.info-tip').tooltipster({
    	theme: 'tooltipster-shadow'
    });


    jQuery(".datepicker").map(function() {

        var date_dropper = jQuery(this);

        date_dropper.attr({
            "data-format": 'd/m/Y',
            "data-large-default": 'true',
            "data-large-mode": 'true',
            "data-modal": 'true'
        }); 

        /* Init the Datedropper plugin */
        date_dropper.dateDropper();
    });

});