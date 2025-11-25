import { useState, useEffect } from "react";
import { Routes, Route } from "react-router";
import PageLanding from "./pages/PageLanding";
import PageProceedPayment from "./pages/PageProceedPayment.jsx";
import PageDevelop from "./pages/PageDevelop.jsx";
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
        <Route
          path="/payment-method"
          element={<PageProceedPayment cartItems={cartItems} />}
        />
        <Route path="/develop" element={<PageDevelop />} />
      </Routes>
    </>
  );
}

export default App;
