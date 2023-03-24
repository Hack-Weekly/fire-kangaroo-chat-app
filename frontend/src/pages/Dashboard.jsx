import {
  Tabs, TabList, TabPanels, Tab, TabPanel, Flex, Avatar, AvatarBadge, Icon, Text, Button, Link
} from '@chakra-ui/react'
import { ReactComponent as ChatIcon } from '../images/icons/chat.svg'
import { ReactComponent as PersonIcon } from '../images/icons/person.svg'
import { ReactComponent as ConversoIcon } from '../images/icons/converso-white.svg'
import { ReactComponent as CameraIcon } from '../images/icons/camera.svg'
import { ReactComponent as EllipsisIcon } from '../images/icons/ellipsis.svg'
import timeAgo from '../utils/timeAgo'

/**
 * Mock Data for the User Profile so that backend can easily define their API endpoint. :)
 * 
 */
const mockProfileData = {
  avatar: 'https://picsum.photos/200', // Avatar image url
  username: 'SuperKebbit',
  bio: 'My biography huh? Well I don’t know what to type so this is this. Another extra sentence for those with a lot to say.',
}

/**
 * Mock Data for the Chat Room so that backend can easily define their API endpoint. :)
 */
const mockChatData = [
  {
    name: 'Steven',
    avatar: '../images/icons/person.svg',
    presence: {
      active: false,
      lastActive: 1679476080, // Time in UNIX Format. This data may or may not exist depending on active status.
    },
    messageHistory: [
      {
        sender: 'Steven',
        message: 'I am test data',
        timestamp: 1679415060 // Time in UNIX Format
      }, {
        sender: 'SuperKebbit',
        message: 'I am test data 2',
        timestamp: 1679415660 // Time in UNIX Format
      }
    ]
  },
  {
    name: 'Alicia',
    avatar: '../images/icons/person.svg',
    presence: {
      active: true,
    },
    messageHistory: [
      {
        sender: 'Alicia',
        message: 'Hi',
        timestamp: 1679440080 // Time in UNIX Format
      }, {
        sender: 'SuperKebbit',
        message: 'Hello',
        timestamp: 1679440140 // Time in UNIX Format
      }
    ]
  },
]

const Profile = ({ profile }) => {
  return (
    <>
      <Flex direction='column' w='100%' h='100%' alignItems='center' justifyContent='center' gap='2em'>
        <Avatar src={profile.avatar} boxSize='8em'>
          <AvatarBadge border='1px solid #0F2224' bg='#E2F9F4' boxSize='3em'>
            <Icon as={CameraIcon} />
          </AvatarBadge>
        </Avatar>
        <Text display='flex' fontSize='2em' fontWeight='600' color='#1D4044'>{profile.username}&nbsp;<Text as='i'>(You)</Text></Text>
        <Text marginY='2em' fontSize='1.5em' maxW='37em' textAlign='center'
          _before={{ content: '"“"', display: 'inline-block', marginInline: '0.25em' }}
          _after={{ content: '"”"', display: 'inline-block', marginInline: '0.25em' }}
        >{profile.bio}</Text>
        <Button colorScheme='teal' variant='outline' letterSpacing='0.1em' px='3.5em'>
          UPDATE PROFILE
        </Button>
      </Flex>
      <Link textDecoration='underline' color='#1D4044' fontWeight='700' textAlign='center' w='100%' fontSize='1.125em'>LOGOUT</Link>
    </>
  )
}

const Chat = ({ chats }) => {
  return (
    <Tabs isManual variant='unstyled' orientation='vertical' w='100%' h='100%'>
      <TabList w='md' bg='#F7F7F7'>
        <Flex px='2em' alignItems='center' justifyContent='space-between' h='5.25em'>
          <Text fontSize='1.5em' fontWeight='700'>Chats ({chats.length})</Text>
          <Icon as={EllipsisIcon} size='1.75em' />
        </Flex>
        {chats.map((chat, index) => {
          return <Tab key={index} h='5.25em' display='flex' justifyContent='flex-start' px='2em' gap='1.5em' margin='1px' _selected={{ bg: '#C7C7C7', borderRadius: '0.625em' }}>
            {chat.presence.active ? (<Avatar src={chat.avatar}>
              <AvatarBadge boxSize='1rem' bg='#3CD65E' border='1px solid #FAFAFA' />
            </Avatar>) : (<Avatar src={chat.avatar} />)}
            <Flex direction='column' alignItems='flex-start' w='100%'>
              <Flex justifyContent='space-between' alignItems='center' w='100%'>
                <Text fontWeight='600' fontSize='lg'>{chat.name}</Text>
                <Text fontSize='sm' color='#545454'>{new Date(chat.messageHistory[0].timestamp * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</Text>
              </Flex>
              <Text>{chat.messageHistory[0].message}</Text>
            </Flex>
          </Tab>
        })}
      </TabList>
      <TabPanels w='100%'>
        {chats.map((chat, index) => {
          return <TabPanel key={index} p='0'>
            <Flex px='2em' alignItems='center' gap='1.5em' h='5.25em' bg='#F7F7F7' borderLeft='1px solid #E8E8E8'>
              {chat.presence.active ? (<Avatar src={chat.avatar}>
                <AvatarBadge boxSize='1rem' bg='#3CD65E' border='1px solid #FAFAFA' />
              </Avatar>) : (<Avatar src={chat.avatar} />)}
              <Flex direction='column' justifyContent='center' w='100%'>
                <Text fontWeight='600' fontSize='lg'>{chat.name}</Text>
                {chat.presence.active ? (
                  <Text fontSize='sm' color='#545454'>Active now</Text>
                ) : (
                  <Text fontSize='sm' color='#545454'>Last seen {timeAgo(chat.messageHistory[0].timestamp * 1000)}</Text>
                )}
              </Flex>
            </Flex>
            <Flex>
              TODO: Chat Message Room
            </Flex>
          </TabPanel>
        })}
      </TabPanels>
    </Tabs>

  )
}

const Dashboard = () => {
  return (
    <Tabs isManual variant='unstyled' orientation='vertical' bg='#EDEDED'>
      <TabList bg='#1D4044' w='4em' display='flex' alignItems='center' justifyContent='space-between' gap='0.5em' h='100dvh' px='0.5em' py='1.5em'>
        <Flex direction='column' gap='0.5em'>
          <Tab w='3em' h='3em' borderRadius='0.625em' _selected={{ bg: '#2D666C' }}><PersonIcon /></Tab>
          <Tab w='3em' h='3em' borderRadius='0.625em' _selected={{ bg: '#2D666C' }}><ChatIcon /></Tab>
        </Flex>
        <Icon as={ConversoIcon} size='1.75em' />
      </TabList>

      <TabPanels>
        <TabPanel h='100%' display='flex' flexDirection='column' justifyContent='space-between'>
          <Profile profile={mockProfileData} />
        </TabPanel>
        <TabPanel p='0' h='100%' display='flex' flexDirection='column'>
          <Chat chats={mockChatData} />
        </TabPanel>
      </TabPanels>
    </Tabs >
  )

}

export default Dashboard