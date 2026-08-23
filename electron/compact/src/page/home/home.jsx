import Header from '../../components/layout/header/header.jsx';
import Section from '../../components/layout/section/section.jsx';
import More from '../../components/layout/moreMusic/moreMusic.jsx';
import Bubbles from '../../effects/bubbles/bubbles.jsx';
import './home.css'

import { useState } from 'react';

export default function Home (props){

  const [name, setName] = useState(null);
  const [image, setImage] = useState(null);
  const [time, setTime] = useState(null);
  const [color, setColor] = useState(null);
  const [openMusic, setOpen] = useState(false);

    return (
    <div className='container'>
      <Header page={1}/>
      <Bubbles/>
      <Section
        setMoreName={setName}
        setMoreImage={setImage}
        setMoreTime={setTime}
        setMoreColor={setColor}
        openMusicS={openMusic}
        open={setOpen}
      />

      <More
        nome={name}
        imagem={image}
        tempo={time}
        cor={color}
        abrir={openMusic}
        setOpenMusic={setOpen}
      />
    </div>
    )
} 