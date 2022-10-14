import { useState } from "react";
import "./App.css";
import purplecow from "./assets/images/purplecow.png";

const App = () => {
  const [data, setData] = useState({ data: {} });
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState("");

  const handleClick = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://api.countapi.xyz/hit/johnelder.net/1ccb732e-b55a-4404-ad3f-0f99c02fe44e?",
        {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      const result = await response.json();

      setData(result);
    } catch (err) {
      setErr(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <header className="App-header">
        <img src={purplecow} alt="Purple Cow Logo" />
        <br />

        <h1> Project Purple Cow</h1>
        {err && <h2>{err}</h2>}
        <button onClick={handleClick} class="App-button">
          Hit the Counter
        </button>

        {isLoading && <h2>Loading...</h2>}

        <h2>The Count: {data.value}</h2>
      </header>
    </div>
  );
};

export default App;
