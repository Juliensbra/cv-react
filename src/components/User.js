import React from "react"
import './User.css'

function User() {
    return <div className="user">
        <img src="./images/avatar.jpg" alt="" />
        <h1 className="user__name">Julien Subra</h1>
        <p className="user__profession">Intégrateur Développeur Front-End</p>
        <div className="user__infos">
            <p className="user__info">Toulouse, France</p>
            <p className="user__info">
                <a href="tel:+33674568986">0674568986</a>
            </p>
            <p className="user__info">
                <a href="mailto:s.subrajulien@gmail.com">s.subrajulien@gmail.com</a>
            </p>
            
        </div>
    </div>
    
}

export default User