import type { Chat } from '@/entities/chat/model/types'
import type { Message } from '@/entities/message/model/types'
import type { UserProfile } from '@/entities/user/model/types'
import { CURRENT_USER_ID } from '@/entities/user/model/constants'

const now = Date.now()
const minute = 60_000

export const usersSeed: Record<string, UserProfile> = {
  [CURRENT_USER_ID]: {
    id: CURRENT_USER_ID,
    displayName: 'You',
    username: 'me',
    avatarHue: 205,
  },
  'user-alice': {
    id: 'user-alice',
    displayName: 'Alice Rivera',
    username: 'alice',
    avatarHue: 320,
  },
  'user-daniel': {
    id: 'user-daniel',
    displayName: 'Daniel Brooks',
    username: 'daniel_b',
    avatarHue: 38,
  },
  'user-support-bot': {
    id: 'user-support-bot',
    displayName: 'Support Bot',
    username: 'support_bot',
    avatarHue: 156,
    isBot: true,
  },
}

export const chatsSeed: Chat[] = [
  {
    id: 'chat-alice',
    type: 'direct',
    title: usersSeed['user-alice'].displayName,
    participantIds: [CURRENT_USER_ID, 'user-alice'],
    peerUserId: 'user-alice',
    lastMessageText: "Great — I'll wait for the mockups by Friday.",
    lastMessageAt: now - 5 * minute,
    unreadCount: 2,
    isOnline: true,
  },
  {
    id: 'chat-group-fe',
    type: 'group',
    title: 'Frontend Team',
    participantIds: [
      CURRENT_USER_ID,
      'user-alice',
      'user-daniel',
      'user-support-bot',
    ],
    lastMessageText: 'Daniel: pushed the updated README to the repo.',
    lastMessageAt: now - 45 * minute,
    unreadCount: 0,
  },
  {
    id: 'chat-daniel',
    type: 'direct',
    title: usersSeed['user-daniel'].displayName,
    participantIds: [CURRENT_USER_ID, 'user-daniel'],
    peerUserId: 'user-daniel',
    lastMessageText: 'Can you remind me when the review is due?',
    lastMessageAt: now - 3 * 60 * minute,
    unreadCount: 0,
    isOnline: true,
  },
  {
    id: 'chat-support',
    type: 'direct',
    title: usersSeed['user-support-bot'].displayName,
    participantIds: [CURRENT_USER_ID, 'user-support-bot'],
    peerUserId: 'user-support-bot',
    lastMessageText: 'Hi! How can I help you today?',
    lastMessageAt: now - 26 * 60 * minute,
    unreadCount: 1,
  },
]

function sortChats(chats: Chat[]): Chat[] {
  return [...chats].sort((a, b) => b.lastMessageAt - a.lastMessageAt)
}

export const initialChats = sortChats(chatsSeed)

export const initialMessagesByChatId: Record<string, Message[]> = {
  'chat-alice': [
    {
      id: 'm-a1',
      chatId: 'chat-alice',
      authorId: CURRENT_USER_ID,
      text: 'Hey! Could you take a look at the PR with the login form?',
      createdAt: now - 120 * minute,
      delivery: 'read',
    },
    {
      id: 'm-a2',
      chatId: 'chat-alice',
      authorId: 'user-alice',
      text: "Sure, I'll review it tonight. It's just the validation, right?",
      createdAt: now - 118 * minute,
      delivery: 'read',
    },
    {
      id: 'm-a3',
      chatId: 'chat-alice',
      authorId: CURRENT_USER_ID,
      text: 'Yeah, plus a small refactor of the hook.',
      createdAt: now - 115 * minute,
      delivery: 'read',
    },
    {
      id: 'm-a4',
      chatId: 'chat-alice',
      authorId: 'user-alice',
      text: "Great — I'll wait for the mockups by Friday.",
      createdAt: now - 5 * minute,
      delivery: 'read',
    },
  ],
  'chat-group-fe': [
    {
      id: 'm-g1',
      chatId: 'chat-group-fe',
      authorId: 'user-support-bot',
      text: 'Reminder: standup tomorrow at 10:00 AM.',
      createdAt: now - 180 * minute,
      delivery: 'read',
    },
    {
      id: 'm-g2',
      chatId: 'chat-group-fe',
      authorId: 'user-alice',
      text: "Please record it in case someone can't make it — we'll share the link.",
      createdAt: now - 170 * minute,
      delivery: 'read',
    },
    {
      id: 'm-g3',
      chatId: 'chat-group-fe',
      authorId: 'user-daniel',
      text: 'Pushed the updated README to the repo.',
      createdAt: now - 45 * minute,
      delivery: 'read',
    },
  ],
  'chat-daniel': [
    {
      id: 'm-d1',
      chatId: 'chat-daniel',
      authorId: 'user-daniel',
      text: 'Can you remind me when the review is due?',
      createdAt: now - 3 * 60 * minute,
      delivery: 'read',
    },
  ],
  'chat-support': [
    {
      id: 'm-s1',
      chatId: 'chat-support',
      authorId: 'user-support-bot',
      text: 'Hi! How can I help you today?',
      createdAt: now - 26 * 60 * minute,
      delivery: 'read',
    },
  ],
}
