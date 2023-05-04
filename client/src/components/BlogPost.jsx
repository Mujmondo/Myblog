const BlogPost = ({post}) => {
    return (
        <div className="blogpost bg-white">
            <div className="cover mb-4">
                <img src={'http://localhost:4000/' + post.picture}
                    className="w-100"
                    width="100%"
                    alt="post cover"
                />
            </div>
            <div className="info px-5">
                <h4 className="text-4xl mb-3">{post.title}</h4>
                <p className="inline-block text-lg py-2 border-b border-solid border-slate-300"><i>by <span className="text-[#2065b4]">Rachel Leist</span> on <span>April 29, 2020 </span></i></p>
                {/* <hr className="my-4" /> */}
                <p className="text-[19px] leading-8 my-3">{post.summary}</p>
                <button className="text-sm font-semibold mb-4 border-b border-dotted border-slate-600 hover:text-[#2065b4]">READ MORE</button>
            </div>
        </div>
    );
}

export default BlogPost;