import { Box, Card, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Books({ id, title, author, image, publisher, year }) {
  return (
    <Link to={`/books/${id}`}>
      <Card
      margin="20px"
        maxW="sm"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        p={4}
        cursor="pointer"
        _hover={{ boxShadow: "md" }}
      >
        <Box h={48} overflow="hidden">
          <Image
            src={`http://localhost:8000/${image}`}
            alt={title}
            objectFit="cover"
            w="100%"
            h="100%"
          />
        </Box>
        <Box p={4}>
          <Heading size="md" mb={2}>
            {title} ({year})
          </Heading>
          <Text fontSize="sm" mb={2}>
            {author}
          </Text>
          <Text fontSize="sm" color="gray.600">
            <span>Publisher: </span>
            {publisher}
          </Text>
        </Box>
      </Card>
    </Link>
  );
}

export default Books;
