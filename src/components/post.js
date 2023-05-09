import { Box, Text, Image, Flex } from "@chakra-ui/react";
import Link from "next/link";
import { AiOutlineDownload, AiFillHeart } from "react-icons/ai";

function Post({ post }) {
  return (
    <Box w="280px" h="366px" position="relative">
      <Box
        position="absolute"
        w="74px"
        h="30px"
        background="white"
        color="black"
        display="flex"
        alignItems="center"
        justifyContent="center"
        top="210px"
        left="190px"
        borderRadius="33px"
      >
        {/* platform tag */}
        <Text fontWeight={600}>{post.platform}</Text>
      </Box>

      <Box>
        <Link href={`/browse/${post.id}`}>
          <Image
            borderRadius="8px"
            w="280px"
            h="256px"
            fit="cover"
            src={post.thumbnail}
            _hover={{ cursor: "pointer" }}
          />
        </Link>
      </Box>

      <Text fontSize="18px" mt={3} fontWeight={700}>
        {post.title}
      </Text>
      <Text fontSize="18px" color="#94BA76">
        Uploaded by <b>{post.author.username}</b>
      </Text>
      <Flex fontSize="16px" mt={1} alignItems="center">
        <AiOutlineDownload />{" "}
        <Text ml="6px" mr="14px" fontWeight={350}>
          {post.downloads.toLocaleString()}
        </Text>{" "}
        <AiFillHeart />{" "}
        <Text fontWeight={350} ml="6px" mr="4px">
          {post.likes.toLocaleString()}
        </Text>
      </Flex>
    </Box>
  );
}

export default Post;
