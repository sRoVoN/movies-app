import React from "react";
import { useMovies } from "../context/MoviesContext";

export default function Response() {
      const {searchQuery} = useMovies();
  return (
    <div className="response">
      <div className="response-header">Request and Response</div>
      <div className="response-box">
        <div className="query">
          <p>Request :</p>
          <a href={searchQuery} target="_blank" rel="noopener noreferrer">
            {searchQuery}
          </a>
        </div>
      </div>
    </div>
  );
}
