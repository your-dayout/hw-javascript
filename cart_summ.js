const cart = [
    {name: "Salami", price: 8, quantity: 1},
    {name: "Milk", price: 2, quantity: 1},
    {name: "Bread", price: 1, quantity: 1},
    {name: "Butter", price: 4, quantity: 1},
    {name: "Eggs", price: 8, quantity:2}
];
function CartTotal (cart) {
    let CartTotal=0;
    for (let i=0; i<cart.length; i++){
        const item = cart[i];
    total = CartTotal +(item.price*item.quantity);

    return CartTotal;

}