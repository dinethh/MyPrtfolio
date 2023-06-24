//get items codes
function loadAllItemCode() {
    $('#icode').empty();
    $("#icode").append(`<option disabled selected hidden>ItmCode</option>`);
    for (const itemC of itemDB) {
        $('#icode').append(`<option>${itemC.code}</option>`);
    }
};

//get Customer ID
function loadAllCusID() {
    $('#customerId').empty();
    $("#customerId").append(`<option disabled selected hidden>CusID</option>`);
    for (const cusid of customerDB) {
        $('#customerId').append(`<option>${cusid.id}</option>`);
    }
}

//get Customer Name
// $('#customerName').click(function () {
//     $('#customerName').empty();
//     for (const cusName of customerDB) {
//         $('#customerName').append(`<option>${cusName.name}</option>`);
//     }
// });


$(document).ready(function (isDisabled) {
    visible(true);

});

function visible(isDisabled) {
    $('#icode').prop('disabled', isDisabled);
    $('#iName').prop('disabled', isDisabled);
    $('#customerName').prop('disabled', isDisabled);
    $('#customerId').prop('disabled', isDisabled);
    $('#customerAddress').prop('disabled', isDisabled);
    $('#customerSalary').prop('disabled', isDisabled);
    $('#odrDate').prop('disabled', isDisabled);
    $('#odrID').prop('disabled', isDisabled);
    $('#price').prop('disabled', isDisabled);
    $('#qtyOnHand').prop('disabled', isDisabled);
    $('#buyQTY').prop('disabled', isDisabled);
    $('#addCart').prop('disabled', isDisabled);
    $('#cash').prop('disabled', isDisabled);
    $('#balance').prop('disabled', isDisabled);
    $('#purchase').prop('disabled', isDisabled);

}

$('#addInvoice').click(function () {
    visible(false);
    generateInvoiceId();
    $('#odrDate').val(new Date().toISOString().slice(0, 10));
});

function generateInvoiceId() {
    if (orderDetailsDB.length == 0) {
        $("#odrID").val("O00-0001");
    } else if (orderDetailsDB.length > 0) {
        var code = orderDetailsDB[orderDetailsDB.length - 1].orderId.split("-")[1];
        var tempCode = parseInt(code);
        tempCode = tempCode + 1;
        if (tempCode <= 9) {
            $("#odrID").val("O00-000" + tempCode);
        } else if (tempCode <= 99) {
            $("#odrID").val("O00-00" + tempCode);
        } else if (tempCode <= 999) {
            $("#odrID").val("O00-0" + tempCode);
        } else if (tempCode <= 9999) {
            $("#odrID").val("O00-" + tempCode);
        }
    }
}

$("#customerId").change(function () {
    var customer = searchCustomer($(this).val());
    $("#customerName").val(customer.name);
    $("#customerAddress").val(customer.address);
    $("#customerSalary").val(customer.salary);
});

$("#icode").change(function () {
    var item = searchItems($(this).val());
    $("#iName").val(item.name);
    $("#price").val(item.price);
    $("#qtyOnHand").val(item.qty);
});

//add to cart

$('#addCart').click(function () {
    addCart();
    manageItmQtyOnHand();
});

function addCart() {
    $("#cartTable").empty();
    let table = $("#cartTable");

    let itmCode = $('#icode').val();
    let itmName = $('#iName').val();
    let itmPrice = $('#price').val();
    let itmbuyQTY = $('#buyQTY').val();

    //manageItmQtyOnHand(itmCode,itmbuyQTY);

    var itemTotal = parseFloat(itmPrice * itmbuyQTY);

    $('#total').val("Rs." + itemTotal);

  const newRow = $("<tr>");
    newRow.append($("<td>").text(itmCode));
    newRow.append($("<td>").text(itmName));
    newRow.append($("<td>").text(itmPrice));
    newRow.append($("<td>").text(itmbuyQTY));
    newRow.append($("<td>").text(itemTotal));
    table.append(newRow);


    let itemExists = false;
    for (let i = 0; i < cartTMDB.length; i++) {
        if (cartTMDB[i].getItemCode == itmCode) {
            itemExists = true;

            cartTMDB[i].setBuyQty(cartTMDB[i].getBuyQty() + itmbuyQTY);
            cartTMDB[i].setTotal(itemTotal);
            break;
        }
    }


    if (!itemExists) {
        let item = {
            itemCode: itmCode,
            itemName: itmName,
            buyQty: itmbuyQTY,
            total: itemTotal,
        };
        cartTMDB.push(item);
    }
   
   return itemTotal;
}

function purchase() {
    let ret = parseFloat(addCart());
    let getc = parseFloat($('#cash').val());
    $('#balance').val("Rs." + (getc - ret));
}

$('#cash').on('keypress', function (event) {
    if (event.keyCode === 13) {
        if (checkOrder()) {
            purchase();
        } else {
            alert("Check Inputs...!")
            $('#cash').val(" ");
        }
    }

});
//qty management
function manageItmQtyOnHand() {
    let itemCode = $('#icode').val();
  let itmbuyQTY = $('#buyQTY').val();
     for (let i = 0; i < itemDB.length; i++) {
      if (itemDB[i].code === itemCode) {
        let tempQty = parseInt(itemDB[i].qty);
        let qtyOnHand = tempQty - itmbuyQTY;
        itemDB[i].qty = qtyOnHand;
        console.log(qtyOnHand);
      }
    }
  }


function loadOrderDetailTable() {
    // $("#orderDetailsTable").empty();
    let table = $("#orderDetailsTable");
    let orderId = $('#odrID').val();
    let itcode = $('#icode').val();
    let itmName = $('#iName').val();
    let itmPrice = $('#price').val();
    let itmbuyQTY = $('#buyQTY').val();
    let total = $('#total').val();
    let date = $('#odrDate').val();

    orderDetailsDB.push({
        orderId: orderId,
        itcode: itcode,
        itmName: itmName,
        itmPrice: itmPrice,
        itmbuyQTY: itmbuyQTY,
        total: total,
        date: date
    });

    const newRow = $("<tr>");
    newRow.append($("<td>").text(orderId));
    newRow.append($("<td>").text(itcode));
    newRow.append($("<td>").text(itmName));
    newRow.append($("<td>").text(itmPrice));
    newRow.append($("<td>").text(itmbuyQTY));
    newRow.append($("<td>").text(total));
    newRow.append($("<td>").text(date));
    table.append(newRow);

}

$('#purchase').click(function () {
    let consent = confirm("Do you want to Purchase..?");
    if (consent) {
        if (checkOrder() && $('#cash').val() !== '') {
            alert("Order is Compleated");
            loadOrderDetailTable();
            clearOrderInputFields();
            odrCount();
            getAllItems();
            visible(true);
            $("#cartTable").empty();
        } else {
            alert("Error...!");
        }
    }
});

