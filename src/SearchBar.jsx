import React, { useState } from 'react'
import PopUp from './PopUp.jsx';
import './PopUpStyle.css';

function SearchBar() {

    const [popup, setPopup] = useState(false)
    const [location, setLocation] = useState(true)

    return (
        <div>
            <main>
                <input className="outerDiv" type="search" name="" id="" 
                placeholder="Search Hospitals, Treatments & Hospitals Here"
                style={{ backgroundColor: "" }} onClick={()=>setPopup(true)} />
                <PopUp trigger={popup} location={location} setTrigger={setPopup} locationTrigger={setLocation}>
                    <input type="text" name="" id="" 
                    placeholder="Search Location"
                    onClick={() => setLocation(true)} />
                    <br></br>
                    <input type="text" name="" id="" style={{marginTop:"25px"}}
                    placeholder="Search Hospitals, treatments & hospitals here"
                    onClick={() => setLocation(false)} />
                </PopUp>
            </main>
        </div>
    )
}

export default SearchBar;
