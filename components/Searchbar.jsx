"use client"
import React,{useState} from "react"
export const Searchbar = ({onFilter}) => {
  const[query,setquery]=useState("");
  const EmploymentType=[
    "Full Time",
    "Part Time",
    "Interns",
    "Contractor",
  ]
  const locationType=[
    "Onsite",
    "Remote",
  ]

const Passquery=()=>{
console.log("Moiz");
}

  return (
    <div className="flex items-center space-x-4 searchbar justify-between">
    <div className="relative">
      <input
        type="text"
        className="pl-10 pr-4 py-2 w-80 border text-xs border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
        placeholder="Frontend"
        value={query}
        onChange={(e) =>setquery(e.target.value)}
      />
 
    </div>

    <select className="px-4 py-2 w-64 text-xs border border-gray-300 rounded-lg focus:outline-none focus:border-green-500">
      <option value="option1">Employment Type</option>
      {EmploymentType.map((employ, index) => (
        <option key={index} value={employ}>
          {employ}
        </option>
      ))}
    </select>
    
    <select className="px-4 py-2  w-64 border text-xs border-gray-300 rounded-lg focus:outline-none focus:border-green-500">
      <option value="option1">Location </option>
      {locationType.map((locate, index) => (
        <option key={index} value={locate}>
          {locate}
        </option>
      ))}
    </select>
   <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600" onClick={Passquery}>
  Find Job
</button>
    
  </div>
  )
}
