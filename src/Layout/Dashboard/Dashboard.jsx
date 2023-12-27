import { Link, NavLink, Outlet } from "react-router-dom";
import {
  FaShoppingCart,
  FaWallet,
  FaCalendarAlt,
  FaHome,
} from "react-icons/fa";
import useCart from "../../hooks/useCart";

const Dashboard = () => {

  const [cart] = useCart();

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet />
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side bg-orange-300">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full">
          {/* Sidebar content here */}
          <li>
            <Link to="/dashboard/home">
              <FaHome></FaHome>Home
            </Link>
          </li>
          <li>
            <Link to="/dashboard/reservations">
              <FaCalendarAlt></FaCalendarAlt>Reservations
            </Link>
          </li>
          <li>
            <Link to="/dashboard/mycart">
              <FaWallet></FaWallet>Payment History
            </Link>
          </li>
          <li>
            <Link to="/dashboard/mycart">
              <FaShoppingCart></FaShoppingCart>My Cart
              <span className="badge badge-secondary">+{cart?.length || 0}</span>
            </Link>
          </li>

          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome></FaHome> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu"> Our Menu</NavLink>
          </li>
          <li>
            <NavLink to="/order/salad">Order Food</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
