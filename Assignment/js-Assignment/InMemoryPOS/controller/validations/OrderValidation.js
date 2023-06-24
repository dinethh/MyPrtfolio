const ORDER_QTY_REGEX = /^[0-9]+$/;
const ORDER_CASH_REGEX = /^[0-9]{2,}([.][0-9]{2})?$/;

let odr_Array = new Array();
odr_Array.push({field: $("#buyQTY"), regEx: ORDER_QTY_REGEX});
odr_Array.push({field: $("#cash"), regEx: ORDER_CASH_REGEX});


function clearOrderInputFields() {
    $("#odrID,#icode,#iName,#customerName,#customerId,#customerAddress,#customerSalary,#odrDate,#price,#qtyOnHand,#buyQTY,#cash,#balance,#total").val("");
    $("#buyQTY,#cash,#balance").css("border", "1px solid #ced4da");
    //$("#odrID").focus();
}

$("#buyQTY,#cash,#balance").on("keydown keyup", function (e) {

    let indexNo = odr_Array.indexOf(odr_Array.find((c) => c.field.attr("id") == e.target.id));

    //Disable tab key
    if (e.key == "Tab") {
        e.preventDefault();
    }

    //check validations
    checkItemValidations(odr_Array[indexNo]);

    setItemBtn();

    //If the enter key pressed cheque and focus
    if (e.key == "Enter") {

        if (e.target.id != odr_Array[odr_Array.length - 1].field.attr("id")) {
            //check validation is ok
            if (checkItemValidations(odr_Array[indexNo])) {
                odr_Array[indexNo + 1].field.focus();
            }
        } else {
            if (checkItemValidations(odr_Array[indexNo])) {
                // saveItem();
            }
        }
    }
});

function checkItemValidations(object) {
    if (object.regEx.test(object.field.val())) {
        setItemBorder(true, object)
        return true;
    }
    setItemBorder(false, object)
    return false;
}

function setItemBorder(bol, ob) {
    if (!bol) {
        if (ob.field.val().length >= 1) {
            ob.field.css("border", "2px solid red");
        } else {
            ob.field.css("border", "1px solid #ced4da");
        }
    } else {
        if (ob.field.val().length >= 1) {
            ob.field.css("border", "2px solid green");
        } else {
            ob.field.css("border", "1px solid #ced4da");
        }
    }

}

function checkOrder() {
    for (let i = 0; i < odr_Array.length; i++) {
        if (!checkItemValidations(odr_Array[i])) return false;
    }
    return true;
}