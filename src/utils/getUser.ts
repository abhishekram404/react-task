import axios from "axios";

export const getUser = async (id: string) => {
  let { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  return data;
};
