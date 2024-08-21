import Axios from "axios";
import { WomenProduct } from "../components/WomenProduct";

const res = await Axios.get("http://localhost:3001/products/");

const womens = res.data.products.filter(product => {
   if (product.category === "womens" && product.availability === true)
   {
        return product;
   }
});



console.log(womens);




export const Womens = () => {
    return (
        <>  
            <div className = "mensContainer container">
                <div className = "clothesTextContainer">
                    <span className = "clothesTitle">Women's Clothing</span>
                    <span className = "clothesSubTitle">{womens.length + " Products"}</span>
                </div>
                <div className = "row d-flex justify-content-center">
                    {
                        womens.map(product => {
                            return <WomenProduct name = {product.name} price = {product.price}/>
                        })
                    }
                </div>
            </div>
        </>
    )
}