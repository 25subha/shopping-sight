import React, { useEffect, useState } from 'react';
import AccountCard from '../components/AccountCard';
import axios from 'axios';

const fatchedUser = async () => {
  const res = await axios.get("http://localhost:4000/users");
  const data = res.data;
  console.log(data)
  return data;

}

const Profile = () => {
  const [data, satdata ] = useState([]);

  const assignData = async () => {
    const fatchedData = await fatchedUser();

    satdata(fatchedData);
  };

  useEffect(() => {
  assignData();
 }, []);
  return (
    <div>
      <div>
      {
        data.map((user) => {
          return(
            <AccountCard 
            key={user._id}
            UserName={user.UserName}
            password={user.password}
            email={user.email}
            mobileNumber={user.mobileNumber}
            address={user.address}
          />
          )
        })}
      </div>
    </div>
  )
}

export default Profile;