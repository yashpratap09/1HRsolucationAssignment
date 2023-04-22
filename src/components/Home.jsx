import React, { useState, useEffect } from "react";

import FactsComponent from "./FactsComponent";

const Home = () => {
    const [loading, setLoading] = useState(true);
    
    const [card, setCard] = useState([]);
  const [page, setPage] = useState(1);
  

  const getCardData = async () => {
    const res = await fetch(
      `https://catfact.ninja/facts?page=${page}&limit=6`


    );
    

    const data = await res.json();


    //  console.log(data.data);

    setCard((prev) => [...prev, ...data.data]);


    setLoading(false);
  };

  useEffect(() => {
    getCardData();
  }, [page]);

  const handelInfiniteScroll = async () => {
    
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        setLoading(true);
        setPage((prev) => prev + 1);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handelInfiniteScroll);
    return () => window.removeEventListener("scroll", handelInfiniteScroll);
  }, []);

  return (
    <>
      <FactsComponent Facts={card} />
      {loading && <h2>Loading....</h2> }
    </>
  );
};

export default Home;
