import React, { Component } from "react";
import "./enregistrement.css"

class Enregistrement extends Component{
    constructor(props){
        super(props);
        this.inscription = this.inscription.bind(this);
        this.connexion = this.connexion.bind(this);
    }

    inscription() {
        this.props.changePage('main');
    }

    connexion() {
        this.props.changePage('connexion');
    }

    render(){
        return (
            <div className="divEnregistrement">
                <header>
                    <div className="enregistrementEcriture">
                        <h1>Enregistrement</h1>
                        <p><i>Veuillez remplir le formulaire ci-dessous pour vous inscrire :</i></p>
                    </div>
                </header>
                <form className="enregistrementForm">
                    <div className="enregistrementNoms">
                        <span>
                            <p>Prenom</p>
                            <input type="text"/>
                        </span>
                        <span>
                            <p>Nom</p>
                            <input type="text"/>
                        </span>
                    </div>
                    <div className="enregistrementPartie2">
                        <label htmlFor="login" >Login</label>
                        <input type="text" id="login" name="login"/>
                    </div>
                    <div className="enregistrementPartie2">
                        <label htmlFor="mdp" >Mot de Passe</label>
                        <input type="password" id="mdp" name="mdp"/>
                    </div>
                    <div className="enregistrementPartie2">
                        <label htmlFor="mdp2" >Retapez</label>
                        <input type="password" id="mdp2" name="mdp2"/>
                    </div>
                    <div className="enregistrementBoutons">
                        <button type="submit" onClick={this.inscription}>Enregistrer</button>
                        <button type="submit" onClick={this.connexion}>Connexion</button>
                    </div>
                    <br />
                </form>
            </div>
        );
    }
}

export default Enregistrement;