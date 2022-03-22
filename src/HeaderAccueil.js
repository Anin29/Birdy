import React, { Component } from "react";
import Logo from './Logo'
import Recherche from './Recherche'
import Logout from './Logout'

class HeaderAccueil extends Component{
    constructor(props){
        super(props)
        this.state = {
            isUtilisateur : this.props.isUtilisateur
        }
        this.utilisateur = this.utilisateur.bind(this)
    }

    utilisateur() {
        this.props.changePage('utilisateur')
    }

    render(){
        if (this.state.isUtilisateur){
            return(
                <header className="pageAccueilHeader">
                    <Logo changePage = {this.props.changePage}/>
                    <Recherche/>
                    <div className="boutonsHeader">
                        <Logout changePage = {this.props.changePage}/>
                    </div>
                </header>
            )
        } else {
            return (
                <header className="pageAccueilHeader">
                    <Logo changePage = {this.props.changePage}/>
                    <Recherche/>
                    <div className="boutonsHeader">
                        <button type="submit" name="buttonMaPage" id="buttonMaPage" onClick={this.utilisateur}>Ma Page</button>
                        <Logout changePage = {this.props.changePage}/>
                    </div>
                </header>
            )
        }
    }
}

export default HeaderAccueil;