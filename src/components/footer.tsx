import { FC } from "react";

const Footer: FC = () => {
    return (
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
                  <a href='https://kythi.com' className='text-base hover:text-gray-300'>Kythi Portfolio&apos;s</a>
                </li>
                <li>
                  <a href='https://github.com/KythiX' className='text-base hover:text-gray-300'>GitHub</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className='flex flex-col items-center justify-between max-w-screen-xl px-6 mx-auto mt-16 space-y-4 lg:px-8 xl:px-4 md:flex-row lg:mt-20'>
          <div className='space-y-4 text-sm text-center md:space-y-1 md:text-left'>
            <p>&copy;2021 <a href='https://github.com/KythiX' className='text-gray-400 hover:text-gray-300'>Kythi</a> | All rights reserved</p>
            <p>Designed and maintained by KythiX</p>
          </div>
        </div>
      </footer>
    )
}

export default Footer