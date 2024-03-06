function ExperienceForm(props) {
    const { postion, companyName, location, startDate, endDate, description, id } = props.form;
    const { onChange, onDelete, index } = props;
  
    return (
      <>
        <div className="flex flex-col gap-3 p-5 "  >
          <div className="flex gap-5 " >
            <input type="text" placeholder="Institute Name" value={companyName} onChange={(e) => onChange(index, e)} data-key="companyName" className="inputForm" />
            <input type="text" placeholder="Degree" value={postion} onChange={(e) => onChange(index, e)} data-key="postion" className="inputForm" />
          </div>
          <div className="flex gap-5 ">
            <input type="text" placeholder="Start Date" value={startDate} onChange={(e) => onChange(index, e)} data-key="startDate" className="inputForm" />
            <input type="text" placeholder="End Date" value={endDate} onChange={(e) => onChange(index, e)} data-key="endDate" className="inputForm" />
            <input type="text" placeholder="Location" value={location} onChange={(e) => onChange(index, e)} data-key="location" className="inputForm" />
          </div>
          <div className="flex gap-5 ">
          <textarea placeholder="Description" value={description} onChange={(e) => onChange(index, e)} data-key="description" rows={3} className="rounded w-full p-1 pl-2" />
          </div>
          <button className="bg-slate-300 rounded-lg p-1 " onClick={() => onDelete(index, id)}>Delete Experience</button>
        </div>
      </>
    )
  }
  
  export default ExperienceForm
