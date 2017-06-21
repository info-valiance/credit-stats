$(document).ready(function () {
    // Change table data based on selected spending category
    $('.spendings-select').on('change', updateSpendingsTable);

    // Update table cells color based on their data
    updateTdColors();
});

// Update spendings table based on selected category
function updateSpendingsTable() {
    $('[class*="-td"]').hide();
    var tdClass = '.' + $(this).val().toLowerCase() + '-td';
    $(tdClass).show();
}

// Update table cells color based on their data
function updateTdColors() {
    var td = $('.data-td');
    for(var i = 0; i < td.length; i++) {
        if($(td[i]).data('percent') <= 1) {
            // console.log($(td[i]));
            $(td[i]).css('background', '#B2EBF2')
        } else if($(td[i]).data('percent') == 2) {
            $(td[i]).css('background', '#80DEEA')
        } else if($(td[i]).data('percent') == 3) {
            $(td[i]).css('background', '#4DD0E1')
        } else if($(td[i]).data('percent') <= 6) {
            $(td[i]).css('background', '#26C6DA')
        } else if($(td[i]).data('percent') <= 8) {
            $(td[i]).css('background', '#00BCD4')
        } else if($(td[i]).data('percent') <= 12) {
            $(td[i]).css('background', '#00ACC1')
        } else if($(td[i]).data('percent') <= 18) {
            $(td[i]).css('background', '#0097A7')
        } else if($(td[i]).data('percent') > 19) {
            $(td[i]).css('background', '#00838F')
        }
    }
}
