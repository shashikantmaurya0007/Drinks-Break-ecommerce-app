import "./App.css";

import { DrinksBreakRoutes } from "./Routes/DrinksBreakRoutes.jsx";
import { Navbar, Footer } from "./layoutcomponent/index";
import { Toast } from "./component/Toast";
import { SearchPortal } from "./PortalComponent/SearchPortal";
import { useCart, useSearch } from "./state";
import CelebrationPortal from "./PortalComponent/CelebrationPortal";
function App() {
  const { showSearchModal } = useSearch();
  const { paymentCelebration } = useCart();
  return (
    <>
      <Navbar />
      <DrinksBreakRoutes />
      <Footer />
      <Toast />
      {showSearchModal && <SearchPortal />}
      {paymentCelebration && <CelebrationPortal />}
    </>
  );
}

export default App;
