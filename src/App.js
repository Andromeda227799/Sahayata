// import logo from './logo.svg';
import './App.css';

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./pages/Layout";
import Home from "./pages/home";
import Search from './pages/Search';
import Transaction from './pages/Transaction';
// import Blogs from "./pages/Blogs";
// import Contact from "./pages/Contact";
// import NoPage from "./pages/NoPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" >
          <Route index element={<Home />} />
          {/* {/* <Route path="blogs" element={<Blogs />} /> */}
          <Route path="search" element={<Search />} />
          <Route path="transaction" element={<Transaction />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
