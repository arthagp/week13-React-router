import React, { useState } from "react";
import { Flex, Stack, Center, Input, Button, useToast } from "@chakra-ui/react";
import { loginUser } from "../modules/fetch";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const toast = useToast();

  function handleEmail(event) {
    setEmail(event.target.value);
  }

  function handlePassword(event) {
    setPassword(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await loginUser(email, password);
      const { token } = response;
      localStorage.setItem("token", token);
      toast({
        title: "Login",
        description: "You have successfully logged in.",
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
              <Button
                onClick={handleSubmit}
                bg="yellow.100"
                mr="10"
                type="submit"
              >
                Login
              </Button>
              <Button as="a" href="/register" bg="green.100" ml="10">
                Register
              </Button>
            </Center>
          </Flex>
        </Stack>
      </Center>
    </Flex>
  );
}

export default Login;
