import { Link, NavLink, Outlet } from "react-router-dom";
import {
  FaShoppingCart,
  FaWallet,
  FaHome,
  FaUtensils,
  FaUsers,
} from "react-icons/fa";
import useCart from "../../hooks/useCart";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {
  const [cart] = useCart();
  // TODO: load data from the server
  // const isAdmin = true;

  const [isAdmin] = useAdmin(); 

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet />
        <label
          htmlFor="my-drawer-2"
          className="btn btn-warning drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-orange-300">
          {isAdmin ? (
            <>
            <li>
                <Link to="/dashboard/adminHome">
                  <FaHome></FaHome>Admin Home
                </Link>
              </li>
              <li>
                <Link to="/menu"><FaUtensils></FaUtensils>
                  Add Item
                </Link>
              </li>
              <li>
                <Link to="/dashboard/mycart">
                  <FaWallet></FaWallet>Manage Item
                </Link>
              </li>
              <li>
                <Link to="/dashboard/allUsers">
                  <FaUsers></FaUsers>All Users
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="allUsers">
                  <FaHome></FaHome>User Home
                </Link>
              </li>
              
              <li>
                <Link to="/dashboard/mycart">
                  <FaWallet></FaWallet>Payment History
                </Link>
              </li>
              <li>
                <Link to="/dashboard/mycart">
                  <FaShoppingCart></FaShoppingCart>My Cart +{cart?.length || 0}
                </Link>
              </li>
            </>
          )}
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
            <NavLink to="/orderitem/:category">Order Food</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
