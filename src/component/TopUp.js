import React from "react";
import "../assets/style/topup.css";
import { colors } from "../assets/colors";
import { Dot3 } from "../assets/img";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Input,
  Select,
  Button
} from "@chakra-ui/react";

const TopUp = () => {
  return (
    <div className="bodyTopup">
      <div className="topupContainer">
        <div>Pesan Tiket</div>
      </div>

      <div
        className="topupContainer"
        style={{ backgroundColor: colors.ABUSOFT, color: "black" }}
      >
        TOP UP dan Tagihan
        <div className="topupInnerContainer">
          <Tabs size="lg" defaultIndex={0} className="topUp-TAB">
            <TabList>
              <Tab
                _selected={{ color: "white", bg: colors.MERAHUTAMA }}
                className="tab-item"
              >
                Pulsa
              </Tab>
              <Tab
                _selected={{ color: "white", bg: colors.MERAHUTAMA }}
                className="tab-item"
              >
                Paket Data
              </Tab>
              <Tab
                _selected={{ color: "white", bg: colors.MERAHUTAMA }}
                className="tab-item"
              >
                Listrik
              </Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <div className="pulsa">
                  <Input
                    variant="flushed"
                    placeholder="08123456789"
                    type={"number"}
                    className="inputPulsa"
                  />
                  <Select placeholder="Pilih Nominal" className="inputPulsa">
                    <option value="5">5.000</option>
                    <option value="10">10.000</option>
                    <option value="25">25.000</option>
                    <option value="50">50.000</option>
                    <option value="100">100.000</option>
                  </Select>
                  <Button colorScheme={"red"} style={{ borderRadius: 15 }}>
                    Beli
                  </Button>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="pulsa">
                  <Input
                    variant="flushed"
                    placeholder="08123456789"
                    type={"number"}
                    className="inputPulsa"
                  />
                  <Select placeholder="Pilih Kuota" className="inputPulsa">
                    <option value="1">1 GB</option>
                    <option value="3">3 GB</option>
                    <option value="5">5 GB</option>
                    <option value="8">8 GB</option>
                    <option value="12">12 GB</option>
                  </Select>
                  <Button colorScheme={"red"} style={{ borderRadius: 15 }}>
                    Beli
                  </Button>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="pulsa">
                  <Input
                    variant="flushed"
                    placeholder="Masukan Id Pelanggan"
                    type={"number"}
                    className="inputPulsa"
                  />
                  <Select placeholder="Pilih Saldo" className="inputPulsa">
                    <option value="20">20rb</option>
                    <option value="50">50rb</option>
                    <option value="100">100rb</option>
                    <option value="150">150rb</option>
                    <option value="200">200rb</option>
                  </Select>
                  <Button colorScheme={"red"} style={{ borderRadius: 15 }}>
                    Beli
                  </Button>
                </div>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
      </div>
    </div>
  );
};
export default TopUp;
