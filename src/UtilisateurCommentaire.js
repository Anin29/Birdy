import React, { Component } from 'react'
import Commentaire from './Commentaire'

class UtilisateurCommentaire extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h3>Liste de Commentaires</h3>
                <div class="liste_comm">
                    <Commentaire pseudo="filanteetoile" date="12/04/2021"
                        message="On ne voit pas le bout du confinement mais j'ai decouvert une nouvelle recette de cookie ! Je l'ai mise en ligne sur Marmiton, meme pseudo. Enjoy les cookies dans le canap', enrouler dans un plaid devant netflix avec un bon chocolat chaud. Bonne serie a tous !" />
                    <Commentaire pseudo="filanteetoile" date="23/10/2020"
                        message="Aller les amis, on se reconfine encore une fois, c'est pour le bien des familles. Pensez à ceux qui souffrent et surtout respectez bien les gestes barrières !" />
                    <Commentaire pseudo="filanteetoile" date="09/07/2020"
                        message="Ce sont les vacances !!! Le confinement est finiiii, bravo a tous ! On va pouvoir profiter du beau temps et voyager !! Trop hate de partir aux Caraibes ;P" />
                    <Commentaire pseudo="filanteetoile" date="17/03/2020"
                        message="Omg ! Il parait qu'on va subir un confinement pour quelques semaines. Faites bien attention a vous tous et a vos proches ! Courage ! ce n'est que l'histoire d'un mois ou deux ^^" />
                </div>
            </div>
        );
    }
}

export default UtilisateurCommentaire;