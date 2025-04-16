import { useState } from "react";
import { Header } from "./Header";
import axios from "axios";
import { Card } from "./Card";
import "./style.css";

export const Search = () => {
  const [inputValue, setInputValue] = useState("");
  const [bookData, setBookData] = useState([]);

  const handleButtonClick = () => {
    axios
      .get(
        "https://www.googleapis.com/books/v1/volumes?q=" +
          inputValue +
          "&key=AIzaSyA1NmJQe9WotVjLAoKqY-lihhDVZPSbE6o"
      )
      .then((res) => setBookData(res.data.items))
      .catch((err) => console.log(err));
    setInputValue("");
  };
  return (
    <div>
      <Header />
      <div>
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleButtonClick}>search</button>
      </div>
      <div className="container">{<Card book={bookData} />}</div>
    </div>
  );
};
