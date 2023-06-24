$('document').ready(function () {
    $('#home').css('display', 'block');
    $('#customer').css('display', 'none');
    $('#item').css('display', 'none');
    $('#order').css('display', 'none');
    $('#Details').css('display', 'none');
    
});

$('#homeform').click(function () {
    $('#home').css('display', 'block');
    $('#customer').css('display', 'none');
    $('#item').css('display', 'none');
    $('#order').css('display', 'none');
    $('#Details').css('display', 'none');
});

$('#customerform').click(function () {
    $('#home').css('display', 'none');
    $('#customer').css('display', 'block');
    $('#item').css('display', 'none');
    $('#order').css('display', 'none');
    $('#Details').css('display', 'none');
});

$('#itemform').click(function () {
    $('#home').css('display', 'none');
    $('#customer').css('display', 'none');
    $('#item').css('display', 'block');
    $('#order').css('display', 'none');
    $('#Details').css('display', 'none');
});

$('#orderform').click(function () {
    $('#home').css('display', 'none');
    $('#customer').css('display', 'none');
    $('#item').css('display', 'none');
    $('#order').css('display', 'block');
    $('#Details').css('display', 'none');
});

$('#orderDetailsForm').click(function () {
    $('#home').css('display', 'none');
    $('#customer').css('display', 'none');
    $('#item').css('display', 'none');
    $('#order').css('display', 'none');
    $('#Details').css('display', 'block');
});


function cusCount(){
    var arrayLength = customerDB.length;
 $('#cusCount').text(arrayLength);
}


function itmCount(){
    var arrayLength = itemDB.length;
 $('#itmCount').text(arrayLength);
}

function odrCount(){
    var arrayLength = orderDetailsDB.length;
 $('#ordCount').text(arrayLength);
}



 