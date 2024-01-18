import AdminGames from "@/components/Admin/AdminGames";
import UploadGame from "@/components/Admin/UploadGame";

export default function(){
    return (
        <div className="flex flex-col gap-8">
            <UploadGame/>
            <AdminGames/>
        </div>
    )
}