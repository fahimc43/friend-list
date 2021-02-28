import React from 'react';
import "./Friend.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const Friend = (props) => {
    // console.log(props);
    const {name, img, email, country, job, salary} = props.friend;
    return (
        <div className="friend">
            <div className="photo">
                <img src={img} alt=""/>
            </div>
            <div className="details">
            <h2>{name}</h2>
            <p>Email: <small>{email}</small></p>
            <p>Live in: {country}</p>
            <p>Occupation: {job}</p>
            <p>Monthly Salary: ${salary}</p>
            <button onClick={() => props.handleAddFriend(props.friend)} ><FontAwesomeIcon icon={faPlus} className="button-icon" />Add Friends</button>
            </div>
        </div>
        
    );
};

export default Friend;