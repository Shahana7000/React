import Product from "./product.jsx";

function ProductTab(){
    return(
        <>
        <Product title="phone" price="30k"/>
         <Product title="laptop" price={30000}/>
         <Product title="Tab" price="50k"/>
        </>
    )
}

export default ProductTab;