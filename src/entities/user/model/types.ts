export type UserId = string

export interface UserProfile {
  id: UserId
  displayName: string
  username?: string
  /** 0–360, used to derive a stable avatar color */
  avatarHue: number
  isBot?: boolean
}
