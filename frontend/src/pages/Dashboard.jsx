import {
  Tabs, TabList, TabPanels, Tab, TabPanel, Flex, Avatar, AvatarBadge, Icon, Text, Button
} from '@chakra-ui/react'
import { ReactComponent as ChatIcon } from '../images/icons/chat.svg'
import { ReactComponent as PersonIcon } from '../images/icons/person.svg'
import { ReactComponent as ConversoIcon } from '../images/icons/converso-white.svg'
import { ReactComponent as CameraIcon } from '../images/icons/camera.svg'

const Dashboard = () => {
  return (
    <Tabs variant='unstyled' orientation='vertical'>
      <TabList bg='#1D4044' w='4rem' display='flex' alignItems='center' justifyContent='space-between' gap='0.5rem' h='100dvh' px='0.5rem' py='1.5rem'>
        <Flex direction='column' gap='0.5rem'>
          <Tab w='3rem' h='3rem' borderRadius='0.625rem' _selected={{ bg: '#2D666C' }}><PersonIcon /></Tab>
          <Tab w='3rem' h='3rem' borderRadius='0.625rem' _selected={{ bg: '#2D666C' }}><ChatIcon /></Tab>
        </Flex>
        <Icon as={ConversoIcon} size='1.75rem' />
      </TabList>

      <TabPanels>
        <TabPanel h='100%'>
          <Flex direction='column' w='100%' h='100%' alignItems='center' justifyContent='center' gap='2rem'>
            <Avatar src='../images/icons/person.svg' boxSize='8rem'>
              <AvatarBadge border='1px solid #0F2224' bg='#E2F9F4' boxSize='3rem'>
                <Icon as={CameraIcon} />
              </AvatarBadge>
            </Avatar>
            <Text display='flex' fontSize='2rem' fontWeight='600' color='#1D4044'>SuperKebbit&nbsp;<Text as='i'>(You)</Text></Text>
            <Text marginY='2rem' fontSize='1.5rem' maxW='37rem' textAlign='center'>My biography huh? Well I don’t know what to type so this is this. Another extra sentence for those with a lot to say.</Text>
            <Button colorScheme='teal' variant='outline'>
              UPDATE PROFILE
            </Button>
          </Flex>
        </TabPanel>
        <TabPanel>
          TODO: Chat Panel
        </TabPanel>
      </TabPanels>
    </Tabs >
  )

}

export default Dashboard