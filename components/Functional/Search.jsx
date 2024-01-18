export default function Search(){
    return (
        <div className="flex items-center gap-3 w-full">
            <i class="fa-solid fa-magnifying-glass text-[#ffffff79]"></i>
            <input type="text" placeholder="Search" className="bg-transparent border-[1px] border-[#ffffff42] rounded-full focus:outline-none py-1 px-4 text-sm w-full"/>
        </div>
    )
}