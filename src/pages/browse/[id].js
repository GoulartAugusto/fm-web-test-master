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
} from "@chakra-ui/react";
import Header from "../../components/header";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { AiOutlineDownload, AiFillHeart, AiFillEye } from "react-icons/ai";
import { LOCALE_EN } from "@/constants/locale";
import Advertisement from "@/components/advertisement";
import AdvertisementTwo from "@/components/posts/advertisementTwo";

function PostPage({ id }) {
  const router = useRouter();
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // fetch post from API using id
    if (router.query.id === undefined) return;

    let postId = router.query.id;
    if (postId === "test")
      setPost({
        title: "Amari",
        platform: "quest",
        author: {
          id: 0,
          username: "Loved",
        },
        downloads: 10392,
        likes: 2943,
        thumbnail: "/assets/demo/amari1.png",
        previews: [
          "/assets/demo/amari2.png",
          "/assets/demo/amari3.png",
          "/assets/demo/amari4.png",
          "/assets/demo/amari5.png",
          "/assets/demo/amari6.png",
        ],
        description: `Features:
        ㅤㅤ❥ PC Only
        ㅤㅤ❥ NSFW
        ㅤㅤㅤHAIR: 3 Styles (Long, Bob, Pony)
        ㅤㅤㅤCLOTHING: Tops ( Corset, Sleevetop, Shirt,) Bottoms (Sweatpants, Skirt),ㅤㅤㅤBodysuit, Fishnets,
        ㅤㅤㅤACCESSORIES: Shoes (Boots, Heels, Sneakers, Socks), Hats (Bucket hat & Cap), Body Wire,
        ㅤㅤㅤGlasses, Mask,
        ㅤㅤㅤOTHER: Hair Color (Blonde, Grey, White, Black), Species Swaps
        ㅤㅤㅤIMPORT:
        ㅤㅤㅤ1. Open a new unity project
        ㅤㅤㅤ2. Import SDK 3
        ㅤㅤㅤ3. Import Poiyomi 7.3 - 8.0
        ㅤㅤㅤ4. Import Package`,
        tags: ["Cat Ears", "Couple", "Booth", "FTB", "CatGirl", "Tail", "Low Poly"],
      });

    setLoading(false);
  }, []);

  return (
    <Box>
      <Header />

      {loading ? (
        <Center h={100}>
          <Spinner />
        </Center>
      ) : (
        <Center mt={30} mb={50}>
          <Flex gap="26px" position="relative" w="90vw">
            <Flex d='flex' flexDir='column'>
              <Box w="287.6px" marginBottom='2rem'>
                <Image borderRadius="8px" src={post.thumbnail} />
                <SimpleGrid mt={4} columns={2} spacing={4}>
                  <Image w="135.51px" borderRadius="8px" src={post.previews[0]} />
                  <Image w="135.51px" borderRadius="8px" src={post.previews[1]} />
                  <Image w="135.51px" borderRadius="8px" src={post.previews[2]} />
                  <Image w="135.51px" borderRadius="8px" src={post.previews[3]} />
                  <Image w="135.51px" borderRadius="8px" src={post.previews[4]} />
                  <Image w="135.51px" borderRadius="8px" src={post.previews[5]} />
                </SimpleGrid>
              </Box>
              <AdvertisementTwo />
            </Flex>

            <Box>
              <Flex d='flex' textAlign='center' alignItems='center' justifyContent='space-between'>
                <Heading>{post.title}</Heading>
                <Button
                  bg="#77DD77"
                  mt={5}
                  borderRadius="67px"
                  w="171px"
                  h="52px"
                  fontSize="16px"
                  fontWeight={700}
                  leftIcon={<Icon as={AiFillHeart} w="24px" h="24px" />}
                  _hover={{ bg: "#77DD77", opacity: "75%" }}
                >
                Favorite
              </Button>
              </Flex>

              <Flex mt={5} alignItems="center" gap="16px">
                <Avatar />

                <Text fontWeight={700} fontSize="18px">
                  {post.author.username}
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

                  <Text fontSize="16px" color="#94BA76" mt="8px">
                    avatar1.unitypackage
                  </Text>
                </Box>

                <Box>
                  <Text fontSize="16px" fontWeight={700}>
                    Checksum
                  </Text>

                  <Text fontSize="16px" color="#94BA76" mt="8px">
                    b8f1a2
                  </Text>
                </Box>

                <Box>
                  <Text fontSize="16px" fontWeight={700}>
                    Size
                  </Text>

                  <Text fontSize="16px" color="#94BA76" mt="8px">
                    13.2MB
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
                    Download
                  </Text>
                </Box>
              </Flex>

              <Box bg="rgba(0, 0, 0, 0.17)" borderRadius="16px" p="24px" mt={7}>
                <Text fontSize="18px" fontWeight={700}>
                  Description
                </Text>

                <Text color="#94BA76" mt={2} width="700px">
                  {post.description.split("\n").map((x) => {
                    return <Text>{x}</Text>;
                  })}
                </Text>
              </Box>

              <Box bg="rgba(0, 0, 0, 0.17)" borderRadius="16px" p="24px" mt={7}>
                <Text fontSize="18px" fontWeight={700}>
                  Comments (2)
                </Text>

                <FormControl>
                  <Input
                    _placeholder={{
                      color: "#94BA76",
                      fontWeight: 400,
                      fontSize: "18px",
                    }}
                    fontSize="18px"
                    placeholder={LOCALE_EN.browseId.writeComment}
                    mt={2}
                    borderRadius="8px"
                    border="none"
                    outline="none"
                    h="57px"
                    bg="rgba(0, 0, 0, 0.17)"
                  />
                </FormControl>

                <VStack mt={5} spacing={5} maxH={200} overflowY="auto">
                  <Flex w="100%" flexDir="row" gap="16px" alignItems="center">
                    <Avatar w="64px" h="64px" />

                    <Box>
                      <Flex>
                        <Text fontWeight={700} fontSize="16px" mr={2}>
                          Elizabeth
                        </Text>
                        <Text fontSize="16px" color="#94BA76">
                          2 hours ago
                        </Text>
                      </Flex>

                      <Text fontSize="16px">owo</Text>
                    </Box>
                  </Flex>

                  <Flex w="100%" flexDir="row" gap="16px" alignItems="center">
                    <Avatar w="64px" h="64px" />

                    <Box>
                      <Flex>
                        <Text fontWeight={700} fontSize="16px" mr={2}>
                          Civv
                        </Text>
                        <Text fontSize="16px" color="#94BA76">
                          2 hours ago
                        </Text>
                      </Flex>

                      <Text fontSize="16px">hot af</Text>
                    </Box>
                  </Flex>

                  <Flex w="100%" flexDir="row" gap="16px" alignItems="center">
                    <Avatar w="64px" h="64px" />

                    <Box>
                      <Flex>
                        <Text fontWeight={700} fontSize="16px" mr={2}>
                          Civv
                        </Text>
                        <Text fontSize="16px" color="#94BA76">
                          2 hours ago
                        </Text>
                      </Flex>

                      <Text fontSize="16px">hot af</Text>
                    </Box>
                  </Flex>

                  <Flex w="100%" flexDir="row" gap="16px" alignItems="center">
                    <Avatar w="64px" h="64px" />

                    <Box>
                      <Flex>
                        <Text fontWeight={700} fontSize="16px" mr={2}>
                          Civv
                        </Text>
                        <Text fontSize="16px" color="#94BA76">
                          2 hours ago
                        </Text>
                      </Flex>

                      <Text fontSize="16px">hot af</Text>
                    </Box>
                  </Flex>
                </VStack>
              </Box>
            </Box>

            <Box>
              <VStack alignItems="left" spacing={5}>
                <Box bg='rgba(0, 0, 0, 0.16)' p='2rem' borderRadius='16px' mb='2rem'>
                  <Text fontWeight={700} mb='0.725rem'>STATISTICS</Text>
                  <Flex mt="4px" gap="8px" alignItems="center" mb='0.725rem'>
                    <Icon as={AiFillHeart} w="24px" h="24px" color="#77DD77" />
                    <Text fontSize="18px">
                      {post.likes.toLocaleString()} favorites
                    </Text>
                  </Flex>
                  <Flex gap="8px" alignItems="center" mb='0.725rem'>
                    <Icon
                      as={AiOutlineDownload}
                      w="24px"
                      h="24px"
                      color="#77DD77"
                    />

                    <Text fontSize="18px">
                      {post.downloads.toLocaleString()} downloads
                    </Text>
                  </Flex>

                  <Flex gap="8px" alignItems="center" mb='0.725rem'>
                    <Icon
                      as={AiFillEye}
                      w="24px"
                      h="24px"
                      color="#77DD77"
                    />

                    <Text fontSize="18px">
                      {post.downloads.toLocaleString()} 
                    </Text>
                  </Flex>

                </Box>

                <Box
                  p="24px"
                  w="300px"
                  h="260px"
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
                          Yes
                        </Text>
                      </Flex>

                      <Flex w="100%" alignItems="center" position="relative">
                        <Text fontWeight={700} color="#77DD77">
                          SDK:
                        </Text>
                        <Text position="absolute" right={0}>
                          3.0
                        </Text>
                      </Flex>

                      <Flex w="100%" alignItems="center" position="relative">
                        <Text fontWeight={700} color="#77DD77">
                          Platform:
                        </Text>
                        <Text position="absolute" right={0}>
                          PC
                        </Text>
                      </Flex>

                      <Flex w="100%" alignItems="center" position="relative">
                        <Text fontWeight={700} color="#77DD77">
                          Full Body:
                        </Text>
                        <Text position="absolute" right={0}>
                          Yes
                        </Text>
                      </Flex>

                      <Flex w="100%" alignItems="center" position="relative">
                        <Text fontWeight={700} color="#77DD77">
                          Physbones:
                        </Text>
                        <Text position="absolute" right={0}>
                          No
                        </Text>
                      </Flex>

                      <Flex w="100%" alignItems="center" position="relative">
                        <Text fontWeight={700} color="#77DD77">
                          DPS:
                        </Text>
                        <Text position="absolute" right={0}>
                          No
                        </Text>
                      </Flex>
                    </VStack>
                  </Box>
                </Box>
                
              </VStack>
              
              <Box bg='rgba(0, 0, 0, 0.16)' p='2rem' borderRadius='16px' mt='2rem' maxWidth='300px' mb='2rem'>
                <Text fontWeight={700} fontSize='18px'>TAGS</Text>
                <Flex mt={5} alignItems="center" gap="16px">
                  <SimpleGrid mt={4} columns={3} spacing={2}>
                    {post.tags.map((tag) => {
                      return <Badge textTransform="initial">{tag}</Badge>;
                    })}
                  </SimpleGrid>
                </Flex>
              </Box>

              <Advertisement />
            </Box>


          </Flex>
        </Center>
      )}
    </Box>
  );
}

export default PostPage;
