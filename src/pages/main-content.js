import React from "react";

function MainContent(){

    return(
        <div className="container">
            <h1>Fun facts about <span>React</span></h1>
            <ul>
                <li className="list">Was first released in 2013</li>
                <li className="list">Was originally created by Jordan Walke</li>
                <li className="list">Has well over 100k stars on Github</li>
                <li className="list">Is maintained by Facebook</li>
                <li className="list">Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </div>
    )
}

export default MainContent;