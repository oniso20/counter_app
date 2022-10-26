import React, {Component} from "react";
import Button from "./Button";

class Main extends Component {
    state = {
        counter: 0,
    };

    addFiveHandler = () => {
        this.setState({counter: this.state.counter + 5})
    }

    addOneHandler = () => {
        this.setState({counter: this.state.counter + 1})
    }

    resetHandler = () => {
        this.setState({counter: this.state.counter = 0})
    }

    removeOneHandler = () => this.state.counter >= 1 ? this.setState({ counter: this.state.counter - 1 }) : this.setState({ counter: this.state.counter = 0 })

    removeFiveHandler = () => {
        if(this.state.counter < 5) {
            this.setState({counter: this.state.counter = 0})
        } else {
            this.setState({counter: this.state.counter - 5})
        }

    }


    render() {
    let circleClass = ''

    if (this.state.counter === 0) {
        circleClass = 'circle'
    } else if (this.state.counter % 2 === 0) {
        circleClass = 'circle even'
    } else {
        circleClass = 'circle odd'
    }
    return (
    <main>
        <div id="count">
            <h1 className={circleClass}>{this.state.counter}</h1>
        </div>
        <div>
            <Button click={this.addFiveHandler} children={'Add five'}/>
            <Button click={this.addOneHandler} children={'Add one'} />
            <Button className="reset" click={this.resetHandler} children={'Reset'}/>
            <Button click={this.removeOneHandler} children={'Remove one'}/>
            <Button className="removeFive" click={this.removeFiveHandler} children={'Remove five'}/>
         
        </div>
    </main>
    );
}
};

export default Main;