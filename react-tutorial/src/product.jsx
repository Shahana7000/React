import "./product.css"

function Product({title, price}){
    return(
        <div className="product">
            <h3>Title : {title}</h3>
            <h5>Price : {price}</h5>
            <p>Description: </p>
        </div>
    )
}
export default Product;

// export default function Product({title, price}){
//     return(
//         <div className="product">
//             <h4>{title}</h4>
//             <p>{price}</p>
//         </div>
//     )
// }