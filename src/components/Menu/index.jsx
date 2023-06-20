
import './menu.css'
import { BsLinkedin, BsInstagram, BsLink } from 'react-icons/bs'
import { Link } from 'react-router-dom'

export default function Menu(){
    return(
        <div className='menu'>
            <a className='social' href="https://linkedin.com/in/erick-berdnaski"><BsLinkedin color='#FFF' size={24}/></a>
            <a className='social' href="https://www.instagram.com/berd.erick/"><BsInstagram color='#FFF' size={24}/></a>
            <Link className='menu-item' to='/links'>
               Meus Links
            </Link>
        </div>
    )
}