import React, { useEffect, useState } from "react";

export default function Test() {

  const [firstName, setFirstName] = useState(null);

  function onFirstName(event) {
      setFirstName(event.target.value);
    }

    return (
      <>
      <input type="text" placeholder="Name" onChange={onFirstName}/>

      <span className="h-96 w-96 bg-red-500" />
                <p > {firstName} </p>

      </>
    )
}
    
