import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import appwriteService from '../appwrite/config'


const PostCard = ({
  $id, title, featuredImage
}) => {
  return (
    <Link to={`/post/${$id}`}>
      <div
        className='w-full bg-gray-100 rounded-xl p-4'
      >
        <div
        className='w-full justify-center mb-4'>
          <img src={appwriteService.getFilePreview(featuredImage)} alt={title} 
          className='rounded-xl'/>
        </div>
        <h2 className='text-xl font-bold'>{title}</h2>
      </div>
    </Link>
  )
}

PostCard.propTypes = {
  $id: PropTypes.string,
  title: PropTypes.string,
  featuredImage: PropTypes.string
}

export default PostCard