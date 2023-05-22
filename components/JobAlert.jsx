
const JobAlert = () => {
  return (
    <section className="flex  flex-col jobalert">
        <h3 className="mt-4 mb-2 font-semibold">Create Job Alert</h3>
        <p className="mb-2">Create a Oppurchunity to get new Job</p>
        <input type="text "  className="mb-2"placeholder="Enter your Email" />
        <button className=" border-2 border-green-500 rounded-xl hover:bg-green-500">Create Job Alert</button>
    </section>
  )
}

export default JobAlert