import "./App.css";

import { DrinksBreakRoutes } from "./Routes/DrinksBreakRoutes.jsx";
import { Navbar, Footer } from "./layoutcomponent/index";
import { Toast } from "./component/Toast";

function App() {
  return (
    <>
      <Navbar />
      <DrinksBreakRoutes />
      <Footer />
      <Toast />
    </>
  );
}

export default App;
