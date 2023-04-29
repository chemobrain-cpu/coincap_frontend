import React,{useState} from 'react';
import styles from './Home.module.css';
import Desktopfooter from '../../../component/userscreencomp/desktopfooter';

import BackHeader from '../../../component/userscreencomp/backHeader';
import { SendComponent } from '../../../component/userscreencomp/Send/Send';
import TransferModal from '../../../component/Modal/transferModal';
import TradeModal from './../../../component/Modal/tradeModal';
import Modal from './../../../component/Modal/Modal';
import moment from 'moment';
import SettingSidebar from './../../../component/userscreencomp/settingSideBar';



const Send = () => {
   //tradeModal and transfer modal
  let [isOpenTradeModal, setIsOpenTradeModal] = useState(false)
  let [isOpenTransferModal, setIsOpenTransferModal] = useState(false)
   let [isOpenTransactionModal, setIsOpenTransactionModal] = useState(false)
  let [isOpenTransactionModalContent, setIsOpenTransactionModalContent] = useState('')


   //for transfer and trade modal
   let openTradeModal = () => {
    setIsOpenTransferModal(false)
    setIsOpenTradeModal(true)
    setIsOpenTransactionModal(false)
  }



  let openTransferModal = () => {
    setIsOpenTransferModal(true)
    setIsOpenTradeModal(false)
    setIsOpenTransactionModal(false)

  }

  let closeModal = ()=>{
    setIsOpenTransferModal(false)
    setIsOpenTradeModal(false)
    setIsOpenTransactionModal(false)
  }

  let openTransactionModal = (data) => {
    console.log(data)
    setIsOpenTransferModal(false)
    setIsOpenTradeModal(false)
    setIsOpenTransactionModal(true)

  
    let info = `${data.action} ${Number(data.amount).toFixed(2)}  ${data.nameOfCurrency}, ${moment(data.date).from(moment())}`
    setIsOpenTransactionModalContent(info)



  }





  return (
    <>
    {isOpenTransferModal && <TransferModal closeModal={closeModal}/>}
    {isOpenTradeModal && <TradeModal closeModal={closeModal}/>}
    {isOpenTransactionModal && <Modal content={isOpenTransactionModalContent} closeModal={closeModal}/>}
    <div className={styles.dashboard}>
    <div className={styles.sidebar}>
      <SettingSidebar status='' />
    </div>

    <div className={styles.main} >
      <BackHeader openTradeModal={openTradeModal} openTransferModal={openTransferModal} title='Send Assets'/>
      <SendComponent openTransactionModal={openTransactionModal}/>
     

      {/* footer*/}
      
      <div className={styles.desktopFooterCont}>
        <Desktopfooter />
      </div>
    </div >

  </div >
  </>
  
  


  )
}

export default Send