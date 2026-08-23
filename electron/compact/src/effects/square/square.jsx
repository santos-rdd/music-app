import "./square.css"
import disco from '../../assets/disco.png'

import Nota1 from "../../notas/notas (1).png";
import Nota2 from "../../notas/notas (2).png";
import Nota3 from "../../notas/notas (3).png";
import Nota4 from "../../notas/notas (4).png";
import Nota5 from "../../notas/notas (5).png";
import Nota6 from "../../notas/notas (6).png";

export default function Square(){
    return (
            <ul className="box-area">
                <li><img src={Nota1} /></li>
                <li><img src={Nota2} /></li>
                <li><img src={Nota3} /></li>
                <li><img src={Nota4} /></li>
                <li><img src={Nota5} /></li>
                <li><img src={Nota6} /></li>
            </ul>       
    )
}

     