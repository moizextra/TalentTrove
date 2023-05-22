import React from 'react'

const titles = [
    {
        title: "Analyst",
    },
    {
        title: "Application ",
    },
    {
        title: "Architect",
    },
    {
        title: "Associate",
    },
    {
        title: "Automation",
    },
    {
        title: "Backend Developer",
    },
    {
        title: "Business Analayst",
    },

]
const jobrequirement=[

    {
experience:"1-2 years",
    },
    {
experience:"No Degree",
    },
    {
experience:"Degree(Any Stream)",
    },
]
const locations=[
    {location:"Remote"},
    {location:"Onsite"},
]
const JobTitles = () => {
    return (
        <section className="mt-8">
            <h3 className="font-semibold">Job Titles</h3>
            <div className="mt-5">
                {titles.map((title) => {
                    return <div className="mb-3">
                    <input type="checkbox" className="mr-3" id="vehicle1" name="vehicle1" value="Bike" />
                    <label for="vehicle1">{title.title}</label><br></br>
                    </div>
})}
            </div>
            <h3 className="font-semibold">Job Requirement</h3>
            <div className="mt-5">
                {jobrequirement.map((require) => {
                    return <div className="mb-3">
                    <input type="checkbox" className="mr-3" id="vehicle1" name="vehicle1" value="Bike" />
                    <label for="vehicle1">{require.experience}</label><br></br>
                    </div>
})}
            </div>
            <h3 className="font-semibold">Location</h3>
            <div className="mt-5">
                {locations.map((location) => {
                    return <div className="mb-3">
                    <input type="checkbox" className="mr-3" id="vehicle1" name="vehicle1" value="Bike" />
                    <label for="vehicle1">{location.location}</label><br></br>
                    </div>
})}
            </div>
        </section>
    )
}

export default JobTitles