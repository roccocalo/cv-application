
function EducationForm(props) {
  const { degree, instituteName, location, startDate, endDate, id } = props.form;
  const { onChange, onDelete, index } = props;

  return (

    <>
      <div className="flex flex-col gap-3 p-5 " id={id} >
        <div className="flex gap-5 " >
          <input type="text" placeholder="Institute Name" value={instituteName} onChange={(e) => onChange(index, e)} data-key="instituteName" className="inputForm" />
          <input type="text" placeholder="Degree" value={degree} onChange={(e) => onChange(index, e)} data-key="degree" className="inputForm" />
        </div>
        <div className="flex gap-5 ">
          <input type="text" placeholder="Start Date" value={startDate} onChange={(e) => onChange(index, e)} data-key="startDate" className="inputForm" />
          <input type="text" placeholder="End Date" value={endDate} onChange={(e) => onChange(index, e)} data-key="endDate" className="inputForm" />
          <input type="text" placeholder="Location" value={location} onChange={(e) => onChange(index, e)} data-key="location" className="inputForm" />
        </div>
        <button className="bg-slate-300 rounded-lg p-1 " onClick={onDelete}>Delete Education</button>
      </div>


    </>

  )
}

export default EducationForm