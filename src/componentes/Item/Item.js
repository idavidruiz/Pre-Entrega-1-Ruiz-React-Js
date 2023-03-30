const Item = ({ id, name, img, price }) => {
    return (
        <div style={{ background: 'white', margin: 20, padding: 20, borderRadius: 10}}>
            <h1 style={{ fontSize: 20, color: 'black', borderRadius: 30}}>{name}</h1>
            <img src={img} alt={name} style={{width: 300}}/> 
            <p style={{ color: 'white', padding: 10, fontFamily: 'helvetica', fontSize: 15, fontWeight: 'bold', backgroundColor: 'green'}}>Precio: ${price}</p>
        </div>
    )
}

export default Item 