export const WomenProduct = (props) => {
    return (
        <div className = "col-xl-4 col-md-8 col-12 mb-3">
            <div className = "card">
                <img src = "/images/dressImage.jpg" className = "card-img-top"></img>
                <div className = "card-body">
                    <h5 className = "card-title">{props.name}</h5>
                    <p className = "card-text">{"$" + props.price}</p>
                    <button className = "btn btn-primary">Add to Cart</button>
                </div>
            </div>
        </div>
    )
}