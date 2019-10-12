import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export class Navbar extends Component {

    static defaultProps = {
        title: 'Total Punishment Gaming Ban List',
        icon: 'fas fa-ghost'
    };

    static propTypes = {
        title: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired
    };

    render() {
        return (
            <nav className="navbar bg-blue">
                <h1>
                    <i className={this.props.icon} />  {this.props.title}
                </h1>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                </ul>
            </nav >
        )
    }
}

export default Navbar

