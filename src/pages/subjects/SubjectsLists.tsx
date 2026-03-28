
import { CreateButton } from "@/components/refine-ui/buttons/create.tsx"
import { DataTable } from "@/components/refine-ui/data-table/data-table"
// import { DataTable } from "@/components/refine-ui/data-table/data-table"
import { Breadcrumb } from "@/components/refine-ui/layout/breadcrumb"
import { ListView } from "@/components/refine-ui/views/list-view"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DEPARTMENT_OPTION } from "@/constant"
import { Subject } from "@/types"
import { useTable } from "@refinedev/react-table"

import { ColumnDef } from "@tanstack/react-table"

// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@radix-ui/react-select"
import { Search } from "lucide-react"


import { useMemo, useState } from "react"


const SubjectsLists = () => {
  const [searchQuery,setSearchQuery]=useState("")
  const [selectedDepartment,setSelectedDepartment]=useState("all")
  

  const subjectTable=useTable<Subject>({
    columns : useMemo<ColumnDef<Subject>[]>(
    () => [
      {
        id: "code",
        accessorKey: "code",
        size:100,
        header: () => <p className="ml-2">Code</p>,
        cell: ({ getValue }) =>  (
            <Badge className="px-2 py-1 rounded-md bg-neutral-800 text-gray-200">
              {getValue<string>()}
            </Badge>
          )
        
      },
      {
        id:"name",
        accessorKey: "name",
        size:200,
        header: () => <p className="ml-2">Name</p>,
        cell: ({ getValue }) =>(
          <span>{getValue<string>()}</span>
        )
      }
    ],
    []
  )
  ,
    refineCoreProps:{
      resource: "subject",
       pagination:{
      pageSize: 10,
      mode:"server"
    }
    }
  })
  // console.log(subjectTable)
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
            <div className="w-full flex gap-2 mt-4 sm:w-auto">
             <Select value={selectedDepartment || "all"} onValueChange={setSelectedDepartment}>
              <SelectTrigger className="w-full border-2 border-gray-300 rounded-md p-2">
                <SelectValue placeholder="Select  Department"/>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">
                  All Departments
                </SelectItem>
                {
                  DEPARTMENT_OPTION.map((dept)=>(
                    <SelectItem key={dept.value} value={dept.value}>
                      {dept.label}
                    </SelectItem>
                  ))
                }
              </SelectContent>
             </Select>
                <CreateButton resource="subject"/>
            </div>
          </div>
        </div>
        {/* <DataTable table={subjectTable}/> */}
        <DataTable table={subjectTable}/>
      </div>
   </ListView>
  )
}

export default SubjectsLists