import "./App.css";

import { DrinksBreakRoutes } from "./Routes/DrinksBreakRoutes.jsx";
import { Navbar, Footer } from "./layoutcomponent/index";

function App() {
  return (
    <>
      <Navbar />
      <DrinksBreakRoutes> </DrinksBreakRoutes>
      <Footer />
    </>
  );
}

export default App;
