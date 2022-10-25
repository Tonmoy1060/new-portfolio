import logo from "./logo.svg";
import "./App.css";
import Header from "./pages/Shared/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import AllServices from "./pages/AllServices/AllServices";
import Footer from "./pages/Shared/Footer";
import Login from "./pages/Login/Login";
import Register from "./pages/Login/Register";
import RequireAuth from "./pages/Shared/RequireAuth";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./pages/Dashboard/Dashboard";
import BookingList from "./pages/Dashboard/BookingList";
import Book from "./pages/Dashboard/Book";
import Review from "./pages/Dashboard/Review";
import MakeAdmin from "./pages/Dashboard/MakeAdmin";
import RequireAdmin from "./pages/Shared/RequireAdmin";
import OrderList from "./pages/Dashboard/OrderList";
import AddService from "./pages/Dashboard/AddService";
import PageNotFound from "./pages/Shared/PageNotFound";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="max-w-7xl  mx-auto">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="home" element={<Home></Home>}></Route>
        <Route
          path="allservices"
          element={
            <RequireAuth>
              <AllServices></AllServices>
            </RequireAuth>
          }
        ></Route>
        <Route path="login" element={<Login></Login>}></Route>
        <Route path="register" element={<Register></Register>}></Route>
        <Route path="dashboard" element={<Dashboard></Dashboard>}>
          <Route index  element={<BookingList></BookingList>}>
            {" "}
          </Route>
          <Route path="bookinglist" element={<BookingList></BookingList>}>
            {" "}
          </Route>
          <Route path="book/:id" element={<Book></Book>}>
            {" "}
          </Route>
          <Route path="review" element={<Review></Review>}>
            {" "}
          </Route>
          <Route path="makeAdmin" element={<RequireAdmin><MakeAdmin></MakeAdmin></RequireAdmin>}>
            {" "}
          </Route>
          <Route path="orderList" element={<RequireAdmin><OrderList></OrderList></RequireAdmin>}>
            {" "}
          </Route>
          <Route path="addService" element={<RequireAdmin><AddService></AddService></RequireAdmin>}>
            {" "}
          </Route>
        </Route>
        <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
