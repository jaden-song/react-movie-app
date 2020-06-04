import React from 'react';
import PropTypes from 'prop-types';

const iuArr = [
  {
    id: 1,
    num: 20,
    name: "iu1",
    image: "http://res.heraldm.com/phpwas/restmb_jhidxmake.php?idx=5&simg=201809121609186592573_20180912161043_01.jpg"
  },
  {
    id: 2,
    num: 30,
    name: "iu2",
    image: "https://i.pinimg.com/474x/b2/b7/2c/b2b72cfb5445a43207c648bb443ee605--modern-times-kpop-girls.jpg"
  },
  {
    id: 3,
    num: 40,
    name: "iu3",
    image: "https://pm1.narvii.com/7503/07a6aac3ca9ac474c224728cc20f185dcd8c5886r1-1080-1350v2_uhq.jpg"
  },
];

function IU({ name, img, num }) {
  return (
    <div>
      <h2>I like {name} : {num}</h2>
      <img src={img} alt={name} />
    </div>
  );
}

IU.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  num: PropTypes.number.isRequired
};

function App() {
  return (
    <div>
      {iuArr.map(iu => (
        <IU 
          key={iu.id} 
          num={iu.num} 
          name={iu.name} 
          img={iu.image} 
        />
      ))}
    </div>
  );
}

export default App;
