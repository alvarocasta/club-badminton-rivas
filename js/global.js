/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll
$(window).scroll(function () {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});



 // Closes the Responsive Menu on Menu Item Click
 $('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
 });


$(document).ready(function () {
    $('.animate-show').viewportChecker({
        classToAdd: 'in-view', // Class to add to the elements when they are visible
        offset: 50,
        repeat: false // Add the possibility to remove the class if the elements are not visible
    });
});
