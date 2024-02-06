import AssetsContainer from "@/components/Containers/AssetsContainer";
import Filter from "@/components/Functional/Filter";

export default function Assets(){
    const keywords = [
        {
            text: "3D",
            icon: <i class="fa-solid fa-cube"></i>
        },
        {
            text: "Art",
            icon: <i class="fa-solid fa-brush"></i>
        },
        {
            text: "Code",
            icon: <i class="fa-solid fa-code"></i>
        },
        {
            text: "Sfx",
            icon: <i class="fa-solid fa-volume-high"></i>
        },
        {
            text: "Music",
            icon: <i class="fa-solid fa-music"></i>
        }
    ]
    return(
        <div className="flex flex-col gap-5">
            <h1 className="text-center text-3xl mt-5">Coming Soon...</h1>
            {/* <Filter keywords={keywords}/>
            <AssetsContainer/> */}
        </div>
    )
}