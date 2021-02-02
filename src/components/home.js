import React from 'react'

function Home(props) {
    console.warn("props",props)
    return (
        <div>
           
            <h1>Home Component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://e7.pngegg.com/pngimages/674/742/png-clipart-iphone-x-front-iphone-x.png" />
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price: $1000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button 
                 onClick={
                    ()=>{props.addToCartHandler({pice:1000,name:'i phone 11'})}
                    }>
                        Add To Cart</button>
                </div>
            </div>
        </div>
    )
}
export default Home