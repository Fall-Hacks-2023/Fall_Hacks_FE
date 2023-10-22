import React, { useEffect, useState } from "react";
import { axiosInstance } from "..";
import Dashboard from "../component/Dashboard";
import Generic from "../component/Generic";
import List from "../component/List";
import NavBar from "../component/NavBar";
const Home = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const func = async () => {
      try {
        const { data } = await axiosInstance.get("/auth/login");
        console.log(data.user);
        setUser(data.user);
      } catch (err) {
        console.log(err);
      }
    };
    func();
  }, []);
  return (
    <>
   <List/>
      </>
      <NavBar firstName={user? user.firstName : null} lastName={user? user.lastName: null} />
      {user ? <Dashboard /> : <Generic />}
    </>
  );
};

export default Home;
