import React, { Component } from "react";
import { sendMessage } from "./scripts/api";

class App extends Component {
    constructor() {
        super();
        this.state = {
            message: "",
            addedMessage: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
    }

    handleChange(event) {
        this.setState({message: event.target.value});
    }

    handleSubmit(event) {
        sendMessage(this.state.message, (err, msg) => {
            this.setState({addedMessage: msg});
        })

        event.preventDefault();
    }

    render() {
        const { message, addedMessage } = this.state;
        return (
            <div style={{ textAlign: "center" }}>
                <form onSubmit={this.handleSubmit}>
                    <br/>
                    Serverille lähetetään - {message}
                    <br/>
                    Serveriltä tuli takaisin - {addedMessage}
                    <br/>
                    <label>
                        Lähetettävä viesti:
                        <input type="text" value={this.state.message} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>

            </div>
        );
    }
}
export default App;
