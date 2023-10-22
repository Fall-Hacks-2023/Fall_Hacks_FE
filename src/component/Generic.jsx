import React from 'react';
import {
  Box,
  Heading,
  Text,
  Button,
  Container,
  SimpleGrid,
  Card,
  Image,
  ChakraProvider,
  VStack,
  HStack
} from "@chakra-ui/react";
import theme from '../component/design/theme';
import { Link } from 'react-router-dom';

const polkaBackground = {
  backgroundColor: '#e5e5f7',
  opacity: 0.8,
  backgroundImage: 'radial-gradient(rgb(68, 68, 247) 1.5px, rgb(229, 229, 247) 0.5px)',
  backgroundSize: '40px 40px',
};

export default function HomePage() {
  return (
    <Box style={polkaBackground}  w="100vw" h="100vh" m>
      <Container maxW="container.xl" centerContent>
        
        {/* Heading */}
        <VStack spacing={8} marginBottom={10}>
          <ChakraProvider theme={theme}>
          <Heading as="h1" size="3xl" color="rgb(84, 84, 84)" mt="5">
              Turn that Habit Leaf with Us!
          </Heading>
          <Heading as="h5" size="md" color="rgb(84, 84, 84)">
            Track and improve your habits for a better lifestyle.
          </Heading>
          <HStack spacing={4}>
            <Link to="/login">
            <Button colorScheme="green" size="lg">
              Get Started
            </Button>
            </Link>
           
          </HStack>
          </ChakraProvider>
        </VStack>

        {/* Feature Cards */}
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>

          <Card borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="https://st3.depositphotos.com/33173748/37222/i/600/depositphotos_372229470-stock-photo-drake-perform-boy-meets-world.jpg" alt="Feature Image 2" />
            <Box p={6}>
              <Heading size="md" mb={4}>Drake</Heading>
              <Text>
                I want to practice my singing skills, but during concerts and busy days I always forget to do so. HabitLeaf helped me to practice my singing skills every day!
              </Text>
            </Box>
          </Card>

          <Card borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="https://st5.depositphotos.com/76240054/63784/i/600/depositphotos_637846850-stock-photo-nizhniy-novgorod-russia-june-lionel.jpg  " alt="Feature Image 3" />
            <Box p={6}>
              <Heading size="md" mb={4}>Messi</Heading>
              <Text>
               Recent travels were super hard to organize, but HabitLeaf helped me to organize my travels and saved me time for my family!
              </Text>
            </Box>
          </Card>
          <Card borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="https://st2.depositphotos.com/1000904/6394/i/600/depositphotos_63945959-stock-photo-travis-scott-performing-in-moscow.jpg" alt="Feature Image 1" />
            <Box p={6}>
              <Heading size="md" mb={4}>Travis Scott</Heading>
              <Text>
                I always wanted to learn how to properly organize a concert, but I never had the time.
                HabitLeaf helped me to learn how to organize a concert in just 30 days!
              </Text>
            </Box>
          </Card>
        </SimpleGrid>

      </Container>
    </Box>
  );
}
