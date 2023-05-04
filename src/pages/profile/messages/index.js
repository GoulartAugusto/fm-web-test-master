import {
  Box,
  FormLabel,
  FormControl,
  Select,
  Flex,
  SimpleGrid,
  Center,
  Image,
  Text,
  Input,
  Grid,
  GridItem
} from "@chakra-ui/react";

import Header from "@/components/header";
import SearchBar from "@/components/searchBar";
import { useEffect, useState } from "react";
import DropdownIcon from "@/components/icon/dropdown";
import PaginationSelect from "@/components/paginationSelect";
import Post from "@/components/post";
import Link from "next/link";

function Messages() {
  const [sortMethod, setSortMethod] = useState("popularity");
  const [nsfw, setNSFW] = useState("all");
  const [fullBody, setFullBody] = useState(true); // boolean
  const [platform, setPlatform] = useState("all");
  
  return (
    <Box>
      <Header />

        <Flex>
          <Box>
            <Grid ml={8}>
              {/* Here were the list of people that send messages are displayed */}
              <Box mr={8} mt={8} w='350px' textAlign='center'>
              <Text fontSize="22px" mt={3} mb={6} fontWeight={700}>Messages</Text>
                <SearchBar />
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
            </Grid>
          </Box>
          {/* Here were the messages are displayed */}
          
          {/* This is the form of every message that will be displayed on chat, have to map to the endpoints of the API */}
          <Box>
            <Grid alignContent='start' gap='2rem' justifyContent='flex-start' ml={8}>
                <Center mr={8}>
                    <Box display='flex'>
                      <Image src="/assets/demo/amari5.png" w='52px' h='52px' borderRadius='50%' />
                      <Box paddingLeft='10px'>
                        <Text fontSize='16px' fontWeight={700}>Elisabeth</Text>
                        <Text fontSize='16px' opacity='45%' fontWeight={400} mt='-23px' ml='5rem'>2 hours ago</Text>
                      </Box>
                      <Box maxWidth='400px'>
                        <Text fontSize='16px' mt='2rem' ml='-10.2rem' fontWeight={200}>yo, do you have the Mistify package?</Text>
                      </Box>
                    </Box>
                </Center>
                <Center mr={8}>
                    <Box display='flex'>
                      <Image src="/assets/demo/amari.png" w='52px' h='52px' borderRadius='50%' />
                      <Box paddingLeft='10px'>
                        <Text fontSize='16px' fontWeight={700}>Civv</Text>
                        <Text fontSize='16px' opacity='45%' fontWeight={400} mt='-23px' ml='5rem'>2 hours ago</Text>
                      </Box>
                      <Box maxWidth='400px'>
                        <Text fontSize='16px' mt='2rem' ml='-10.2rem' fontWeight={200}>whats's good g, nah don't think so</Text>
                      </Box>
                    </Box>
                </Center>
                <Center mr={8}>
                    <Box display='flex'>
                      <Image src="/assets/demo/amari5.png" w='52px' h='52px' borderRadius='50%' />
                      <Box paddingLeft='10px'>
                        <Text fontSize='16px' fontWeight={700}>Elisabeth</Text>
                        <Text fontSize='16px' opacity='45%' fontWeight={400} mt='-23px' ml='5rem'>2 hours ago</Text>
                      </Box>
                      <Box maxWidth='400px'>
                        <Text fontSize='16px' mt='2rem' ml='-10.2rem' fontWeight={200}>ur mom lmao </Text>
                      </Box>
                    </Box>
                </Center>
                <Center mr={8}>
                    <Box display='flex'>
                      <Image src="/assets/demo/amari.png" w='52px' h='52px' borderRadius='50%' />
                      <Box paddingLeft='10px'>
                        <Text fontSize='16px' fontWeight={700}>Civv</Text>
                        <Text fontSize='16px' opacity='45%' fontWeight={400} mt='-23px' ml='5rem'>2 hours ago</Text>
                      </Box>
                      <Box maxWidth='400px'>
                        <Text fontSize='16px' mt='2rem' ml='-10.2rem' fontWeight={200}>not even funny mate</Text>
                      </Box>
                    </Box>
                </Center>
            </Grid>
                <Input bg="rgba(0, 0, 0, 0.17)" outline="none" border="none"  placeholder='Write a message to Elisabeth' w='50%' position='absolute' />
          </Box>
        </Flex>
    </Box>
  )
}

export default Messages