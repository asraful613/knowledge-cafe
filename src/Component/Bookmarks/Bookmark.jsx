
import PropTypes from 'prop-types'
import Bookmarks from './Bookmarks/Bookmarks'

const Bookmark = ({bookmarks,readingTime}) => {
  return (
      <div className='md:w-1/3 bg-gray-200 ml-4 mt-2 pt-4'>
        <h2>Reading Time {readingTime}</h2>
        <h2 className='text-3xl text-center '>Bookmarked Blogs: {bookmarks.length}</h2> 
    {
        bookmarks.map(bookmark => <Bookmarks readingTime={readingTime} key={bookmark.id} bookmark={bookmark}></Bookmarks>)
    }
 </div>
    )
}

Bookmark.propTypes = {
    bookmarks: PropTypes.array
}

export default Bookmark