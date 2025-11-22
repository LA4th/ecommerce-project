import { useState, useEffect } from "react";
import TheHeader from "./components/header/TheHeader";
import TheFeaturedProducts from "./components/featured_products/TheFeaturedProducts";
import ThePaymentMethod from "./components/proceed_payment/ThePaymentMethod";
import DataMedicine from "./components/data/DataMedicine.json";

function App() {
  const [itemsList, setItemsList] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    const addID = DataMedicine.medicines_by_symptom.map((medicinesGroup) => {
      return {
        ...medicinesGroup,
        id: Date.now() + Math.random(),
        medicines: medicinesGroup.medicines.map((medicinesSingle) => {
          return {
            ...medicinesSingle,
            id: Date.now() + Math.random(),
          };
        }),
      };
    });
    setItemsList({ medicines_by_symptom: addID });
  }, []);

  return (
    <>
      <TheHeader />
      {itemsList && (
        <TheFeaturedProducts
          itemsList={itemsList}
          cartItems={cartItems}
          setCartItems={setCartItems}
        />
      )}
      {/* <ThePaymentMethod  /> */}
    </>
  );
}

export default App;
