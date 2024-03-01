

function PersonalEducation(
    onName,
    onLastName,
    onPhone,
    onEmail,
    onGitLink
    ) {
    
        return (
            <div>            
               
               <input type="text" placeholder="University" onChange={onName}/>
               <input type="text" placeholder="Degree" onChange={onLastName}/>
               <div>
               <input type="text" placeholder="Location" onChange={onEmail}/>
               <input type="text" placeholder="Start Date" onChange={onGitLink}/>
               <input type="text" placeholder="End Date" onChange={onGitLink}/>
               </div>
               
            </div>
        )
    }
    
    export default PersonalEducation