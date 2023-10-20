import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import HomeTemplate from "./templates/HomeTemplate/HomeTemplate";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeTemplate />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
