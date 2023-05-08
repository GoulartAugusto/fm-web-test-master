import { LOCALE_EN } from "@/constants/locale";
import {
  Avatar,
  Box,
  Flex,
  Icon,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";

import DropdownIcon from "./icon/dropdown";
import SearchBar from "./searchBar";

// ==================== got to correct behavior on different screen sizes ===============================

function Header() {
  return (
    <Flex d='flex' flexDir='row' alignItems='flex-start' p='0px 0px 71px' gap='8px' w='100vw' h='191px' flex='none' order='0' flexGrow='0'>
      <Flex d='flex' flexDir='row' justifyContent='space-between' alignItems='center' p='10px 63px' h='120px' backg='linear-gradient(189.23deg, #244234 -1712.74%, rgba(0, 0, 0, 0) 257.9%)' border='0.5px solid rgba(129, 200, 38, 0.05)' flex='none' order='0' flexGrow='1'>
        <Flex d='flex' flexDir='row' justifyContent='space-between' alignItems='center' p='10px 63px' gap='996px' w='73vw' h='100px' flex='none' order='0' flexGrow='1'>
  
            <Flex d='flex' flexDir='row' alignItems='center' p='0px 2px' gap='32px' h='77px' borderRadius='8px' flex='none' order='0' flexGrow='0'>
              <Link href='/'>
                <Image
                    src="/assets/logo.png"
                    _hover={{ opacity: "90%", cursor: "pointer" }}
                    h='100%'
                  />
              </Link>
              <SearchBar />
              <Text
                _hover={{ cursor: "pointer", color: "#ffffff" }}
                fontWeight={700}
                color="#75D275"
                href="/"
                >
                <Link href="/">{LOCALE_EN.generic.home}</Link>
              </Text>
              <Text
                _hover={{ cursor: "pointer", color: "#ffffff" }}
                fontWeight={700}
                color="#75D275"
                href="/browse"
              >
                <Link href="/browse">{LOCALE_EN.generic.browse}</Link>
              </Text>
              <Text
                _hover={{ cursor: "pointer", color: "#ffffff" }}
                fontWeight={700}
                color="#75D275"
                href="/browse"
                >
              <Link href="/browse">{LOCALE_EN.generic.faq}</Link>
              </Text>
              <Text
                _hover={{ cursor: "pointer", color: "#ffffff" }}
                fontWeight={700}
                color="#75D275"
                href="/browse"
                >
              <Link href="/browse">{LOCALE_EN.generic.support}</Link>
              </Text>
              
            </Flex>

            <Flex d='flex' flexDir='row' alignItems='center' p='16px 2px' gap='32px' w='247px' h='80px' borderRadius='8px' flex='none' order='1' flexGrow='1'>
              <Text
                _hover={{ cursor: "pointer", color: "#ffffff" }}
                color="#75D275"
                fontWeight={700}
                target="_blank"
                href="https://discord.gg/5SeB8s6859"
                >
                <Link href="/profile/messages"><Image src='/assets/message-02.png' /></Link>
              </Text>
              <Text
                _hover={{ cursor: "pointer", color: "#ffffff" }}
                fontWeight={700}
                color="#75D275"
                href="/login"
                >
                <Link href="/profile/messages"><Image src='/assets/notification.png' /></Link>
              </Text>

              <Flex d='flex' flexDir='row' alignItems='center' p='0px' gap='16px' h='48px' flex='none' order='2' flexGrow='0' _hover={{ cursor: "pointer", color: "#ffffff" }}>
                <Link href="/profile"><Avatar src='/assets/profile-thumbnail.png' w='48px' h='48px' borderRadius='50%' /></Link>
                <Text fontWeight={700} color="#75D275" _hover={{ cursor: "pointer", color: "#ffffff" }}>
                  Civv

                </Text>
                <DropdownIcon />
              </Flex>
            </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Header;

            {/* 
            
            // This lines of code refers to when the user are not logged on the app

            <Flex >
              <Text
                _hover={{ cursor: "pointer", color: "#ffffff" }}
                color="#75D275"
                fontWeight={700}
                target="_blank"
                href="https://discord.gg/5SeB8s6859"
                >
                <Link href="https://discord.gg/5SeB8s6859" target="_blank">{LOCALE_EN.generic.discord}</Link>
              </Text>
              <Text
                _hover={{ cursor: "pointer", color: "#ffffff" }}
                fontWeight={700}
                color="#75D275"
                href="/login"
                >
                <Link href="/login">{LOCALE_EN.generic.login}</Link>
              </Text>
            </Flex> */}



        {/* <Flex
          flexDir="row"
          alignItems="center"
          padding={0}
          gap="16px"
          width="131px"
          height="48px"
        >
          <Avatar />
          <Text color="#F01B67" fontWeight={700}>
            User
          </Text>
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="User Menu"
              variant="outline"
              outline="none"
              border="none"
              _active={{ bg: "none" }}
              _hover={{ bg: "none" }}
              icon={
                <Icon
                  color="#BA769A"
                  transform="scale(2.2)"
                  as={RiArrowDropDownLine}
                />
              }
            />

            <MenuList mt={5}>
              <MenuItem>Test</MenuItem>
              <MenuItem>Test</MenuItem>
              <MenuItem>Test</MenuItem>
            </MenuList>
          </Menu>
        </Flex> */}