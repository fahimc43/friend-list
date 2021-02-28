import React from 'react';
import "./Cart.css";

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((accumulator, currentFriend) => accumulator + currentFriend.salary, 0)
    // console.log(props.cart);
    return (
        <div className="cart-data">
            <h2>Friends Salary</h2>
            <br/>
            <h3>Add Friends: {cart.length}</h3>
            <br/>
            <h3>Total Salary: ${total}</h3>
            <br/>
        </div>
    );
};

export default Cart;