import React from 'react'

function Home() {
    return (
        <div>
            <div className="add-to-cart">
    <span className="cart-count">1</span>
                <img src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg" />
            </div>
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
                
                       >
                        Add To Cart</button>
                </div>
            </div>
        </div>
    )
}
export default Home