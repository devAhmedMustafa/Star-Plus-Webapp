import SocialMediaAtom from "@/components/Advanced CGs/SocialMedia";

export default function Contact(){
    return(
        <div className="flex flex-col lg:grid grid-cols-2 items-center h-96">
            <div className="flex justify-center items-center lg:h-full">
                <SocialMediaAtom/>
            </div>
            <div>
                <form>
                    <textarea className="bg-[#1d1d1d] w-full focus:outline-none p-4 rounded-md" placeholder="Tell us whatever you want."></textarea>

                    <button className="cursor-pointer flex items-center fill-pink-400 bg-pink-950 hover:bg-pink-900 active:border active:border-pink-400 rounded-md duration-100 p-2"
                    title="Save">

                    <span className="text-sm text-pink-400 font-bold pr-1">Send Message</span>
                    </button>

                </form>
            </div>
        </div>
    )
}