import { useState, useEffect } from 'react';
import BlogList from './bloglist';


const Home = () => {
const [blogs, setBlogs] = useState (null);
const [isPending, setIsPending] = useState(true);
const [error,setError] = useState(null);

// const [name, setName] = useState('TS');

// const handleDelete = (id) =>{
//     const newBlogs = blogs.filter(blog => blog.id !== id);
//     setBlogs(newBlogs);
// }

useEffect(() =>{
   fetch('http://localhost:8000/blogs')
   .then( res => {    
    if(!res.ok){
        throw Error('Could not fetch the data for that resource')
    }
    return res.json();
   })
   .then(data =>{
    setBlogs(data);
    setIsPending(false);
    setError(null);
   })
   .catch((err =>{
    setIsPending(false);
    setError(err.massage);
   }))
} ,[]);

    return ( 
        <div className="home">
            {error && <div>{ error }</div> }
            {isPending && <div> Loading...</div> }
         {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
         {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'TS')} title="TS blogs"/> */}
        {/* <button onClick={() => setName('LS')}>Change name</button>
        <p>{ name }</p> */}
        </div>
     );
}
 
export default Home;