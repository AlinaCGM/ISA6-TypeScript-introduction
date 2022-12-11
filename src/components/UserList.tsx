import React from "react";

import UserItem from "./UserItem";
import "./User.css";

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipCode: string;
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

export default function UserList({ userData }: { userData: User[] }) {
  return (
    <div>
      <h3>User list</h3>
      <div className="item-box">
        {userData.slice(0, 6).map((person) => (
          <UserItem userData={person} key={person.id} />
        ))}
      </div>
    </div>
  );
}
