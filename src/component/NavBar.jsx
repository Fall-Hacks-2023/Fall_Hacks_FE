import React from 'react'
import { Grid, GridItem } from "@chakra-ui/react";

export default function NavBar({firstName,lastName}) {
  return (
    <Grid
    templateColumns="repeat(5, 1fr)"
    gap={6}
    h="50"
    w="100%"
    bg="#0e5a1c"
    margin={"auto"}
    display={"flex"}
    flexDirection={"row"}
    alignItems={"center"}
    justifyContent={"space-between"}
  >
     <GridItem color={"white"} marginLeft={50}>
        Habit Leafs
    </GridItem>
    <GridItem color={"white"} marginRight={50}>
        {firstName? firstName + ' ' + lastName: "Log In"}
    </GridItem>
  </Grid>
  )
}
