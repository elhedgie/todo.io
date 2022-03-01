import React from "react";
import MyList from "./list";

export default class MyInput extends React.Component {
    constructor(props) {
        super(props)
        this.state = {items: [], text: ''}
        this.handler = this.handler.bind(this)
        this.submitter = this.submitter.bind(this)
    }
    render() {
        return (
            <div className="container">
                <form className="my-form" onSubmit={this.submitter}>
                    <input className="my-input" type="text" onChange={this.handler} value={this.state.text}/>
                    <button className="my-button">Нажми на меня</button>
                </form>
                
                <MyList tag={this.state.tag} items={this.state.items}></MyList>
            </div>
                
        )
    }
    handler(e) {
        this.setState({ 
            text: e.target.value,
            
    })}
    
    submitter(e) {
        e.preventDefault();
        if (this.state.text.length === 0) {
            return;
        }
        this.setState({items: [...this.state.items, {text: this.state.text}]})
    }
}

