import React, {Component} from 'react'
import HeaderAccueil from './HeaderAccueil'
import BodyAccueil from './BodyAccueil'
import './pageAccueil.css'

class PageAccueil extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <HeaderAccueil changePage = {this.props.changePage} isUtilisateur = {false}/>
                <BodyAccueil changePage = {this.props.changePage}/>
            </div>
        )
    }
}

export default PageAccueil;