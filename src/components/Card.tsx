import react, { useState } from "react";
import "./style.css";

export const Card = ({ book }: any) => {
  const addBook = (item: any) => {
    console.log(item);
  };
  return (
    <>
      {book.map((item: any) => {
        let thumbnail =
          item.volumeInfo.imageLinks &&
          item.volumeInfo.imageLinks.smallThumbnail;
        let amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
        if (thumbnail != undefined && amount != undefined) {
          return (
            <>
              <div className="card">
                <img src={thumbnail} alt="" />
                <div className="bottom">
                  <h3 className="title">{item.volumeInfo.title}</h3>
                  <p className="amount">{amount}</p>
                  <button
                    className="cardButton"
                    onClick={() => {
                      addBook(item);
                    }}
                  >
                    Add to Collection
                  </button>
                  mo0
                </div>
              </div>
            </>
          );
        }
      })}
    </>
  );
};
