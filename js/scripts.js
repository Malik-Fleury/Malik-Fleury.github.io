/*!
    Title: Dev Portfolio Template
    Version: 1.2.1
    Last Change: 08/27/2017
    Author: Ryan Fitzgerald
    Repo: https://github.com/RyanFitzgerald/devportfolio-template
    Issues: https://github.com/RyanFitzgerald/devportfolio-template/issues

    Description: This file contains all the scripts associated with the single-page
    portfolio website.
*/

(function($) {

    // Remove no-js class
    $('html').removeClass('no-js');

    // Animate to section when nav is clicked
    $('header a').click(function(e) {

        // Treat as normal link if no-scroll class
        if ($(this).hasClass('no-scroll')) return;

        e.preventDefault();
        var heading = $(this).attr('href');
        var scrollDistance = $(heading).offset().top;

        $('html, body').animate({
            scrollTop: scrollDistance + 'px'
        }, Math.abs(window.pageYOffset - $(heading).offset().top) / 1);

        // Hide the menu once clicked if mobile
        if ($('header').hasClass('active')) {
            $('header, body').removeClass('active');
        }
    });

    // Scroll to top
    $('#to-top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });

    // Scroll to first element
    $('#lead-down span').click(function() {
        var scrollDistance = $('#lead').next().offset().top;
        $('html, body').animate({
            scrollTop: scrollDistance + 'px'
        }, 500);
    });

    // Create timeline
    $('#experience-timeline').each(function() {

        $this = $(this); // Store reference to this
        $userContent = $this.children('div'); // user content

        // Create each timeline block
        $userContent.each(function() {
            $(this).addClass('vtimeline-content').wrap('<div class="vtimeline-point"><div class="vtimeline-block"></div></div>');
        });

        // Add icons to each block
        $this.find('.vtimeline-point').each(function() {
            $(this).prepend('<div class="vtimeline-icon"><i class="fa fa-map-marker"></i></div>');
        });

        // Add dates to the timeline if exists
        $this.find('.vtimeline-content').each(function() {
            var date = $(this).data('date');
            if (date) { // Prepend if exists
                $(this).parent().prepend('<span class="vtimeline-date">'+date+'</span>');
            }
        });

    });

    // Open mobile menu
    $('#mobile-menu-open').click(function() {
        $('header, body').addClass('active');
    });

    // Close mobile menu
    $('#mobile-menu-close').click(function() {
        $('header, body').removeClass('active');
    });

    // Load additional projects
    $('#view-more-projects').click(function(e){
        e.preventDefault();
        $(this).fadeOut(300, function() {
            $('#more-projects').fadeIn(300);
        });
    });

    bootbox.alert("Hello world!", function() {
                    console.log("Alert Callback");
                });

    // Set skills
    var skillsDic = {};
    skillsDic['C#'] = 75;
    skillsDic['Java'] = 75;
    skillsDic['C++'] = 75;
    skillsDic['Python'] = 75;
    skillsDic['HTML'] = 100;
    skillsDic['CSS'] = 50;
    skillsDic['PHP'] = 50;
    skillsDic['Javascript'] = 75;
    skillsDic['WebGL1'] = 75;

    // Build charts
    createSkillCharts('skill-charts', skillsDic);

    // Configure charts
    $('.chart').easyPieChart({
      // The color of the curcular bar. You can pass either a css valid color string like rgb, rgba hex or string colors. But you can also pass a function that accepts the current percentage as a value to return a dynamically generated color.
      barColor: '#111212',
      // The color of the track for the bar, false to disable rendering.
      trackColor: '#f2f2f2',
      // The color of the scale lines, false to disable rendering.
      scaleColor: '#dfe0e0',
      // Defines how the ending of the bar line looks like. Possible values are: butt, round and square.
      lineCap: 'round',
      // Width of the bar line in px.
      lineWidth: 8,
      // Size of the pie chart in px. It will always be a square.
      size: 110,
      // Time in milliseconds for a eased animation of the bar growing, or false to deactivate.
      animate: 1500,
      // Callback function that is called at the start of any animation (only if animate is not false).
      onStart: $.noop,
      // Callback function that is called at the end of any animation (only if animate is not false).
      onStop: $.noop
    });
})(jQuery);
