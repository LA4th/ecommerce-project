import { useState } from 'react'
import TheHeader from './components/header/TheHeader'
import TheFeaturedProducts from './components/featured_products/TheFeaturedProducts'
import DataMedicine from './components/data/DataMedicine.json'

function App() {
  const [itemsList, setItemsList] = useState(DataMedicine);

  return (
    <>
      <TheHeader />
      <TheFeaturedProducts itemsList={itemsList} />
    </>
  );
}

export default App