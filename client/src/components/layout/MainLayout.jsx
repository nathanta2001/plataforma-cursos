import Header from './Header';
import Footer from './Footer';  
import Sidebar from './Sidebar';


export default function MainLayout({ children }) {
  return (
    <div className="main-layout">
      <Header />
      <div className="layout-content">
        <Sidebar />
        <main className="content">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
}