import "./product.css"
import "./productTab"
import "./price.jsx"
import Price from "./price.jsx";

function Product({title, idx}){

    let oldPrice = ["12,495", "11,900", "12,432", "13,202"];
    let newPrice = ["8,999","7,999", "6,999", "9,999"];
    let description = [
        ["8000 DPI", "5 programmable buttons"], ["intuitive surface", "design for ipad pro"], ["designed for ipad", "design for macbook"], ["wireless", "optical fiber cable"]
    ]
    return(
        <div className="product">
            <h4>{title}</h4>
            <p>{description[idx][0]}</p>
            <p>{description[idx][1]}</p>
            <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]} />

        </div>
    )

}
    
export default Product;
