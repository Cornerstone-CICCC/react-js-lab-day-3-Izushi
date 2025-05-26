import { useNavigate } from 'react-router-dom'
import { useBlog } from '../context/BlogContext'
import BlogForm from '../components/BlogForm'
import type { BlogPost } from '../types'
import toast from 'react-hot-toast'

const AddPost = () => {
  const { dispatch } = useBlog()
  const navigate = useNavigate()

  const handleSubmit = (data: Omit<BlogPost, 'id'>) => {
    const newPost: BlogPost = { ...data, id: crypto.randomUUID() }
    dispatch({ type: 'ADD_POST', payload: newPost })
    toast.success('Post created successfully')
    navigate('/blog')
  }

  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Create New Post</h1>
      <BlogForm onSubmit={handleSubmit} buttonText="Create Post" />
    </div>
  )
}

export default AddPost