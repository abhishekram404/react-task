import React, { useEffect, useState } from "react";
import axios from "axios";
import { getUser } from "../utils/getUser";

type Props = {
  children: JSX.Element;
  userId: string;
};

const User = ({ children, userId }: Props) => {
  const [user, setUser] = useState<{} | null>(null);

  console.log(user);
  useEffect(() => {
    getUser(userId).then((user) => setUser(user));
  }, [userId]);

  return (
    <div>
      {React.cloneElement(children, {
        user,
      })}
    </div>
  );
};

export default User;
