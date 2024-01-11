function Navbar() {
  return (
    <div className="navbar">
      <img src="logo.svg" alt="" />
      <div className="navbar-content">
        <span className="link">Home</span>
        <span className="link">New</span>
        <span className="link">Popular</span>
        <span className="link">Trending</span>
        <span className="link">Categories</span>
      </div>
    </div>
  );
}

export default Navbar;
