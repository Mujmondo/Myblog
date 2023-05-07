import {format} from 'date-fns'
import { Link } from 'react-router-dom';
const BlogPost = ({post, type}) => {

    return (
        <div className="blogpost container bg-white dark:bg-slate-900 dark:border dark:border-slate-800">
            <div className="cover">
                <img src={'http://localhost:4000/' + post.picture}
                    className="w-100"
                    width="100%"
                    alt="post cover"
                />
            </div>
            <div className="info px-5 py-5">
                <h4 className="text-4xl mb-3 dark:text-white">{post.title}</h4>
                <p className="inline-block dark:text-slate-200 text-lg py-2 border-b border-solid border-slate-300"><i>by <span className="text-[#2065b4] mx-1">{post?.author?.username}</span> on <span className='font-[monospace] ms-1'>{new Date(post.createdAt).toDateString()}</span></i></p>
                {/* <hr className="my-4" /> */}
                <p className="text-[19px] leading-8 dark:text-slate-300 my-3">{post.summary}</p>
                {type === 'home' && (
                <div className="mb-4">
                <Link to={'/post/' + post._id} className="text-sm dark:text-white font-semibold border-b border-dotted border-slate-600 dark:border-slate-100 hover:text-[#2065b4]">READ MORE</Link>
                </div>
                )}
                {type === 'postPage' && (
                    <div dangerouslySetInnerHTML={{__html: post.content}} />
                )}
            </div>
        </div>
    );
}

export default BlogPost;