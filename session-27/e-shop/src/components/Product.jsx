function Product({ productid,name, price, inStock }) {
    return (
        <div>
            <h1>{productid}</h1>
            <h4>{name}</h4>
            <p>{price}</p>
            <p>{inStock ? 'In Stock' : 'Out of Stock'}</p>
        </div>
    )
}

export default Product;