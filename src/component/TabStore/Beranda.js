import React from "react";
import { voucher } from "../../assets/states/voucherToko";
import '../../assets/style/voucher.css';
import {Button} from '@chakra-ui/react';

const Beranda =()=>{
    return (
      <div>
        <div className="voucher-title">Voucher Toko</div>

        <div className="voucherContainer">
          {voucher.map((item) => {
            return (
              <div className="item-voucher">
                <div className="voucher-name">{item.disc}</div>
                <div className="voucher-minSpend">
                  Min. Belanja {item.minSpend}Rb
                </div>
                <div className="voucher-minSpend">
                  Berlaku Sampai {item.validBefore}
                </div>
                <Button colorScheme={"red"} className="btn-voucher">
                  Klaim
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    );
}
export default Beranda;