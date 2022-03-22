import React, {Component} from "react"
import logo from "./logo.png"

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
                <img className="logo" src={logo} alt="logo" />
            </div>
        )
    }
}

export default Logo