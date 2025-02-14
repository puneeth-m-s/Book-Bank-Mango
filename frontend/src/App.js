import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login"; // Ensure the correct file name

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/Login" element={<Login />} />
            </Routes>
        </Router>
    );
}

export default App;
