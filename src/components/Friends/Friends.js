import React, { useState } from 'react';
import fakeData from '../../fakeData/data.json';
import Cart from '../Cart/Cart';
import Friend from '../Friend/Friend';
import "./Friends.css"

const Users = () => {
    const [friends, setFriends] = useState(fakeData);
    const [cart, setCart] = useState([]);
    const handleAddFriend = (friend) => {
        const newCart = [...cart, friend];
        setCart(newCart);
    }
    return (
        <div className="friends-container">
            <div className="friends-data">
                
                    {
                        friends.map(frd => <Friend handleAddFriend={handleAddFriend} friend={frd}></Friend>)
                    }
               
            </div>
            <div className="friends-add">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Users;