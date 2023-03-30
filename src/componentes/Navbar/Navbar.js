import './Navbar.css'
import Button from './Button/Button'
import CartWidget from '../CartWidget/CartWidget'
import Counter from './Counter/Counter'

const Navbar = () => {
    return (
        <nav className="Navbar-container">
            <h1>DrumerShop</h1>
            <div className="buttons">
                {/* <button>Mapex</button>
                <button>Pearl</button>
                <button>Tama</button> */}
                <Button label="Pearl" callback={() => console.log('Pearl')}/>
                <Button label="Mapex" callback={() => console.log('Mapex')}/>
                <Button label="Tama" callback={() => console.log('Tama')}/>
            </div>
            <CartWidget />
        </nav>
    )
}

export default Navbar ;