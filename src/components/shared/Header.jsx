import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export function Header() {

  const [open, setOpen] = React.useState(false)
  function handleMenu() {
    open ? setOpen(false) : setOpen(true)
  }

  return (

    <nav className="px-2 sm:px-4 py-2 bg-black bg-opacity-20">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link href="/">
          <a className="flex items-center gap-2">
            <Image height={60} width={60} src="/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
            <span style={{ fontFamily: 'Gulzar, serif' }} className="text-sky-700 self-center text-xl font-semibold whitespace-nowrap">
              تودو اَپ
            </span>
          </a>
        </Link>
        <div className="relative flex items-center md:order-2">
          <button onClick={handleMenu} type="button" className=" hidden md:flex mr-3 text-sm rounded-full md:mr-0" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
            <span className="sr-only">Open user menu</span>
            <Image height={50} width={50} className="w-8 h-8 rounded-full" src="/logo.svg" alt="user photo" />
          </button>

          {/* <!-- Dropdown menu --> */}
          {open && (
            <div className="z-50 absolute w-40 top-12 right-0 my-4 text-base list-none bg-gray-100 rounded divide-y divide-gray-100 shadow block" id="user-dropdown" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="bottom"
            // style={{ position: 'absolute', inset: '0px auto auto 0px', margin: '0px', transform: 'translate(810px, 100px)' }}
            >
              <div className="py-3 px-4">
                <span style={{ fontFamily: 'Noto Kufi Arabic, sansSerif' }} className="block text-sm text-gray-900">محمد اَحنف الرحمن</span>
                {/* <span style={{ fontFamily: 'Noto Kufi Arabic, sansSerif' }} className="block text-sm font-medium text-gray-500 truncate">mail.me@ahnafyaes.tech</span> */}
              </div>
              <ul style={{ fontFamily: 'Noto Kufi Arabic, sansSerif' }} className="py-1 px-4" aria-labelledby="user-menu-button">
                <li>
                  <a href="#" className="block py-2 px-4 w-full border-b-2 text-sm text-gray-700 hover:bg-gray-100">مۏل فلک</a>
                </li>
                <li>
                  <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100">نيرڎارں</a>
                </li>
                {/* <li>
                  <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100">Earnings</a>
                </li> */}
                <li>
                  <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100">پرسطٕان</a>
                </li>
              </ul>
            </div>
          )}

          <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="mobile-menu-2" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
          </button>
        </div>
        <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
          <ul style={{ fontFamily: 'Noto Kufi Arabic, sansSerif' }} className="flex flex-col p-4 mt-4 border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
            <li>
              <Link href="#" >
                <a className="text-xl py-2 pr-4 pl-3 font-bold text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0" aria-current="page">ڠر</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a className="text-xl font-bold py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">متعلق</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a className="text-xl font-bold py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">خدمات</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a className="text-xl font-bold py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">قیمتان</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a className="text-xl font-bold py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">ظۋگاظۋگ</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  )
}