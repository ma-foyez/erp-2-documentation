import Home from "../pages/Home";
import ModuleDetails from "../pages/ModuleDetails";
import PageNotFound from "../pages/PageNotFound";

const routes = [
  { path: "/", name: "Home", element: Home },
  { path: "/index", name: "Home", element: Home },
  { path: "/getting-started", name: "Home", element: Home },
  { path: "/module/:moduleName", name: "Home", element: ModuleDetails },
  { path: "*", name: "Page Not Found", element: PageNotFound },
];

export default routes;
