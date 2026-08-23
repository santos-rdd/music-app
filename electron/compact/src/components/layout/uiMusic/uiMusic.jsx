import Pontos from '../../../assets/tres-pontos.png';
import PauseMusic from '../../../assets/pause-music.png';
import Som from '../../../gifs/som.gif';
import Nota from '../../../notas/notas (3).png';

import "./uiMusic.css";

export default function UiMusic(props){

    const image = props.image || Nota;
    const nome = props.nome || "desconhecida";
    const tempo = props.tempo || "0:00"; 
    const classAdd = props.classAdd || " ";
    const staticImg = props.staticImg || Nota;

    return (
        <div 
        onClick={ props.onClick }
        className={`containerMusic ${ classAdd == true ? "active" : " " }`}>
            <div className="imgMusic">
                <img src={ image } />
                <div className={` invisibleDiv ${ classAdd == true ? "activeMusic" : "" } `}>
                    <img 
                    src={ staticImg == true ? Som : PauseMusic } 
                    className={`gifImage ${ staticImg == true ? "" : "align" } `}/>
                </div>
            </div>

            <div className={` nameMusic ${ classAdd == false ? "activeName" : "" } `} >
                <p> { nome } </p>
                <p className="time"> { tempo } </p>
            </div>

            <div className="moreMusic">
                <img src={ Pontos } />
            </div>
        </div>
    )
}