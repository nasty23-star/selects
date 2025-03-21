export interface NoteInt {
  id: number
  flag?: Flag[]
  type: string
  login: string
  password: string
}

interface Flag {
  text: string
}
