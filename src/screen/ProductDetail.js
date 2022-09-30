import React from "react";
import { useParams } from "react-router-dom";
import { colors } from "../assets/colors";
import { DummyProduk } from "../assets/states/produk";
import '../assets/style/detailProduct.css';
import Navbar from "../component/Navbar";

import {
    HStack,
    Input,
    useNumberInput,
    Button,
} from "@chakra-ui/react";

const ProductDetail =()=>{
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
                  <Input {...input} style={{ textAlign: "center" }}/>
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
      </div>
    );
}
export default ProductDetail;

