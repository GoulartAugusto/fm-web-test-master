import {
  Box,
  Flex,
  Text,
  Image,
  Button,
  Center,
  Heading,
  VStack,
} from '@chakra-ui/react'
import Header from '../components/header'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { LOCALE_EN } from '../constants/locale'

import Link from 'next/link'

function Index() {
  return (
    <>
      <Box>
        <Header />
        {/* test */}
        <Flex
          w='100vw'
          h='709px'
          p='48px'
          alignItems='center'
          flexDir='row'
          filter='drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));'
          position='relative'
        >
          <Box w='471px'>
            <Text fontWeight={700} fontSize='48px' lineHeight='65px'>
              {LOCALE_EN.app.slogan}{' '}
              <Text
                as='span'
                bg='linear-gradient(92.24deg, #DA4D93 0%, #D757F7 25.22%);'
                bgClip='text'
              >
                {LOCALE_EN.app.sloganHighlight}
              </Text>
            </Text>

            <Text
              color='#94BA76'
              lineHeight='140.68%'
              fontWeight={400}
              fontSize='18px'
              mt={2}
            >
              {LOCALE_EN.app.description}
            </Text>

            <Button
              w='131px'
              borderRadius='67px'
              bg='#77DD77'
              mt={35}
              rightIcon={<AiOutlineArrowRight />}
              _hover={{ opacity: '75%' }}
              _active={{ opacity: '100%', bg: '#F01B67' }}
            >
              <Link href='/register'>{LOCALE_EN.generic.signUp}</Link>
            </Button>
          </Box>

          <Box position='absolute' right={0}>
            <Image
              src='/assets/landing-preview.png'
              w={['0px', '0px', '0px', '0px', '800px', '906px']}
            />
          </Box>
        </Flex>

        <Center>
          <VStack justifyContent='center' alignItems='center'>
            <Flex
              h='709px'
              p='48px'
              w='100%'
              alignItems='center'
              flexDir='row'
              filter='drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));'
              position='relative'
            >
              <Image
                boxShadow='0 0 100px rgba(0, 0, 0, 0.17)'
                mr={150}
                src='/assets/landing-preview2.png'
              />

              <Box w='471px'>
                <Heading h='88px'>{LOCALE_EN.landing.slogan2}</Heading>

                <Text
                  color='#94BA76'
                  lineHeight='140.68%'
                  fontWeight={400}
                  fontSize='18px'
                  mt={2}
                >
                  {LOCALE_EN.landing.slogan3}
                </Text>
              </Box>
            </Flex>

            <Flex
              h='709px'
              p='48px'
              w='100%'
              alignItems='center'
              flexDir='row'
              filter='drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));'
              position='relative'
            >
              <Box mr={150} w='471px'>
                <Heading h='88px'>{LOCALE_EN.landing.slogan4}</Heading>

                <Text
                  color='#94BA76'
                  lineHeight='140.68%'
                  fontWeight={400}
                  fontSize='18px'
                  mt={2}
                >
                  {LOCALE_EN.landing.slogan5}
                </Text>
              </Box>

              <Image
                borderRadius='8px'
                boxShadow='0 0 100px rgba(0, 0, 0, 0.17)'
                src='/assets/landing-preview3.png'
              />
            </Flex>
          </VStack>
        </Center>

        <Center>
          <Flex
            h='709px'
            p='48px'
            w={['100%, 100%, 100%, 100%', '90%', '80%']}
            alignItems='center'
            justifyContent='center'
            flexDir='row'
            filter='drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));'
            position='relative'
          >
            <Box mr={150} textAlign='center'>
              <Center>
                <Image src='/assets/dl-landing.png' />
              </Center>
              <Text mt={5} fontSize='20px' fontWeight={700}>
                {LOCALE_EN.landing.fasterDownloads}
              </Text>
              <Text color='#94BA76' mt={5} w='100%' fontSize='18px'>
                {LOCALE_EN.landing.fDownloadsSlogan}
              </Text>
            </Box>

            <Box mr={150} textAlign='center'>
              <Center>
                <Image src='/assets/profile-landing.png' />
              </Center>
              <Text mt={5} fontSize='20px' fontWeight={700}>
                {LOCALE_EN.landing.moreAvatars}
              </Text>
              <Text color='#94BA76' mt={5} w='100%' fontSize='18px'>
                {LOCALE_EN.landing.mAvatarsSlogan}
              </Text>
            </Box>

            <Box textAlign='center'>
              <Center>
                <Image src='/assets/chat-landing.png' />
              </Center>
              <Text mt={5} fontSize='20px' fontWeight={700}>
                {LOCALE_EN.landing.socialFeatures}
              </Text>
              <Text color='#94BA76' mt={5} w='100%' fontSize='18px'>
                {LOCALE_EN.landing.sFeaturesSlogan}
              </Text>
            </Box>
          </Flex>
        </Center>

        <Flex
          h='416px'
          bg='rgba(0, 0, 0, 0.30)'
          p='48px'
          w='100vw'
          alignItems='center'
          justifyContent='center'
          flexDir='row'
          position='relative'
        >
          <Box textAlign='center'>
            <Heading>{LOCALE_EN.landing.readyToJoin}</Heading>
            <Button
              bg='#77DD77'
              mt={10}
              borderRadius='67px'
              p='10px 36px'
              as='a'
              href='/register'
            >
              {LOCALE_EN.landing.cfreeAccount}
            </Button>
          </Box>
        </Flex>
      </Box>
    </>
  )
}

export default Index
