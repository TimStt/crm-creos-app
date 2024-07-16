import { Route, Routes } from "react-router-dom";
import { LayoutMain } from "./layout";
import { Home } from "@/pages/home";

const App = () => {
  return (
    <Routes>
      <Route element={<LayoutMain />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
