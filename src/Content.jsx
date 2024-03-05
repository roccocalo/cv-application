import { useState } from "react"
import exampleData from "./Components/exampleData"
import PersonalInfo from "./Components/Form/Personalnfo"
import EducationForm from "./Components/Form/EducationForm"
import ResumeGenerator from "./Components/ResumeGenerator"

function Content() {
  const [privateInfo, setPrivateInfo] = useState(exampleData.privateInfo || {})
  const [educationInfo, setEducationInfo] = useState(exampleData.education)

  const handlePrivateInfo = (e) => {
    const { key } = e.target.dataset;
    setPrivateInfo({ ...privateInfo, [key]: e.target.value });
  }

  const handleEducationChange = (index, e) => {
    const { key } = e.target.dataset;
    const updatedEducationInfo = [...educationInfo];
    updatedEducationInfo[index] = { ...updatedEducationInfo[index], [key]: e.target.value };
    setEducationInfo(updatedEducationInfo);
  }

  const deleteEducationForm = (index) => {
    const updatedEducationInfo = [...educationInfo];
    updatedEducationInfo.splice(index, 1);
    setEducationInfo(updatedEducationInfo);
  }

  const newEducation = () => {
    const updatedEducationInfo = [...educationInfo];
    const newEducationStudy = {
      id: Date.now(),
      instituteName: "",
      degree: "",
      startDate: "",
      endDate: "",
      location: ""
    }
    updatedEducationInfo.push(newEducationStudy)
    setEducationInfo(updatedEducationInfo);
  }


  return (
    <>
      <div className="flex flex-row justify-center bg-slate-300 items-center gap-24 py-10 px-40">
        <div className="bg-slate-600 h-lvh w-2/5 ">   {/* form  */}


          <PersonalInfo
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
        </div>



        <ResumeGenerator
          dataInfo={privateInfo}
          dataEducation={educationInfo}

        />

      </div> </>
  )
}



export default Content