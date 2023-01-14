import React, { useState } from 'react';
import styles from './Volatility.module.css'
//import nav bar
import NavBar from "../../component/UserNav"
import Footer from "../../component/Footer"
import BulletList from "../../component/bulletListItem"
import {useNavigate } from 'react-router-dom'
//let { admin} = useSelector(state => state.userAuth)

function Token() {

    let navigate = useNavigate()
    let handleNavigate = (url) => {
        navigate(url)
    }

    return (<>
        <NavBar />
        <div className={styles.content}>
            <div className={styles.leftContent}>
                <div className={styles.headingSection}>
                    <h1>What is a token?</h1>


                </div>

                <img src={"../../Learn_Illustration_What_is_a_Token.png"} />

                <div className={styles.definitionSection}>
                    <h1>Definition</h1>
                    <p>
                        Technically, “token” is just another word for “cryptocurrency” or “cryptoasset.” But increasingly it has taken on a couple of more specific meanings depending on context. The first is to describe all cryptocurrencies besides Bitcoin and Ethereum (even though they are technically also tokens). The second is to describe certain digital assets that run on top of another cryptocurrencies’ blockchain, as many decentralized finance (or DeFi) tokens do. Tokens have a huge range of potential functions, from helping make decentralized exchanges possible to selling rare items in video games. But they can all be traded or held like any other cryptocurrency.
                    </p>

                </div>


                <div className={styles.contentSection}>
                    <p>
                        “Token” is a word that you hear a lot in cryptocurrency. In fact, you might hear Bitcoin described as a “crypto token” or something similar, because — technically — all cryptoassets can also be described as tokens. But the word has increasingly taken on two specific meanings that are common enough that there’s a good chance you’ll encounter them.
                    </p>


                </div>




                <BulletList
                    text="A “token” often refers to any cryptocurrency besides Bitcoin and Ethereum (even though they are also technically tokens). Because Bitcoin and Ethereum are by far the biggest two cryptocurrencies, it’s useful to have a word to describe the universe of other coins. (Another word you might hear with virtually the same meaning is “altcoin.”)"
                />
                <BulletList
                    text="The other increasingly common meaning for “token” has an even more specific connotation, which is to describe cryptoassets that run on top of another cryptocurrency’s blockchain. You’ll encounter this usage if you become interested in decentralized finance (or DeFi). While a cryptocurrency like Bitcoin has its own dedicated blockchain, DeFi tokens like Chainlink and Aave run on top of, or leverage, an existing blockchain, most commonly Ethereum’s. "
                />
                <BulletList
                    text="Tokens in this second category help decentralized applications to do everything from automate interest rates to sell virtual real estate. But they can also be held or traded like any other cryptocurrency."
                />

                <div className={styles.headingSection}>
                    <h1>Why are tokens important?</h1>
                </div>

                <div className={styles.contentSection}>
                    <p>
                        Given that you’ll come across the word a lot while researching cryptocurrencies, it’s useful to understand some common connotations. But besides the big-picture definitions in the section above, there are also some categories of cryptoassets that actually have “token” in their name. Here are a few examples of those:
                    </p>
                </div>
                <BulletList
                    text="DeFi tokens A new world of cryptocurrency-based protocols that aim to reproduce traditional financial-system functions (lending and saving, insurance, trading) has emerged in recent years. These protocols issue tokens that perform a wide variety of functions but can also be traded or held like any other cryptocurrency."
                />
                <BulletList
                    text="Governance tokens These are specialized DeFi tokens that give holders a say in the future of a protocol or app, which (being decentralized) don’t have boards of directors or any other central authority. The popular savings protocol Compound, for example, issues all users a token called COMP. This token gives holders a vote in how Compound is upgraded. The more COMP tokens you have, the more votes you get."
                />
                <BulletList
                    text="Non-Fungible Tokens (NFTs)  NFTs represent ownership rights to a unique digital or real-world asset. They can be used to make it more difficult for digital creations to be copied and shared (an issue anyone who has ever visited a Torrent site full of the latest movies and video games understands). They’ve also been used to issue a limited number of digital artworks or sell unique virtual assets like rare items in a video game. "
                />
                <BulletList
                    text="Security tokens Security tokens are a new class of assets that aim to be the crypto equivalent of traditional securities like stocks and bonds. Their main use case is to sell shares in a company (very much like the shares or fractional shares sold via conventional markets) or other enterprises (for instance, real estate) without the need for a broker. Major companies and startups have been reported to be investigating security tokens as a potential alternative to other methods of fundraising."
                />



            </div>
            <div className={styles.rightContent}>

            </div>

        </div>

        <div className={styles.earnSection}>
            <div className={styles.earnLeft}>
                <h1>
                    Buy Bitcoin in just a few minutes

                </h1>
                <p>
                    Start with as little as $25 and pay with your bank account or debit card.

                </p>
                <button onClick={()=>{handleNavigate('/signup')}}>
                    Get Started

                </button>

            </div>


        </div>


        <Footer />

    </>

    );
}

export default Token;