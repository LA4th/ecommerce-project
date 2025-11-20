import { useState } from 'react'
import TheHeader from './components/header/TheHeader'
import TheFeaturedProducts from './components/featured_products/TheFeaturedProducts'
import ThePaymentMethod from './components/proceed_payment/ThePaymentMethod'
import DataMedicine from './components/data/DataMedicine.json'

function App() {
  const [itemsList, setItemsList] = useState(DataMedicine);
  const [cartItems, setCartItems] = useState([]);

  const handleAddCart = (items) => {
    const newCartItems = [...cartItems, items];

    setCartItems(newCartItems);
  };

  return (
    <>
      {/* <TheHeader /> */}
      <TheFeaturedProducts itemsList={ itemsList } addCarts={ handleAddCart } />
      <ThePaymentMethod addItem={ cartItems } />
    </>
  );
}

export default App