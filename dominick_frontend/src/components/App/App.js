import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Preloader from "../Preloader/Preloader";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import Main from "../Main/Main";
import About from "../About/About";
import { search } from "../../utils/api";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState({});
  const [activeModal, setActiveModal] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleCurrentUser = (data) => {
    setCurrentUser(data);
  };

  const handleCreateModal = (modalName) => {
    setActiveModal(modalName);
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const onSearch = () => {
    setIsLoading(true);
    return search()
      .then(() => {
        handleCloseModal();
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

  return (
    <CurrentUserContext.Provider value={{ isLoggedIn }}>
      <BrowserRouter>
        <div className="page">
          <Header onCreateModal={handleCreateModal} />
          <Routes>
            <Route
              path="/"
              element={<Main isLoggedIn={isLoggedIn} onSearch={onSearch} />}
            />
            <Route path="/about" element={<About />} />
            {/* <Route path="/*" element={<NotFoundPage />} /> */}
          </Routes>
          <Footer />
          {activeModal === "LoginModal" && (
            <LoginModal
              onCreateModal={handleCreateModal}
              onClose={handleCloseModal}
              buttonText="Sign In"
              setActiveModal={setActiveModal}
              currentUser={currentUser}
              isLoading={isLoading}
            />
          )}
          {activeModal === "RegisterModal" && (
            <RegisterModal
              onClose={handleCloseModal}
              onCreateModal={handleCreateModal}
              buttonText="Sign Up"
              setActiveModal={setActiveModal}
            />
          )}
        </div>
        {isLoading ? <Preloader /> : null}
      </BrowserRouter>
    </CurrentUserContext.Provider>
  );
};

export default App;
