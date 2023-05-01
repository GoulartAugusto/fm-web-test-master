import {
  Box,
  Center,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  Button,
} from "@chakra-ui/react";
import Header from "../../components/header";
import { LOCALE_EN } from "../../constants/locale";

function LoginPage() {
  return (
    <Box>
      <Header />
      <Center mt={30}>
        <Box w="450px" textAlign="center">
          <Heading>{LOCALE_EN.login.heading}</Heading>

          <Text mt={5} fontSize="17px">
            <span style={{ opacity: "50%" }}>{LOCALE_EN.login.slogan}</span>{" "}
            <Text
              as="a"
              href="/register"
              color="#F01B67"
              fontWeight={700}
              _hover={{ opacity: "75%" }}
            >
              {LOCALE_EN.generic.register}
            </Text>
          </Text>

          <Flex
            mt={7}
            color="white"
            h="350px"
            borderRadius="8px"
            bg="rgba(0, 0, 0, 0.17)"
            p={45}
            justifyContent="center"
            alignItems="center"
          >
            <Box w="450px">
              <FormControl>
                <FormLabel>{LOCALE_EN.generic.username}</FormLabel>
                <Input bg="rgba(0, 0, 0, 0.17)" outline="none" border="none" />
              </FormControl>

              <FormControl mt={7}>
                <FormLabel>{LOCALE_EN.generic.password}</FormLabel>
                <Input
                  bg="rgba(0, 0, 0, 0.17)"
                  outline="none"
                  border="none"
                  type="password"
                />
              </FormControl>

              <Flex alignItems="center" position="relative" mt={5}>
                <Checkbox>{LOCALE_EN.login.rememberMe}</Checkbox>

                <Text
                  color="#F01B67"
                  _hover={{ opacity: "75%" }}
                  as="a"
                  href="/forgot-password"
                  right={0}
                  position="absolute"
                >
                  {LOCALE_EN.login.forgotPassword}
                </Text>
              </Flex>

              <Button
                _hover={{ opacity: "75%" }}
                _active={{ opacity: "50%" }}
                mt={5}
                bg="#F01B67"
                w="100%"
              >
                {LOCALE_EN.login.signIn}
              </Button>
            </Box>
          </Flex>
        </Box>
      </Center>
    </Box>
  );
}

export default LoginPage;
