function cartTM(itemCode, itemName, itemPrice, buyQty, total) {
    var itemCode = itemCode;
    var itemName = itemName;
    var itemPrice = itemPrice;
    var buyQty = buyQty;
    var total = total;

    this.getItemCode = function () {
        return itemCode;
    }

    this.setItemCode = function (itemCode) {
        itemCode = itemCode;
    }

    this.geItemName = function () {
        return itemName;
    }

    this.setItemName = function (itemName) {
        itemName = itemName;
    }

    this.getItemPrice = function () {
        return itemPrice;
    }

    this.setItemPrice = function (itemPrice) {
        itemPrice = itemPrice;
    }

    this.getBuyQty = function () {
        return buyQty;
    }

    this.setBuyQty = function (buyQty) {
        buyQty = buyQty
    }

    this.getTotal = function () {
        return total;
    }

    this.setTotal = function (total) {
        total = total;
    }
}