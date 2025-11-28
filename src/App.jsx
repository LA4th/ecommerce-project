import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageLanding from "./pages/PageLanding";
import PageProceedPayment from "./pages/PageProceedPayment.jsx";
import PageDevelop from "./pages/PageDevelop.jsx";
import DataMedicine from "./components/data/DataMedicine.json";

function App() {
  const [itemsList, setItemsList] = useState(null);
  const [itemsSearch, setItemsSearch] = useState("");
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
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <PageLanding
              itemsList={itemsList}
              cartItems={cartItems}
              setCartItems={setCartItems}
              itemsSearch={itemsSearch}
              setItemsSearch={setItemsSearch}
            />
          }
        />
        <Route
          path="/payment-method"
          element={
            <PageProceedPayment
              cartItems={cartItems}
              setCartItems={setCartItems}
            />
          }
        />
        <Route path="/develop" element={<PageDevelop />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
