import React from 'react';
import { Box, ChakraProvider, Container, Grid, Button, Text } from "@chakra-ui/react";
import AppGradient from '../component/design/glowingparticles/AppGradient';
import theme from '../component/design/theme';
import { Icon } from '@chakra-ui/react'
import { GiLindenLeaf } from 'react-icons/gi'
import { Link } from 'react-router-dom';

export default function NavBar({ firstName, lastName }) {
    const bodyStyles = {
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        width: '100%',
        minHeight: '100%',
        margin: 0,
        padding: 0,
    };

    return (
        <Box w="100%" p="0" m="0">
            <Container p="0" m="0" maxWidth="100%">
                <Box style={bodyStyles}>
                    <Grid templateRows="auto 1fr" gap={4} p="0" m="0" zIndex="999" minHeight="5rem">
                        <AppGradient />
                        <ChakraProvider theme={theme}>
                            <Grid templateColumns="1fr auto auto" gap={4} alignItems="center" pr="7">
                                <Text fontSize="4xl" pt="7" ml="7" mt="5px" color="white">
                                    HabitLeaf  <Icon as={GiLindenLeaf} />
                                </Text>
                                <Link to="/login">
                                    <Button colorScheme="white" size="lg" w="100px">
                                        Login
                                    </Button>
                                </Link>
                                <Link to="/register">
                                    <Button colorScheme="white" size="lg" w="100px">
                                        Signup
                                    </Button>
                                </Link>
                            </Grid>
                        </ChakraProvider>
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
}
