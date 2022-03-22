import React, {Component} from "react";

class Commentaire extends Component{
    constructor(props){
        super(props)
        this.utilisateur = this.utilisateur.bind(this)
    }

    utilisateur() {
        this.props.changePage('utilisateur')
    }

    render(){
        return(
            <div className="comm">
                <div className="box_comm">
                    <div>
                        <em onClick={this.utilisateur}>{this.props.pseudo} </em>
                        <button>+</button>
                    </div>
                    <p><i>{this.props.date}</i></p>
                    <p>{this.props.message}</p>
                </div>
                <br/>
            </div>
        )
    }
}

export default Commentaire