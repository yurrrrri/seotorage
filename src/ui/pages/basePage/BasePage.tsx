import { Outlet } from "react-router-dom";
import Header from "./Header";
import Navbar from "./Navbar";
import ContentSection from "./ContentSection";

export function BasePage() {
  return (
    <div className='min-h-screen flex flex-col'>
      <Header />
      <ContentSection>
        <Outlet />
      </ContentSection>
      <Navbar />
    </div>
  )
}