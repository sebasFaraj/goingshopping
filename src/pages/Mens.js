import Axios from "axios";
import { MenProduct } from "../components/MenProduct";

const res = await Axios.get(process.env.STORE_API);

const mens = res.data.products.filter(product => {
   if (product.category === "mens" && product.availability === true)
   {
        return product;
   }
});



console.log(mens);




export const Mens = () => {
    return (
        <>  
            <div className = "mensContainer container">
                <div className = "clothesTextContainer">
                    <span className = "clothesTitle">Men's Clothing</span>
                    <span className = "clothesSubTitle">{mens.length + " Products"}</span>
                </div>
                <div className = "row d-flex justify-content-center">
                    {
                        mens.map(product => {
                            return <MenProduct name = {product.name} price = {product.price}/>
                        })
                    }
                </div>
            </div>
        </>
    )
}