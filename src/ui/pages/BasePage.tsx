import ContentSection from "@component/BasePage/ContentSection";
import Header from "@component/BasePage/Header";
import Navbar from "@component/BasePage/Navbar";
import { Outlet } from "react-router-dom";

export function BasePage() {
  return (
    <div className='min-h-screen'>
      <div className='h-full min-h-screen flex flex-row'>
        <div className='w-64'>
          <Header />
          <Navbar />
        </div>
        <ContentSection>
          <Outlet />
        </ContentSection>
      </div>
    </div>
  )
}