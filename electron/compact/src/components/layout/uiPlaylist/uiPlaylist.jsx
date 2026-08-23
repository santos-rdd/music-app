import "./uiPlaylist.css";
import Random from "../../../randomImages/music (1).jpg";
import Nota from "../../../notas/notas (3).png";
import Lixeira from "../../../assets/lixeira.png";

export default function UiPlaylist(props){

    let imageReceive = props.imageReceive;
    let nameReceive = props.nameReceive;
    let timeReceive = props.timeReceive;
    let onClickReceive = props.onClick;
    let numberAA = 9;

    return (
        <div className="playList"
        onClick={ onClickReceive }>
            <div className="backList">
                <img className={`imgList ${ imageReceive != null ? "" : "activeNota" }`} 
                src={ imageReceive != null ? imageReceive : Nota } 
                />
            </div>

            <div className={`contentList`}>
                <p> { nameReceive != null ? nameReceive : "desconhecido" } </p>

                <div className="contentContent">
                    <img className={`notaList`} src={ Nota } />
                    <span> { timeReceive != null ? timeReceive : "0:00" } </span>
                </div>
            </div>

            <img className="lixeira" src={ Lixeira } />

            <span 
            className={`spanNumber ${ numberAA >= 9 ? "activeNumber" : "" }`}
            > { numberAA >= 9 ? 9 + "+" : numberAA}
            </span>
        </div>
    )
}