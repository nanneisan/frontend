import Dashboard from "../pages/Dashboard";
import User from "../pages/User";
import AddUser from "../pages/User/AddUser";

const routes = [
  { name: "dashboard", component: Dashboard },
  { name: "user", component: User },
  { name: "user_entry", component: AddUser },
];

export default { routes };
