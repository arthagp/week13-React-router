import React, { useState } from "react";
import { Flex, Stack, Center, Input, Button, useToast } from "@chakra-ui/react";
import { registerUser } from "../modules/fetch";
import { useNavigate } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const toast = useToast();

  function handleName(event) {
    setName(event.target.value);
  }

  function handleEmail(event) {
    setEmail(event.target.value);
  }

  function handlePassword(event) {
    setPassword(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await registerUser(name, email, password);
      const { token } = response;
      localStorage.setItem("token", token);
      toast({
        title: "Registered",
        description: "You have successfully Registered.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      navigate("/");
    } catch (error) {
      setError(error.message);
      toast({
        title: "An error occurred",
        description: error.message || "An error occurred. Please try again.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  }

  return (
    <Flex w="100vw" h="100vh" alignItems="center" justifyContent="center">
      <Center>
        <Stack spacing={5} w="300px">
          <Input
            type="text"
            name="nama"
            placeholder="Enter your name"
            onChange={handleName}
          />
          <Input
            type="email"
            name="email"
            placeholder="Enter your email"
            onChange={handleEmail}
          />
          <Input
            type="password"
            name="password"
            placeholder="Enter your password"
            onChange={handlePassword}
          />
          <Flex alignItems="center" justify="center">
            <Center alignItems="center">
              <Button as="a" href="/login" mr="10" bg="yellow.100">
                Login
              </Button>
              <Button
                type="submit"
                onClick={handleSubmit}
                ml="10"
                bg="green.100"
              >
                Register
              </Button>
            </Center>
          </Flex>
        </Stack>
      </Center>
    </Flex>
  );
}

export default Register;
