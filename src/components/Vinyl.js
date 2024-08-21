export const Vinyl = (props) => {
    return (
        <div className = "col-md-3 col-6">
            <div className = "card vinylCard">
                <img src = {props.img} className = "card-img-top"></img>
                <div className = "card-body body-vinyl">
                    <p className = "card-text">{props.title}</p>
                </div>
            </div>
        </div>
    )
}