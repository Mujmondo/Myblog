import { useState } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useNavigate } from "react-router-dom";
const modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline','strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['clean']
    ],
  }

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ]

const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [file, setFile] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate()


    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(file)

        const data = new FormData()
        data.set('title', title)
        data.set('summary', summary)
        data.set('file', file[0])
        data.set('content', content)
        await fetch('http://localhost:4000/api/posts/create', {
            method: 'POST',
            body: data,
            credentials: 'include'

        })
        navigate('/')
    }
    return ( 
        <div className="create-post">
           <div className="bg-white dark:bg-slate-900 max-w-[750px] py-10 mx-auto flex justify-center items-center shadow-xl rounded-2xl my-10">
            <div className="">
                <h1 className='text-2xl font-medium text-slate-600 dark:text-white text-center mb-4'>Create a new post</h1>
                <form onSubmit={handleSubmit} className='w-[650px]'>
                    <input 
                    className='w-full bg-transparent dark:text-slate-200 p-1 border-b border-slate-400 focus:border-[#2065b4] focus:outline-0 focus:border-0] mb-3' 
                    type="text" 
                    placeholder="Title"
                    value={title}
                    onChange={e => setTitle(e.target.value)}/><br />
                    <input 
                    className='w-full bg-transparent dark:text-slate-200 p-1 border-b border-slate-400 focus:border-[#2065b4] focus:outline-0 focus:border-0] mb-3' 
                    type="text" 
                    placeholder="Summary"
                    value={summary}
                    onChange={e => setSummary(e.target.value)}/><br />
                     <input 
                    className='w-full bg-transparent dark:text-slate-200 p-1 border-b border-slate-400 focus:border-[#2065b4] focus:outline-0 focus:border-0] mb-3' 
                    type="file" 
                    onChange={e => setFile(e.target.files)}/><br />
                    <ReactQuill 
                    value={content}
                    onChange={newValue => setContent(newValue)}
                    theme="snow"
                    modules={modules}
                    formats={formats}
                    />
                    <button className='bg-[#2065b4] w-full p-2 my-3 text-white'>Create post</button>
                </form>
            </div>
        </div>
        </div>
     );
}
 
export default CreatePost;