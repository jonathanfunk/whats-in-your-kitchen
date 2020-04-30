import React, { useContext, useState, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';
import faveIcon from './../images/fave.svg';
import unfaveIcon from './../images/unfave.svg';

const FaveHeart = ({ id, title, image }) => {
  const [fave, setFave] = useState(false);
  const { faves, addFave, deleteFave } = useContext(GlobalContext);

  useEffect(() => {
    if (!faves.some((fave) => fave.id === id)) {
      setFave(false);
    } else {
      setFave(true);
    }
  }, [faves, id]);

  const addToFaves = () => {
    const newFave = {
      id,
      title,
      image,
    };
    if (!faves.some((fave) => fave.id === id)) {
      addFave(newFave);
      //setFave(true);
    } else {
      deleteFave(id);
      //setFave(false);
    }
  };
  return (
    <div
      className="w-10 h-10 hover:opacity-50 focus:outline-none cursor-pointer"
      onClick={addToFaves}
    >
      <img src={fave ? faveIcon : unfaveIcon} alt="Heart Icon" />
    </div>
  );
};

export default FaveHeart;
