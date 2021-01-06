class CartItem {
    constructor(productId, productName, productPrice, productImg, quantity, uid) {
        this.productId = productId;
        this.productName = productName;
        this.productPrice = productPrice;
        this.productImg = productImg;
        this.quantity = quantity;
        this.uid = uid;
    }
}

export default CartItem