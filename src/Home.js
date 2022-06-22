const Home = () => {

    const handleclick = () => {
        console.log('Hello');
    }
    return ( 
        <div className="home">
            <h2>homepage</h2>
            <button onClick={handleclick}>Click me</button>
        </div>
     );
}
 
export default Home;