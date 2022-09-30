import React from "react";
import '../assets/style/displayProduk.css'
import { DummyProduk } from "../assets/states/produk";
import { colors } from "../assets/colors";

const DisplayProduk =()=>{
    return (
      <div
        className="body-display"
        style={{ backgroundColor: colors.MERAHUTAMA }}
      >
        <div style={{
            color:'white',
            fontFamily:'roboto',
            fontSize:'1.5em',
            fontWeight:'bold',
            marginBottom:20,
            }}>
          Berdasarkan Pencarianmu : 
        </div>
        <div className="productContainer">
          {DummyProduk.map((item, index) => {
            return (
              <div className="item-product">
                <div>
                  <img
                    src={item.img}
                    alt="product display"
                    className="imgProduct"
                  />
                </div>
                <div className="nameProduct">
                  {item.name === null ? "" : item.name}
                </div>
                <div className="priceProduct">
                  {item.price === null ? "" : item.price}
                </div>
                <div className="soldCountProduct">
                  {item.soldCount === null ? "" : item.soldCount} Pcs
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
}
export default DisplayProduk;