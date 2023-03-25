import {
  Tabs, TabList, TabPanels, Tab, TabPanel, Flex, Icon
} from '@chakra-ui/react'
import { Chat } from '../components/Chat'
import { Profile } from '../components/Profile'
import { ReactComponent as ChatIcon } from '../images/icons/chat.svg'
import { ReactComponent as PersonIcon } from '../images/icons/person.svg'
import { ReactComponent as ConversoIcon } from '../images/icons/converso-white.svg'

// MOCK DATA PLEASE DELETE
import { mockChatData, mockProfileData } from '../utils/mockData'

const Dashboard = () => {
  return (
    <Tabs isManual variant='unstyled' orientation='vertical' bg='#EDEDED'>
      <TabList bg='#1D4044' w='4em' display='flex' alignItems='center' justifyContent='space-between' gap='0.5em' h='100vh' px='0.5em' py='1.5em'>
        <Flex direction='column' gap='0.5em'>
          <Tab w='3em' h='3em' borderRadius='0.625em' _selected={{ bg: '#2D666C' }}><PersonIcon /></Tab>
          <Tab w='3em' h='3em' borderRadius='0.625em' _selected={{ bg: '#2D666C' }}><ChatIcon /></Tab>
        </Flex>
        <Icon as={ConversoIcon} size='1.75em' />
      </TabList>
      <TabPanels>
        <TabPanel h='100vh' display='flex' flexDirection='column' justifyContent='space-between' overflow='auto'>
          <Profile profile={mockProfileData} />
        </TabPanel>
        <TabPanel p='0' h='100%' display='flex' flexDirection='column'>
          <Chat chats={mockChatData} profile={mockProfileData} />
        </TabPanel>
      </TabPanels>
    </Tabs >
  )

}

export default Dashboard