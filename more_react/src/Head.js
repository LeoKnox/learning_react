import React, {Component} from "react"

class Head extends Component {
    render() {
        return (
            <div>
                <h1>Welcome to React Page</h1>
                <form>
                <input type="text" />
                <input type="submit" onSubmit="this.runSomething()"></input>
                </form>
            </div>
        )
    }
}

export default Head;