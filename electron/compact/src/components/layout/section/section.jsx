import './section.css'
import { useState } from 'react';
import MusicPlaying from '../musicPlaying/musicPlaying.jsx';

import Play  from '../../../assets/botao-play.png';
import Cruzadas  from '../../../assets/setas-cruzadas.png';
import Selecione  from '../../../assets/selecione.png';
import Disco  from '../../../assets/disco.png';
import Pausa  from '../../../assets/pausa.png';
import Play2  from '../../../assets/play.png';
import Next  from '../../../assets/next-button.png';

import Image1 from '../../../randomImages/music (1).jpg';
import Image2 from '../../../randomImages/music (2).jpg';
import Image3 from '../../../randomImages/music (3).jpg';
import Image4 from '../../../randomImages/music (4).jpg';
import Image5 from '../../../randomImages/music (5).jpg';
import Image6 from '../../../randomImages/music (6).jpg';
import Image7 from '../../../randomImages/music (7).jpg';
import Image8 from '../../../randomImages/music (8).jpg';

import UiMusic from '../uiMusic/uiMusic.jsx';

export default function Section (props){

    const setMoreName = props.setMoreName;
    const setMoreImage = props.setMoreImage;
    const setMoreTime = props.setMoreTime;
    const setMoreColor = props.setMoreColor;
    const open = props.open;
    const openMusicS = props.openMusicS;

    const musics = [
        { image: Image1, nome: "Montagem depressiva", tempo: "10:27", color:0 },
        { image: Image2, nome: "Abertura Mocchi Anime", tempo: "1:29", color:1 },
        { image: Image3, nome: "Barões da Pisadinha SpeedUp", tempo: "20:32", color:2 },
        { image: Image4, nome: "Iago Oproprio Comunista Elegante", tempo: "3:13", color:3 },
        { image: Image5, nome: "Montagem Super Mario", tempo: "5:23", color:4 },
        { image: Image6, nome: "1 Hora Musicas Undaia", tempo: "01:03:27", color:5 },
        { image: Image7, nome: "Melodia symphony of the night", tempo: "20:28", color:6 },
        { image: Image8, nome: "Forro SpeedUp", tempo: "30:32", color:7 },
     ]

    let [ active, setActive ] = useState(null);
    let [ current, setCurrent ] = useState(null);
    let [ firstClick, setClick ] = useState(false);
    let [ pause, setPause ] = useState(true);
    let [ imageStatic, setStaticImg ] = useState(false);
    
    const objectColor = [
        "linear-gradient(180deg, rgba(37, 42, 112, 1) 0%, rgba(0, 0, 0, 1) 100%)",
        "linear-gradient(180deg, rgba(255, 202, 210, 1) 0%, rgba(0, 0, 0, 1) 100%)",
        "linear-gradient(180deg, rgba(199, 199, 199, 1) 0%, rgba(0, 0, 0, 1) 100%)",
        "linear-gradient(180deg, rgba(219, 121, 113, 1) 0%, rgba(0, 0, 0, 1) 100%)",
        "linear-gradient(180deg, rgba(37, 42, 112, 1) 0%, rgba(0, 0, 0, 1) 100%)",
        "linear-gradient(180deg, rgba(138, 94, 203, 1) 0%, rgba(0, 0, 0, 1) 100%)",
        "linear-gradient(180deg, rgb(97, 47, 172) 0%, rgba(0, 0, 0, 1) 100%)",
        "linear-gradient(180deg, rgba(219, 121, 113, 1) 0%, rgba(0, 0, 0, 1) 100%)"
    ]

    return (
        <>
        <div className="containerSection">
            <div className="options">
                <div className="left">
                    <img src={ Play } />
                    <img src={ Cruzadas } />
                </div>

                <div className="right">
                    <img src={ Selecione } />
                    <p>Selecionar</p>
                </div>
            </div>

            <div className="carouselMusics">
                {
                    musics.map((m, i)=> (
                        <UiMusic
                            key={i}
                            onClick={() => 
                                { 
                                    setActive(i)
                                    setCurrent(i)
                                    setClick(true)
                                }
                            }
                            classAdd={active !== i}
                            image={m.image}
                            nome={m.nome}
                            tempo={m.tempo}
                            staticImg={imageStatic}
                        />
                    ))
                }
            </div>

           <MusicPlaying 
           current={current}
           firstClick={firstClick}
           pause={pause}
           imageStatic={imageStatic}

           setPause={setPause}
           setStaticImg={setStaticImg}
           objectColor={objectColor}
           musics={musics}

            setMoreName={setMoreName}
            setMoreImage={setMoreImage}
            setMoreTime={setMoreTime}
            setMoreColor={setMoreColor}
            open={open}
            openMusicS={openMusicS}
           />
        </div>
        </>
    )
} 