import React from "react";
import './innerlist.css'
import MyBtn from "./button";

export default class MyItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {text: '', done: false, open: false, subtask: [], checked: false}
        this.doneMaker = this.doneMaker.bind(this)
        this.innerMaker = this.innerMaker.bind(this)
        this.changeInput = this.changeInput.bind(this)
        this.markAsDone = this.markAsDone.bind(this)

    }
    
    doneMaker() {
        // this.setState({done: !this.state.done})
        this.setState({open: !this.state.open})
    }
    changeInput(e) {
        this.setState({text: e.target.value})
    }
    innerMaker(e) {
        e.preventDefault()
        this.setState({subtask: [...this.state.subtask, {text: this.state.text}]})
    }
    markAsDone() {
        this.setState({checked: !this.state.checked})
        console.log(this.state.checked)
    }
    render() {
        return(
            <li className="item-wrap" >
                <div className="wrap-todo">
                    <label className="item-label">
                        
                        <input onChange={this.markAsDone} checked={this.state.checked} className="default-radio" type="checkbox"/>
                        <span className="custom-radio"></span>
                        <div className="todo-item" onClick={this.doneMaker} key={new Date}>{this.props.item.text}</div>
                    </label>
                </div>
                <div className={this.state.open ? 'open' : 'closed'}>
                    <form className='inner-form' action="">
                        <input onChange={this.changeInput}  value={this.state.text} className="inner-input" type="text"/>
                        <MyBtn onClick={this.innerMaker}></MyBtn>
                    </form>
                    <ul className="inner-list">
                        {
                            this.state.subtask.map(task=>
                                <li className="inner-item" key={Math.random()}>{task.text}</li>
                            )
                        }
                    </ul>
                </div>
            </li>
        )
    }
}