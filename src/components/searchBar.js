import { Flex, Icon, Input } from "@chakra-ui/react";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

function SearchBar() {
  const [query, setQuery] = useState("");

  const submitSearch = (e) => {
    e.preventDefault();
    alert(query);

    // logic
  };

  return (
    <Flex
      alignItems="center"
      borderRadius="8px"
      background="rgba(0, 0, 0, 0.17)"
      h="48px"
      gap="12px"
      paddingLeft="12px"
    >
      <Icon
        as={AiOutlineSearch}
        _hover={{ opacity: "75%", cursor: "pointer" }} // im lazy
        onClick={(e) => submitSearch(e)}
        color="#F01B67"
        w="24px"
        h="24px"
      />

      <Input
        placeholder="Search"
        background="none"
        borderRadius="none"
        padding="19px 8px"
        border="none"
        outline="none" /* fix outline issue later (outline is present when component is focused 
          and its ugly idk how to fix it and its not important rn) */
        h="100%"
        value={query}
        onChange={(e) => setQuery(e.currentTarget.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") submitSearch(e);
        }}
      />
    </Flex>
  );
}

export default SearchBar;
