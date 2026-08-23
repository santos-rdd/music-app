import "./musicPlaying.css";
import Play  from '../../../assets/botao-play.png';
import Cruzadas  from '../../../assets/setas-cruzadas.png';
import Selecione  from '../../../assets/selecione.png';
import Disco  from '../../../assets/disco.png';
import Pausa  from '../../../assets/pausa.png';
import Play2  from '../../../assets/play.png';
import Next  from '../../../assets/next-button.png';


export default function MusicPlaying(props){

    let current = props.current || null;
    let firstClick = props.firstClick || null;
    let pause = props.pause || null;
    let imageStatic = props.imageStatic || null;

    let setPause = props.setPause || null;
    let setStaticImg = props.setStaticImg || null;
    let objectColor = props.objectColor || null;
    let musics = props.musics || null;

    let setMoreName = props.setMoreName || null;
    let setMoreImage = props.setMoreImage || null;
    let setMoreTime = props.setMoreTime || null;
    let setMoreColor = props.setMoreColor || null;
    let open = props.open || null;
    let openMusicS = props.openMusicS || null;

    let bottomDistance = props.bottomDistance || "30px";

    return (
         <div 
                className={`currentMusic ${ firstClick == false ? "hidden" : "" } `}
                onClick={ props.onClick }
                    style={{
                        background: current != null
                        ? objectColor[current] 
                        : "linear-gradient(180deg, rgba(37, 42, 112, 1) 0%, rgba(0, 0, 0, 1) 100%)"
                        ,
                        bottom: bottomDistance
                    }}>
                    <div className="imageCurrent">
                        <img src={ current != null  
                            ? musics[current].image 
                            : musics[0].image } className="imageCDN"/>
                        <img src={ Disco } className="disco" />
                    </div>

                    <div 
                    className="nameCurrent"
                        onClick={ ()=>{
                            setMoreName(musics[current].nome)
                            setMoreImage(musics[current].image)
                            setMoreTime(musics[current].tempo)
                            setMoreColor(objectColor[current])
                            open(!openMusicS)
                        }}>
                        <span>{ 
                            current != null  
                            ? musics[current].nome 
                            : musics[0].nome }
                        </span>

                        <p>•</p>

                        <p className="time">{
                            current != null  
                            ? musics[current].tempo 
                            : musics[0].tempo
                        }</p>
                    </div>

                    <div className="actionCurrent">
                        <img 
                        onClick={()=> {
                            setPause(!pause)
                            setStaticImg(!imageStatic)
                        }} 
                        src={ pause == true ? Play2 : Pausa} className="pause" />
                        <img src={ Next } className="next" />
                    </div>

                    <div className="progressBar">
                        <div className="progress"></div>
                    </div>
        </div>
    )
}