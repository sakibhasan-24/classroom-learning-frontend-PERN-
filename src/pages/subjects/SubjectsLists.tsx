import { Breadcrumb } from "@/components/refine-ui/layout/breadcrumb"
import { ListView } from "@/components/refine-ui/views/list-view"
import { DEPARTMENT_OPTION } from "@/constant"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@radix-ui/react-select"
import { Search } from "lucide-react"
import { useState } from "react"


const SubjectsLists = () => {
  const [searchQuery,setSearchQuery]=useState("")
  const [selectedDepartment,setSelectedDepartment]=useState("all")
  return (
   <ListView>
    <Breadcrumb/>
    <h1 className="text-2xl font-bold">Subject</h1>
      <div>
        <p className="text-xl font-bold">
          quick access to element
        </p>
        <div className="my-6  ">
          <div className="my-4">
            <div className="flex gap-2 items-center border-2 rounded-md border-gray-300 ">
              <Search className="text-xl mx-2"/>
              <input type="text"
               placeholder="search by name" className="sm:w-1/2 w-full p-2   outline-none" 
               value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)}/>
            </div>
            <div className=" ">
              <h1>Hello</h1>
            </div>
          </div>
        </div>
      </div>
   </ListView>
  )
}

export default SubjectsLists