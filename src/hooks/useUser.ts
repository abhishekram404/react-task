import { useEffect, useState } from "react";
import { getUser } from "../utils/getUser";

export function useUser(userId: string) {
  const [user, setUser] = useState<{} | null>(null);

  console.log(user);
  useEffect(() => {
    getUser(userId).then((user) => setUser(user));
  }, [userId]);

  return user;
}
