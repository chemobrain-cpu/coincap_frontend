import React, { useState} from 'react';
//import nav bar
import NavBar from "../../component/common/UserNav"
import GetStarted from "../../component/general/getStarted"
import CoinSection from "../../component/general/coinSection"

import EarningSection from "../../component/general/earningSection"
import Patner from "../../component/general/patner"
import PortfolioSection from "../../component/general/portfolio"
import SecuritySection from "../../component/general/Security"
import InfoSection from "../../component/general/Info"
import Action from "../../component/general/action"

import Footer from "../../component/common/Footer"
import EarnSection from '../../component/general/earnSection';



function Home() {
  
    let navigateToApp = ()=>{
        //alert('navigating')
    }

    

    return (<>
        <NavBar navigateToApp ={navigateToApp}/>

        <GetStarted navigateToApp ={navigateToApp}/>

        <CoinSection navigateToApp ={navigateToApp}/>

        <EarnSection navigateToApp ={navigateToApp}/>

        <PortfolioSection navigateToApp ={navigateToApp}/>

        <SecuritySection navigateToApp ={navigateToApp}/>

        <InfoSection navigateToApp ={navigateToApp}/>

        <Action navigateToApp ={navigateToApp}/>
        
        <Patner/>
        
        <EarningSection navigateToApp ={navigateToApp}/>
        <Footer/>
    </>

    );
}

export default Home;