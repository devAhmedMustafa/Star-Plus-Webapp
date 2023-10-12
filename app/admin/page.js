import AdminGames from "@/components/AdminGames";
import UploadGame from "@components/UploadGame";

export default function(){
    return (
        <div className="flex flex-col gap-8">
            <UploadGame/>
            <AdminGames/>
        </div>
    )
}