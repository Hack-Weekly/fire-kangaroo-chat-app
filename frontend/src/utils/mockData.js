// MOCK DATA. PLEASE DELETE ONCE FRONTEND IS CONNECTED TO BACKEND PROPERLY :)

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
      {
        sender: 'Steven',
        content: 'How are you doing?',
        timestamp: 1679445680, // Time in UNIX Format
      },
      {
        sender: 'SuperKebbit',
        content: 'I am doing well, thanks!',
        timestamp: 1679445740, // Time in UNIX Format
      },
      {
        sender: 'Steven',
        content: "That's great to hear!",
        timestamp: 1679445780, // Time in UNIX Format
      },
      {
        sender: 'SuperKebbit',
        content: 'How about you?',
        timestamp: 1679445840, // Time in UNIX Format
      },
      {
        sender: 'Steven',
        content: "I'm doing pretty good too",
        timestamp: 1679445900, // Time in UNIX Format
      },
      {
        sender: 'Steven',
        content: 'What have you been up to lately?',
        timestamp: 1679445960, // Time in UNIX Format
      },
      {
        sender: 'SuperKebbit',
        content: 'Not much, just working on some projects',
        timestamp: 1679446020, // Time in UNIX Format
      },
      {
        sender: 'SuperKebbit',
        content: 'How about you?',
        timestamp: 1679446080, // Time in UNIX Format
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
      {
        sender: 'Alicia',
        content: 'How are you doing today?',
        timestamp: 1679470160, // Time in UNIX Format
      },
      {
        sender: 'SuperKebbit',
        content: "I'm doing pretty good, thanks! How about you?",
        timestamp: 1679470220, // Time in UNIX Format
      },
      {
        sender: 'Alicia',
        content: "I'm doing well too",
        timestamp: 1679470280, // Time in UNIX Format
      },
      {
        sender: 'Alicia',
        content: 'What have you been up to lately?',
        timestamp: 1679470340, // Time in UNIX Format
      },
      {
        sender: 'SuperKebbit',
        content: 'Just working on some projects, nothing too exciting',
        timestamp: 1679470400, // Time in UNIX Format
      },
      {
        sender: 'Alicia',
        content: 'Oh, that sounds interesting! What kind of projects?',
        timestamp: 1679470460, // Time in UNIX Format
      },
      {
        sender: 'SuperKebbit',
        content:
          'Mainly software development projects, like building web applications',
        timestamp: 1679470520, // Time in UNIX Format
      },
      {
        sender: 'Alicia',
        content: 'Wow, that sounds really cool!',
        timestamp: 1679470580, // Time in UNIX Format
      },
      {
        sender: 'Alicia',
        content: 'I wish I could code like that',
        timestamp: 1679470640, // Time in UNIX Format
      },
      {
        sender: 'SuperKebbit',
        content:
          "It's not as hard as you might think! You just need to start learning",
        timestamp: 1679470700, // Time in UNIX Format
      },
      {
        sender: 'SuperKebbit',
        content:
          'There are lots of great resources online that can help you get started',
        timestamp: 1679470760, // Time in UNIX Format
      },
    ],
  },
  {
    username: 'Emily',
    avatar: 'https://picsum.photos/seed/Emily/200', // Avatar image url
    presence: {
      active: true,
    },
    messageHistory: [
      {
        sender: 'Emily',
        content: 'Hey there',
        timestamp: 1679440080, // Time in UNIX Format
      },
      {
        sender: 'SuperKebbit',
        content: 'Hi Emily, how are you?',
        timestamp: 1679440140, // Time in UNIX Format
      },
      // Add 8 more messages for Emily
      {
        sender: 'Emily',
        content: "I'm doing well, thanks! How about you?",
        timestamp: 1679470160, // Time in UNIX Format
      },
      {
        sender: 'SuperKebbit',
        content: "I'm doing pretty good too",
        timestamp: 1679470220, // Time in UNIX Format
      },
      {
        sender: 'Emily',
        content: 'What have you been up to lately?',
        timestamp: 1679470280, // Time in UNIX Format
      },
      {
        sender: 'SuperKebbit',
        content: 'Just working on some coding projects',
        timestamp: 1679470340, // Time in UNIX Format
      },
      {
        sender: 'Emily',
        content: 'That sounds cool!',
        timestamp: 1679470400, // Time in UNIX Format
      },
      {
        sender: 'Emily',
        content: 'What kind of projects are you working on?',
        timestamp: 1679470460, // Time in UNIX Format
      },
      {
        sender: 'SuperKebbit',
        content: 'Mainly web development projects',
        timestamp: 1679470520, // Time in UNIX Format
      },
      {
        sender: 'Emily',
        content: 'Nice, do you have any tips for learning web development?',
        timestamp: 1679470580, // Time in UNIX Format
      },
      {
        sender: 'SuperKebbit',
        content:
          'Definitely! You should start by learning HTML, CSS, and JavaScript',
      },
      {
        sender: 'SuperKebbit',
        content:
          'There are lots of free resources online that can help you learn',
        timestamp: 1679470640, // Time in UNIX Format
      },
      {
        sender: 'Emily',
        content: "Thanks for the advice, I'll definitely check those out",
        timestamp: 1679470700, // Time in UNIX Format
      },
    ],
  },
  {
    username: 'John',
    avatar: 'https://picsum.photos/seed/John/200',
    presence: {
      active: false,
      lastActive: 1679432160,
    },
    messageHistory: [
      {
        sender: 'John',
        content: 'Hello, how are you?',
        timestamp: 1679429020,
      },
      {
        sender: 'SuperKebbit',
        content: "I'm fine, thanks. How about you?",
        timestamp: 1679432160,
      },
      {
        sender: 'John',
        content: 'I am good, thank you for asking',
        timestamp: 1679432460,
      },
    ],
  },
  {
    username: 'Maria',
    avatar: 'https://picsum.photos/seed/Maria/200',
    presence: {
      active: true,
    },
    messageHistory: [
      {
        sender: 'Maria',
        content: 'Hey, what are you up to?',
        timestamp: 1679452060,
      },
      {
        sender: 'SuperKebbit',
        content: 'Just working on some code. You?',
        timestamp: 1679452120,
      },
      {
        sender: 'Maria',
        content: 'Same here. Want to grab lunch later?',
        timestamp: 1679452180,
      },
    ],
  },
  // AN EXMAPLE OF EMPTY MESSAGE DATA:
  {
    username: 'Emilio',
    avatar: 'https://picsum.photos/seed/Emilio/200',
    presence: {
      active: true,
    },
  },
  // ANOTHER EXMAPLE OF EMPTY MESSAGE DATA:
  {
    username: 'Andrew',
    avatar: 'https://picsum.photos/seed/Andrew/200',
    presence: {
      active: true,
    },
    messageHistory: [],
  },
]
