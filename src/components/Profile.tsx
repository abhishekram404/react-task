import React from "react";
import { useUser } from "../hooks/useUser";

type Props = {
  user?: any;
};

const Profile = ({ user }: Props) => {
  const userFromHook = useUser("1");

  console.log("User from hook ", userFromHook);

  return <div>{JSON.stringify(user)}</div>;
};

export default Profile;
