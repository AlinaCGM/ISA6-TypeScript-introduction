import React from "react";
import icon from "../assets/icon.png";

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
export default function UserItem({ userData }: { userData: User }) {
  return (
    <div>
      <div className="item ">
        <img className="icon" src={icon} alt="" />
        <div>
          <span>Name:</span>
          {userData.name}
        </div>
        <div>
          <span>User name:</span>
          {userData.username}
        </div>
        <div>
          <span>Phone:</span>
          {userData.phone}
        </div>
        <div>
          <ul>Address:</ul>
          <li>street:{userData.address.street}</li>
          <li>suite:{userData.address.suite}</li>
          <li>city:{userData.address.city}</li>
          <li>zipCode:{userData.address.zipCode}</li>
        </div>
      </div>
    </div>
  );
}
