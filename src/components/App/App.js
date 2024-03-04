import "./App.css";
import { useEffect, useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Preloader from "../Preloader/Preloader";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import { search } from "../../utils/api";
import About from "../About/About";

const App = () => {
  const [searchQuery] = useState("");
  const [error, setError] = useState(null);
  const [page] = useState(1);
  const [searchItems, setSearchItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const onSearch = (searchQuery) => {
    setIsLoading(true);
    return search(searchQuery)
      .then((searchItems) => {
        setSearchItems(searchItems);
        if (searchItems.length === 0) {
          setError("No results found for the query search");
        } else {
          setError(null);
        }
      })
      .catch(console.error)
      .finally(() => {
        setIsLoading(false);
      });
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await search(searchQuery, page);
        const newData = response.articles;
        setSearchItems((prevItems) => [...prevItems, ...newData]);
        setError(null);
      } catch (error) {
        setError(
          "Sorry, something went wrong during the request. There may be a connection issue or the server may be down. Please try again later."
        );
      } finally {
        setIsLoading(false);
      }
    };

    if (searchQuery) {
      fetchData();
    }
  }, [searchQuery, page]);

  return (
    <HashRouter basename="/">
      <div className="page">
        <Header />
        <Routes>
          <Route
            path="/"
            element={<Main onSearch={onSearch} searchItems={searchItems} />}
          />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
      {isLoading ? <Preloader /> : null}
    </HashRouter>
  );
};

export default App;
