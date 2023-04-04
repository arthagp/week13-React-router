import React from "react";
import { Flex, Box, Spacer, Heading } from "@chakra-ui/react";

function Navbar() {
  return (
    <Flex bg="blue.300" p="2" alignItems="center">
      <Box p="2">
        <Heading color="white">My Books</Heading>
      </Box>
      <Spacer />
      <Box>
        <Heading as="a" href="/" color="white" size="md" mr="4">
          Home
        </Heading>
        <Heading as="a" href="/addbook" color="white" size="md" mr="4">
          Add Book
        </Heading>
      </Box>
    </Flex>
  );
}

export default Navbar;
