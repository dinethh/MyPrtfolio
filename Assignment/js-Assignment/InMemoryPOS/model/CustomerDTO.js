function CustomerDTO(id, name, address, salary){
    var id = id;
    var name = name;
    var address = address;
    var salary = salary;

    this.getId = function(){
        return id;
    }

    this.setId = function (id){
        id = id;
    }

    this.getName = function (){
        return name;
    }

    this.setName = function (name){
       name = name;
    }

    this.getAddress = function (){
        return address;
    }

    this.setAddress = function (address){
        address = address;
    }

    this.getSalary = function (){
        return salary;
    }

    this.setSalary = function (salary){
        salary = salary;
    }
}