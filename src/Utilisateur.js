import React, { Component } from 'react'
import UtilisateurCommentaire from './UtilisateurCommentaire'
import HeaderAccueil from './HeaderAccueil'
import './utilisateur.css'

class Utilisateur extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <HeaderAccueil changePage={this.props.changePage} isUtilisateur = {true}/>
                <div className="corps">
                    <aside className="liste_contacts">
                        <h3> Liste des contacts </h3>
                        <ul>
                            <li>billyBOB</li>
                            <br/>
                            <li>secretAgent007</li>
                            <br/>
                            <li>palmashowUltimate3000</li>
                            <br/>
                            <li>jackyJones123</li>
                            <br/>
                            <li>charlotteMaisPasAuxFraises</li>
                        </ul>
                    </aside>
                    <div className="commentaire">
                        <div class="titre_page">
                            <h1>Profil de filanteetoile</h1>
                            <button id="ajout_contact">Ajouter en contact</button>
                        </div>
                        <UtilisateurCommentaire/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Utilisateur;