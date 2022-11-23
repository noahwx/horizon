const Home = () => {
    return (
        <div className="Home">
            <h2 className="home-head">Latest Post</h2>
            <div className="Feed">
                <div className="post-area">
                    <div className="user-image-p"></div>
                    <form>
                        <textarea id="post" className="post-box" placeholder="What's going on?"/>
                        <button type="submit" className="post-button">Post</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
 
export default Home;