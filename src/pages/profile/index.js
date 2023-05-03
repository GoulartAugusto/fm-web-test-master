import {
    Box,
    FormLabel,
    FormControl,
    Select,
    Flex,
    SimpleGrid,
    Center,
    Image,
    Text
  } from "@chakra-ui/react";

import Header from "../../components/header";
import SearchBar from "../../components/searchBar";
import { useEffect, useState } from "react";
import DropdownIcon from "@/components/icon/dropdown";
import PaginationSelect from "../../components/paginationSelect";
import Post from "../../components/post";
import Link from "next/link";

import { LOCALE_EN } from "../../constants/locale";

// This page is only avaliable after login


function Profile() {
    const [sortMethod, setSortMethod] = useState("popularity");
    const [nsfw, setNSFW] = useState("all");
    const [fullBody, setFullBody] = useState(true); // boolean
    const [platform, setPlatform] = useState("all");
  
    const samplePosts = [
      {
        id: "test",
        title: "Amari",
        platform: "quest",
        author: {
          id: 0,
          username: "user_name",
        },
        downloads: 1092,
        likes: 294,
        thumbnail: "/assets/demo/amari.png",
      },
      {
        id: "test",
        title: "ABC",
        platform: "quest",
        author: {
          id: 0,
          username: "user_name",
        },
        downloads: 392,
        likes: 23,
        thumbnail: "/assets/demo/amari1.png",
      },
      {
        id: "test",
        title: "NWA",
        platform: "quest",
        author: {
          id: 0,
          username: "user_name",
        },
        downloads: 103,
        likes: 293,
        thumbnail: "/assets/demo/amari4.png",
      },
      {
        id: "test",
        title: "123",
        platform: "quest",
        author: {
          id: 0,
          username: "user_name",
        },
        downloads: 103,
        likes: 293,
        thumbnail: "/assets/demo/amari1.png",
      },
    ];
  return (
    <Box>
      <Header />

      <Flex gap="32px" padding="0px 48px">
        {/* when click the message box change only the center of the page and open a chat */}
        <Box mr={8} mt={8} w='350px' textAlign='center'>
              <Text fontSize="22px" mt={3} fontWeight={700}>Messages</Text>
                  <hr
                  style={{
                  marginTop: "20px",
                  opacity: "0.1",
                  }}
              />

            <Link href='/profile/messages/'>
              <Box w='350px' h='88px' display='flex' alignItems='center' mt='25px' borderRadius='8px' justifyContent='space-between' _hover={{cursor:'pointer', bg:"#a9a9a999"}}>
                <Box display='flex'>
                  <Image src="/assets/demo/amari5.png" w='64px' h='64px' borderRadius='50%' ml='1rem' />
                  <Box paddingLeft='10px' display='flex' flexDirection='column' alignItems='start' mt='0.5rem'>
                    <Text fontSize='16px' fontWeight={700}>Elisabeth</Text>
                    <Text fontSize='16px'>ur mom lmao</Text>
                  </Box>
                </Box>
                <Text fontSize='16px' opacity='45%' fontWeight={400} mt='-28px' mr='1rem'>2h ago</Text>
              </Box>
            </Link>

            <Box w='350px' h='88px' display='flex' alignItems='center' mt='25px' borderRadius='8px' justifyContent='space-between' _hover={{cursor:'pointer', bg:"#a9a9a999"}}>
              <Box display='flex'>
                <Image src="/assets/demo/amari5.png" w='64px' h='64px' borderRadius='50%' ml='1rem' />
                <Box paddingLeft='10px' display='flex' flexDirection='column' alignItems='start' mt='0.5rem'>
                  <Text fontSize='16px' fontWeight={700}>KillerX</Text>
                  <Text fontSize='16px' opacity='55%'>hhhhhhh</Text>
                </Box>
              </Box>

              <Text fontSize='16px' opacity='45%' fontWeight={400} mt='-28px' mr='1rem' >4h ago</Text>

            </Box>  
              
        </Box>

        <Box overflowY="auto" overflowX="none" w="100%">
            <Text fontSize="36px" fontWeight={700}>
                USER_NAME Profile
            </Text>
            
                {/* This is the link for where we make a new post */}
            <SimpleGrid mt={3} columns={[1, 2, 3, 4, 5]}>
            <Box w="280px" h="366px" position="relative">
                <Box>
                    <Link href={'profile/newpost/addpost'}>
                        <Image
                            borderRadius="8px"
                            w="280px"
                            h="256px"
                            fit="cover"
                            src={'/assets/plus-sign.png'}
                            _hover={{ cursor: "pointer" }}
                        />
                    </Link>
                </Box>
                <Text fontSize="18px" mt={3} fontWeight={700}>
                    Upload a new Avatar
                </Text>
            </Box>
          </SimpleGrid>

            <Text fontSize="26px" mb={8} fontWeight={700}>
                Your Uploaded Avatars
            </Text>

          <SimpleGrid mt={3} columns={4}>
            {samplePosts.map((post) => {
              return <Post post={post} />;
            })}
          </SimpleGrid>

        </Box>

        <Box width="400px" height="489px">

        <hr
        style={{
            marginTop: "20px",
            opacity: "0.1",
        }}
        />

          {/* map info from API to display on profile page */}
          {/* When the image are clicked open a floating centered div for the user info */}
          <Box mr={8} mt={8} textAlign='center'>
            <Center><Image src='/assets/profile-landing.png' /></Center>
            <Text mt={5} fontSize='20px' fontWeight={700}>USER_NAME</Text>
          </Box>

        </Box>
      </Flex>
    </Box>
  )
}

export default Profile