// import logo from "./logo.svg";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Detail from "./components/Detail";
import ModularKitchenCalculator from "./pages/ModularKitchenCalculator";
import SizeSelection from "./pages/SizeSelections";
import SubmitForm from "./components/SubmitForm";
import RegisterForm from "./Auth/Register";
import { useState } from "react";
import LoginForm from "./Auth/Login";
import AdminPage from "./Admin/adminpage";
import UserDetailsCard from "./Admin/UploadCard";
import UploadCard from "./Admin/UserDetailsCard";
import KitchenGuide from "./pages/KitchenGuide.js";
import KitchenInfo from "./pages/KitchenInfo.js";
import Footer from "./components/Footer.jsx";
import FooterBottomSection from "./components/FooterBottomSection.jsx";
import InteriorDesignCostEstimator from "./pages/InteriorDesignCostEstimator.js";
import InteriorQuantityCalc from "./pages/InteriorQuantityCalc.js";

function App() {
  const [ScrollItem, SetScrollItem] = useState("");
  return (
    <div className="App">
      <Navbar setScroll={SetScrollItem} />

      <Routes>
        <Route path="/*" element={<Home selectedScroll={ScrollItem} />} />
        <Route path="/imgView/*" element={<Detail />} />
        <Route path="/register*" element={<RegisterForm />} />
        <Route path="/login*" element={<LoginForm />} />
        <Route path="/kitchenSizeCalc" element={<ModularKitchenCalculator />} />
        <Route path="kitchenSizeCalc/submitForm" element={<SubmitForm />} />
        <Route path="/kitchenSizeCalc/*" element={<SizeSelection />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/UserDetailsCard" element={<UserDetailsCard />} />
        <Route path="/UploadCard" element={<UploadCard />} />
        <Route path="/kitchenGuide/*" element={<KitchenGuide />} />
        <Route path="/KitchenTypeInfo/*" element={<KitchenInfo />} />
        <Route
          path="/EstimateCost/*"
          element={<InteriorDesignCostEstimator />}
        />
        <Route
          path="/EstimateCost/quantityCalc"
          element={<InteriorQuantityCalc />}
        />
        <Route
          path="/EstimateCost/quantityCalc/SubmitForm"
          element={<SubmitForm />}
        />
        <Route path="/SubmitForm/*" element={<SubmitForm />} />
      </Routes>

      <Footer />
      <FooterBottomSection />
    </div>
  );
}

export default App;
