import "./list.css";
import Plus from '../../../assets/plus.png';
import UiPlaylist from '../../layout/uiPlaylist/uiPlaylist.jsx';
import { useState } from 'react';

import Image1 from '../../../randomImages/music (1).jpg';
import Image2 from '../../../randomImages/music (2).jpg';
import Image3 from '../../../randomImages/music (3).jpg';
import Image4 from '../../../randomImages/music (4).jpg';
import Image5 from '../../../randomImages/music (5).jpg';
import Image6 from '../../../randomImages/music (6).jpg';
import Image7 from '../../../randomImages/music (7).jpg';
import Image8 from '../../../randomImages/music (8).jpg';

const objectExample = [
        { image: Image1, nome: "Montagem depressiva", tempo: "10:27", color:0 },
        { image: Image2, nome: "Abertura Mocchi Anime", tempo: "1:29", color:1 },
        { image: Image3, nome: "Barões da Pisadinha SpeedUp", tempo: "20:32", color:2 },
        { image: Image4, nome: "Iago Oproprio Comunista Elegante", tempo: "3:13", color:3 },
        { image: Image5, nome: "Montagem Super Mario", tempo: "5:23", color:4 },
        { image: Image6, nome: "1 Hora Musicas Undaia", tempo: "01:03:27", color:5 },
        { image: Image7, nome: "Melodia symphony of the night", tempo: "20:28", color:6 },
        { image: Image8, nome: "Forro SpeedUp", tempo: "30:32", color:7 },
     ]

export default function List(props){

    let setador = props.setador;
    let setObjectsList = props.setObjectsList;
    let open = props.open;
    let openSet = props.openSet;
    let setOpenList = props.setOpenList;
    const [ activeList, setListActive ] = useState(null)

    return (
        <div className="containerList">

            <div className="newPlaylist" >
                <img src={ Plus } />
                <p>Adicionar nova</p>
            </div>

            <div className="caruoselPlaylist">
                { objectExample.map(( receive, i) => (
                    <UiPlaylist 
                        onClick={()=>{ 
                            setOpenList(!openSet)
                            setador(prev => !prev) 
                            setListActive(i)
                            const isDifferent = activeList != i;

                            if(isDifferent) {

                            const newList = {
                                nome: receive.nome,
                                imagem: receive.image,
                                tempo: receive.tempo,
                                color: receive.color
                            };

                                setObjectsList(newList);
                            }
                        }}
                            key={i}
                            imageReceive={ receive.image }
                            nameReceive={ receive.nome }
                            timeReceive={ receive.tempo }
                        />
                )) }
            </div>
        </div>
    )
}