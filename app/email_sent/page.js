import Oscillations from "@/components/Advanced CGs/Oscillations";
import EmailSender from "@/components/Functional/EmailSender";

export default function SentEmailPage(){
    return (
        <div className="relative">
            <Oscillations/>
            <EmailSender/>
        </div>
    )
}