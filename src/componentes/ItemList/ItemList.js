import Item from "../Item/Item"

const ItemList = ({ products }) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 200}}>
            {products.map(product => <Item key={product.id} {...product} />)} 
        </div>
    )
}

export default ItemList 