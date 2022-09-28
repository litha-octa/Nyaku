import React from 'react'
import '../assets/style/kategori.css';
import { kategori } from '../assets/states/kategori';

const KategoriList = () => {
    return (
      <div className="container">
        <div className='kategoriTitle'>Nyaku Kategori</div>
        <div className="kategoriContainer">
          {kategori.map((item, index) => {
            return (
              <div className="kategoriItem">
                <img
                  src={item.img}
                  alt="logo"
                  key={index}
                  className="kategoriIcon"
                />
                <div className='kategoriText'>{item.name}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
}

export default KategoriList