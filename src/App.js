import "./App.css";

import { DrinksBreakRoutes } from "./Routes/DrinksBreakRoutes.jsx";
import { Navbar, Footer } from "./layoutcomponent/index";

function App() {
  return (
    <>
      {console.log("app")}
      <Navbar />
      <DrinksBreakRoutes> </DrinksBreakRoutes>
      <Footer />
    </>
  );
}

export default App;
