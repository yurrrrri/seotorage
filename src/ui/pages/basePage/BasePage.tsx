import { Outlet } from "react-router-dom";
import Header from "./Header";
import Navbar from "./Navbar";
import ContentSection from "./ContentSection";

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