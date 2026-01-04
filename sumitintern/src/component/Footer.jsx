import React from "react";

const Footer = () => {
  return (
    <footer className="mt-10 py-4 text-center bg-black text-white">
      © {new Date().getFullYear()} Sumit Intern Project. All rights reserved.
    </footer>
  );
};

export default Footer;

import { createRoot } from 'react-dom/client'

const users = [
  { id: 1, name: 'John', age: 30 },
  { id: 2, name: 'Jane', age: 25 },
  { id: 3, name: 'Bob', age: 35 }
];

function userList(){
return(
  <ul>
    {users.map(user =>
      <li key={users.id}>
        {users.name} is {user.age} years old

      </li>
    )}
  </ul>
)
}