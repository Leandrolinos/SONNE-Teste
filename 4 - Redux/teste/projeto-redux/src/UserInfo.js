import React from 'react';
import { connect } from 'react-redux';

class UserComponent extends React.Component {
    render() {
        return (
            <div>
                <h1>User Info</h1>
                <p>Name: {this.props.user.name}</p>
                <p>Email: {this.props.user.email}</p>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    };
}

export default connect(mapStateToProps)(UserComponent);
