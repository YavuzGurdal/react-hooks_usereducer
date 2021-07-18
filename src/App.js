import './App.css';
import { useReducer } from "react";
import axios from "axios";
import { reducer } from './reducer';

const initialState = {
  data: "",
  loading: false,
  error: ""
}

function App() {

  const [state, dispatch] = useReducer(reducer, initialState); // birinci parametre reducer, ikinci parametre state 
  const { data, loading, error } = state; // destructuring

  const fetchDogPhoto = () => {

    dispatch({ type: "FETCH_START" });

    axios
      .get("https://dog.ceo/api/breeds/image/random")
      .then((res) => {
        //console.log(res)
        dispatch({ type: "FETCH_SUCCESS", payload: res.data.message }); // kopek resmi res.data icinde message seklinde idi. 
        // onu aldik ve payload'a atadik. yani artik payload aldigimiz data daki kopek resmi
        // payload bir object{} oldugu icin icine herseyi koyabiliriz
      })
      .catch(() => {
        dispatch({ type: "FETCH_ERROR", payload: "Error fetching data" }); // error oldugunda burdan gonderdigimiz mesaj cikacak. 
        // payload a error mesaj verdik
      })

  }

  return (
    <div className="App">
      <header className="App-header">
        {
          data && (
            <img src={data} className="App-logo" alt="Random Dog" />
          )
        }

        {error && <p>{error}</p>}

        <button className="fetchButton" onClick={fetchDogPhoto} disabled={loading}>Fetch Dog Photo</button>

      </header>
    </div>
  );
}

export default App;