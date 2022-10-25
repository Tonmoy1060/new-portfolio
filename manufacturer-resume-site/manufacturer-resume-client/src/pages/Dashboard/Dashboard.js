import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { TbBrandBooking } from "react-icons/tb";
import { MdOutlineRateReview, MdGroupAdd, MdOutlineAdd } from "react-icons/md";
import useAdmin from "../../hooks/useAdmin";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
import { GoListOrdered } from 'react-icons/go';


const Dashboard = () => {
  const [user, loading, error] = useAuthState(auth);
  const [admin, adminLoading] = useAdmin(user);

  if(loading || adminLoading){
    <Loading></Loading>
  }

  return (
    <div>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content p-14 bg-green-50">
          {/* <!-- Page content here --> */}
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-secondary flex absolute right-2 top-2 btn-xs md:btn-lg lg:btn-lg text-white drawer-button lg:hidden"
          >
            drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 py-9 overflow-y-auto w-50 bg-cyan-50 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li className="flex  justify-start">
              <Link
                className="btn btn-ghost hover:text-primary justify-start items-center text-secondary flex justify-start"
                to="/dashboard"
              >
                <TbBrandBooking className="text-lg" />
                Booking List
              </Link>
            </li>

            {/* <li className="flex  justify-start">
              <Link to={`/dashboard/book/+${}`}
                className="btn btn-ghost hover:text-primary justify-start items-center text-secondary"
              >
                <AiOutlineShoppingCart className="text-xl" />
                Book{" "}
              </Link>
            </li> */}

            <li className="flex  justify-start">
              <Link
                className="btn btn-ghost hover:text-primary justify-start items-center text-secondary"
                to="/dashboard/review"
              >
                <MdOutlineRateReview className="text-lg" />
                Review
              </Link>
            </li>
            {admin && (
              <li className="flex  justify-start">
                <Link
                  className="btn btn-ghost hover:text-primary justify-start items-center text-secondary"
                  to="/dashboard/makeAdmin"
                >
                  {" "}
                  <MdGroupAdd className="text-lg" />
                  Make Admin
                </Link>
              </li>
            )}
            {admin && (
              <li className="flex  justify-start">
                <Link
                  className="btn btn-ghost hover:text-primary justify-start items-center text-secondary"
                  to="/dashboard/orderList"
                >
                  {" "}
                  <GoListOrdered className="text-lg" />
                  OrderList
                </Link>
              </li>
            )}
            {admin && (
              <li>
                <Link
                  className="btn btn-ghost hover:text-primary justify-start items-center text-secondary"
                  to="/dashboard/addService"
                >
                  {" "}
                  <MdOutlineAdd className="text-lg" />
                  Add Service
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
