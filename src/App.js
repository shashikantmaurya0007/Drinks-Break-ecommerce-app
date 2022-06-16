import "./App.css";

import { DrinksBreakRoutes } from "./Routes/DrinksBreakRoutes.jsx";
import { Navbar, Footer } from "./layoutcomponent/index";
import { Toast } from "./component/Toast";
import { SearchPortal } from "./PortalComponent/SearchPortal";
import { useSearch } from "./state";
function App() {
  const { showSearchModal } = useSearch();
  return (
    <>
      <Navbar />
      <DrinksBreakRoutes />
      <Footer />
      <Toast />
      {showSearchModal && <SearchPortal />}
    </>
  );
}

export default App;
