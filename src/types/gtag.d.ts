declare global {
  interface Window {
    gtag?: (
      command: 'config' | 'event' | 'js' | 'consent',
      targetId: string,
      config?: {
        [key: string]: string | number | boolean | undefined
        event_category?: string
        event_label?: string
        value?: string | number
      }
    ) => void
  }
}

export {}