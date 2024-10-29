import Oscillations from "../Advanced CGs/Oscillations";
import logo from "@assets/STAR.png";


export default function Landing(){
    return (
        <div className="w-screen h-screen">

            <img src={logo} alt="" />

            <Oscillations/>

        </div>
    )
}