import React from 'react'
import { colors } from '../assets/colors'
import '../assets/style/nyakupay.css'

const NyakuPay = () => {
    return (
      <div className="nyakupay" style={{ backgroundColor: colors.MERAHUTAMA }}>
        <div
          className="saldo"
          style={{ backgroundColor: colors.MERAHMUDA}}>
           Saldo Nyaku-Pay
           <div>Rp.</div>
           <div> </div>
          </div>
      </div>
    );
}
export default NyakuPay