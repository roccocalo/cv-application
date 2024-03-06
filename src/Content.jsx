import { useState, useRef } from "react"
import uniqid from 'uniqid';
import ReactToPrint from "react-to-print";
import PrintableResume from "./Components/PrintableResume";
import exampleData from "./Components/exampleData"
import PersonalForm from "./Components/Form/PersonalForm"
import EducationForm from "./Components/Form/EducationForm"
import ExperienceForm from "./Components/Form/ExperienceForm";
import ResumeGenerator from "./Components/ResumeGenerator"

function Content() {
  const [privateInfo, setPrivateInfo] = useState(exampleData.privateInfo || {})
  const [educationInfo, setEducationInfo] = useState(exampleData.education)
  const [experienceInfo, setExperienceInfo] = useState(exampleData.experience)

  const handlePrivateInfo = (e) => {
    const { key } = e.target.dataset;
    setPrivateInfo({ ...privateInfo, [key]: e.target.value });
  }
//EDUCATION
  const handleEducationChange = (index, e) => {
    const { key } = e.target.dataset;
    const updatedEducationInfo = [...educationInfo];
    updatedEducationInfo[index] = { ...updatedEducationInfo[index], [key]: e.target.value };
    setEducationInfo(updatedEducationInfo);
  }

  const deleteEducationForm = (index,id) => {
    const updatedEducationInfo = [...educationInfo];
    updatedEducationInfo.splice(index, 1);
    setEducationInfo(updatedEducationInfo => updatedEducationInfo.filter(form => form.id !== id)) ;
  }

  const newEducation = () => {
    const updatedEducationInfo = [...educationInfo];
    const newEducationStudy = {
      id: uniqid(),
      instituteName: "",
      degree: "",
      startDate: "",
      endDate: "",
      location: ""
    }
    updatedEducationInfo.push(newEducationStudy)
    setEducationInfo(updatedEducationInfo);
  }

 //EXPERIENCE
  const handleExperienceChange = (index, e) => {
    const { key } = e.target.dataset;
    const updatedExperienceInfo = [...experienceInfo];
    updatedExperienceInfo[index] = { ...updatedExperienceInfo[index], [key]: e.target.value };
    setExperienceInfo(updatedExperienceInfo);
  }

  const deleteExperienceForm = (index,id) => {
    const updatedExperienceInfo = [...experienceInfo];
    updatedExperienceInfo.splice(index, 1);
    setExperienceInfo(updatedExperienceInfo => updatedExperienceInfo.filter(form => form.id !== id)) ;
  }

  const newExperience = () => {
    const updatedExperienceInfo = [...experienceInfo];
    const newExperienceList = {
      id: uniqid(),
      companyName: "",
      postion: "",
      startDate: "",
      endDate: "",
      location: "",
      description: ""
    }
    updatedExperienceInfo.push(newExperienceList)
    setExperienceInfo(updatedExperienceInfo);
  }

  const componentRef = useRef();


  return (
    <>
      <div className="flex flex-row justify-center bg-slate-300 items-center gap-24 py-10 px-40 ">
        <div className="bg-slate-600 h-fit p-4 w-2/5 ">   {/* form  */}


          <PersonalForm
            onChangeFunction={handlePrivateInfo}
            FullName={privateInfo.fullName}
            Email={privateInfo.email}
            Phone={privateInfo.phone}
            GitLink={privateInfo.gitLink}
          />

          <h1 className="font-bold text-white text-xl px-5">Education</h1>

          {educationInfo.map((form, index) =>
            <EducationForm
              form={form}
              key={form.id}
              index={index}
              onChange={handleEducationChange}
              onDelete={deleteEducationForm}
            />)}
          <div className="flex justify-center ">
            <button className="bg-slate-300 rounded-lg p-1 px-4 " onClick={newEducation}>Add Another Education</button></div>
        
            <h1 className="font-bold text-white text-xl px-5">Experience </h1>
            {experienceInfo.map((form, index) =>
            <ExperienceForm
              form={form}
              key={form.id}
              index={index}
              onChange={handleExperienceChange}
              onDelete={deleteExperienceForm}
            />)}
          <div className="flex justify-center ">
            <button className="bg-slate-300 rounded-lg p-1 px-4 " onClick={newExperience}>Add Another Experience</button></div>
        

        <ReactToPrint
                trigger={() => <button className="bg-slate-300 rounded-lg p-1 px-4">Download</button>}
                content={() => componentRef.current}
            />
            </div> 

            <PrintableResume 
                ref={componentRef} 
                privateInfo={privateInfo}
                educationInfo={educationInfo}
                experienceInfo={experienceInfo}
            />
        

      </div> </>
  )
}



export default Content