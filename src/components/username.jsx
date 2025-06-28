import React from "react";

const Username123 = () => {
  const username123 = [
    {
      username: "HuXn",

      email: "test@gmail.com",

      location: "USA",
    },
    {
      username: "John",

      email: "jd@gmail.com",

      location: "Arab",
    },
    {
      username: "Rohan",

      email: "rohan@gmail.com",

      location: "South-Asian",
    },
  ];
  return (
    <div>
      {username123.map((user) => (
        <ul key={user.email}>
          <li>{user.username}</li>
          <li>{user.email}</li>
          <li>{user.location}</li>
        </ul>
      ))}
    </div>
  );
};

export default Username123;
