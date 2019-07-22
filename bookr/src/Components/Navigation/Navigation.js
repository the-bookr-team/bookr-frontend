import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../../App.css';
import Login from '../Login';

import { logout } from '../../actions';

import './navigation.css'

const Navigation = props => {
  return (
    <nav>
      <Link className="nav-item" to="/">
        Home
      </Link>
      <Link className="nav-item" to="/about">
        About us
      </Link>
      {!props.isAuthenticated ? (
        <>
          <Login buttonLabel="Sign in" className="login" />
          <Login buttonLabel="Get started" className="login" />
        </>
      ) : (
        <Link to={{ pathname: '/' }}>
          <Button color="link" className="nav-item" onClick={props.logout}>
            Logout
          </Button>
        </Link>
      )}
    </nav>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.isAuthenticated
});

export default connect(
  mapStateToProps,
  { logout }
)(Navigation);
