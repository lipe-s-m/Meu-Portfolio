import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/index.tsx";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
