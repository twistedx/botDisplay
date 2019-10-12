import React, { Fragment, Component } from 'react';
import Navbar from "./components/layout/Navbar.js"
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Users from "./components/users/Users.js"
import Search from "./components/users/Search.js"
import axios from 'axios';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import Spinner from './components/layout/Spinner';



class App extends Component {
  state = {
    users: [],
    singleUser: {},
    loading: false,
    alert: null

  }

  componentDidMount() {
    this.setState({ loading: true })
    if (this.state.loading) {
      return <Spinner />
    } else {
      this.searchUsers();
    }
  }
  //search for users with this name 
  searchUsers = async text => {
    this.setState({ loading: true })
    const res = await axios.get(`/api/user`);
    console.log("This is Red.data.Items " + res.data)
    this.setState({ users: res.data, loading: false }
    )
  }

  //get user github profile
  getUser = async (username) => {
    this.setState({ loading: true })
    const res = await axios.get(`/api/user/ + ${username}`);
    this.setState({ singleUser: res.data, loading: false });
  }


  //clears list of users found
  clearUsers = () => this.setState({ users: [], loading: false });

  // alerts is no username is entered into search
  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });
    setTimeout(() => this.setState({ alert: null }), 5000);
  }

  render() {
    const { users, singleUser, loading } = this.state;

    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Alert alert={this.state.alert} />
            <Switch>
              <Route exact path='/' render={props => (
                <Fragment>
                  <Search searchUsers={this.searchUsers}
                    clearUsers={this.clearUsers}
                    showClear={users.length > 0 ? true : false}
                    setAlert={this.setAlert}
                  />
                  <Users loading={loading} users={users} />
                </Fragment>
              )} />
              <Route exact path='/about' component={About} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
export default App;
