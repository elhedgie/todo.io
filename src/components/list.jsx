import React from "react"
import MyInput from "./input"
import MyItem from "./item"
import './list.css'

export default class MyList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {opened: false, inner: false}
    }
    
    
    
    render() {
        return(
            <div>
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