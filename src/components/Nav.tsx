function Nav() {
  return (
    <nav className='flex justify-between items-center bg-blue-300 size-14 w-full p-10'>
      <div className='flex justify-between gap-4'>
        <div className=''>
          <h1>ZetaTube</h1>
        </div>
        <ul className='flex justify-between'>
          <li>Plans</li>
          <li>Features</li>
          <li>Domain</li>
          <li>Resources</li>
        </ul>
      </div>
      <div className=''>
        <a href=''>Log in</a>
        <a href=''>Sign Up</a>
      </div>
    </nav>
  );
}

export default Nav;
