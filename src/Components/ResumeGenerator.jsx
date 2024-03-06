
function ResumeGenerator({ dataInfo, dataEducation, dataExperience }) {



    return (
        <>
            <div className=" h-[1056px] ">

                <div className="mt-8 ">
                    <p className="text-center font-bold text-4xl">{dataInfo.fullName}</p>
                    <span className="flex justify-center gap-5 mt-3 text-xl"> <p>{dataInfo.email}</p> <p>{dataInfo.phone}</p> <p>{dataInfo.gitLink}</p></span>
                </div>

                <div className="my-8  mx-14" >

                    <div className="mt-2">
                        <h2 className="text-3xl font-bold text-sky-600">Education</h2>
                        <hr className=" border border-sky-600" />
                        {dataEducation.map((education, index) => (
                            <div key={index} className="my-3 text-xl flex justify-between ">
                                <div>
                                    <p className="font-bold">{education.degree}</p>
                                    <p >{education.instituteName}</p></div>
                                <div className="w-32">
                                    <span><p>{education.startDate} - {education.endDate} </p></span>
                                    <p>{education.location}</p></div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-2">
                        <h2 className="text-3xl font-bold text-sky-600">Experience</h2>
                        <hr className=" border border-sky-600" />
                        {dataExperience.map((experience, index) => (
                            <div>
                            <div key={index} className="my-3 text-xl flex justify-between ">
                                <div>
                                    <p className="font-bold">{experience.companyName}</p>
                                    <p >{experience.postion}</p></div>
                                <div className="w-32">
                                    <span><p>{experience.startDate} - {experience.endDate} </p></span>
                                    <p>{experience.location}</p></div>
                            </div>
                            <p className="text-xl -mt-1">{experience.description}</p>
                            </div>
                        ))}
                    </div>




                </div>
            </div>
        </>
    )
}

export default ResumeGenerator