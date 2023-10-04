import React from "react";
import { Avatar, Box, HStack, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Yevgeni!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <HStack>
      <VStack>
        <Heading>{bio1}</Heading>
        <Heading>{bio2}</Heading>
      </VStack>

      <VStack borderLeft="1px" p={3}>
        <Box
        h={150}
        w={150}
          borderTopLeftRadius='73% 38%'
          borderTopRightRadius='27% 34%'
          borderBottomLeftRadius='50% 66%'
          borderBottomRightRadius='50% 62%'
          size="xl"
          name="My Name"
          bg='lightgray'
          // src="https://i.pravatar.cc/150?img=7"
          mb={4}
        />
        <Heading size="sm">{greeting}</Heading>
      </VStack>
    </HStack>
  </FullScreenSection>
);

export default LandingSection;
