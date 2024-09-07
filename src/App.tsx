import { RouterProvider } from "react-router-dom";
import "./App.css";
import { Routers } from "./Components/Routers/Routers";

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1>React Router</h1>
        </header>
        <RouterProvider router={Routers} />
      </div>
    </>
  );
}

export default App;
