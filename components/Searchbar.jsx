import React, { useState } from "react";

export const Searchbar = ({ ONApplyFilter }) => {
  const [query, setQuery] = useState("");
  const [employmentType, setEmploymentType] = useState("");
  const [location, setLocation] = useState("");

  const EmploymentType = [
    "FULLTIME",
    "CONTRACTOR",
    "PARTTIME",
    "INTERN",
  ];

  const locationType = ["Onsite", "Remote"];

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  const handleEmploymentTypeChange = (e) => {
    setEmploymentType(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSearch = () => {
    if(location == "" && query=="" && employmentType==""){
      return alert("Please fill out all the filter field")
    }
if(location=="Remote"){
  setLocation(true)
}else{
  setLocation(false)
}
console.log(query,location,employmentType);
    ONApplyFilter(location,employmentType,query);
  };

  return (
    <div className="flex items-center space-x-4 searchbar justify-between">
      <div className="relative">
        <input
          type="text"
          className="pl-10 pr-4 py-2 w-80 border text-xs border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
          placeholder="Frontend"
          value={query}
          onChange={handleQueryChange}
        />
      </div>

      <select
        className="px-4 py-2 w-64 text-xs border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
        value={employmentType}
        onChange={handleEmploymentTypeChange}
      >
        <option value="option1">Employment Type</option>
        {EmploymentType.map((employ, index) => (
          <option key={index} value={employ}>
            {employ}
          </option>
        ))}
      </select>

      <select
        className="px-4 py-2  w-64 border text-xs border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
        value={location}
        onChange={handleLocationChange}
      >
        <option value="option1">Location</option>
        {locationType.map((locate, index) => (
          <option key={index} value={locate}>
            {locate}
          </option>
        ))}
      </select>

      <button
        className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
        onClick={handleSearch}
      >
        Find Job
      </button>
    </div>
  );
};
