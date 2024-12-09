import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./components/HomePage";
import { MyCollection } from "./components/MyCollection";
import { MissingBooks } from "./components/MissingBooks";
import { Whishlist } from "./components/WishList";
import { Recomendations } from "./components/Recomendations";
import { Search } from "./components/Search";
import { Settings } from "./components/Settings";
import { Help } from "./components/Help";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/collection" element={<MyCollection />} />
          <Route path="/missingBooks" element={<MissingBooks />} />
          <Route path="/whishlist" element={<Whishlist />} />
          <Route path="/recomendations" element={<Recomendations />} />
          <Route path="/search" element={<Search />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/help" element={<Help />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
