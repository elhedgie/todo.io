import React from "react";
import './item.css'
import './innerlist.css'

export default class MyItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {text: '', done: false, open: false, subtask: []}
        this.doneMaker = this.doneMaker.bind(this)
        this.innerMaker = this.innerMaker.bind(this)
        this.changeInput = this.changeInput.bind(this)


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
        console.log(this.state.subtask)
    }
    render() {
        return(
            <div>

            <li className="todo-item" onClick={this.doneMaker} key={new Date}>{this.props.item.text}
                 
            </li>
            <div className={this.state.open ? 'open' : 'closed'}>

            <form className='inner-form' action="">
            <input onChange={this.changeInput}  value={this.state.text} className="inner-input" type="text"/>
            <button onClick={this.innerMaker} className="inner-button">Добавить подзадачу</button>
            </form>
            <ul className="inner-list">
                {
                    this.state.subtask.map(task=>
                        <li className="inner-item" key={Math.random()}>{task.text}</li>
                        )
                }
            </ul>
            </div>
            </div>
        )
    }
}