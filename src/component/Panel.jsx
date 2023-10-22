import React from "react";
import "./components.css";
import List from "./List";
import HabitForm from "./HabitForm";
import { Stack, HStack, VStack, Box, StackDivider , Text} from "@chakra-ui/react";

export default function Panel() {
  return (
    <div className="panel-container">
      <div className="stat-container">
        <div className="stat-container-1">
          <VStack
            divider={<StackDivider borderColor="gray.200" />}
            spacing={4}
            align="stretch"
            p="2"
          >
            <Box h="40px">
              <h3>Transforming Lives, One Habit at a Time.</h3>
            </Box>
            <Box>
              <Text color="white" fontSize="lg">
                Our app isn't just about tracking habits; it's about unleashing
                your potential, one small step at a time. Join us in the journey
                of self-improvement, where consistency meets life-changing
                results
              </Text>
            </Box>
          </VStack>
        </div>
        <div className="stat-container-2">
          <HabitForm />
        </div>
      </div>

      <div className="habits-container">
        <List />
      </div>
    </div>
  );
}
