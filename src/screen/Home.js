import React from 'react'

import Navbar from '../component/Navbar';
import KategoriList from '../component/KategoriList';
import NyakuPay from '../component/NyakuPay';
import TopUp from "../component/TopUp";
import DisplayProduk from '../component/DisplayProduk';
import { dummyBanner } from '../assets/img';

const Home = () => {
    return (
      <div>
        <Navbar />
          {/* <NyakuPay /> */}
        <div style={styles.bannerContainer}>
          <img src={dummyBanner} alt="banner" style={styles.banner} />
        </div>
        <TopUp/>
        <KategoriList />
        <DisplayProduk/>
      </div>
    );
}
const styles = {
  bannerContainer: {
    width: "90%",
    padding: 20,
    alignSelf: "center",
    alignItems: "center",
    marginLeft: "5%",
  },
  banner: {
    width: "100%",
    height: 250,
    borderRadius: 15,
  },
};


export default Home