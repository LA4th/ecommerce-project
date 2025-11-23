import { useState, useEffect } from "react";
import { Routes, Route } from "react-router";
import PageLanding from "./pages/PageLanding";
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
    <Routes>
      <Route
        path="/"
        element={
          <PageLanding
            itemsList={itemsList}
            cartItems={cartItems}
            setCartItems={setCartItems}
          />
        }
      />
    </Routes>
  );
}

export default App;
