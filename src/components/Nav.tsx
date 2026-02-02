function Nav() {
  return (
    <nav className='bg-teal-600 h-16 w-full text-white text-lg sticky top-0'>
      <div className='max-w-7xl mx-auto h-full flex justify-between items-center'>
        <div className='flex items-center gap-12'>
          <div className=''>
            <h1 className='text-3xl font-bold tracking-wider'>ZETAURL</h1>
          </div>
          <ul className='flex gap-8'>
            <li>
              <a href='#' className='hover:underline decoration-white'>
                Plans
              </a>
            </li>
            <li>
              <a href='#' className='hover:underline decoration-white'>
                Features
              </a>
            </li>
            <li>
              <a href='#' className='hover:underline decoration-white'>
                Domains
              </a>
            </li>
            <li>
              <a href='#' className='hover:underline decoration-white'>
                Resources
              </a>
            </li>
          </ul>
        </div>
        <div className='flex gap-6 items-center'>
          <a href='#' className='hover:underline decoration-white'>
            Log In
          </a>
          <a
            href='#'
            className='bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded'
          >
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
