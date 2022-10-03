import React from "react";
import Navbar from "../component/Navbar";
import '../assets/style/homeStore.css';
import { colors } from "../assets/colors";
import { Tabs, TabList, TabPanels, Tab, TabPanel, Button } from "@chakra-ui/react";

const HomeStore =()=>{
    const data = {
      name: "Happy Shop",
      lokasi: "Bitung",
      status: 'online',
      rate:4.9,
      img: "https://tse1.mm.bing.net/th?id=OIP.SHrzogVe7dkBpji2KCtSugHaHa&pid=Api&P=0",
    };
    return (
      <div>
        <Navbar />
        <div
          className="storeContainer"
          style={{ backgroundColor: colors.MERAHUTAMA }}>
          <img src={data.img} alt="profil toko" id="iconStore" />
          <div id="storeInnerContainer">
            <div id="store-name">{data.name}</div>
            <div id="store-location">{data.status}</div>
            <div id="store-location">{data.lokasi}</div>
            <div id="btnContainer">
              <Button id="btnItem">Follow</Button>
              <Button id="btnItem">Chat</Button>
            </div>
          </div>
        </div>
        <Tabs isLazy isFitted>
          <TabList
            style={{
              backgroundColor: colors.MERAHUTAMA,
              color: colors.PUTIH,
              fontFamily: "roboto",
            }}
          >
            <Tab>Beranda</Tab>
            <Tab>Produk</Tab>
            <Tab>Kategori</Tab>
            <Tab>Review</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <p>one!</p>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>ini untuk kategori</p>
            </TabPanel>
            <TabPanel>
              <p>ini untuk Review</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    );
}
export default HomeStore;