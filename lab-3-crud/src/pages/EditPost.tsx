import { useParams, useNavigate } from 'react-router-dom'
import { useBlog } from '../context/BlogContext'
import BlogForm from '../components/BlogForm'
import type { BlogPost } from '../types'
import toast from 'react-hot-toast'

const EditPost = () => {
  const { id } = useParams<{ id: string }>()
  const { posts, dispatch } = useBlog()
  const navigate = useNavigate()

  const post = posts.find(p => p.id === id)

  if (!post) {
    return <div className="mb-8">Post not found</div>
  }

  const handleSubmit = (data: Omit<BlogPost, 'id'>) => {
    dispatch({
      type: 'UPDATE_POST',
      payload: { ...data, id: post.id }
    })
    toast.success('Post updated successfully')
    navigate(`/blog/${post.id}`)
  }

  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Edit Post</h1>
      <BlogForm
        initialValues={post}
        onSubmit={handleSubmit}
        buttonText="Update Post"
      />
    </div>
  )
}

export default EditPost