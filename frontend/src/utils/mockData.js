/**
 * Mock Data for the User Profile so that backend can easily define their API endpoint. :)
 *
 */
export const mockProfileData = {
  avatar: 'https://picsum.photos/seed/SupperKebbit/200', // Avatar image url
  username: 'SuperKebbit',
  bio: 'My biography huh? Well I don’t know what to type so this is this. Another extra sentence for those with a lot to say.',
}

/**
 * Mock Data for the Chat Room so that backend can easily define their API endpoint. :)
 */
export const mockChatData = [
  {
    username: 'Steven',
    avatar: 'https://picsum.photos/seed/Steven/200', // Avatar image url
    presence: {
      active: false,
      lastActive: 1679476080, // Time in UNIX Format. This data may or may not exist depending on active status.
    },
    messageHistory: [
      {
        sender: 'Steven',
        content: 'I am test data',
        timestamp: 1679415060, // Time in UNIX Format
      },
      {
        sender: 'SuperKebbit',
        content: 'I am test data 2',
        timestamp: 1679415660, // Time in UNIX Format
      },
    ],
  },
  {
    username: 'Alicia',
    avatar: 'https://picsum.photos/seed/Alice/200', // Avatar image url
    presence: {
      active: true,
    },
    messageHistory: [
      {
        sender: 'Alicia',
        content: 'Hi',
        timestamp: 1679440080, // Time in UNIX Format
      },
      {
        sender: 'SuperKebbit',
        content: 'Hello',
        timestamp: 1679440140, // Time in UNIX Format
      },
    ],
  },
]
