import ContentSection from "./ContentSection";
import Header from "./Header";
import Navbar from "./Navbar";

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