import './App.css';
import { useReducer, useState, useEffect } from "react";
import axios from "axios";
import { reducer } from './reducer';

const initialState = {
  data: "",
  loading: false,
  error: ""
}

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);
  const { data, loading, error } = state; // destructring

  const fetchDogPhoto = () => {

    dispatch({ type: "FETCH_START" });

    axios
      .get("https://dog.ceo/api/breeds/image/random")
      .then((res) => {
        dispatch({ type: "FETCH_SUCCESS", payload: res.message }); // kopek resmi res icinde message seklinde idi. 
        // onu aldik ve payload atadik. yani artik payload aldigimiz data daki kopek resmi
      })
      .catch(() => {
        dispatch({ type: "FETCH_ERROR", payload: "Error fetching data" }); // error oldugunda burdan gonderdigimiz mesaj cikacak. 
        // payload a error mesaj verdik
      })

  }

  return (
    <div className="App">
      {/* <header className="App-header"> */}
      {
        data && (
          <img src={data} className="App-logo" alt="Random Dog" />
        )
      }

      {error && <p>{error}</p>}

      <button onClick={fetchDogPhoto} disabled={loading}></button>

      {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> 
      </header>*/}
    </div>
  );
}

export default App;
