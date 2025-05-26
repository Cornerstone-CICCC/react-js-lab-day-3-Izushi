export type BlogPost = {
  id: string
  title: string
  content: string
  published: boolean
}

export type BlogAction =
  | { type: 'ADD_POST'; payload: BlogPost }
  | { type: 'UPDATE_POST'; payload: BlogPost }
  | { type: 'DELETE_POST'; payload: string }