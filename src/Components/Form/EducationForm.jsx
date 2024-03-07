function EducationForm(props) {
  const { degree, instituteName, location, startDate, endDate, id } = props.form;
  const { onChange, onDelete, index } = props;

  return (
    <>
      <div className="flex flex-col gap-3 p-5 "  >
        <div className="flex gap-5 " >
          <input type="text" placeholder="Institute Name" value={instituteName} onChange={(e) => onChange(index, e)} data-key="instituteName" className="inputForm" />
          <input type="text" placeholder="Degree" value={degree} onChange={(e) => onChange(index, e)} data-key="degree" className="inputForm" />
        </div>
        <div className="flex gap-5 ">
          <input type="text" placeholder="Start Date" value={startDate} onChange={(e) => onChange(index, e)} data-key="startDate" className="inputForm" />
          <input type="text" placeholder="End Date" value={endDate} onChange={(e) => onChange(index, e)} data-key="endDate" className="inputForm" />
          <input type="text" placeholder="Location" value={location} onChange={(e) => onChange(index, e)} data-key="location" className="inputForm" />
        </div  >
        <div className="flex justify-center">
          <button className="bg-slate-200 rounded-lg border border-sky-600 w-fit text-slate-900 px-4  p-1 " onClick={() => onDelete(index, id)}>Delete Education</button></div>
      </div>
    </>
  )
}

export default EducationForm