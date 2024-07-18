import { Route, Routes } from "react-router-dom";
import { LayoutMain } from "./layout";
import { Home } from "@/pages/home";

import { paths } from "@/shared/config/paths";

import { Tasks } from "@/pages/tasks";

// const TasksPage = lazy(() =>
//   import("@/pages/tasks").then((module) => ({ default: module.Tasks }))
// );

const App = () => {
  return (
    <Routes>
      <Route element={<LayoutMain />}>
        <Route path={paths.home} element={<Home />} />
        <Route path={paths.tasks} element={<Tasks />} />
        <Route path={paths.design} element={<div>Design</div>} />
      </Route>
    </Routes>
  );
};

export default App;
