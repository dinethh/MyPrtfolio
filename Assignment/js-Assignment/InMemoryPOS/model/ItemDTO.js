function ItemDTO(code, name, price, qty) {
    var code = code;
    var name = name;
    var price = price;
    var qty = qty;

    this.getCode = function () {
        return code;
    }

    this.setCode = function (code) {
        code = code;
    }

    this.getName = function () {
        return name;
    }

    this.setName = function (name) {
        name = name;
    }

    this.getPrice = function () {
        return price;
    }

    this.setPric = function (price) {
        price = price;
    }

    this.getqty = function () {
        return qty;
    }

    this.setqty = function (qty) {
        qty = qty;
    }
}