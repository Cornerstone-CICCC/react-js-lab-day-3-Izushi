import { memo } from 'react'
import { Link } from 'react-router-dom'

interface HeaderProps {
  firstname: string
}

const Header = ({ firstname }: HeaderProps) => {
  return (
    <header className="shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center max-w-6xl">
        <div className="flex items-center space-x-6">
          <Link to="/" className="text-xl font-bold">BlogApp</Link>
        </div>
        <div className="flex items-center space-x-6">
          <nav className="space-x-4">
            <Link to="/" className="hover:text-gray-500 transition-colors">Home</Link>
            <Link to="/blog" className="hover:text-gray-500 transition-colors">Blog</Link>
          </nav>
          <div className="font-medium bg-gray-500 text-white px-3 py-1 rounded-full">
            {firstname}
          </div>
        </div>
      </div>
    </header>
  )
}

export default memo(Header)