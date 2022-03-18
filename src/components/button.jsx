import React from "react";

function MyBtn(props) {
    return(
        <button {...props} className="my-button">{props.children}</button>
    )
}

export default MyBtn