import React from 'react'

function PopUp(props) {
    return (props.trigger) ? (
        <div className="PopUp">
            <div className="inner-popup">
                <h3 style={{ padding: "0px", color: "green", cursor: "pointer", display: "flex", justifyContent: "flex-end" }} onClick={() => props.setTrigger(false)}>x</h3>
                <div className="header">
                    <h3 style={{ padding: "null", color: "green" }} >Search</h3>
                </div>
                {props.children}
                <br></br>
               {(props.location)?<p style={{ color: "green", marginLeft:"-170px", marginTop:"20px" }}>Use my current location</p>:""}
            </div>
        </div>
    ) : "";
}

export default PopUp;
