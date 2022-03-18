import React from "react"
import MyItem from "./item"
import './main.css'

export default class MyList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {opened: false, inner: false}
    }
    render() {
        return(
            <div className="main-list-wrap" >
                <h1>TODO</h1>
                 <ul className="wrap-list">
                    {this.props.items.map(item=> 
                        <MyItem item={item}></MyItem>
                        )
                    }
                </ul>
            </div>
        )
    }
}