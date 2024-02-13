import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainBodyy from "./Components/MainBody";
import html2canvas from "html2canvas";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainBodyy />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
