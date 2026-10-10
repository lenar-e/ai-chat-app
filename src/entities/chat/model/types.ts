export type ChatType = 'direct' | 'group'

export interface Chat {
  id: string
  type: ChatType
  title: string
  participantIds: string[]
  lastMessageText: string
  lastMessageAt: number
  unreadCount: number
  /** Direct chats only */
  peerUserId?: string
  isOnline?: boolean
  muted?: boolean
}
