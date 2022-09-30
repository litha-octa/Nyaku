import React from "react";
import "../assets/style/storeInfo.css";
import { colors } from "../assets/colors";
import { Button } from "@chakra-ui/react";

const StoreInfo = () => {
  const store = {
    img: "https://tse1.mm.bing.net/th?id=OIP.SHrzogVe7dkBpji2KCtSugHaHa&pid=Api&P=0",
    name: "Happy Shop",
    product: 1000,
    rate: 4.89,
    joinYear: 2017,
  };
  return (
    <div
      className="body-StoreInfo"
      style={{ backgroundColor: colors.MERAHUTAMA }}
    >
      <img src={store.img} alt="store icon" className="store-icon" />
      <div className="store-name">
        {store.name}
        <br />
        <Button className="btn-inStore">Chat Penjual</Button>
        <Button className="btn-inStore">Kunjungi Toko</Button>
      </div>
      <div className="store-detail">
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div className="store-detailName">Penilaian</div>

          <div>{store.rate} / 5</div>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div className="store-detailName">Jumlah Produk</div>

          <div>{store.product} Pcs</div>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div className="store-detailName">Bergabung Sejak Tahun</div>
          <div>{store.joinYear}</div>
        </div>
      </div>
    </div>
  );
};
export default StoreInfo;
