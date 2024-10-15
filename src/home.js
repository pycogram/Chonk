import React, {useState, useEffect} from "react";

const Home = ( props ) => {
    const justImg = props.ObjImg;

    const images = [
        justImg.pepeR1    
    ] 
    console.log(images);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 1 * 1000); 

        return() => clearInterval(interval);
    }, [images.length]);

    return(
        <div className="homePage">
            <div className="homeTextPic">
                <div className="homeText">
                    <h1>$Chonk</h1>
                    <div className="homePic2">
                        <img src={images[currentImageIndex]} alt="$Chonk pic" />
                    </div>
                    <h4>
                        "When you realize your $Chonk bags are worth more than your entire crypto portfolio..."    
                    </h4>
                    <p>
                        CA:
                        AT7RRrFhBU1Dw1WghdgAqeNKNXKomDFXm77owQgppump
                    </p>
                    <div className="allSC-Btn">
                        <div className="allSocHandle">
                            <span><a href="https://x.com/Chonkler777" target="_blank"><img src={justImg.tw} alt="twitter logo" /></a></span>
                            <span><a href="https://t.me/chonkler"><img src={justImg.tg} alt="telegram logo" /></a></span>
                            <span><a href="https://pump.fun/AT7RRrFhBU1Dw1WghdgAqeNKNXKomDFXm77owQgppump" target="_blank"><img src={justImg.pf} alt="pumpfun logo" /></a></span>
                            <span><a href="https://raydium.io/swap/?inputMint=sol&outputMint=AT7RRrFhBU1Dw1WghdgAqeNKNXKomDFXm77owQgppump" target="_blank"><img src={justImg.ray} alt="raydium logo" /></a></span>
                            <span><a href="https://dexscreener.com/solana/AT7RRrFhBU1Dw1WghdgAqeNKNXKomDFXm77owQgppump" target="_blank"><img src={justImg.dexs} alt="dexscreener logo" /></a></span>
                            <span><img src={justImg.dext} alt="dextools logo" /></span>
                        </div>
                        <button><a href="https://raydium.io/swap/?inputMint=sol&outputMint=AT7RRrFhBU1Dw1WghdgAqeNKNXKomDFXm77owQgppump" target="_blank">Buy $Chonk</a></button>
                    </div>
                </div>
                <div className="homePic">
                    <img src={images[currentImageIndex]} alt="$Chonk pic" />
                </div>
            </div>
        </div>
    )
}

export default Home;