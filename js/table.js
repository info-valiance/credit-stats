$(document).ready(function () {
    // Change table data based on selected spending category
    $('.spendings-select').on('change', updateSpendingsTable);

    // Update table cells color based on their data
    // updateTdColors();
});

// Update spendings table based on selected category
function updateSpendingsTable() {
    $('[class*="-td"]').hide();
    var tdClass = '.' + $(this).val().toLowerCase() + '-td';
    $(tdClass).show();
}

// // Update table cells color based on their data
// function updateTdColors() {
//     var td = $('[class*="-td"]');
//     for(var i = 0; i < td.length; i++) {
//         if(parseInt($(td[i]).text()) <= 5) {
//             $(td[i]).css('color', '#80DEEA');
//         } else if(parseInt($(td[i]).text()) <= 10) {
//             $(td[i]).css('color', '#26C6DA');
//         } else if(parseInt($(td[i]).text()) <= 15) {
//             $(td[i]).css('color', '#00ACC1');
//         } else if(parseInt($(td[i]).text()) <= 20) {
//             $(td[i]).css('color', '#0097A7');
//         } else if(parseInt($(td[i]).text()) <= 25) {
//             $(td[i]).css('color', '#00838F');
//         }
//     }
// }
