import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductScreen from "./screens/ProductScreen";
import PurchaseScreen from "./screens/PurchaseScreen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/products/:id" element={<ProductScreen />} />
        <Route path="/product/purchase" element={<PurchaseScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
