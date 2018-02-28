
//   on quantity change

$("#assignedTable").on("keyup" , ".quantity1" , function(){
    var cal=$(this).parent().siblings().children('.food_name1').find(':selected').attr('data-calories');
    var qty=$(this).val();
    var newCal=cal*qty;
    $(this).parent().siblings('.caloryRow').find('.calories1').val(newCal);

});


    // on food change

$("#assignedTable").on( "change" , ".food_name1" , function(){
    var cal=$(this).find(':selected').attr('data-calories');
    var qty=$(this).parent().siblings('.qtyRow').find('.quantity1').val();
    var newCal=cal*qty;
    $(this).parent().siblings('.caloryRow').find('.calories1').val(newCal);

});

// duplicate row insertion

var id= $('#assignedTable tbody tr').length;
$("#assignedTable").on('click', '.remove_row', function () {
    $(this).closest('tr').remove();
    countTableRows();
    id--;
    console.log("Del row now id is "+id);
});
$(document).on('click', '#assign', function () {
    id++;
    var tr = $('#tmpRow').clone().attr('id','row'+id).show().stop()
        .appendTo('#assignedTable tbody');
    $('#row'+id+' span.sr').text(id)


});
function countTableRows() {
    $("#assignedTable tr").each(function (i) {
        if (i >0) {
            $(this).attr('id','row'+i);
            $(this).find('td:first span').html(i);
        }
    });
}

// Delete event delegation

$('#ajaxData').delegate('.delbtn' , 'click' , function(){

    var diet_id=$('.delbtn').attr('data-content');
    token = $('input[name=_token]').val();
    var type, url, params, success;
    type = 'GET';
    url = "/diet/delete/" + diet_id;
    params = {
        '_token': token
    };
    success = function (data) {

        $('#ajaxData').innerHTML = '';
        $('#ajaxData').html(data);
    };
    if (confirm('Are you sure you want to remove this record ?')) {
        ajaxCallMethod(type, url, params, success);
    }


});


$(document).ready(function () {
    /* Datatables basic */
    $('#datatable-example').dataTable();

    //*** trainee table detail action dropdown
    $('.dropdown-toggle').click(function (e) {
        e.preventDefault();
        $(this).siblings('.dropdown-menu.dropdown-menu-right').toggle('show').show();
        e.stopImmediatePropagation();
    })
});