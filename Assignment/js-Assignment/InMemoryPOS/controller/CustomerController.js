
getAllCustomers();


$("#cusSave").click(function () {
    
    if (checkAll()){
        saveCustomer();
        cusCount();
    }else{
        alert("Error");
    }
});

$(document).ready(function(){
    $("#cusID").prop('disabled', true);
    $("#cusName").prop('disabled', true);
    $("#cusAddress").prop('disabled', true);
    $("#cusSalary").prop('disabled', true);
});
 function generateCustomerId() {
 
    if (customerDB.length == 0) {
        $("#cusID").val("C00-0001");
    } else if (customerDB.length > 0) {
        var id = customerDB[customerDB.length - 1].id.split("-")[1];
        var tempId = parseInt(id);
        tempId = tempId + 1;
        if (tempId <= 9) {
            $("#cusID").val("C00-000" + tempId);
        } else if (tempId <= 99) {
            $("#cusID").val("C00-00" + tempId);
        } else if (tempId <= 999) {
            $("#cusID").val("C00-0" + tempId);
        } else if (tempId <= 9999) {
            $("#cusID").val("C00-" + tempId);
        }
    }
};


$('#cusAdd').click(function(){
    $("#cusID").prop('disabled', false);
    $("#cusName").prop('disabled', false);
    $("#cusAddress").prop('disabled', false);
    $("#cusSalary").prop('disabled', false);

    $(this).find("#cusID").focus();
    generateCustomerId();
});

$("#cusGetAll").click(function () {
    getAllCustomers();
    loadAllCusID();
});


function bindTrrEvents() {
    $('#customerTable>tr').click(function () {
      
        let id = $(this).children().eq(0).text();
        let name = $(this).children().eq(1).text();
        let address = $(this).children().eq(2).text();
        let salary = $(this).children().eq(3).text();

     
        $("#cusID").val(id);
        $("#cusName").val(name);
        $("#cusAddress").val(address);
        $("#cusSalary").val(salary);

        $("#cusID").prop('disabled', false);
        $("#cusName").prop('disabled', false);
        $("#cusAddress").prop('disabled', false);
        $("#cusSalary").prop('disabled', false);
        $("#cusUpdate").prop('disabled', false);
    
    })
}

//delete btn event
$("#cusDelete").click(function () {
    let id = $("#cusID").val();

    let consent = confirm("Do you want to delete.?");
    if (consent) {
        let response = deleteCustomer(id);
        if (response) {
            alert("Customer Deleted");
            clearCustomerInputFields();
            getAllCustomers();
        } else {
            alert("Customer Not Removed..!");
        }
    }
    $("#cusID").prop('disabled', true);
    $("#cusName").prop('disabled', true);
    $("#cusAddress").prop('disabled', true);
    $("#cusSalary").prop('disabled', true);
     
    cusCount();
});

//update  btn event
$("#cusUpdate").click(function () {
    let id = $("#cusID").val();
    updateCustomer(id);
  clearCustomerInputFields();
});

//clear btn event
$("#btn-clear1").click(function () {
   clearCustomerInputFields();
});


function saveCustomer() {
    let customerID = $("#cusID").val();
   
    if (searchCustomer(customerID.trim()) == undefined) {

       
        let customerName = $("#cusName").val();
        let customerAddress = $("#cusAddress").val();
        let customerSalary = $("#cusSalary").val();

       
        let newCustomer = Object.assign({}, customer);
        newCustomer.id = customerID;
        newCustomer.name = customerName;
        newCustomer.address = customerAddress;
        newCustomer.salary = customerSalary;

      
        customerDB.push(newCustomer);
       clearCustomerInputFields();
        getAllCustomers();
        $("#cusID").prop('disabled', true);
        $("#cusName").prop('disabled', true);
        $("#cusAddress").prop('disabled', true);
        $("#cusSalary").prop('disabled', true);
   

    } else {
        alert("Customer already exits.!");
        clearCustomerInputFields();
    }
}

function getAllCustomers() {
   
    $("#customerTable").empty();

  for (let i = 0; i < customerDB.length; i++) {
        let id = customerDB[i].id;
        let name = customerDB[i].name;
        let address = customerDB[i].address;
        let salary = customerDB[i].salary;

        let row = `<tr>
                     <td>${id}</td>
                     <td>${name}</td>
                     <td>${address}</td>
                     <td>${salary}</td>
                    </tr>`;

        $("#customerTable").append(row);
        bindTrrEvents();
    }
}

function deleteCustomer(id) {
    for (let i = 0; i < customerDB.length; i++) {
        if (customerDB[i].id == id) {
            customerDB.splice(i, 1);
            return true;
        }
    }
    return false;
}

function searchCustomer(id) {
    return customerDB.find(function (customer) {
     
        return customer.id == id;
    });
}

function updateCustomer(id) {
    if (searchCustomer(id) == undefined) {
        alert("No such Customer..please check the ID");
    } else {
        let consent = confirm("Do you really want to update this customer.?");
        if (consent) {
            let customer = searchCustomer(id);
        

            let customerName = $("#cusName").val();
            let customerAddress = $("#cusAddress").val();
            let customerSalary = $("#cusSalary").val();

            customer.name = customerName;
            customer.address = customerAddress;
            customer.salary = customerSalary;

            getAllCustomers();

            $("#cusID").prop('disabled', true);
            $("#cusName").prop('disabled', true);
            $("#cusAddress").prop('disabled', true);
            $("#cusSalary").prop('disabled', true);
        }
    }

}

