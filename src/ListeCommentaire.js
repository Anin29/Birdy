import React, {Component} from "react";
import Commentaire from './Commentaire'

class ListeCommentaire extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="commentaire">
                <div className="nv_comm">
                    <h3>Nouveau Commentaire</h3>
                    <textarea id="txt_nv_comm" name="txt_nv_comm"></textarea>
                    <br/>
                    <button type="submit" name="bouton_ajout" id="bouton_ajout">Ajout</button>
                </div>
                <h3>Liste de Commentaires</h3>
                <div className="liste_comm">
                    <Commentaire changePage={this.props.changePage} pseudo="elMachoProtector" date="27/02/2022"
                        message="Update de la dernière fois : on m'a parlé de Encanto: la fantastique famille Madrigal. Je déconseille !! Le film est pas mal mais les chansons sont encore plus entétantes que celle de la Reine des Neiges, dont je voulais me débarasser :'(" />
                    <Commentaire changePage={this.props.changePage} pseudo="elMachoProtector" date="17/02/2022"
                        message="Quelqu'un aurait des films pour enfants à conseiller ?? J'en peux plus de revisionner la reine des neiges avec mes gosses !! Aidez-moi XDDD" />
                    <Commentaire changePage={this.props.changePage} pseudo="darkSasukeVegeta" date="07/02/2022"
                        message="NAN MAI WSSSHHH, ON SE RAIVOOOOOLTE ISSIIIIIII !!!! JPP LES GENS QUI RESPECTENT PAS LES PIGEONS VOUS ETES DES GROS MECHANT, WSH ILS ON UN COEUR AUSSI VOUS RESPECTER R" />
                    <Commentaire changePage={this.props.changePage} pseudo="filanteetoile" date="01/01/2022"
                        message="Bonne annee !!!! Pleins de bonnes choses à tous, des bisous et plein de bonne humeur !!!"/>
                    <Commentaire changePage={this.props.changePage} pseudo="filanteetoile" date="01/01/2022"
                        message="Bonne annee !!!! Pleins de bonnes choses à tous, des bisous et plein de bonne humeur !!!" />
                </div>
            </div>
        )
    }
}

export default ListeCommentaire