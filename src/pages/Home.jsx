import React from 'react'
import { Grid, GridItem } from '@chakra-ui/react'
const Home = () => {
  return (
    <Grid templateColumns='repeat(5, 1fr)' gap={6} h='35' w='90%' bg='#581584'borderRadius={20} margin={'auto'} marginTop={10} display={'flex'} flexDirection={'row'}>
    <GridItem w='90%' h='10' bg='blue.500' color={'white'} marginLeft={20} >
        Home 
    </GridItem>
    <GridItem w='90%' h='10' bg='blue.500' color={'white'}>
        About
    </GridItem>
    <GridItem w='100%' h='10' bg='blue.500' color={'white'}>
        Reminders
    </GridItem>
    <GridItem w='90%' h='10' bg='blue.500' color={'white'}>
        Rewards
    </GridItem>

    <GridItem w='90%' h='10' bg='blue.500' paddingLeft={'40'}  color={'white'}>
    Log In
    </GridItem>
    <GridItem w='90%' h='10' bg='blue.500' color={'white'}>
    Sign Up
    </GridItem> 
</Grid>
  )
}

export default Home

