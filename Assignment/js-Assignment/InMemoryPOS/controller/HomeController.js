$('document').ready(function () {
    $('#home').css('display', 'block');
    $('#customer').css('display', 'none');
    $('#item').css('display', 'none');
    $('#order').css('display', 'none');
});

$('#homeform').click(function () {
    $('#home').css('display', 'block');
    $('#customer').css('display', 'none');
    $('#item').css('display', 'none');
    $('#order').css('display', 'none');
});

$('#customerform').click(function () {
    $('#home').css('display', 'none');
    $('#customer').css('display', 'block');
    $('#item').css('display', 'none');
    $('#order').css('display', 'none');
});

$('#itemform').click(function () {
    $('#home').css('display', 'none');
    $('#customer').css('display', 'none');
    $('#item').css('display', 'block');
    $('#order').css('display', 'none');
});

$('#orderform').click(function () {
    $('#home').css('display', 'none');
    $('#customer').css('display', 'none');
    $('#item').css('display', 'none');
    $('#order').css('display', 'block');
});



   //get items codes
   $('#icode').click(function () {

    $('#icode').empty();
    for (const itemC of itemDB) {
        $('#icode').append(`<option>${itemC.code}</option>`);
    }
});

//get items Names
$('#iName').click(function () {
    $('#iName').empty();
    for (const itemN of itemDB) {
        $('#iName').append(`<option>${itemN.name}</option>`);
    }
});

//get Customer ID
$('#cId').click(function () {
    $('#cId').empty();
    for (const cusid of customerDB) {
        $('#cId').append(`<option>${cusid.id}</option>`);
    }
});

//get Customer Name
$('#cName').click(function () {
    $('#cName').empty();
    for (const cusName of customerDB) {
        $('#cName').append(`<option>${cusName.name}</option>`);
    }
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
    var arrayLength = orderDB.length;
 $('#ordCount').text(arrayLength);
}