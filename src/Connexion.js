import React, { Component } from 'react';
import "./connexion.css"

class Connexion extends Component {
    constructor(props) {
        super(props);
        this.inscription = this.inscription.bind(this)
    }

    inscription() {
        this.props.changePage('inscription');
    }

    render() {
        return (
            <div className="divConnexion">
                <header className="connexionHeader">
                    <img className="logo" src={logo} alt="logo"/>
                    <div className="connexionEcriture">
                        <h1>Bienvenue !</h1>
                        <p><i>Remplissez-le formulaire ci-dessous pour vous connecter :</i></p>
                    </div>
                </header>
                <form className="connexionForm">
                    <div className="connexionPartieUn">
                        <div className="co">
                            <label htmlFor="login">Login</label>
                            <input type="email" id="login" name="login"/>
                        </div>
                        <div className="co">
                            <label htmlFor="mdp">Mot de Passe</label>
                            <input type="password" id="mdp" name="mdp"/>
                        </div>
                    </div>
                    <div className="connexionBoutons">
                        <button type="submit" onClick={this.props.getConnected}>Connexion</button>
                        <button type="submit" onClick={this.inscription}>S'inscrire</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Connexion;