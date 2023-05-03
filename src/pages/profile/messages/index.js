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

import Header from "@/components/header";
import SearchBar from "@/components/searchBar";
import { useEffect, useState } from "react";
import DropdownIcon from "@/components/icon/dropdown";
import PaginationSelect from "@/components/paginationSelect";
import Post from "@/components/post";
import Link from "next/link";

import { LOCALE_EN } from "@/constants/locale";


function Messages() {
  const [sortMethod, setSortMethod] = useState("popularity");
  const [nsfw, setNSFW] = useState("all");
  const [fullBody, setFullBody] = useState(true); // boolean
  const [platform, setPlatform] = useState("all");
  
  return (
    <Box>
      <Header />

      <Flex gap="32px" padding="0px 48px">
        {/* when click the message box change only the center of the page and open a chat */}
        <Box mr={8} mt={8} w='350px' textAlign='center'>
          <Text fontSize="22px" mt={3} fontWeight={700}>Messages</Text>
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
      </Flex>
    </Box>
  )
}

export default Messages