import { Box, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import LeftArrowIcon from "./icon/leftArrow";
import RightArrowIcon from "./icon/rightArrow";

function PaginationSelect() {
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(20);

  return (
    <Flex alignItems="center" gap="32px" p="0px 0px 6px" h="54px" flexDir="row">
      <Box
        _hover={{ opacity: "75%", cursor: "pointer" }}
        onClick={(e) => {
          e.preventDefault();
          if (page > 1) setPage(page - 1);
        }}
      >
        <LeftArrowIcon />
      </Box>

      <Flex
        alignItems="center"
        justifyContent="Center"
        w="120px"
        h="48px"
        p="19px 16px"
        borderRadius="8px"
        background="rgba(0, 0, 0, 0.17)"
      >
        <Text>
          <b>{page}</b>
          {" / "}
          {pages}
        </Text>
      </Flex>

      <Box
        _hover={{ opacity: "75%", cursor: "pointer" }}
        onClick={(e) => {
          e.preventDefault();
          if (page < pages) setPage(page + 1);
        }}
      >
        <RightArrowIcon />
      </Box>
    </Flex>
  );
}

export default PaginationSelect;
