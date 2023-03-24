import {
  Tabs, TabList, TabPanels, Tab, TabPanel, Flex, Avatar, AvatarBadge, Icon, Text, Button, Link, Input
} from '@chakra-ui/react'
import { ReactComponent as ChatIcon } from '../images/icons/chat.svg'
import { ReactComponent as PersonIcon } from '../images/icons/person.svg'
import { ReactComponent as ConversoIcon } from '../images/icons/converso-white.svg'
import { ReactComponent as CameraIcon } from '../images/icons/camera.svg'
import { ReactComponent as EllipsisIcon } from '../images/icons/ellipsis.svg'
import timeAgo from '../utils/timeAgo'
import { mockChatData, mockProfileData } from '../utils/mockData'

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

const Chat = ({ chats, profile }) => {
  return (
    <Tabs isManual variant='unstyled' orientation='vertical' w='100%' h='100%'>
      <TabList w='md' bg='#F7F7F7'>
        <Flex px='2em' alignItems='center' justifyContent='space-between' h='5.25em'>
          <Text fontSize='1.5em' fontWeight='700'>Chats ({chats.length})</Text>
          <Icon as={EllipsisIcon} size='1.75em' />
        </Flex>
        <Flex h='calc(100vh - 5.25rem)' direction='column' overflow='auto'>
          {chats.map((chat, index) => {
            return (<Tab key={index} h='5.25em' display='flex' justifyContent='flex-start' px='2em' gap='1.5em' margin='1px' _selected={{ bg: '#C7C7C7', borderRadius: '0.625em' }}>
              {chat.presence.active ? (<Avatar src={chat.avatar}>
                <AvatarBadge boxSize='1rem' bg='#3CD65E' border='1px solid #FAFAFA' />
              </Avatar>) : (<Avatar src={chat.avatar} />)}
              <Flex direction='column' alignItems='flex-start' w='100%'>
                <Flex justifyContent='space-between' alignItems='center' w='100%'>
                  <Text fontWeight='600' fontSize='lg'>{chat.username}</Text>
                  <Text fontSize='sm' color='#545454'>{chat.messageHistory?.length ? new Date(chat.messageHistory[0].timestamp * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : ''}</Text>
                </Flex>
                <Text textAlign='left' noOfLines={1}>{chat.messageHistory?.length ? chat.messageHistory[chat.messageHistory.length - 1].content : '—'}</Text>
              </Flex>
            </Tab>)
          })}
        </Flex>
      </TabList>
      <TabPanels w='100%'>
        {chats.map((chat, index) => {
          return (<TabPanel h='100vh' key={index} p='0'>
            <Flex px='2em' alignItems='center' gap='1.5em' h='5.25em' bg='#F7F7F7' borderLeft='1px solid #E8E8E8'>
              {chat.presence.active ? (<Avatar src={chat.avatar} boxSize='3em'>
                <AvatarBadge boxSize='1rem' bg='#3CD65E' border='1px solid #FAFAFA' />
              </Avatar>) : (<Avatar src={chat.avatar} boxSize='3em' />)}
              <Flex direction='column' justifyContent='center' w='100%'>
                <Text fontWeight='600' fontSize='xl'>{chat.username}</Text>
                {chat.presence.active ? (
                  <Text fontSize='sm' color='#545454'>Active now</Text>
                ) : (
                  <Text fontSize='sm' color='#545454'>Last seen {timeAgo(chat.presence.lastActive * 1000)}</Text>
                )}
              </Flex>
            </Flex>
            <Flex w='100%' h='calc(100vh - 11em)' direction='column' px='4.5em' py='3em' gap='1.75em' overflow='auto'>
              {chat.messageHistory?.length ? chat.messageHistory.map((message, index) => {
                return (
                  <Flex key={index} w='100%' h='fit-content' gap='1.25em'>
                    {profile.username === message.sender ? (<Avatar src={profile.avatar} />) :
                      (<Avatar src={chat.avatar} />)}
                    <Flex direction='column' gap='0.625em'>
                      <Flex gap='0.625em' alignItems='baseline'>
                        <Text fontSize='xl' fontWeight='600' color={profile.username === message.sender ? '#1D4044' : '#043968'}>{message.sender}</Text>
                        <Text color='#545454' fontSize='sm'>{new Date(message.timestamp * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</Text>
                      </Flex>
                      <Text fontSize='lg' w='fit-content' py='1.125em' px='1.75em' borderRadius='0px 1em 1em 1em' color='#FAFAFA' bg={profile.username === message.sender ? '#275D4D' : '#06447C'}>{message.content}</Text>
                    </Flex>
                  </Flex>
                )
              }) : (<Flex w='100%' h='100%' justifyContent='center' alignItems='center'>
                <Text fontSize='4xl' color='#C7C7C7' userSelect='none'>Conversation is empty.</Text>
              </Flex>)}
            </Flex>
            <Flex px='4.5em' py='1em'>
              <Input px='1.375em' variant='unstyled' bg='#FAFAFA' border='1px solid #545454' boxShadow='0.25em 0.25em 0.25em rgba(0, 0, 0, 0.1)' placeholder={`Message ${chat.username}`} w='100%' h='3.25em' />
            </Flex>
          </TabPanel>)
        })}
      </TabPanels>
    </Tabs>
  )
}

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
        <TabPanel h='100%' display='flex' flexDirection='column' justifyContent='space-between'>
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