import React, { useState } from "react";
import './style.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default ({ title, items }) => {

  const [scrollX, setScrollX] = useState(0);

  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 2);
    if (x > 0) {
      x = 0;     
    }
    setScrollX(x);
  }

  const handleRightArrow = () => {
    let x = scrollX - Math.round(window.innerWidth / 2);
    let listW = items.results.length * 150;
    if ((window.innerWidth - listW) > x) {
      x = (window.innerWidth - listW) -60;
    }
    setScrollX(x);
  }

  console.log()

  return (
    <div className="movieRow">
      <h2>{title}</h2>

      <div className="movieRow--left">
        <ArrowBackIosIcon style={{fontSize: '50px'}} onClick={handleLeftArrow} />
      </div>

      <div className="movieRow--right">
        <ArrowForwardIosIcon style={{fontSize: '50px'}} onClick={handleRightArrow} />
      </div>

      <div className='movieRow--listarea'>
        <div className='movieRow--list' style={{
          marginLeft: scrollX,
          width: items.results.length * 150
        }}>
          {items.results.length > 0 && items.results.map((item, key) => (
            <div key={key} className='movieRow--item'>
              <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title}></img>
            </div>
          ))}
        </div>  
      </div>
    </div>    
  );
}