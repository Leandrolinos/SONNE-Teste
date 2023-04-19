import './App.css';
import React from 'react';
import { connect } from 'react-redux';
import UserInfo from './UserInfo'; // Importação do novo componente

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>User Info</h1>
        <UserInfo /> {/* Renderização do novo componente */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps)(App);