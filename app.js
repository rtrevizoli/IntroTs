var Product = /** @class */ (function () {
    function Product(_code, _description, _price) {
        this.code = _code;
        this.description = _description;
        this.price = _price;
    }
    Product.prototype.getDados = function () {
        return 'Product: ' + this.code + ' - ' + this.description + ', $ ' + this.price + '.';
    };
    return Product;
}());
