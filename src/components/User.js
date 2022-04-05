import React from "react"
import './User.css'
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import LocationOnIcon from '@mui/icons-material/LocationOn';
function User() {
    return <div className="user">
        <img src="./images/avatar.jpg" alt="" className="user__avatar"/>
        <h1 className="user__name">Julien Subra</h1>
        <p className="user__profession">Développeur Front-End</p>
        <div className="user__infos">
            <p className="user__info"><LocationOnIcon /> Toulouse, France</p>
            <p className="user__info">
            <PhoneIcon />
                <a href="tel:+33674568986"> 0674568986</a>
            </p>
            <p className="user__info">
            <MailIcon />
                <a href="mailto:s.subrajulien@gmail.com"> s.subrajulien@gmail.com</a>
            </p>
            
        </div>
    </div>
    
}

export default User