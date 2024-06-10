function GetByLabelText() {
  return (
    <>
      {/* <h1>RTL Query : Get By Label Text</h1>
      <label htmlFor="user-name">User name</label>
      <input type="text" id="user-name" defaultValue={"tyb"} />

      <br></br>
      <br></br>

      
      <label htmlFor="skills">Skills</label>
      <input type="checkbox" id="skills" checked={true} /> */}



      <h1>RTL Query : Get All By Label Text</h1>
      <label htmlFor="user1">User</label>
      <input type="text" id="user1" defaultValue={"tybans"}/>


      <label htmlFor="user2">User</label>
      <input type="text" id="user2" defaultValue={"tybans"} />


      <label htmlFor="user3">User</label>
      <input type="text" id="user3" defaultValue={"tybans"}/>



      <label htmlFor="skill1">Skills</label>
      <input type="checkbox" id="skill1" defaultChecked={true}/>

      <label htmlFor="skill2">Skills</label>
      <input type="checkbox" id="skill2" defaultChecked={true} />
    </>
  );
}

export default GetByLabelText;
