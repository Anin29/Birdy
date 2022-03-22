import React, { Component } from 'react';

class Logout extends Component{
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }

    logout(){
        this.props.changePage('connexion')
    }
    render() {
        return (
        <div id="co">
            <button type="submit" name="deconnexion"  onClick={this.logout}>Déconnexion</button>
        </div>
        )
    }
}

export default Logout;