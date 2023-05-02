'use client'

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
  Avatar,
  Select,
  useToast,
  FormHelperText,
  FormErrorMessage,
  SimpleGrid,
  HStack,
  Textarea,
} from "@chakra-ui/react";

import Header from "@/components/header";
import { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { LOCALE_EN } from "@/constants/locale";
import { Config } from "@/constants/config";

// using firebase for testing

import signUp from "@/firebase/auth/signup";
import { useRouter } from 'next/navigation';

// If we decide to continue the old code just delete every handleForm on inputs and make it work


function RegisterPage() {
  /*
    Page index: 
        0 - Email, username, password
        1 - Pronouns
        2 - Optional avatar upload
  */

        /* from here firebase configuration */
        /* on each FormLabel set onSubmit={handleForm}*/

        const handleForm = async (event) => {
          // event.preventDefault()
  
          const { result, error } = await signUp(email, username, password);
  
          if (error) {
              return console.log(error)
          }
  
          // else successful
          console.log(result)
      }

  /* to here */

  // If there's no better option just comment out the old code an continue to make it work

  const toast = useToast();

  const [page, setPage] = useState(0);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [pronouns1, setPronouns1] = useState("");
  const [pronouns2, setPronouns2] = useState("");
  const [pronouns3, setPronouns3] = useState("");
  const [pronouns4, setPronouns4] = useState("");
  const [pronouns3Enabled, setPronouns3Enabled] = useState(false);
  const [pronouns4Enabled, setPronouns4Enabled] = useState(false);
  const [usernameInvalid, setUsernameInvalid] = useState(false);
  const [emailInvalid, setEmailInvalid] = useState(false);
  const [passwordInvalid, setPasswordInvalid] = useState(false);
  const [pronounsInvalid, setPronounsInvalid] = useState(false);
  const [coppa, setCOPPA] = useState(false);

      // here is the old code, try to make it work or delete it

  // const submitForm = async () => {
  //   // validate all fields are filled
  //   if (
  //     pronouns1 === "" ||
  //     pronouns2 === "" ||
  //     email === "" ||
  //     password === "" ||
  //     username === ""
  //   )
  //     return toast({
  //       title: "Error",
  //       description: "Please fill out all fields.",
  //       status: "error",
  //       duration: 5000,
  //       isClosable: true,
  //       position: "bottom-right",
  //     });

  //   // make request
  //   (async () => {
  //     let res = await fetch(`${Config.API_V1}/identity/@create`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         username,
  //         email,
  //         password,
  //         pronouns: [pronouns1, pronouns2],
  //         coppa,
  //       }),
  //     }).catch((e) => {
  //       // handle error
  //     });

  //     let data = await res.json().catch((e) => {
  //       // handle error
  //       console.log(error.message)
  //     });

  //     if (!res.ok) {
  //       // handle error
  //       console.log(error.message)
  //     }

  //     // handle (possible) error from json
  //     console.log()
  //   })();
  // };

  return (
    <Box>
      <Header />
      <Center mb={30} mt={30}>
        <HStack alignItems="center" gap={20}>
          <Box w="500px" textAlign="center">
            {page === 0 ? (
              <>
                <Heading>{LOCALE_EN.register.page0.heading}</Heading>

                <Text mt={5} fontSize="17px" opacity="50%">
                  {LOCALE_EN.register.page0.slogan}
                </Text>
              </>
            ) : page === 1 ? (
              <>
                <Heading fontSize="200%">
                  {LOCALE_EN.register.page1.heading}
                </Heading>

                <Text mt={5} fontSize="17px" opacity="50%">
                  {LOCALE_EN.register.page1.slogan}
                </Text>
              </>
            ) : page === 2 ? (
              <>
                <Heading fontSize="200%">
                  {LOCALE_EN.register.page2.heading}
                </Heading>

                <Text mt={5} fontSize="17px" opacity="50%">
                  {LOCALE_EN.register.page2.slogan}
                </Text>
              </>
            ) : page === 3 ? (
              <>
                <Heading fontSize="200%">
                  {LOCALE_EN.register.page3.heading}
                </Heading>

                <Text mt={5} fontSize="17px" opacity="50%">
                  {LOCALE_EN.register.page3.slogan}
                </Text>
              </>
            ) : page === 4 ? (
              <>
                <Heading fontSize="200%">
                  {LOCALE_EN.register.page4.heading}
                </Heading>

                <Text mt={5} fontSize="17px" opacity="50%">
                  {LOCALE_EN.register.page4.slogan}
                </Text>
              </>
            ) : (
              <></>
            )}

            <Flex
              mt={7}
              color="white"
              borderRadius="8px"
              bg="rgba(0, 0, 0, 0.17)"
              p={45}
              justifyContent="center"
              alignItems="center"
            >
              <Box w="500px">
                {page === 0 ? (
                  <>
                    <FormControl isInvalid={usernameInvalid} isRequired>
                      <FormLabel onSubmit={handleForm}>{LOCALE_EN.generic.username}</FormLabel>
                      <Input
                        bg="rgba(0, 0, 0, 0.17)"
                        outline="none"
                        border="none"
                        value={username}
                        onChange={(e) => setUsername(e.currentTarget.value)}
                      />
                      <FormErrorMessage>
                        {LOCALE_EN.register.page0.usernameInvalid}
                      </FormErrorMessage>
                    </FormControl>

                    <Button
                      _hover={{ opacity: "75%" }}
                      _active={{ opacity: "50%" }}
                      mt={10}
                      bg="#F01B67"
                      w="100%"
                      rightIcon={<AiOutlineArrowRight />}
                      onClick={() => {
                        setUsernameInvalid(false);

                        if (username === "") {
                          setUsernameInvalid(true);
                          return toast({
                            title: "Error",
                            description: "Please fill out all fields.",
                            status: "error",
                            duration: 5000,
                            isClosable: true,
                            position: "bottom-right",
                          });
                        }

                        setPage(1);
                      }}
                    >
                      {LOCALE_EN.register.next}
                    </Button>
                  </>
                ) : page === 1 ? (
                  <>
                    <FormControl isInvalid={emailInvalid} isRequired>
                      <FormLabel onSubmit={handleForm}>{LOCALE_EN.generic.email}</FormLabel>
                      <Input
                        bg="rgba(0, 0, 0, 0.17)"
                        outline="none"
                        border="none"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.currentTarget.value)}
                      />
                      <FormErrorMessage>
                        {LOCALE_EN.register.page1.emailInvalid}
                      </FormErrorMessage>
                    </FormControl>

                    <FormControl isInvalid={passwordInvalid} mt={7} isRequired>
                      <FormLabel onSubmit={handleForm}>{LOCALE_EN.generic.password}</FormLabel>
                      <Input
                        bg="rgba(0, 0, 0, 0.17)"
                        outline="none"
                        border="none"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.currentTarget.value)}
                      />
                      <FormErrorMessage>
                        {LOCALE_EN.register.page1.passwordInvalid}
                      </FormErrorMessage>
                    </FormControl>

                    <Flex w="100%" gap="8px" alignItems="center">
                      <Button
                        _hover={{ opacity: "75%" }}
                        _active={{ opacity: "50%" }}
                        mt={10}
                        bg="#F01B67"
                        w="100%"
                        leftIcon={<AiOutlineArrowLeft />}
                        onClick={() => setPage(0)}
                      >
                        {LOCALE_EN.register.previous}
                      </Button>

                      <Button
                        _hover={{ opacity: "75%" }}
                        _active={{ opacity: "50%" }}
                        mt={10}
                        bg="#F01B67"
                        w="100%"
                        rightIcon={<AiOutlineArrowRight />}
                        onClick={() => {
                          setEmailInvalid(false);
                          setPasswordInvalid(false);

                          if (email === "") setEmailInvalid(true);
                          if (password === "") setPasswordInvalid(true);

                          if (email === "" || password === "")
                            return toast({
                              title: "Error",
                              description: "Please fill out all fields.",
                              status: "error",
                              duration: 5000,
                              isClosable: true,
                              position: "bottom-right",
                            });

                          setPage(2);
                        }}
                      >
                        {LOCALE_EN.register.next}
                      </Button>
                    </Flex>
                  </>
                ) : page === 2 ? (
                  <>
                    <FormControl
                      textAlign="left"
                      isInvalid={pronounsInvalid}
                      isRequired
                      mt={7}
                    >
                      <FormLabel onSubmit={handleForm}>{LOCALE_EN.generic.pronouns}</FormLabel>

                      <SimpleGrid columns={2} gap="16px">
                        <Input
                          bg="rgba(0, 0, 0, 0.17)"
                          outline="none"
                          border="none"
                          value={pronouns1}
                          maxLength={6}
                          onChange={(e) => setPronouns1(e.currentTarget.value)}
                        />

                        <Input
                          bg="rgba(0, 0, 0, 0.17)"
                          outline="none"
                          border="none"
                          value={pronouns2}
                          maxLength={6}
                          onChange={(e) => setPronouns2(e.currentTarget.value)}
                        />

                        {!pronouns3Enabled && !pronouns4Enabled ? (
                          <Button
                            w="100%"
                            colorScheme="brand"
                            _hover={{ opacity: "75%" }}
                            onClick={() => setPronouns3Enabled(true)}
                          >
                            +
                          </Button>
                        ) : (
                          <></>
                        )}

                        {pronouns3Enabled ? (
                          <Input
                            bg="rgba(0, 0, 0, 0.17)"
                            outline="none"
                            border="none"
                            value={pronouns3}
                            maxLength={6}
                            onChange={(e) =>
                              setPronouns3(e.currentTarget.value)
                            }
                            onKeyDown={(e) => {
                              if (
                                e.key === "Backspace" &&
                                e.currentTarget.value === ""
                              )
                                setPronouns3Enabled(false);
                            }}
                          />
                        ) : (
                          <></>
                        )}

                        {!pronouns4Enabled && pronouns3Enabled ? (
                          <Button
                            w="100%"
                            colorScheme="brand"
                            _hover={{ opacity: "75%" }}
                            onClick={() => setPronouns4Enabled(true)}
                          >
                            +
                          </Button>
                        ) : (
                          <></>
                        )}

                        {pronouns4Enabled ? (
                          <Input
                            bg="rgba(0, 0, 0, 0.17)"
                            outline="none"
                            border="none"
                            value={pronouns4}
                            maxLength={6}
                            onChange={(e) =>
                              setPronouns4(e.currentTarget.value)
                            }
                            onKeyDown={(e) => {
                              if (
                                e.key === "Backspace" &&
                                e.currentTarget.value === ""
                              )
                                setPronouns4Enabled(false);
                            }}
                          />
                        ) : (
                          <></>
                        )}
                      </SimpleGrid>

                      {pronounsInvalid ? (
                        <FormErrorMessage>
                          {LOCALE_EN.register.page2.pronounsInvalid}
                        </FormErrorMessage>
                      ) : (
                        <FormHelperText color="white" opacity="60%">
                          {LOCALE_EN.register.page2.helperText}
                        </FormHelperText>
                      )}
                    </FormControl>

                    <Flex w="100%" gap="8px" alignItems="center">
                      <Button
                        _hover={{ opacity: "75%" }}
                        _active={{ opacity: "50%" }}
                        mt={10}
                        bg="#F01B67"
                        w="100%"
                        leftIcon={<AiOutlineArrowLeft />}
                        onClick={() => setPage(1)}
                      >
                        {LOCALE_EN.register.previous}
                      </Button>

                      <Button
                        _hover={{ opacity: "75%" }}
                        _active={{ opacity: "50%" }}
                        mt={10}
                        bg="#F01B67"
                        w="100%"
                        rightIcon={<AiOutlineArrowRight />}
                        onClick={() => {
                          setPronounsInvalid(false);

                          if (pronouns2 === "" || pronouns1 === "") {
                            setPronounsInvalid(true);
                            return toast({
                              title: "Error",
                              description: "Please select your pronouns.",
                              status: "error",
                              duration: 5000,
                              isClosable: true,
                              position: "bottom-right",
                            });
                          }

                          setPage(3);
                        }}
                      >
                        {LOCALE_EN.register.next}
                      </Button>
                    </Flex>
                  </>
                ) : page === 3 ? (
                  <>
                    <FormControl>
                      <FormLabel>
                        {LOCALE_EN.register.page3.chooseOur}
                      </FormLabel>

                      <Flex
                        bg="rgba(0, 0, 0, 0.17)"
                        w="100%"
                        h={200}
                        overflowY="auto"
                      >
                        <SimpleGrid
                          columns={3}
                          spacing={7}
                          w="100%"
                          h="100%"
                          p={35}
                          mb={190}
                        >
                          <Avatar
                            _hover={{ opacity: "75%", cursor: "pointer" }}
                            w="100%"
                            h="100%"
                          />
                          <Avatar
                            _hover={{ opacity: "75%", cursor: "pointer" }}
                            w="100%"
                            h="100%"
                          />
                          <Avatar
                            _hover={{ opacity: "75%", cursor: "pointer" }}
                            w="100%"
                            h="100%"
                          />

                          <Avatar
                            _hover={{ opacity: "75%", cursor: "pointer" }}
                            w="100%"
                            h="100%"
                          />
                          <Avatar
                            _hover={{ opacity: "75%", cursor: "pointer" }}
                            w="100%"
                            h="100%"
                          />
                          <Avatar
                            _hover={{ opacity: "75%", cursor: "pointer" }}
                            w="100%"
                            h="100%"
                          />

                          <Avatar
                            _hover={{ opacity: "75%", cursor: "pointer" }}
                            w="100%"
                            h="100%"
                          />
                          <Avatar
                            _hover={{ opacity: "75%", cursor: "pointer" }}
                            w="100%"
                            h="100%"
                          />
                          <Avatar
                            _hover={{ opacity: "75%", cursor: "pointer" }}
                            w="100%"
                            h="100%"
                          />
                        </SimpleGrid>
                      </Flex>
                    </FormControl>

                    <Box
                      width="100%"
                      height="1px"
                      flex={1}
                      bg="white"
                      content=""
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      mt={10}
                      mb={10}
                      opacity="50%"
                    >
                      <Text textAlign="center" fontWeight={700}>
                        {LOCALE_EN.generic.or.toUpperCase()}
                      </Text>
                    </Box>

                    <FormControl>
                      <FormLabel>
                        {LOCALE_EN.register.page3.selectOwnAvi}
                      </FormLabel>

                      <Flex
                        alignItems="center"
                        bg="rgba(0, 0, 0, 0.17)"
                        borderRadius="8px"
                        p={15}
                      >
                        <Avatar w="100px" h="100px" />

                        <Input
                          ml={3}
                          type="file"
                          bg="none"
                          border="none"
                          outline="none"
                          p={0}
                        />
                      </Flex>
                    </FormControl>

                    <Flex w="100%" gap="8px" alignItems="center">
                      <Button
                        _hover={{ opacity: "75%" }}
                        _active={{ opacity: "50%" }}
                        mt={10}
                        bg="#F01B67"
                        w="100%"
                        leftIcon={<AiOutlineArrowLeft />}
                        onClick={() => setPage(2)}
                      >
                        {LOCALE_EN.register.previous}
                      </Button>

                      <Button
                        _hover={{ opacity: "75%" }}
                        _active={{ opacity: "50%" }}
                        mt={10}
                        bg="#F01B67"
                        w="100%"
                        rightIcon={<AiOutlineArrowRight />}
                        onClick={() => {
                          setPage(4);
                        }}
                      >
                        {LOCALE_EN.register.next}
                      </Button>
                    </Flex>
                  </>
                ) : page === 4 ? (
                  <>
                    <Box textAlign="left">
                      <Flex alignItems="center" gap="20px">
                        <Avatar w="80px" h="80px" />
                        <Heading>{username}</Heading>
                      </Flex>

                      <Text mt={5}>
                        <b>{LOCALE_EN.generic.pronouns}:</b>{" "}
                        {`${pronouns1} / ${pronouns2} ${
                          pronouns3 !== "" ? ` / ${pronouns3} ` : ""
                        } ${pronouns4 !== "" ? ` / ${pronouns4}` : ""}`}
                      </Text>
                    </Box>

                    <Flex w="100%" gap="8px" alignItems="center">
                      <Button
                        _hover={{ opacity: "75%" }}
                        _active={{ opacity: "50%" }}
                        mt={10}
                        bg="#F01B67"
                        w="100%"
                        leftIcon={<AiOutlineArrowLeft />}
                        onClick={() => setPage(3)}
                      >
                        {LOCALE_EN.register.previous}
                      </Button>

                      <Button
                        _hover={{ opacity: "75%" }}
                        _active={{ opacity: "50%" }}
                        mt={10}
                        bg="#F01B67"
                        w="100%"
                        onClick={() => {
                          submitForm();
                        }}
                        type="submit"
                      >
                        {LOCALE_EN.register.finish}
                      </Button>
                    </Flex>
                    <Checkbox
                      opacity="75%"
                      w="100%"
                      mt={2}
                      value={coppa}
                      onChange={(e) => setCOPPA(e.currentTarget.checked)}
                    >
                      I am over 13 years old
                    </Checkbox>
                  </>
                ) : (
                  <></>
                )}
              </Box>
            </Flex>
          </Box>
        </HStack>
      </Center>
    </Box>
  );
}

export default RegisterPage;
