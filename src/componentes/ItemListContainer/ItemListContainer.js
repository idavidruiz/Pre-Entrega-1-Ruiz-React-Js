import { useEffect, useState } from "react"
import { getProducts } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts()
            .then(products => {
                setProducts(products)
            })
    }, [])


    return (
        <div>
            <h1 className="DrumerShop">{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer