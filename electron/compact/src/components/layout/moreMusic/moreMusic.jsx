import "./moreMusic.css";
import Arrow from '../../../assets/right-arrow.png';
import Pular from '../../../assets/faixa-seguinte.png';
import Repetir from '../../../assets/repetir.png';
import Like from '../../../assets/heart_color.png';
import Heart from '../../../assets/heart.png';
import Play from '../../../assets/play.png';
import Pausa from '../../../assets/pausa.png';
import Mix from '../../../assets/mix.gif';
import PausaMix from '../../../assets/pausa-mix.png';

import NullImage from '../../../randomImages/music (1).jpg';
import { useState } from 'react'
import Square from '../../../effects/square/square.jsx'

export default function More(props){

    const nome = props.nome || null;
    const imagem = props.imagem || null;
    const tempo = props.tempo || null;
    const cor = props.cor || null;
    const abrir = props.abrir || false;
    const setOpenMusic = props.setOpenMusic || false;

    let [ like, setLike ] = useState(false);
    let [ pauseMusic, setPause ] = useState(false);
    let [ filterHeart, setFilter ] = useState(true);

    return (
        <div 
        className={`containerMoreInfos ${abrir == true ? "activeMore" : ""}`}
        style={{
            background: cor != null ? cor : "linear-gradient(180deg, rgba(37, 42, 112, 1) 0%, rgba(0, 0, 0, 1) 100%)"
        }}
        >
            <div className="optionsMore">
                <img src={ Arrow } 
                onClick={()=>{ setOpenMusic(false) }}/>
            </div>

            <div className="imageMore">
                <img className="imageSelect" src={ imagem != null ? imagem : NullImage } />
            </div>

            <div className={`nameMore ${ filterHeart == true ? "activeHeart" : "" }`}
            onClick={()=>{ 
                setLike(!like) 
                setFilter(!filterHeart)
                }}>
                <p> { nome != null ? nome : "sem nome"} </p>
                <img src={ like == true ? Like : Heart } />
            </div>

            <div className="progressBarMore">

                <img className={`mix ${pauseMusic == true ? "mixPause" : "" } `}
                src={ pauseMusic == true ? PausaMix : Mix } />

                <div className="progressMore">
                    <div className="more">
                        <div className="circle"></div>
                    </div>
                </div>
                <div className="org">
                    <p>0:00</p>
                    <span> { tempo } </span>
                </div>
            </div>

            <div className="replayOptions">
                <img className="repetir" src={ Repetir } />
                <img className="invertido" src={ Pular } />

                <img 
                onClick={()=>{setPause(!pauseMusic)}}
                className="play" 
                src={ pauseMusic == true ? Play : Pausa } />

                <img src={ Pular } />
            </div>

            <Square />
        </div>
    )
}