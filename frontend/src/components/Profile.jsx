import {
    Flex, Avatar, AvatarBadge, Icon, Text, Button, Link
} from '@chakra-ui/react'
import { ReactComponent as CameraIcon } from '../images/icons/camera.svg'

export const Profile = ({ profile }) => {
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