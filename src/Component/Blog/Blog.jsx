import PropTypes from 'prop-types';
import { FaBookmark } from "react-icons/fa";
const Blog = ({blog,handleAddBookmark,handleMarkAsRead}) => {
    const {title,cover,reading_time,posted_date,author,author_img,hashtags}=blog;
    return (
        <div className='mb-20 space-y-4'>
            <img className='w-full mb-8 rounded-lg' src={cover} alt={`cover picture of the title ${title}`} />
            <div className='flex justify-between mb-4'>
                <div className='flex'>
                <img className='w-14' src={author_img} alt="" />
                <div className='ml-6'>
            <h3 className='text-2xl'>{author}</h3>
            <p>{posted_date}</p>
                </div>
                </div>
                <div>
            <span>{reading_time} min read</span>
            <button onClick={() => handleAddBookmark (blog)} className='ml-2 text-2xl text-red-600'><FaBookmark /></button>
                </div>
            </div>
            <h2 className='text-4xl'>{title}</h2>
            <p>
                {
                    hashtags.genres.map((hash,indx)=> <span key={indx}> <a href="">#{hash}</a></span>)
                }
            </p>
            <p>
                {
                    hashtags.themes.map((hash,indx)=> <span key={indx}> <a href="">#{hash}</a></span>)
                }
            </p>
            <button onClick={()=>handleMarkAsRead(reading_time)} className='text-purple-700 font-bold underline'>Mark As Read</button>
        </div>
    );
};

Blog.propTypes={
    blog:PropTypes.object.isRequired,
    handleAddBookmark:PropTypes.func,
    handleMarkAsRead:PropTypes.func
}

export default Blog;