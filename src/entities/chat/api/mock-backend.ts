/** Simulates the network latency of a mock backend */
export function mockDelay(minMs = 250, maxMs = 700): Promise<void> {
  const ms = minMs + Math.random() * (maxMs - minMs)
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export function buildMockReply(chatTitle: string, isBot: boolean): string {
  if (isBot) {
    return "I'm the support bot (mock). Message received — standard reply: check the Docs section and share your ticket number."
  }
  return `Got it 🙂 This is an auto-reply for "${chatTitle}". Once a real backend is connected, this will be a live conversation.`
}
