import {BrowserRouter, Routes, Route} from "react-router-dom";
import {DopeLanding} from "./pages/DopeLanding";
import {Temp2} from "./pages/Temp2";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<DopeLanding/>}/>
                    <Route path={"/temp"} element={<Temp2/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
