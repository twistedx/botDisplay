import React, { Fragment } from 'react';
import UserItem from "./UserItem.js";
import Spinner from '../layout/Spinner.js';
import PropTypes from 'prop-types';
import Search from './Search';


const Users = ({ users, loading }) => {

    console.log(users)
    var pushTo = []
    for (let i = 0; i < users.length; i++) {
        pushTo.push(<UserItem users={users[i]} key={users[i]._id} />)
    }


    if (loading) {
        return <Spinner />
    } else {
        return (
            <Fragment>
                <div style={userStyle}>
                    {pushTo}
                </div>
            </Fragment>
        )
    }
}


Users.propTypes = {
    users: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridGap: '1rem'
}


export default Users;
