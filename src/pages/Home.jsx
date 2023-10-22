import React, { useEffect, useState } from "react";
import { axiosInstance } from "..";
import Dashboard from "../component/Dashboard";
import Generic from "../component/Generic";
import GenericNavBar from "../component/GenericNavBar";
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
      {user ? <NavBar firstName={user.firstName} lastName={user.lastName} /> : <GenericNavBar />}
      {user ? <Dashboard /> : <Generic />}
    </>

  );
};

export default Home;
