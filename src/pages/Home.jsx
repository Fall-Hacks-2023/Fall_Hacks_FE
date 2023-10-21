import React, { useEffect, useState } from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import { axiosInstance } from "..";
import Dashboard from "../component/Dashboard";
import Generic from "../component/Generic";
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
      <Grid
        templateColumns="repeat(5, 1fr)"
        gap={6}
        h="35"
        w="90%"
        bg="#581584"
        borderRadius={20}
        margin={"auto"}
        marginTop={10}
        display={"flex"}
        flexDirection={"row"}
      >
        <GridItem w="90%" h="10" color={"white"} marginLeft={20}>
          Home
        </GridItem>
        <GridItem w="90%" h="10" color={"white"}>
          About
        </GridItem>
        <GridItem w="100%" h="10" color={"white"}>
          Reminders
        </GridItem>
        <GridItem w="90%" h="10" color={"white"}>
          Rewards
        </GridItem>

        <GridItem w="90%" h="10" paddingLeft={"40"} color={"white"}>
          Log In
        </GridItem>
        <GridItem w="90%" h="10" color={"white"}>
          Sign Up
        </GridItem>
      </Grid>
      {user? <Dashboard/>:<Generic/>}
    </>
  );
};

export default Home;
