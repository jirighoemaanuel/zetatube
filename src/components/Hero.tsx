function Hero() {
  return (
    <section className='bg-linear-to-b from-blue-900 to-blue-800 text-white py-20'>
      <div className='max-w-7xl mx-auto px-6'>
        <div className='flex gap-12 items-start'>
          {/* Left Content */}
          <div className='flex-1'>
            <h1 className='text-5xl font-bold mb-6 leading-tight'>
              URL Shortener, Branded Short Links & Analytics
            </h1>
            <p className='text-lg text-gray-200 mb-6'>
              Welcome to the original link shortener — simplifying the Internet
              through the power of the URL since 2002.
            </p>
            <p className='text-gray-300 mb-8'>
              You can use branded domains for fully custom links, track link
              analytics, and enjoy other powerful features with our paid plans.
            </p>
            <div className='flex gap-4'>
              <button className='bg-white text-blue-900 px-8 py-3 rounded font-semibold hover:bg-gray-100'>
                View Plans
              </button>
              <button className='bg-teal-500 text-white px-8 py-3 rounded font-semibold hover:bg-teal-600'>
                Create Free Account
              </button>
            </div>
          </div>

          {/* Right Form */}
          <div className='flex-1'>
            <form className='bg-white text-gray-800 p-8 rounded-lg shadow-lg'>
              <div className='flex gap-2 mb-6'>
                <button
                  type='button'
                  className='bg-white border-2 border-gray-300 px-4 py-2 rounded flex-1'
                >
                  🔗 Shorten a Link
                </button>
                <button
                  type='button'
                  className='bg-teal-500 text-white px-4 py-2 rounded flex-1'
                >
                  📊 Generate QR Code
                </button>
              </div>

              <div className='mb-6'>
                <label className='block font-semibold mb-2'>Long URL *</label>
                <input
                  type='text'
                  placeholder='Paste long URL here'
                  className='w-full border-2 border-red-500 px-4 py-3 rounded'
                />
              </div>

              <div className='flex gap-4 mb-6 items-end'>
                <div>
                  <label className='block font-semibold mb-2'>Domain</label>
                  <div className='text-lg font-semibold'>zetatube.com</div>
                </div>
                <div className='text-2xl'>/</div>
                <div className='flex-1'>
                  <label className='block font-semibold mb-2'>
                    Alias (optional)
                  </label>
                  <input
                    type='text'
                    placeholder='Add alias here'
                    className='w-full border px-4 py-3 rounded'
                  />
                </div>
              </div>

              <button
                type='submit'
                className='w-full bg-green-600 text-white py-3 rounded font-semibold hover:bg-green-700'
              >
                Shorten Link
              </button>

              <p className='text-xs text-gray-600 mt-4'>
                By clicking Shorten Link, you agree with our{' '}
                <a href='#' className='text-teal-500'>
                  Terms of Service
                </a>
                ,{' '}
                <a href='#' className='text-teal-500'>
                  Privacy Policy
                </a>
                , and{' '}
                <a href='#' className='text-teal-500'>
                  Use of Cookies
                </a>
                .
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
