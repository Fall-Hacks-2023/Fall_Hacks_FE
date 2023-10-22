import React, { useEffect, useState } from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import { axiosInstance } from "..";
import Dashboard from "../component/Dashboard";
import Generic from "../component/Generic";
import List from "../component/List";
const Home = () => {
//const name = useRecoilValue(userNameState);
const [user,setUser]=useState(null);
useEffect(()=>{
    const func = async () =>{
        try{
            const {data} = await axiosInstance.get("/auth/login");
            console.log(data.user);
            setUser(data.user);
        }
        catch(err){
            console.log(err)
        }
    };
    func();
},[])
return (
    <>
    <List/>
      </>
  );
};

export default Home;
