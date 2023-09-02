import 'tailwindcss/tailwind.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import SearchPage from './components/SearchPage';
import HomePage from './components/HomePage';
import { toast, ToastContainer } from 'react-toastify';
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="white text-black min-h-screen">
      <NavBar />
      {isAuthenticated ? <SearchPage /> : <HomePage />}
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
