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

import { RiArrowDropDownLine } from "react-icons/ri";

function Header() {
  return (
    <Flex p="48px" width="100vw" height="176px" position="relative">
      <Link href='/'>
        <Image
          src="/assets/logo.svg"
          _hover={{ opacity: "90%", cursor: "pointer" }}
          h='100%'
        />
      </Link>

      <Flex
        flexDir="row"
        alignItems="center"
        padding="16px 32px"
        gap="32px"
        height="80px"
        right="48px"
        position="absolute"
        bg="rgba(0, 0, 0, 0.17);"
        borderRadius="8px"
      >
        <Text

          _hover={{ cursor: "pointer", color: "#BA769A" }}
          fontWeight={700}
          color="white"
          href="/"
        >
          <Link href="/">{LOCALE_EN.generic.home}</Link>
        </Text>
        <Text

          _hover={{ cursor: "pointer", color: "#BA769A" }}
          fontWeight={700}
          color="white"
          href="/browse"
        >
          <Link href="/browse">{LOCALE_EN.generic.browse}</Link>
        </Text>

        <Text

          _hover={{ cursor: "pointer", color: "#BA769A" }}
          color="white"
          fontWeight={700}
          target="_blank"
          href="https://discord.gg/5SeB8s6859"
        >
          <Link href="https://discord.gg/5SeB8s6859" target="_blank">{LOCALE_EN.generic.discord}</Link>
        </Text>

        <Text

          _hover={{ cursor: "pointer", color: "#BA769A" }}
          fontWeight={700}
          color="white"
          href="/login"
        >
          <Link href="/login">{LOCALE_EN.generic.login}</Link>
        </Text>
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
      </Flex>
    </Flex>
  );
}

export default Header;
