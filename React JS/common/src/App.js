import {BrowserRouter, Routes, Route} from "react-router-dom";
import {DopeLanding} from "./pages/DopeLanding";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<DopeLanding/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
