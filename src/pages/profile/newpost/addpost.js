import {
  Box,
  Center,
  Flex,
  Spinner,
  Text,
  Image,
  SimpleGrid,
  Heading,
  Badge,
  Avatar,
  Icon,
  Button,
  FormControl,
  Input,
  VStack,
  Textarea,
} from "@chakra-ui/react";
import Header from "../../../components/header";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { AiOutlineDownload, AiFillHeart, AiOutlineUpload } from "react-icons/ai";
import { LOCALE_EN } from "@/constants/locale";

function addpost({ id }) {
  const router = useRouter();
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);

  return (
    <Box>

      <Header />

        <Center mt={30} mb={50}>
          <Flex gap="26px" position="relative" w="90vw">
            <Box position="absolute" top={0} right={0}>
              <VStack alignItems="left" spacing={5}>

                <Box
                  p="24px"
                  w="300px"
                  bg="rgba(0, 0, 0, 0.17)"
                  borderRadius="16px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Box w="100%">
                    <Text fontWeight={700}>Model Details</Text>

                    <VStack mt={3} spacing={1} w="100%">
                      <Flex w="100%" alignItems="center" position="relative">
                        <Text fontWeight={700} color="#77DD77">
                          NSFW:
                        </Text>
                        <Text position="absolute" right={0}>
                          <select style={{background:'black'}}>
                            <option>any</option>
                            <option>yes</option>
                            <option>no</option>
                          </select>
                        </Text>

                      </Flex>

                      <Flex w="100%" alignItems="center" position="relative">
                        <Text fontWeight={700} color="#77DD77">
                          SDK:
                        </Text>
                        <Text position="absolute" right={0}>
                          <select style={{background:'black'}}>
                            <option>any</option>
                            <option>3.0</option>
                            <option>2.0</option>
                          </select>
                        </Text>
                      </Flex>

                      <Flex w="100%" alignItems="center" position="relative">
                        <Text fontWeight={700} color="#77DD77">
                          Platform:
                        </Text>
                        <Text position="absolute" right={0}>
                          <select style={{background:'black'}}>
                            <option>any</option>
                            <option>PC</option>
                          </select>
                        </Text>
                      </Flex>

                      <Flex w="100%" alignItems="center" position="relative">
                        <Text fontWeight={700} color="#77DD77">
                          Full Body:
                        </Text>
                        <Text position="absolute" right={0}>
                          <select style={{background:'black'}}>
                            <option>no</option>
                            <option>yes</option>
                          </select>
                        </Text>
                      </Flex>

                      <Flex w="100%" alignItems="center" position="relative">
                        <Text fontWeight={700} color="#77DD77">
                          Physbones:
                        </Text>
                        <Text position="absolute" right={0}>
                        <select style={{background:'black'}}>
                            <option>no</option>
                            <option>yes</option>
                          </select>
                        </Text>
                      </Flex>

                      <Flex w="100%" alignItems="center" position="relative">
                        <Text fontWeight={700} color="#77DD77">
                          DPS:
                        </Text>
                        <Text position="absolute" right={0}>
                        <select style={{background:'black'}}>
                            <option>no</option>
                            <option>yes</option>
                          </select>
                        </Text>
                      </Flex>
                      <Flex>
                        <Button
                            bg="#77DD77"
                            mt={5}
                            borderRadius="67px"
                            w="225px"
                            h="52px"
                            fontSize="16px"
                            fontWeight={700}
                            leftIcon={<Icon as={AiOutlineUpload} w="24px" h="24px" />}
                            _hover={{ bg: "#77DD77", opacity: "75%" }}
                          >
                          Upload Avatar
                        </Button>
                      </Flex>
                    </VStack>
                  </Box>
                </Box>
              </VStack>
            </Box>

            <Box w="287.6px">
              <Text fontSize='26px' fontWeight='700' mb='1rem'>Upload Avatar Images</Text>
                <Image w="400px" borderRadius="8px" src={"/assets/plus-sign.png"} />
              <SimpleGrid mt={4} columns={2} spacing={4}>
                <Image w="135.51px" borderRadius="8px" src={"/assets/plus-sign.png"} />
                <Image w="135.51px" borderRadius="8px" src={"/assets/plus-sign.png"} />
                <Image w="135.51px" borderRadius="8px" src={"/assets/plus-sign.png"} />
                <Image w="135.51px" borderRadius="8px" src={"/assets/plus-sign.png"} />
              </SimpleGrid>
            </Box>

            <Box>
              <Heading>
                <Input type="text" size='lg' w='400px' placeholder="Avatar Name" />
              </Heading>

              <Flex mt={5} alignItems="center" gap="16px">
                <Input type="text" w='400px' placeholder="Type some tags" />
              </Flex>

              <Flex mt={5} alignItems="center" gap="16px">

                <Badge textTransform="initial">tag1</Badge>
                <Badge textTransform="initial">tag2</Badge>
                <Badge textTransform="initial">tag3</Badge>


              </Flex>

              <Flex mt={5} alignItems="center" gap="16px">
                <Avatar />

                <Text fontWeight={700} fontSize="18px">
                  user_name
                </Text>
              </Flex>

              <Flex
                mt={5}
                p="24px"
                bg="rgba(0, 0, 0, 0.17)"
                borderRadius="8px"
                flexDir="row"
                gap="39px"
                w="584px"
                h="104px"
              >
                <Box>
                  <Text fontSize="16px" fontWeight={700}>
                    File name
                  </Text>

                  <Text fontSize="16px" color="#BA769A" mt="8px">
                    
                  </Text>
                </Box>

                <Box>
                  <Text fontSize="16px" fontWeight={700}>
                    Checksum
                  </Text>

                  <Text fontSize="16px" color="#BA769A" mt="8px">
                    
                  </Text>
                </Box>

                <Box>
                  <Text fontSize="16px" fontWeight={700}>
                    Size
                  </Text>

                  <Text fontSize="16px" color="#BA769A" mt="8px">
                    
                  </Text>
                </Box>

                <Box w="100%" position="relative">
                  <Text
                    fontWeight={700}
                    _hover={{ opacity: "75%", cursor: "pointer" }}
                    position="absolute"
                    bottom={0}
                    right={0}
                    color="#77DD77"
                    as="a"
                    fontSize="16px"
                    mt="8px"
                  >
                    <Text
                    fontWeight={700}
                    _hover={{ opacity: "75%", cursor: "pointer" }}
                    position="absolute"
                    bottom={0}
                    right={0}
                    color="#77DD77"
                    fontSize="16px"
                    mt="8px"
                    >Browse files</Text>
                  </Text>
                </Box>
              </Flex>

              <Box bg="rgba(0, 0, 0, 0.17)" borderRadius="16px" p="24px" mt={7}>
                <Text fontSize="18px" fontWeight={700} mb='1.5rem'>
                  Description
                </Text>

                <Text color="#BA769A" mt={2} w="500px">
                  <Textarea
                    type="text"
                    h='162px'
                    placeholder="Make an description for your Avatar"
                    resize='none'
                  />
                </Text>
              </Box>
            </Box>
          </Flex>
        </Center>
    </Box>
  );
}

export default addpost;
