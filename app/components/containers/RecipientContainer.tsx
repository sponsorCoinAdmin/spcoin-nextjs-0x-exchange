import React from 'react';
import styles from '@/app/styles/Exchange.module.css';
import { openDialog } from '../Dialogs/Dialogs';
import { setDisplayPanels, toggleElement } from '@/app/lib/spCoin/guiControl';
import Image from 'next/image';
import { DownOutlined } from "@ant-design/icons";
import cog_png from '../../../public/resources/images/miscellaneous/cog.png';
import Link from 'next/link'
import { DISPLAY_STATE } from '@/app/lib/structure/types';

type Props = {
  recipientWallet: any, 
}

const toggleConfig = () => {
  const el = document.getElementById('recipientConfigDiv');
  if (el != null) {
    el.style.display === 'block' ? 
      setDisplayPanels(DISPLAY_STATE.RECIPIENT) :
      setDisplayPanels(DISPLAY_STATE.CONFIG);
  }
};


const RecipientContainer = ({recipientWallet} : Props) => {
  // alert("RecipientContainer:\n" + JSON.stringify(recipientWallet,null,2))
  // let urlParms:string = `/Recipient?address=${recipientWallet.address}`
  let urlParms:string = `/Recipient/${recipientWallet.address}`
  urlParms += `?name=${recipientWallet.name}`
  urlParms += `&symbol=${recipientWallet.symbol}`
  urlParms += `&address=${recipientWallet.address}`
  urlParms += `&img=${recipientWallet.img}`
  urlParms += `&url=${recipientWallet.url}`

  console.debug (`calling urlParms: ${urlParms}`)
  return (
    <div id="recipientSelectDiv" className={styles["inputs"]}>
      <div id="recipient-id" className={styles.sponsorCoinContainer}/>
      <div className={styles["yourRecipient"]}>
        You are sponsoring:
      </div>
      <Link href={`${urlParms}`} className={styles["recipientName"]}>
        {recipientWallet.name}
      </Link>
      <div className={styles["recipientSelect"]}>
        <img alt={recipientWallet.name} className="h-9 w-9 mr-2 rounded-md" src={recipientWallet.img} onClick={() => alert("Recipient Data " + JSON.stringify(recipientWallet,null,2))}/>
        {recipientWallet.symbol} 
        <DownOutlined onClick={() => openDialog("#recipientDialog")}/>
      </div>
      <div>
        <Image src={cog_png} className={styles["cogImg"]} width={20} height={20} alt="Info Image"  
        onClick={() => toggleConfig()}/>
      </div>
      <div id="closeSponsorSelect" className={styles["closeSponsorSelect"]} onClick={() => setDisplayPanels(DISPLAY_STATE.SPONSOR)}>
        X
      </div>
    </div>
  );
}

export default RecipientContainer;
