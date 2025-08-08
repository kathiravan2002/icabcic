import { BrowserRouter, Route, Routes, } from "react-router-dom";
import Scrolltotop from "./Scrolltop";
import Main from "../core/main/Main";
import Homepage from "../components/Homepage";
import Contactuspage from "../components/Contactuspage";
import Papersubmissionpage from "../components/Papersubmissionpage";



export default function Approuter() {
  return (
    <BrowserRouter>
      <Scrolltotop />
      <Routes>
        <Route element={<Main />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/contact-us" element={<Contactuspage/>} />
          <Route path="/paper-submission" element={<Papersubmissionpage/>} />

        </Route>
      </Routes>

    </BrowserRouter>
  );
}