import Header from "@component/MainPage/Header";
import Navbar from "@component/MainPage/Navbar";
import { Outlet } from "react-router-dom";

export default function BasePage() {
  return (
    <div className='h-screen'>
      <div className='h-full flex flex-row'>
        <div className='w-64'>
          <Header />
          <Navbar />
        </div>
        <Outlet />
      </div>
    </div>
  )
}