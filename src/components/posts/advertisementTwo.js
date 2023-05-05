import React from 'react'
import {
    Box,
    Flex,
    Text,
    Image
} from '@chakra-ui/react'

function AdvertisementTwo() {
  return (
    <Box>
        <Flex w='299px' h='410px' bg='rgba(0, 0, 0, 0.16)' borderRadius='16px'>
            <Flex d='flex' flexDir='column' m='2rem'>
                <Text fontWeight={700} mb='1rem'>ADVERTISEMENT</Text>

                <Image src='/assets/advertisementTwo.png' w='249px' h='322px' />
            </Flex>
        </Flex>
    </Box>
  )
}

export default AdvertisementTwo