import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { colors } from "../assets/colors";
import { DummyProduk } from "../assets/states/produk";
import '../assets/style/detailProduct.css';
import Navbar from "../component/Navbar";
import DisplayProduk from '../component/DisplayProduk'
import StoreInfo from "../component/StoreInfo";

import {
    HStack,
    Input,
    useNumberInput,
    Button,
} from "@chakra-ui/react";

const ProductDetail =()=>{
  const desc =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    useEffect(()=>{
        window.scrollTo({top:0,left:0, behavior:'smooth'});
    },[])
    const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
      useNumberInput({
        step: 1,
        defaultValue: 1,
        min: 1,
        max: 100,
      });
      const inc = getIncrementButtonProps();
      const dec = getDecrementButtonProps();
      const input = getInputProps();
    const params = useParams();
    const data = DummyProduk[params.id]
    console.log(data)
    return (
      <div className="body-detailProduct">
        <Navbar />
        <div className="detailContainer">
          <img src={data.img} alt="img-product" id="imgProduct" />
          <div id="desc-prod">
            <div id="name">{data.name}</div>
            <div
              id="price"
              style={{
                backgroundColor: colors.MERAHUTAMA,
                color: colors.PUTIH,
              }}
            >
              Rp.{data.price}
            </div>
            <div className="moreInfo">
              <div className="infoName">Voucher</div>
              <Input placeholder="Masukan Kode Voucher" className="infoInput" />
            </div>
            <div className="moreInfo">
              <div className="infoName">Promo</div>
              <Input placeholder="Masukan Kode Promo" className="infoInput" />
            </div>
            <div className="moreInfo">
              <div className="infoName">Pengiriman</div>
              <Input
                placeholder="Pilih Jenis Pengiriman"
                className="infoInput"
              />
            </div>
            <div className="moreInfo">
              <div className="infoName">Kuantitas</div>
              <div>
                <HStack>
                  <Button
                    {...dec}
                    style={{
                      backgroundColor: colors.MERAHUTAMA,
                      color: colors.PUTIH,
                    }}
                  >
                    -
                  </Button>
                  <Input {...input} style={{ textAlign: "center" }} />
                  <Button
                    {...inc}
                    style={{
                      backgroundColor: colors.MERAHUTAMA,
                      color: colors.PUTIH,
                    }}
                  >
                    +
                  </Button>
                </HStack>
              </div>
            </div>
          </div>
        </div>
        <DisplayProduk />
        <StoreInfo />
        <div className="desc-container">
          <div
            style={{ fontFamily: "roboto", fontSize: 20, fontWeight: "bold" }}
          >
            Deskripsi Produk
          </div>
          <div
            style={{ backgroundColor: colors.MERAHUTAMA }}
            className="desc-product"
          >
            {desc}
          </div>
        </div>
      </div>
    );
}
export default ProductDetail;

