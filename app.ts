class Product {
    code: string
    description: string
    price: number

    constructor(_code: string, _description: string, _price: number) {
        this.code = _code
        this.description = _description
        this.price = _price
    }

    getDados() {
        return 'Product: ' + this.code + ' - ' + this.description + ', $ ' + this.price + '.'
    }
}
