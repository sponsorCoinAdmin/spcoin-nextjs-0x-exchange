import React, { useState, useEffect } from 'react';
import styles from '../../styles/Exchange.module.css';
import AssetSelect from './AssetSelect';
import { TokenElement } from '@/app/lib/structure/types';
import { hideElement, showElement, showSponsorRecipientConfig } from '@/app/lib/spCoin/guiControl';

type Props = {
  buyAmount: string,
  buyBalance: string,
  buyTokenElement: TokenElement, 
  setBuyAmount: any,
  disabled:boolean
}

const BuyContainer = ({buyAmount, buyBalance, buyTokenElement, setBuyAmount, disabled} : Props) => {
  const isSpCoin = (buyTokenElement:TokenElement) => {
    let isSpCoin = buyTokenElement.symbol === "SpCoin" ? true:false
    return isSpCoin
  }
  const [spCoin, setSpCoin] = useState<boolean>(isSpCoin(buyTokenElement))
  
  useEffect(() => {
    hideElement("recipientSelectDiv")
    hideElement("recipientConfigDiv")

  },[])

  useEffect(() => {
    isSpCoin(buyTokenElement) ? showElement("addSponsorshipDiv") : hideElement("addSponsorshipDiv")
  },[buyTokenElement])

  const showRecipientSelect = () => {
    console.debug(`CCCCCCCCCCCCCCCCCCCC setSpCoinContainers:showRecipientSelect`)
    hideElement("addSponsorshipDiv")
    showElement("recipientSelectDiv")
  }

  return (
    <div className={styles.inputs}>
      <input id="buy-amount-id" className={styles.priceInput} placeholder="0" disabled={disabled} value={parseFloat(buyAmount).toFixed(6)} />
      <AssetSelect tokenElement={buyTokenElement} id={"buyTokenDialog"} disabled={disabled}></AssetSelect>
      <div className={styles["buySell"]}>You receive </div>
      <div className={styles["assetBalance"]}>Balance: {buyBalance}</div>
      <div id="addSponsorshipDiv" className={styles[`addSponsorshipDiv`]} onClick={() => showRecipientSelect()}>
        <div className={styles["centerContainer"]} >Add Sponsorship</div>
      </div>
    </div>
  );
}

export default BuyContainer;
