import React from 'react'
import { Grid, GridItem } from "@chakra-ui/react";

export default function NavBar() {
  return (
    <Grid
    templateColumns="repeat(5, 1fr)"
    gap={6}
    h="35"
    w="100%"
    bg="#581584"
    margin={"auto"}
    display={"flex"}
    flexDirection={"row"}
    justifyContent={"flex-end"}
  >
    <GridItem w="90%" h="10" color={"white"} marginLeft={20}>
      Home
    </GridItem>
    <GridItem w="90%" h="10" color={"white"}>
      About
    </GridItem>
    <GridItem w="90%" h="10" paddingLeft={"40"} color={"white"}>
      Log In
    </GridItem>
    <GridItem w="90%" h="10" color={"white"}>
      Sign Up
    </GridItem>
  </Grid>
  )
}
