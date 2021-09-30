import React from 'react';
import './App.css';
import requests from './requests';
import Row from "./Row";
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row
        title="Top picks by Amrit "
        fetchUrl={requests.fetchTrending}
        isLargeRow={true}
      />
      <Row title="Most Viewed" fetchUrl={requests.fetchTopRated} />
      <Row title="Trending Now" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchTopRated} />
      <Row title="Documentries" fetchUrl={requests.fetchDocumentaries} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchActionMovies} />
      
    </div>
  );
}

export default App;
