import React, {useState, useEffect} from 'react';
import './App.css';
import { Link } from "react-router-dom";

function Item({ match }) {

  useEffect(() => {
    fetchItem();
  }, []);

  const [item, setItem] = useState({});
  const [sprite, setSprite] = useState("");

  const fetchItem = async () => {
    const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${match.params.id}/`);
    const item = await pokemon.json();
    const sprite = item.sprites.front_default;

    setItem(item);
    setSprite(sprite);
  }


  return (
    <div className="Profile">
        <div className="profile-card">
            <h1>{item.name}</h1>
            <img src={sprite} alt=""/>
        </div>
    </div>
  );
}

export default Item;
