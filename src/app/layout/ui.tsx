import { Header } from "@/widgets/header";

import { Outlet } from "react-router-dom";

const LayoutMain = () => {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
};

export default LayoutMain;
