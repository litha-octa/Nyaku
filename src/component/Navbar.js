import React from 'react'
import { Input } from "@chakra-ui/react";
import { NewLogo, AkunkuIcon } from "../assets/img";
import { colors } from "../assets/colors";
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
      <div>
        <navbar style={styles.navbar}>
          <Link to="/#">
            <img src={NewLogo} style={styles.logoNav} alt="logo" />
          </Link>
          <Input
            placeholder="Cari Kebutuhanmu Disini ...."
            style={styles.input}
            _placeholder={styles.textInputNav}
          />
          <img src={AkunkuIcon} alt="profileIcon" style={styles.navbarIcon2} />
        </navbar>
      </div>
    );
}
const styles = {
  navbar: {
    width: "100%",
    height: 70,
    backgroundColor: colors.MERAHUTAMA,
    flexDirection: "row",
    display: "flex",
    padding: 2,
  },
  textNav: {
    color: colors.PUTIH,
    fontFamily: "arial",
    fontSize: 18,
    fontWeight: "bold",
    margin: 10,
  },
  logoNav: {
    width: 170,
    height: 60,
  },
  input: {
    width: "50%",
    marginLeft: "10%",
    alignSelf: "center",
    color: colors.PUTIH,
    fontFamily: "arial",
  },
  textInputNav: {
    color: colors.PUTIH,
    fontFamily: "arial",
    fontSize: 13,
    fontWeight: "bold",
    margin: 10,
  },
  navbarIcon2: {
    width: 40,
    height: 40,
    marginLeft: "20%",
    alignSelf: "center",
  },
};
export default Navbar