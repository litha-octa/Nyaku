import React, { useState } from 'react'
import { Input, InputGroup, Select, InputRightElement, Button } from "@chakra-ui/react";
import { HamburgerIcon, SearchIcon } from "@chakra-ui/icons";
import {
  NewLogo,
  AkunWhite,
  ChatWhite,
  NotifWhite,
  KeranjangWhite,
} from "../assets/img";
import { colors } from "../assets/colors";
import { Link } from 'react-router-dom';
import '../assets/style/navbar.css';

const Navbar = ({navigation}) => {
  const [keyword, setKeyword] = useState(' ')
  const handleChange = (e) => setKeyword(e.target.value);
const search = (id) => {
  
};


    return (
      <div style={{ backgroundColor: colors.MERAHUTAMA, padding: 2 }}>
        <navbar className="body-navbar">
          <Link to="/#">
            <img src={NewLogo} className="logoNav" alt="logo" />
          </Link>
          <InputGroup className="inputNav">
            <Input
              focusBorderColor="white"
              placeholder="Cari Kebutuhanmu Disini ...."
              className="inputNav"
              variant="filled"
              onChange={handleChange}
              value={keyword}
              _placeholder={{ color: "grey" }}
            />
            <Link to={`/Product-List/${keyword}`}>
              <InputRightElement
                children={<SearchIcon color="black.500" />}
                className="hideInPhone"
              />
            </Link>
          </InputGroup>
          <div className="selectNav">
            <Select width={10} icon={<HamburgerIcon />} />
          </div>
          <div className="iconContainerNav">
            <div className="iconNav">
              <img src={KeranjangWhite} alt="profileIcon" className="iconNav" />
            </div>
            <div className="iconNav">
              <img src={ChatWhite} alt="profileIcon" className="iconItem" />
            </div>
            <div className="iconNav">
              <img src={NotifWhite} alt="profileIcon" className="iconItem" />
            </div>
            <div className="iconNav">
              <img src={AkunWhite} alt="profileIcon" className="iconItem" />
            </div>
          </div>
        </navbar>
        <div className="bottomSearchBar">
          <InputGroup>
            <Input
              focusBorderColor="white"
              placeholder="Cari Kebutuhanmu Disini ...."
              variant="filled"
              _placeholder={{ color: "grey" }}
              onChange={handleChange}
              value={keyword}
            />
            <Link to={`/Product-List/${keyword}`}>
              <InputRightElement children={<SearchIcon color="grey.500" />} />
            </Link>
          </InputGroup>
        </div>
      </div>
    );
}

export default Navbar