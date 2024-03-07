import uniqid from 'uniqid';

const exampleData = {
    privateInfo: {
        fullName: "Benjamin Graham",
        email: "benjamin.graham@gmail.com",
        phone: "+44 20 7123 4567",
        gitLink: "googleapis",
}, education: [
     {
    id: uniqid(),
    instituteName: "Tu Berlin",
    degree: "Master Degree in Computer Science",
    startDate: "2018",
    endDate: "2020",
    location: "Berlin, DE"
 } , 
 {
    id: uniqid(),
    instituteName: "Polimi",
    degree: "Bachelor Degree in Computer Science",
    startDate: "2015",
    endDate: "2018",
    location: "Milan, IT"
 }
], experience: [
   {
      id: uniqid(),
      companyName: "Tech Innovators Inc.",
      postion: "Software Engineer",
      startDate: "2023",
      endDate: "current",
      location: "London, UK",
      description: "Led the development and launch of a cutting-edge software product. Conducted market research to identify user needs and preferences. Collaborated with engineering and design teams to ensure timely and successful product delivery."
   } , {
      id: uniqid(),
      companyName: "Quantum Dynamics Ltd.",
      postion: "Data Scientist",
      startDate: "2020",
      endDate: "2023",
      location: "Madrid, ES",
      description: "Developed machine learning models for predictive analytics. Collaborated with cross-functional teams to implement data-driven solutions. Conducted data cleaning, exploration, and feature engineering for diverse datasets."
   } 
]
}


export default exampleData