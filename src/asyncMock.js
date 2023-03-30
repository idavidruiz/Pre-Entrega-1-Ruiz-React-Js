const products = [
    {
        id: '1',
        name: 'Preal Reference Pure',
        price: 990000,
        img: 'https://tiendafeedback.com.ar/14983-large_default/bateria-pearl-reference-pure-3-cuerpos-black-white-oyster.jpg',
        stock: 10,
        description: 'Bateria acustica'
    },

    {
        id: '2',
        name: 'Mapex Black Phanter',
        price: 900000,
        img: 'https://tiendafeedback.com.ar/13731-large_default/bateria-mapex-black-panther-velvetone-butter-burst-5-cuerpos.jpg',
        stock: 11,
        description: 'Bateria acustica'
    },

    {
        id: '3',
        name: 'TAMA SuperStar H-Drive',
        price: 810000,
        img: 'https://tiendafeedback.com.ar/30701-large_default/bateria-tama-superstar-hyper-drive-4-cuerpos-dark-mocha-fade.jpg',
        stock: 8,
        description: 'Bateria acustica'
    },
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 1000)
    })
}