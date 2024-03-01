import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./styles.css";
import Card from "../Card";
import Gallery from "../Gallery";
import DetailsPage from "../DetailsPage";
import NotFoundPage from "../NotFoundPage";
import HomePage from "../HomePage";
import AuthFormPage from '../AuthFormPage'


export default function App() {
  // Store API data here
  const [cpas, setCpas] = useState([]);
  const [detailsData, setDetailsData] = useState({});
  const [loginStatus, setLoginStatus] = useState(false)

  // Define an async function to JSONify the query response
  async function getData(url) {
    const res = await fetch(url);
    const data = await res.json();
    setCpas([])
    setCpas(cpas => cpas.concat(data.features))
  }

  useEffect(() => {
    // Call the async function
    getData(
      `https://api.geoapify.com/v2/places?api_key=${
        import.meta.env.VITE_CPA_KEY
      }&categories=office.accountant&filter=place:51d9d1938d628052c0595938a4ac3a5b4440f00101f90121af020000000000c00208`
    );
    if (localStorage.getItem('userToken')) {
      setLoginStatus(true)
    }
  }, []);

  // console.log(cpas)
  
  let authLink = <div className="flex lg:gap-5 md:gap-4 sm:gap-3 gap-2">
    <Link to="/auth/signup">
      <h2 className="text-white md:text-lg sm:text-md">Sign Up</h2>
    </Link>
    <Link to="/auth/login">
      <h2 className="text-white md:text-lg sm:text-md">Log In</h2>
    </Link>
  </div>

  if (loginStatus) {
        authLink = <button className="text-white md:text-lg sm:text-md" 
        onClick={() => {
          localStorage.clear() 
          setLoginStatus(false)
        }}>
        Log Out
    </button>
  }

  return (
    <>
      <nav className="flex items-center justify-between h-16 bg-gray-800 shadow-lg lg:px-9 md:px-6 px-3">
        <Link to="/">
          <h1 className="text-white font-bold md:text-3xl sm:text-2xl">
            CPA Finder
          </h1>
        </Link>
        {authLink}
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              cpas={cpas}
              refreshQueue={getData}
              updateDetails={setDetailsData}
            />
          }
        />

        <Route
          path="/details/:id"
          element={<DetailsPage cpa={detailsData} />}
        />
        <Route path="/*" element={<NotFoundPage />} />
        <Route path="/auth/:formType" element={<AuthFormPage setLoginStatus={setLoginStatus} />} />
      </Routes>
    </>
  );
}
