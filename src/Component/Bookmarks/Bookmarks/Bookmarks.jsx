import Proptypes from 'prop-types'
const Bookmarks = ({bookmark}) => {
    console.log(bookmark);
    const {title}=bookmark;
    return (
        <div className='bg-slate-200 p-4 m-4 rounded-xl'>
            <h2 className='text-2xl'>{title}</h2>
            
        </div>
    );
};
Bookmarks.Proptypes={
    bookmark:Proptypes.object,
    readingTime:Proptypes.number
}

export default Bookmarks;