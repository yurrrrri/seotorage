import ContentSection from "../components/MainPage/ContentSection";
import Header from "../components/MainPage/Header";
import Navbar from "../components/MainPage/Navbar";

export default function MainPage() {
  return (
    <div className='h-screen'>
      <div className='h-full flex flex-row'>
        <div className='w-64'>
          <Header />
          <Navbar />
        </div>
        <ContentSection />
      </div>
    </div>
  )
}