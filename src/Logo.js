import React, {Component} from "react"

class Logo extends Component {
    constructor(props) {
        super(props)
        this.main = this.main.bind(this)
    }

    main() {
        this.props.changePage('main')
    }

    render() {
        return (
            <div onClick = {this.main}>
                
            </div>
        )
    }
}

export default Logo