


$("#itmSave").click(function () {

    if (checkAllItems()) {
        saveItems();
        itmCount();
    } else {
        alert("Error");
    }

});

$(document).ready(function () {
    $("#itmCode").prop('disabled', true);
    $("#itmName").prop('disabled', true);
    $("#itmPrice").prop('disabled', true);
    $("#itmQTY").prop('disabled', true);
});

function genarateItemCode() {
    if (itemDB.length == 0) {
        $("#itmCode").val("I00-0001");
    } else if (itemDB.length > 0) {
        var code = itemDB[itemDB.length - 1].code.split("-")[1];
        var tempCode = parseInt(code);
        tempCode = tempCode + 1;
        if (tempCode <= 9) {
            $("#itmCode").val("I00-000" + tempCode);
        } else if (tempCode <= 99) {
            $("#itmCode").val("I00-00" + tempCode);
        } else if (tempCode <= 999) {
            $("#itmCode").val("I00-0" + tempCode);
        } else if (tempCode <= 9999) {
            $("#itmCode").val("I00-" + tempCode);
        }
    }
}


$('#itmAdd').click(function () {
    $("#itmCode").prop('disabled', false);
    $("#itmName").prop('disabled', false);
    $("#itmPrice").prop('disabled', false);
    $("#itmQTY").prop('disabled', false);

    $(this).find("#itmCode").focus();
    genarateItemCode();
});

$("#itmGetAll").click(function () {
    getAllItems();
    loadAllItemCode();
});

//bind tr events for getting back data of the rows to text fields
function bindTrEvents() {
    $('#itemTable>tr').click(function () {

        let code = $(this).children().eq(0).text();
        let name = $(this).children().eq(1).text();
        let price = $(this).children().eq(2).text();
        let qty = $(this).children().eq(3).text();


        $("#itmCode").val(code);
        $("#itmName").val(name);
        $("#itmPrice").val(price);
        $("#itmQTY").val(qty);

        $("#itmCode").prop('disabled', false);
        $("#itmName").prop('disabled', false);
        $("#itmPrice").prop('disabled', false);
        $("#itmQTY").prop('disabled', false);


    })
}

//delete btn event
$("#itmDelete").click(function () {
    let code = $("#itmCode").val();

    let consent = confirm("Do you want to delete.?");
    if (consent) {
        let response = deleteItem(code);
        if (response) {
            alert("Item Deleted");
            clearItemInputFields();
            getAllItems();
        } else {
            alert("Item Not Removed..!");
        }
    }
    $("#itmCode").prop('disabled', true);
    $("#itmName").prop('disabled', true);
    $("#itmPrice").prop('disabled', true);
    $("#itmQTY").prop('disabled', true);
    itmCount();
});

//update  btn event
$("#itmUpdate").click(function () {
    let code = $("#itmCode").val();
    updateItem(code);
    clearItemInputFields();
});

//clear btn event
$("#btn-clear1").click(function () {
    clearItemInputFields();
});


function saveItems() {
    let itemCode = $("#itmCode").val();

    if (searchItems(itemCode.trim()) == undefined) {


        let itemName = $("#itmName").val();
        let itmPrice = $("#itmPrice").val();
        let itmQTY = $("#itmQTY").val();


        let newItem = Object.assign({}, item);
        newItem.code = itemCode;
        newItem.name = itemName;
        newItem.price = itmPrice;
        newItem.qty = itmQTY;


        itemDB.push(newItem);
        clearItemInputFields();
        getAllItems();
        $("#itmCode").prop('disabled', true);
        $("#itmName").prop('disabled', true);
        $("#itmPrice").prop('disabled', true);
        $("#itmQTY").prop('disabled', true);


    } else {
        alert("Item already exits.!");
        clearItemInputFields();
    }
}

function getAllItems() {

    $("#itemTable").empty();

    for (let i = 0; i < itemDB.length; i++) {
        let code = itemDB[i].code;
        let name = itemDB[i].name;
        let price = itemDB[i].price;
        let qty = itemDB[i].qty;

        let row = `<tr>
                     <td>${code}</td>
                     <td>${name}</td>
                     <td>${price}</td>
                     <td>${qty}</td>
                    </tr>`;

        $("#itemTable").append(row);
        bindTrEvents();
    }
}

function deleteItem(code) {
    for (let i = 0; i < itemDB.length; i++) {
        if (itemDB[i].code == code) {
            itemDB.splice(i, 1);
            return true;
        }
    }
    return false;
}

function searchItems(code) {
    return itemDB.find(function (item) {

        return item.code == code;
    });
}

function updateItem(code) {
    if (searchItems(code) == undefined) {
        alert("No such Item..please check the ID");
    } else {
        let consent = confirm("Do you really want to update this Item.?");
        if (consent) {
            let item = searchItems(code);


            let itemName = $("#itmName").val();
            let itemPrice = $("#itmPrice").val();
            let itemQTY = $("#itmQTY").val();

            item.name = itemName;
            item.price = itemPrice;
            item.qty = itemQTY;

            getAllItems();

            $("#itmCode").prop('disabled', true);
            $("#itmName").prop('disabled', true);
            $("#itmPrice").prop('disabled', true);
            $("#itmQTY").prop('disabled', true);
        }
    }

}



