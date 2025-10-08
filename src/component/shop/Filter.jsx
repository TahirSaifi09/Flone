import { CiSearch } from "react-icons/ci";

export default function Filter(){
    return(
        <div className="w-1/5 bg-green-400">
            <h2>Search</h2>
            <div className="flex items-center border">
                <input type="search" name="search" placeholder="Search here..."  className="outline-none p-2 "/>
                <CiSearch className="text-2xl border-l "/>
            </div>
        </div>
    )
}