import React, { Component } from 'react';
import Connexion from './Connexion';
import PageAccueil from './PageAccueil';
import Enregistrement from './Enregistrement'
import Utilisateur from './Utilisateur'

class MainPage extends Component {
    constructor() {
        super();
        this.state = {
            page : 'connexion',
            isConnected : false
        }
        this.changePage = this.changePage.bind(this);
        this.getConnected = this.getConnected.bind(this);
    }

    getConnected(){
        this.setState({isConnected : true, page : 'main'});
    }

    changePage(etat) {
        this.setState({isConnected : this.state.isConnected, page : etat});
    }

    render() {
        if (this.state.page === 'main') {
            return <PageAccueil changePage = {this.changePage}/>
        }
        if (this.state.page === 'connexion') {
            return <Connexion changePage = {this.changePage} getConnected = {this.getConnected}/>
        }
        if (this.state.page === 'inscription') {
            return <Enregistrement changePage={this.changePage} />
        }
        if (this.state.page  === 'utilisateur') {
            return <Utilisateur changePage={this.changePage} />
        }
    }
}

export default MainPage;