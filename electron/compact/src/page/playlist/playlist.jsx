import "./playlist.css"
import Header from '../../components/layout/header/header.jsx';
import List from '../../components/layout/list/list.jsx';
import More from '../../components/layout/moreMusic/moreMusic.jsx';
import MoreList from '../../components/layout/moreList/moreList.jsx'
import Bubbles from '../../effects/bubbles/bubbles.jsx';

import { useState } from 'react';

export default function Playlist(props){

    const [ openList, setOpenList ] = useState(false);
    const [ objectsList, setObjectsList ] = useState({});
    const [ openListAction, setAction ] = useState(false);

    const [name, setName] = useState(null);
    const [image, setImage] = useState(null);
    const [time, setTime] = useState(null);
    const [color, setColor] = useState(null);
    const [openMusic, setOpen] = useState(false);


    return (
        <div className='container'>
          <Header page={2}/>
          <Bubbles/>

          <List 
            setador={ setOpenList } 
            open={ openList }
            setObjectsList={ setObjectsList }
            openSet={ openListAction }
            setOpenList={ setAction }
          />

          <MoreList
            objectsListReceive={ objectsList }
            openSet={ openListAction }
            setOpenList={ setAction }
            open={open}

            abrir={openMusic}
            setOpenMusic={setOpen}
          />

          <More 
            nome={name}
            imagem={image}
            tempo={time}
            cor={color}

            abrir={openMusic}
            setOpenMusic={setOpen}

            setMoreName={setName}
            setMoreImage={setImage}
            setMoreTime={setTime}
            setMoreColor={setColor}
            />

        </div>
    )
}