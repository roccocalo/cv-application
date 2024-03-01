import { useState } from "react"
import exampleData from "./Components/exampleData"
import PersonalInfo from "./Components/Form/Personalnfo"

function Content() {
const [privateInfo, setPrivateInfo] = useState(exampleData.privateInfo || {})


const handlePrivateInfo = (e) => {
    const { key } = e.target.dataset;
    setPrivateInfo({ ...privateInfo, [key]: e.target.value });
}


    return (
        <>
        <div className="flex flex-row justify-center items-center gap-24 py-10 px-40">
        <div className="bg-red-800 h-lvh w-2/5 ">   {/* form  */}

        
        <PersonalInfo
        onChangeFunction={handlePrivateInfo}
        FullName={privateInfo.fullName}
        Email={privateInfo.email}
        Phone={privateInfo.phone}
        GitLink={privateInfo.gitLink}
        />

        </div>
        
        <div className="bg-green-800 h-lvh w-3/5">     {/* resume */}
        <div className="mt-3">
            <p className="text-center font-bold text-4xl">{privateInfo.fullName}</p>
            <span className="flex justify-center gap-5 text-xl"> <p>{privateInfo.email}</p> <p>{privateInfo.phone}</p> <p>{privateInfo.gitLink}</p></span>
        </div>
        </div>
        </div>

        
        </>
    )
}



export default Content