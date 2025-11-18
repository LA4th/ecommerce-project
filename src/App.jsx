import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import TheHeader from './components/header/TheHeader'
import TheFeaturedProducts from './components/featuredProducts/TheFeaturedProducts'
import DataMedicine from './components/data/DataMedicine.json'

function App() {
  const [itemsList, setItemsList] = useState(DataMedicine);

  return (
    <>
      {/* <TheHeader /> */}
      <TheFeaturedProducts itemsList={itemsList} />
    </>
  )
}

export default App
