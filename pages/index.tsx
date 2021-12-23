import {BsShieldLockFill, BsHeadset} from 'react-icons/bs';

export default function Index() {
  return (
    <main className='font-medium text-gray-200'>

      <div className='py-12 md:py-24 bg-polar-100 shadow-inner'>
        <div className='grid max-w-screen-xl px-6 mx-auto lg:px-8 xl:px-4 md:grid-cols-4 xl:grid-cols-5 gap-x-12 lg:gap-x-20'>
          <div className='self-center order-2 col-span-2 mt-12 md:order-1 md:mt-0'>
            <h1 className=' text-3xl font-bold text-white md:text-4xl lg:text-5xl md:mb-4 lg:mb-2'>Kythi.</h1>
            <p className='text-lg text-gray-200 xl:text-xl lg:mb-8 xl:mb-10'>Upload files seamlessly with custom links & customisable embeds.</p>
            <div className='flex mb-6 space-x-4 mt-5'>
              <button className='inline-block w-40 px-5 py-2 font-semibold text-white rounded-md bg-frost-400 hover:bg-frost-300 shadow-lg' >
                Login
              </button>
              <button className='inline-blockpx-5 py-2 w-40 font-semibold text-white rounded-md bg-aurora-red-200 hover:bg-aurora-red-100 shadow-lg'>
                Sign Up
              </button>
            </div>
            <p className='text-sm text-gray-400'>100% Free, invitation code required upon signing up.</p>
          </div>
        </div>
      </div>
      <div className='bg-polar-300 pt-20 shadow-inner'>
        <div className='max-w-screen-xl px-6 pb-12 mx-auto lg:px-8 xl:px-4 lg:pb-16 xl:pb-24'>
          <div className='mb-6 text-center md:mb-8'>
            <h2 className='mb-2 text-3xl font-bold text-white md:text-4xl lg:text-5xl md:mb-4'>Features</h2>
          </div>

          <div className='grid items-stretch md:grid-cols-3 gap-3'>
            <div className='p-6 bg-polar-100 hover:bg-polar-400 lg:duration-700 ease-in-out w-full border-none rounded-md md:p-8 lg:py-10 md:shadow-lg md:hover:shadow-lg md:transition-all md:duration-500 lg:h-64'>
              <div className='flex items-baseline justify-between mb-4'>
                <h4 className='text-xl font-bold lg:text-2xl'>Personalization.</h4>
                <svg xmlns='http://www.w3.org/2000/svg' className='h-8 w-8' fill='none' viewBox='0 0 24 24' stroke='#81A1C1'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01' />
                </svg>
              </div>
              <p className='mb-6 text-lg text-gray-200'>We allow you to customise your Files, Discord embeds, your Kythi profile and more!</p>
            </div>
            <div className='p-6 bg-polar-100 border-none w-full hover:bg-polar-400 lg:duration-700 ease-in-out rounded-md md:p-8 lg:py-10 md:shadow-lg md:hover:shadow-lg md:transition-all md:duration-500 lg:h-64'>
              <div className='flex items-baseline justify-between mb-4'>
                <h4 className='text-xl font-bold lg:text-2xl'>Secure.</h4>
                <BsShieldLockFill className="w-6 h-6"/>
              </div>
              <p className='mb-6 text-lg text-gray-200'>All passwords are hashed using argon2i. This prevents any attackers from taking your account</p>
            </div>
            <div className='p-6 bg-polar-100 hover:bg-polar-400 border-none rounded-md w-full md:p-8 lg:py-10 md:shadow-lg md:hover:shadow-lg md:transition-all md:duration-500 lg:h-64'>
              <div className='flex items-baseline justify-between mb-4'>
                <h4 className='text-xl font-bold lg:text-2xl'>Various File-Types</h4>
                <svg xmlns='http://www.w3.org/2000/svg' className='h-8 w-8' fill='none' viewBox='0 0 24 24' stroke='#EBCB8B'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z' />
                </svg>
              </div>
              <p className='mb-6 text-lg text-gray-200'>Kythi supports many File Types, for example we allow .mp4, .mp3, .png, .jpg and more!</p>
            </div>
            <div className='p-6 bg-polar-100 hover:bg-polar-400 lg:duration-700 border-none w-full rounded-md md:p-8 lg:py-5 md:shadow-lg md:hover:shadow-lg md:transition-all md:duration-500 lg:h-64'>
              <div className='flex items-baseline justify-between mb-4'>
                <h4 className='text-xl font-bold lg:text-2xl'>Open Source</h4>
                <svg xmlns='http://www.w3.org/2000/svg' className='h-8 w-8' fill='none' viewBox='0 0 24 24' stroke='#BF616A'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4' />
                </svg>
              </div>
              <p className='mb-6 text-lg text-gray-200'>You can view our code on <a className='text-frost-300' href='https://github.com/KythiX'>GitHub!</a> This gives you access to host this yourself as well as ensuring you know what happens with your data & how its handled.</p>
            </div>
            <div className='p-6 bg-polar-100 hover:bg-polar-400 lg:duration-700 border-none rounded-md w-full md:p-8 lg:py-10 md:shadow-lg md:hover:shadow-lg md:transition-all md:duration-500 lg:h-64'>
              <div className='flex items-baseline justify-between mb-4'>
                <h4 className='text-xl font-bold lg:text-2xl'>Custom Domains</h4>
                <svg xmlns='http://www.w3.org/2000/svg' className='h-8 w-8' fill='none' viewBox='0 0 24 24' stroke='#81A1C1'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9' />
                </svg>
              </div>
              <p className='mb-6 text-lg text-gray-200'>You can add a variety of custom domains.</p>
            </div>

            <div className='p-6 bg-polar-100 hover:bg-polar-400 lg:duration-700 border-none rounded-md md:p-8 w-full lg:py-10 md:shadow-lg md:hover:shadow-lg md:transition-all md:duration-500 lg:h-64'>
              <div className='flex items-baseline justify-between mb-4'>
                <h4 className='text-xl font-bold lg:text-2xl'>24/7 Support</h4>
                  <BsHeadset className="text-2xl"/>
              </div>
              <p className='mb-6 text-lg text-gray-200'>We provide fast support and answers, with a member of staff always being available.</p>
            </div>
          </div>
        </div>
      </div>

      <footer className='py-7 text-gray-200 bg-polar-100 xl:pb-10'>
        <div className='grid max-w-screen-xl gap-6 px-6 mx-auto lg:px-8 xl:px-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-x-8'>
          <div>
            <h5 className='text-xl font-bold text-gray-300'>Legal</h5>
            <nav className='mt-4'>
              <ul className='space-y-2'>
                <li>
                  <a href='https://kythi.com/terms' className='text-base hover:text-gray-300'>Terms of Service</a>
                </li>
                <li>
                  <a href='https://kythi.com/policy' className='text-base hover:text-gray-300'>Privacy Policy</a>
                </li>
              </ul>
            </nav>
          </div>
          <div>
            <h5 className='text-xl font-bold text-gray-300'>Contacts</h5>
            <nav className='mt-4'>
              <ul className='space-y-2'>
                <li>
                  <a href='#' className='text-base hover:text-gray-300' onClick={() => {
                    location.href = 'mailto:support@kythi.com';
                  }}>
                    <span>Email Us</span>
                  </a>
                </li>
                <li>
                  <a href='https://discord.gg/B82cvdZWem' className='text-base hover:text-gray-300'>Discord Server</a>
                </li>
              </ul>
            </nav>
          </div>
          <div>
            <h5 className='text-xl font-bold text-gray-300'>Links</h5>
            <nav className='mt-4'>
              <ul className='space-y-2'>
                <li>
                  <a href='https://kythi.com' className='text-base hover:text-gray-300'>Kythi Portfolio's</a>
                </li>
                <li>
                  <a href='https://github.com/KythiX' className='text-base hover:text-gray-300'>Our GitHub</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className='flex flex-col items-center justify-between max-w-screen-xl px-6 mx-auto mt-16 space-y-4 lg:px-8 xl:px-4 md:flex-row lg:mt-20'>
          <div className='space-y-4 text-sm text-center md:space-y-1 md:text-left'>
            <p>&copy;2021 <a href='https://github.com/KythiX' className='text-gray-400 hover:text-gray-300'>Kythi</a> | All rights reserved</p>
          </div>
        </div>
      </footer>
    </main>
  );
}