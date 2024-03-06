import uniqid from 'uniqid';

const exampleData = {
    privateInfo: {
        fullName: "Benjamin Graham",
        email: "benjamin.graham@gmail.com",
        phone: "+44 5481 8923 7845",
        gitLink: "https://github.com/googleapis",
}, education: [
     {
    id: uniqid(),
    instituteName: "Poliba",
    degree: "Computer Engineer",
    startDate: "2022",
    endDate: "current",
    location: "Bari, IT"
 } , 
 {
    id: uniqid(),
    instituteName: "Poliba",
    degree: "Computer Engineer",
    startDate: "2022",
    endDate: "current",
    location: "Bari, IT"
 }
], experience: [
   {
      id: uniqid(),
      companyName: "Toshiba Inc.",
      postion: "Software Engineer",
      startDate: "2022",
      endDate: "current",
      location: "London, Uk",
      description: "Supported senior researchers on accessibility standards for the open web. Created and usability tested wireframes and prototypes. Produced interactive documentation for quick onboarding of new researchers."
   } , {
      id: uniqid(),
      companyName: "Toshiba Inc.",
      postion: "Software Engineer",
      startDate: "2022",
      endDate: "current",
      location: "London, Uk",
      description: "Supported senior researchers on accessibility standards for the open web. Created and usability tested wireframes and prototypes. Produced interactive documentation for quick onboarding of new researchers."
   } 
]


}


export default exampleData