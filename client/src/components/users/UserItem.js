import React from 'react'
const moment = require('moment');

const UserItem = ({ users: { date, admin, name, why, userID } }) => {
    // console.log(login)



    const bannedDate = (temp) => {
        const thisMoment = moment.utc(temp).format("LLL");
        return thisMoment;
    }

    return (
        <div className="card">
            <div className="card-title"> <h3>Username: {name}</h3></div>
            <h4>UserID: {userID}</h4>
            <h3>Date: {bannedDate(date)} </h3>
            <h3>Admin: {admin}</h3>
            <h3>Readon: {why}</h3>
        </div>
    )
}


export default UserItem
