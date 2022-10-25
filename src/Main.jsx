import React, {Component} from "react";

class Main extends Component {
    state = {
        counter: 0,
    };

    addOneHandler = () => {
        this.setState({counter: this.state.counter + 1})
    }

    render() {
    return (
    <main>
        <div id="count">
            <h1>{this.state.counter}</h1>
        </div>
        <div>
            <button>Add five</button>
            <button onClick={this.addOneHandler}>Add one</button>
            <button>Reset</button>
            <button>Remove one</button>
            <button>Remove five</button>
        </div>
    </main>
    );
}
};

export default Main;