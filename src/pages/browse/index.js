import {
  Box,
  FormLabel,
  FormControl,
  Select,
  Flex,
  SimpleGrid,
} from "@chakra-ui/react";

import Header from "../../components/header";
import SearchBar from "../../components/searchBar";
import { useEffect, useState } from "react";
import DropdownIcon from "@/components/icon/dropdown";
import PaginationSelect from "../../components/paginationSelect";
import Post from "../../components/post";
import samplePosts from '../../components/posts/samplePosts'

function Browse() {
  const [sortMethod, setSortMethod] = useState("popularity");
  const [nsfw, setNSFW] = useState("all");
  const [fullBody, setFullBody] = useState(true); // boolean
  const [platform, setPlatform] = useState("all");

  const data = samplePosts.map(samplePost => samplePost.id);

  useEffect(() => {
    // this will execute when any state value is changed (and when dom loads)
    // TODO: fetch posts from API using query defined in state
  }, [sortMethod, nsfw, fullBody, platform]);

  return (
    <Box>
      <Header />
      {/* the app info like images and text are getting overlaid on each other */}

      {/* have to change de behavior of the app on different sizes of screen | possibilly with Tailwind */}

      <Flex gap="32px" padding="0px 48px">
        <Box width="400px" height="489px">
          {/* filters sidebar */}

          <hr
            style={{
              marginTop: "20px",
              opacity: "0.1",
            }}
          />

          {/* style select in theme later i cant figure it out rn */}
          <FormControl mt={5}>
            <FormLabel>SORT BY</FormLabel>

            <Select
              width="200px"
              value={sortMethod}
              onChange={(e) => setSortMethod(e.currentTarget.value)}
              outline="none"
              border="none"
              background="rgba(0, 0, 0, 0.17)"
              icon={<DropdownIcon />}
            >
              <option value="popularity">Popularity</option>
            </Select>
          </FormControl>

          <FormControl mt={5}>
            <FormLabel>SORT ORDER</FormLabel>

            <Select
              width="200px"
              value={nsfw}
              onChange={(e) => setNSFW(e.currentTarget.value)}
              outline="none"
              border="none"
              background="rgba(0, 0, 0, 0.17)"
              icon={<DropdownIcon />}
            >
              <option value="all">Descending</option>
              <option value="all">Ascending</option>
            </Select>
          </FormControl>

          <FormControl mt={5}>
            <FormLabel>NSFW</FormLabel>

            <Select
              width="200px"
              value={nsfw}
              onChange={(e) => setNSFW(e.currentTarget.value)}
              outline="none"
              border="none"
              background="rgba(0, 0, 0, 0.17)"
              icon={<DropdownIcon />}
            >
              <option value="all">All</option>
            </Select>
          </FormControl>

          <FormControl mt={5}>
            <FormLabel>Full Body</FormLabel>

            <Select
              width="200px"
              value={fullBody}
              onChange={(e) => setFullBody(e.currentTarget.value)}
              outline="none"
              border="none"
              background="rgba(0, 0, 0, 0.17)"
              icon={<DropdownIcon />}
            >
              <option value={true}>Yes</option>
              <option value={false}>No</option>
            </Select>
          </FormControl>

          <FormControl mt={5}>
            <FormLabel>Platform</FormLabel>

            <Select
              width="200px"
              value={platform}
              onChange={(e) => setPlatform(e.currentTarget.value)}
              outline="none"
              border="none"
              background="rgba(0, 0, 0, 0.17)"
              icon={<DropdownIcon />}
            >
              <option value="all">All</option>
            </Select>
          </FormControl>
        </Box>

        <Box overflowY="auto" overflowX="none" w="100%">
          <PaginationSelect />

          <SimpleGrid mt={3} columns={[1, 2, 3, 4]} spacing='22px'>
            {samplePosts.map((post) => {
              return <Post post={post} />;
            })}
          </SimpleGrid>
        </Box>
      </Flex>
    </Box>
  );
}

export default Browse;
