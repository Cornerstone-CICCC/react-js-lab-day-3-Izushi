import { createContext, useContext, useReducer, type Dispatch, type ReactNode } from 'react'
import { v4 as uuidv4 } from 'uuid'
import type { BlogAction, BlogPost } from '../types'

interface BlogContextType {
  posts: BlogPost[]
  dispatch: Dispatch<BlogAction>
}

const BlogContext = createContext<BlogContextType | undefined>(undefined)

const blogReducer = (state: BlogPost[], action: BlogAction): BlogPost[] => {
  switch (action.type) {
    case 'ADD_POST':
      return [...state, { ...action.payload, id: uuidv4() }]
    case 'UPDATE_POST':
      return state.map(post =>
        post.id === action.payload.id ? action.payload : post
      )
    case 'DELETE_POST':
      return state.filter(post => post.id !== action.payload)
    default:
      return state
  }
}

export const BlogProvider = ({ children }: { children: ReactNode }) => {
  const [posts, dispatch] = useReducer(blogReducer, [])

  return (
    <BlogContext.Provider value={{ posts, dispatch }}>
      {children}
    </BlogContext.Provider>
  )
}

export const useBlog = () => {
  const context = useContext(BlogContext)
  if (context === undefined) {
    throw new Error('useBlog must be used within a BlogProvider')
  }
  return context
}