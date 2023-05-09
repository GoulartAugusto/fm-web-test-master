import {
  Box,
  Flex,
  Image,
  Text,
  Input,
  Grid,
} from "@chakra-ui/react";

import Header from "@/components/header";
import Link from "next/link";

function Messages() {
  return (
    <Box>
      <Header />

        <Text fontSize="22px" ml={8} fontWeight={700} textAlign='start'>Messages</Text>
        <Flex>
          <Box>
            <Grid ml={8}>
              {/* Here were the list of people that send messages are displayed */}
              <Box d='flex' flexDir='column' alignItems='flex-start' p='0px 16px 0px 0px' gap='16px' w='432px' borderRight='1px solid rgba(255, 255, 255, 0.1)'>
                  <Link href='/profile/messages/'>

                  <Box w='350px' h='88px' display='flex' alignItems='center' mt='25px' borderRadius='8px' justifyContent='space-between' bg="rgba(0, 0, 0, 0.23)" _hover={{cursor:'pointer', bg:"rgba(0, 0, 0, 0.23)"}}>
                    <Box display='flex'>
                      <Image src="/assets/profile-thumbnail2.png" w='64px' h='64px' borderRadius='50%' ml='1rem' />
                      <Box paddingLeft='10px' display='flex' flexDirection='column' alignItems='start' mt='0.5rem'>
                        <Text fontSize='16px' fontWeight={700}>Elisabeth</Text>
                        <Text fontSize='16px' opacity='55%'>ur mom lmao</Text>
                      </Box>
                    </Box>
                    <Text fontSize='16px' opacity='45%' fontWeight={400} mt='-28px' mr='1rem' >2h ago</Text>
                  </Box>
                    
                  </Link>
                  <Box w='350px' h='88px' display='flex' alignItems='center' mt='25px' borderRadius='8px' justifyContent='space-between' _hover={{cursor:'pointer', bg:"rgba(0, 0, 0, 0.23)"}}>
                    <Box display='flex'>
                      <Image src="/assets/profile-thumbnail2.png" w='64px' h='64px' borderRadius='50%' ml='1rem' />
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
                <Flex mr={8}>
                    <Box display='flex'>
                      <Image src="/assets/profile-thumbnail2.png" w='52px' h='52px' borderRadius='50%' />
                      <Box paddingLeft='10px'>
                        <Text fontSize='16px' fontWeight={700}>Elisabeth</Text>
                        <Text fontSize='16px' opacity='45%' fontWeight={400} mt='-23px' ml='5rem'>2 hours ago</Text>
                      </Box>
                      <Box maxWidth='400px'>
                        <Text fontSize='16px' mt='2rem' ml='-10.2rem' fontWeight={200}>hey</Text>
                        <Text fontSize='16px'  ml='-10.2rem' fontWeight={200}>how are you?</Text>
                      </Box>
                    </Box>
                </Flex>
                <Flex mr={8}>
                    <Box display='flex'>
                      <Image src="/assets/profile-thumbnail.png" w='52px' h='52px' borderRadius='50%' />
                      <Box paddingLeft='10px'>
                        <Text fontSize='16px' fontWeight={700}>Ciiv</Text>
                        <Text fontSize='16px' opacity='45%' fontWeight={400} mt='-23px' ml='5rem'>2 hours ago</Text>
                      </Box>
                      <Box maxWidth='400px'>
                        <Text fontSize='16px' mt='2rem' ml='-10.2rem' fontWeight={200}>hey</Text>
                        <Text fontSize='16px'  ml='-10.2rem' fontWeight={200}>i'm alright, what's up?</Text>
                      </Box>
                    </Box>
                </Flex>
                <Flex mr={8}>
                    <Box display='flex'>
                      <Image src="/assets/profile-thumbnail2.png" w='52px' h='52px' borderRadius='50%' />
                      <Box paddingLeft='10px'>
                        <Text fontSize='16px' fontWeight={700}>Elisabeth</Text>
                        <Text fontSize='16px' opacity='45%' fontWeight={400} mt='-23px' ml='5rem'>2 hours ago</Text>
                      </Box>
                      <Box maxWidth='400px'>
                        <Text fontSize='16px' mt='2rem' ml='-10.2rem' fontWeight={200}>I was wondering if you had the packege Misty by Nymphee?</Text>
                      </Box>
                    </Box>
                </Flex>
                <Flex mr={8}>
                    <Box display='flex'>
                      <Image src="/assets/profile-thumbnail.png" w='52px' h='52px' borderRadius='50%' />
                      <Box paddingLeft='10px'>
                        <Text fontSize='16px' fontWeight={700}>Ciiv</Text>
                        <Text fontSize='16px' opacity='45%' fontWeight={400} mt='-23px' ml='5rem'>2 hours ago</Text>
                      </Box>
                      <Box maxWidth='400px'>
                        <Text fontSize='16px' mt='2rem' ml='-10.2rem' fontWeight={200}>yea I think I do, give me a min to send it</Text>
                        <Text fontSize='16px' ml='-10.2rem' fontWeight={200}>if you wanna trade i'd prefer that</Text>
                      </Box>
                    </Box>
                </Flex>
                <Flex mr={8}>
                    <Box display='flex'>
                      <Image src="/assets/profile-thumbnail2.png" w='52px' h='52px' borderRadius='50%' />
                      <Box paddingLeft='10px'>
                        <Text fontSize='16px' fontWeight={700}>Elisabeth</Text>
                        <Text fontSize='16px' opacity='45%' fontWeight={400} mt='-23px' ml='5rem'>2 hours ago</Text>
                      </Box>
                      <Box maxWidth='400px'>
                        <Text fontSize='16px' mt='2rem' ml='-10.2rem' fontWeight={200}>okay, i'm fine with a trade; i'll give you Dixie in return</Text>
                      </Box>
                    </Box>
                </Flex>
            </Grid>
                <Input mt='8rem' bg="rgba(0, 0, 0, 0.17)" outline="none" border="none"  placeholder='Write a message to Elisabeth' w='50%' position='absolute' />
          </Box>
        </Flex>
    </Box>
  )
}

export default Messages