import Home from "../pages/Home";
import InventoryModule from "../pages/InventoryModule";
import HRPModule from "../pages/HRPModule";
import PageNotFound from "../pages/PageNotFound";
import Department from "../pages/Department";

const routes = [
  { path: "/", name: "Home", element: Home },
  { path: "/index", name: "Home", element: Home },
  { path: "/getting-started", name: "Home", element: Home },
  { path: "/module/inventory-management", name: "Home", element: InventoryModule },
  { path: "/module/hrm-management", name: "Home", element: HRPModule },
  { path: "/module/inventory-management/department", name: "Home", element: Department },
  { path: "*", name: "Page Not Found", element: PageNotFound },
];

export default routes;
