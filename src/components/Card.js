import { Heading, HStack, Image, Text, VStack, Stack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  const arrow = <FontAwesomeIcon icon={faArrowRight} size="1x" />;
  return (
    <VStack bg="white" color="black" borderRadius="xl">
      <Image src={imageSrc} alt={title} borderRadius="xl" />
      <Stack mt={6} spacing={3} >
        <Heading fontWeight="bold" size="sm" left={0}>
          {title}
        </Heading>
        <Text size="sm" maxW={400}>
          {description}
        </Text>
        <a href="#">
          <Text size="sm" fontWeight="bold">
            See More <FontAwesomeIcon icon={faArrowRight} size="1x" />
          </Text>
        </a>
      </Stack>
    </VStack>
  );
};

export default Card;
