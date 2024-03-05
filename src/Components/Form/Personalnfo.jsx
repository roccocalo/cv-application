
function PersonalInfo({ onChangeFunction, FullName, Phone, Email, GitLink }) {
  return (
    <div className="flex flex-col gap-3 p-5 ">
      <h1 className="font-bold text-white text-xl">Private Info</h1>
      <div className="flex gap-5 " >
        <input type="text" placeholder="Full Name" value={FullName} onChange={onChangeFunction} data-key="fullName" className="inputForm" />
        <input type="text" placeholder="Phone" value={Phone} onChange={onChangeFunction} data-key="phone" className="inputForm" />
      </div>
      <div className="flex gap-5 ">
        <input type="text" placeholder="Email" value={Email} onChange={onChangeFunction} data-key="email" className="inputForm" />
        <input type="text" placeholder="Github Link" value={GitLink} onChange={onChangeFunction} data-key="gitLink" className="inputForm" />
      </div>
    </div>
  );
}

export default PersonalInfo;