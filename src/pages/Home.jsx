import React, { useEffect, useState } from "react";
import { axiosInstance } from "..";
import Dashboard from "../component/Dashboard";
import Generic from "../component/Generic";
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
      <NavBar />
      {user ? <Dashboard /> : <Dashboard />}
    </>
  );
};

export default Home;
