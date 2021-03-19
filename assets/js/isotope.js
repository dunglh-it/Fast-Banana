$(document).ready(function() {
    let $grid = $('.picture-container').isotope({
    });
    $('.filter-button-group').on('click', 'button', function() {
        let filterValue = $(this).attr('data-filter');
        $grid.isotope({
            filter: filterValue
        });
    });
    $grid.imagesLoaded().progress(function() {
        $grid.isotope('layout');
    });
});