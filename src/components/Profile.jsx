import React, { useState } from "react";

function Profile() {
  const [profile,setProfile] =  useState({
    name:"",
    age:''
  })
  const handleChange = (e) =>{
     const {prop, value} = e.target;
    setProfile((prev) =>({
        ...prev,
       [prop]:value
    }))
  }

  return (
    <div>
      Name: {profile.name}
      <br />
      Age: {profile.age}
      <br />
      Name:
      <input
        type="text"
        name="name"
        value={profile.name}
        onChange={handleChange}
      />
      Age:
      <input
        type="text"
        name="age"
        value={profile.age}
        onChange={handleChange}
      />
    </div>
  );
}

export default Profile;
