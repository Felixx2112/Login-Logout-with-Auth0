import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <article className="column">
        {user?.picture && <img src={user.picture} alt="Profile" />}
        <h1>{user.name}</h1>
        <p>{user.email}</p>
        <ul style={{ listStyle: "none", marginTop: "30px" }}>
          {Object.keys(user).map((objkey, i) => (
            <li style={{ textAlign: "center" }} key={i}>
              {objkey}:{user[objkey]}
            </li>
          ))}
        </ul>
      </article>
    )
  );
};

export default Profile;
