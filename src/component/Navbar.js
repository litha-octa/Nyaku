import React from 'react'
import { Input, Select } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { NewLogo, Akun,Chat,Notif, Keranjang, } from "../assets/img";
import { colors } from "../assets/colors";
import { Link } from 'react-router-dom';
import '../assets/style/navbar.css';

const Navbar = () => {
    return (
      <div style={{ backgroundColor: colors.MERAHUTAMA , padding: 2}}>
        <navbar className="body-navbar">
          <Link to="/#">
            <img src={NewLogo} className="logoNav" alt="logo" />
          </Link>
          <Input
            focusBorderColor="white"
            placeholder="Cari Kebutuhanmu Disini ...."
            className="inputNav"
            variant="filled"
            _placeholder={{ color: "grey" }}
          />
          <div className="selectNav">
            <Select width={10} icon={<HamburgerIcon />} />
          </div>
          <div className="iconContainerNav">
            <div className="iconNav">
              <img src={Keranjang} alt="profileIcon" className="iconItem" />
            </div>
            <div className="iconNav">
              <img src={Chat} alt="profileIcon" className="iconItem" />
            </div>
            <div className="iconNav">
              <img src={Notif} alt="profileIcon" className="iconItem" />
            </div>
            <div className="iconNav">
              <img src={Akun} alt="profileIcon" className="iconItem" />
            </div>
          </div>
        </navbar>
        <div className="bottomSearchBar">
          <Input
            focusBorderColor="white"
            placeholder="Cari Kebutuhanmu Disini ...."
            variant="filled"
            _placeholder={{ color: "grey" }}
          />
        </div>
      </div>
    );
}

export default Navbar