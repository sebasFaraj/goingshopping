import { Link } from "react-router-dom";

import { Vinyl } from "../components/Vinyl";

export const Home = () => {
    return (
        <div className = "container-fluid homeContainer">
            <div className = "row mb-3">
                <img className= "salesImage" src="//images.ctfassets.net/q602vtcuu3w3/1fgzSF20NY08P2Ji8Khz10/71ee9e258d3a880bfcb9506e3a9d5149/24-PROMO-CORE-SOS-30-RED6.jpg?w=2880&amp;q=80&amp;fm=jpg&amp;fl=progressive" alt="sale" fetchpriority="auto"></img>
            </div>
            {/* Men's and Womens */}
            <div className = "row d-flex justify-content-center mb-3">
                <div className = "col-md-6 col-sm-8 col-12">
                    <div className = "card">
                        <img src = "/images/mensClothes.jpg" className = "card-img-top"></img>
                        <div className = "card-body">
                            <p className = "card-text">LOOK YOUR BEST</p>
                            <h5 className = "card-title">New for Men</h5>
                            <Link to = "/mens" class = "btn btn-light">SHOP MENS</Link>
                        </div>
                    </div>
                </div>
                <div className = "col-md-6 col-sm-8 col-12">
                    <div className = "card">
                        <img src = "/images/womensClothes.jpg" className = "card-img-top"></img>
                        <div className = "card-body">
                            <p className = "card-text">FIND YOUR STYLE</p>
                            <h5 className = "card-title">New for Women</h5>
                            <Link to = "/womens" class = "btn btn-light">SHOP WOMENS</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className = "row mb-3 p-4">
                <h5 className = "vinylTitle">Vinyl Drops</h5>
                <div id="carouselVinyl" class="carousel slide">
                    <div class="carousel-inner container-fluid">
                        <div class="carousel-item active">
                            <div className = "row d-flex justify-content-center">
                                <Vinyl title = "Sabrina Carpenter - Short n' Sweet Limited LP" img = "https://images.urbndata.com/is/image/UrbanOutfitters/94168259_040_b?$medium$&qlt=80&fit=constrain"/>
                                <Vinyl title = "Billie Eilish - HIT ME HARD AND SOFT Limited LP" img = "https://images.urbndata.com/is/image/UrbanOutfitters/92669282_010_b?$medium$&qlt=80&fit=constrain"/>
                                <Vinyl title = "Charli XCX - BRAT Limited LP" img = "https://images.urbndata.com/is/image/UrbanOutfitters/92582824_080_b?$medium$&qlt=80&fit=constrain"/>
                                <Vinyl title = "Dua Lipa - Radical Optimism Limited LP" img = "https://images.urbndata.com/is/image/UrbanOutfitters/92002955_030_d?$medium$&qlt=80&fit=constrain"/>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div className = "row d-flex justify-content-center">
                                <Vinyl title = "Lana Del Rey - NFR! 2XLP" img = "https://images.urbndata.com/is/image/UrbanOutfitters/86152543_001_d?$medium$&qlt=80&fit=constrain"/>
                                <Vinyl title = "The Date - What's Wrong With New York Limited LP" img = "https://images.urbndata.com/is/image/UrbanOutfitters/94537750_010_b?$medium$&qlt=80&fit=constrain"/>
                                <Vinyl title = "Zayn - Room Under The Stairs Limited 2XLP" img = "https://images.urbndata.com/is/image/UrbanOutfitters/92790609_000_b?$medium$&qlt=80&fit=constrain"/>
                                <Vinyl title = "Skegss - Pacific Highway Music Limited LP" img = "https://images.urbndata.com/is/image/UrbanOutfitters/95777504_030_b?$medium$&qlt=80&fit=constrain"/>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselVinyl" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon bg-dark" aria-hidden="false"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselVinyl" data-bs-slide="next">
                        <span class="carousel-control-next-icon bg-dark" aria-hidden="false"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            


            {/* Graphics and  Hoodies*/}
            <div className = "row d-flex justify-content-center mb-3">
                <div className = "col-md-6 col-sm-8 col-12">
                    <div className = "card">
                        <img class="card-img-top" src="//images.ctfassets.net/q602vtcuu3w3/4AVvH1NbxrGCIqInnLtwbY/53dc366623a04fd8a2cd53599fe9c4cc/24_AUGUST_HOMEPAGE_ASSETS_EM2.jpg?w=1420&amp;q=80&amp;fm=jpg&amp;fl=progressive" alt=" " fetchpriority="auto"></img>
                        <div className = "card-body">
                            <p className = "card-text">GRAPHICS SHOP</p>
                            <h5 className = "card-title">All new Graphics</h5>
                            <Link to = "/mens" class = "btn btn-light">SHOP GRAPHICS</Link>
                        </div>
                    </div>
                </div>
                <div className = "col-md-6 col-sm-8 col-12">
                    <div className = "card">
                    <img class="card-img-top" src="//images.ctfassets.net/q602vtcuu3w3/Fh48zhAXt9mM4MrB7E0fK/aae5ef092c466e353af6e5aa929c29d6/24_AUGUST_HOMEPAGE_ASSETS_EM4.jpg?w=1420&amp;q=80&amp;fm=jpg&amp;fl=progressive" alt=" " fetchpriority="auto"></img>
                        <div className = "card-body">
                            <p className = "card-text">NEW FOR YOU</p>
                            <h5 className = "card-title">Hoodies + Sweatshirts</h5>
                            
                            <Link to = "/womens" class = "btn btn-light">SHOP HOODIES</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}