import Axios from "axios";
import { NewProduct } from "../components/NewProduct";

const res = await Axios.get(process.env.STORE_API);

const newProducts = res.data.products.filter(product => {
    if (product.newProduct === true && product.availability === true)
    {
        return product;
    }
})

export const News = () => {
    return (
        <>  
            <div className = "mensContainer container">
                <div className = "clothesTextContainer">
                    <span className = "clothesTitle">New Clothing</span>
                    <span className = "clothesSubTitle">{newProducts.length + " Products"}</span>
                </div>
                <div className = "row d-flex justify-content-center">
                    {
                        newProducts.map(product => {
                            return <NewProduct name = {product.name} price = {product.price}/>
                        })
                    }
                </div>
            </div>
        </>
    )
}