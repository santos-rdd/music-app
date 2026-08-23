import "./moreList.css";
import UiMusic from "../../layout/uiMusic/uiMusic.jsx";
import Nota from '../../../notas/notas (3).png';
import Play from '../../../assets/play.png';
import Setas from '../../../assets/setas-cruzadas.png';
import Plus from '../../../assets/plus.png';
import Arrow from '../../../assets/right-arrow.png';
import Pausa from '../../../assets/pausa.png';

import MusicPlaying from "../musicPlaying/musicPlaying.jsx";
import { useState } from 'react';

import Image1 from '../../../randomImages/music (1).jpg';
import Image2 from '../../../randomImages/music (2).jpg';
import Image3 from '../../../randomImages/music (3).jpg';
import Image4 from '../../../randomImages/music (4).jpg';
import Image5 from '../../../randomImages/music (5).jpg';
import Image6 from '../../../randomImages/music (6).jpg';
import Image7 from '../../../randomImages/music (7).jpg';
import Image8 from '../../../randomImages/music (8).jpg';


export default function MoreList (props){

    let { imagem, nome, tempo, color } = props.objectsListReceive;

    const setMoreName = props.setMoreName;
    const setMoreImage = props.setMoreImage;
    const setMoreTime = props.setMoreTime;
    const setMoreColor = props.setMoreColor;
    const open = props.open;
    const openMusicS = props.openMusicS;

    const abrir = props.abrir || false;
    const setOpenMusic = props.setOpenMusic || false;
    
    let openList = props.openList;
    let openSet = props.openSet;
    let setOpenList = props.setOpenList;

    let [ active, setActive ] = useState(null);
    let [ current, setCurrent ] = useState(null);
    let [ firstClick, setClick ] = useState(false);
    let [ imageStatic, setStaticImg ] = useState(false);
    let [ pause, setPause ] = useState(false);

    const objectColor = [
        "linear-gradient(180deg, rgba(37, 42, 112, 1) 0%, rgba(0, 0, 0, 1) 100%)",
        "linear-gradient(180deg, rgba(255, 202, 210, 1) 0%, rgba(0, 0, 0, 1) 100%)",
        "linear-gradient(180deg, rgba(199, 199, 199, 1) 0%, rgba(0, 0, 0, 1) 100%)",
        "linear-gradient(180deg, rgba(219, 121, 113, 1) 0%, rgba(0, 0, 0, 1) 100%)",
        "linear-gradient(180deg, rgba(37, 42, 112, 1) 0%, rgba(0, 0, 0, 1) 100%)",
        "linear-gradient(180deg, rgba(138, 94, 203, 1) 0%, rgba(0, 0, 0, 1) 100%)",
        "linear-gradient(180deg, rgb(97, 47, 172) 0%, rgba(0, 0, 0, 1) 100%)",
        "linear-gradient(180deg, rgba(219, 121, 113, 1) 0%, rgba(0, 0, 0, 1) 100%)"
    ];

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
        
    return (
        <div 
        className={`moreDiv ${ openSet == true ? "activeMoreDiv" : " " }`}
        style={{ 
            background: objectColor[color] != null ? objectColor[color] : objectColor[0] 
        }}>

            <img 
            onClick={()=>{ setOpenList(!openSet) }}
            className={`arrowSet`} 
            src={ Arrow } />

            <div className={`containerImageReceive`}>
                <img className={`${ imagem != null ? "imagePlayList" : "nullImage" }`} src={ imagem != null ? imagem : Nota } />

                <div className="containerMoreContentMusic">
                    <div className="containerMoreInfosMusic">
                        <p className="titleMusic">{ nome != null ? nome : "Album de Musicas"  }</p>

                        <p className="quantMusicReceive">10 musicas</p>
                        <span>{ tempo != null ? tempo : "0:00" }</span>
                    </div>

                    <div className="replay">
                        <img src={ Setas } />
                        <img 
                        onClick={()=>{setPause(!pause)}}
                        src={ pause == true ? Play : Pausa } />
                    </div>
                </div>

            </div>

            <div className="containerPlayMusics">
                <div className="addNewMusic">
                    <img src={ Plus } />
                    <p>Adicionar musica</p>
                </div>

                <div className="carouselMusicPlayList">
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
                                staticImg={!pause}
                            />
                        ))
                    }
                </div>
            </div>
                <MusicPlaying 
                    onClick={()=>{
                        setMoreName(musics[current].nome)
                        setMoreImage(musics[current].image)
                        setMoreTime(musics[current].tempo)
                        setMoreColor(objectColor[current])

                        open(!openMusicS)
                        setOpenMusic(!abrir)
                    }}

                    current={current}
                    firstClick={firstClick}
                    pause={pause}
                    imageStatic={imageStatic}

                    setPause={setPause}
                    setStaticImg={setStaticImg}
                    objectColor={objectColor}
                    musics={musics}

                    open={open}
                    openMusicS={openMusicS}
                    bottomDistance={"60px"}
                    /> 
        </div>
    )
} 