import React from 'react';

class Main extends React.Component {
    render(props) {
        return (
            <h1>Main is here! {this.props.color}</h1>
        )
    }
}

export default Main;