// import { useState, useEffect } from 'react';
import BlogList from './bloglist';
import useFetch from './useFetch';


const Home = () => {
   const { data:blogs, isPending, error} = useFetch ('http://localhost:8000/blogs');

// const [name, setName] = useState('TS');

// const handleDelete = (id) =>{
//     const newBlogs = blogs.filter(blog => blog.id !== id);
//     setBlogs(newBlogs);
// }



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