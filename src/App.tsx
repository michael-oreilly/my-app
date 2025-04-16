import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "./components/HomePage";
import { MyCollection } from "./components/MyCollection";
import { MissingBooks } from "./components/MissingBooks";
import { Whishlist } from "./components/WishList";
import { Recomendations } from "./components/Recomendations";
import { Search } from "./components/Search";
import { Settings } from "./components/Settings";
import { Help } from "./components/Help";
import { Login } from "./components/Login";
import { useContext } from "react";
import { AuthContext } from "./components/AuthContext";
import { Register } from "./components/register";

function App() {
  const { currentUser } = useContext(AuthContext);

  const RequireAuth: React.FC<{ children: React.ReactNode }> = ({
    children,
  }) => {
    return currentUser ? <>{children}</> : <Navigate to="/register" />;
  };

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route
            index
            element={
              <RequireAuth>
                <HomePage />
              </RequireAuth>
            }
          />
          <Route
            path="/home"
            element={
              <RequireAuth>
                <HomePage />
              </RequireAuth>
            }
          />
          <Route
            path="/collection"
            element={
              <RequireAuth>
                <MyCollection />
              </RequireAuth>
            }
          />
          <Route
            path="/missingBooks"
            element={
              <RequireAuth>
                <MissingBooks />
              </RequireAuth>
            }
          />
          <Route
            path="/whishlist"
            element={
              <RequireAuth>
                <Whishlist />
              </RequireAuth>
            }
          />
          <Route
            path="/recomendations"
            element={
              <RequireAuth>
                <Recomendations />
              </RequireAuth>
            }
          />
          <Route
            path="/search"
            element={
              <RequireAuth>
                <Search />
              </RequireAuth>
            }
          />
          <Route
            path="/settings"
            element={
              <RequireAuth>
                <Settings />
              </RequireAuth>
            }
          />
          <Route
            path="/help"
            element={
              <RequireAuth>
                <Help />
              </RequireAuth>
            }
          />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
