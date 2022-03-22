import React, {Component} from 'react'
import Stats from './Stats'
import ListeCommentaire from './ListeCommentaire'

class BodyAccueil extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
        <div className="corps">
            <Stats/>
            <ListeCommentaire changePage={this.props.changePage}/>
        </div>
        )
    }
}

export default BodyAccueil;