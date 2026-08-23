import './header.css';
import Lampada  from '../../../assets/lampada.png';
import Lupa from '../../../assets/lupa.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header (props){

    const page = props.page;

    return (
    <>
      <header className='firstBar'>
        <div className='organization'>
            <h2 className="Title">Music</h2>
            <img className="lu" src={ Lupa } />
            <img src={ Lampada } />
        </div>

        <div className="toogle">
            <Link 
            to={"/"}
            className={`${page == 1 ? "activeSelect" : ""}`}
            >Musicas
            </Link>
            
            <Link 
            to={"/playlist"}
            className={`${page == 2 ? "activeSelect" : ""}`}
            >Playlists
            </Link>

            <Link 
            to={"/"}
            className={`${page == 3 ? "activeSelect" : ""}`}
            >Favoritas
            </Link>

        </div>
      </header>
    </>
    )
}