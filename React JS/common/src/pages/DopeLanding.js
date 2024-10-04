import {TechPreloader} from "../components/TechPreloader";
import "../styles/DopeLanding.css";
import {Link, useNavigate} from "react-router-dom";

export const DopeLanding = () => {

    const navigator = useNavigate();


    function routeToTemp() {
        if(!document.startViewTransition) {
            navigator("/temp");
            return;
        }

        document.startViewTransition(()=> navigator("/temp"))
    }
    return (
        <>
            <TechPreloader/>
            <div className="dope-landing w-screen h-screen overflow-hidden">
                    <img onClick={routeToTemp} width={"100px"} src="https://images.unsplash.com/photo-1726231160459-308206afb13c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""/>
            </div>
        </>
    )
}