import React, { useMemo } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import AuthPage from "pages/AuthPage";


const App: React.FC = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AuthPage />} />
            </Routes>
        </BrowserRouter>
       
    )
}

export default App