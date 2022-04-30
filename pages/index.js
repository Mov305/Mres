import Link from "next/link"
import f1 from '../assets/img/f1.jpg'
import f2 from '../assets/img/f2.jpg'
import f3 from '../assets/img/f3.jpg'
import React from "react"

const HomeSvg = () => {
  return <svg xmlns="http://www.w3.org/2000/svg" className="inline-block h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round"
      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
}
const ClockSvg = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mb-1 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>

const AboutSvg = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
const ContactSvg = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
</svg>
const Menu = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
</svg>





export default function Home() {

  const [menu, setmenu] = React.useState({ style: 'hidden' })
  const handleMenu = () => {
    if (menu.style === 'hidden') {
      setmenu({ style: 'block' })
    } else {
      setmenu({ style: 'hidden' })
    }
  }

  return (
    <div className="text-gray-500 font-body  " >
      <div>
        <div className="md:grid grid-cols-10">
          <nav className=" col-span-2 md:flex md:justify-end text-right">   {/*start nav */}
            <div>
              <div className="flex justify-between items-center">
                <h1 className="font-semibold uppercase p-4 border-b border-gray-50" >
                  <Link href='/' ><a className=" text-sm  sm:text-lg md:text-xl xl:text-2xl hover:text-gray-700">MovFood</a></Link>
                </h1>
                <div className="md:hidden m-4" onClick={() => handleMenu()}>
                  <Menu />
                </div>
              </div>

              <ul className={`text-sm pt-4 ${menu.style}  overflow-hidden md:block`}>
                <li className=" py-1 px-4 border-r-4 border-orange-600 ">
                  <Link href='/'><a><span className='font-bold' >Home <HomeSvg /> </span></a></Link>
                </li>
                <li className=" py-1 px-4  border-r-4 border-white">
                  <Link href='/' ><a><span>About <AboutSvg /></span></a></Link>
                </li>
                <li className=" py-1 px-4  border-r-4 border-white">
                  <Link href='/' ><a><span>Contact <ContactSvg /></span></a></Link>
                </li>
              </ul>
            </div>
          </nav>   {/*end nav */}

          <main className=" px-16 py-6 col-span-8 bg-gray-100 min-h-screen" > {/*start the main section*/}
            <div className=" flex justify-center md:justify-end text-orange-600">
              <Link href='/'><a className="ml-2 btn border-orange-600 md:border-2 hover:bg-orange-600 hover:text-white transition ease-out duration-500">log in</a></Link>
              <Link href='/'><a className="ml-2 btn border-orange-600 md:border-2 hover:bg-orange-600 hover:text-white transition ease-out duration-500" >sign in</a></Link>
            </div>
            <header>
              <h2 className="font-simebold text-5xl text-gray-700 my-4 ">Recipes</h2>
              <h3 className=" text-xl font-simebold">For Movs</h3>
            </header>
            <div>
              <h4 className=" font-bold mt-12 pb-2 border-b border-gray-200">Latest Recipes</h4>
              <div className=" mt-8 md:grid gap-5 grid-cols-2 xl:grid-cols-3 xl:gap-10" >
                {/*card start*/}
                <div className="card">
                  <img className="w-full h-32 sm:h-48 object-cover" src={f1.src} alt="food" />
                  <div className="m-2">
                    <span className="font-bold">6 Hamperger box</span>
                    <span className="block text-gray-500 text-sm">Recipe by Mario</span>
                  </div>
                  <div className="badge">
                    <span>30 MINS <ClockSvg /></span>
                  </div>
                </div>
                <div className="card">
                  <img className="w-full h-32 md:h-48  object-cover" src={f2.src} alt="food" />
                  <div className="m-2">
                    <span className="font-bold">Fries and brusted chiken</span>
                    <span className="block text-gray-500 text-sm">Recipe by Mario</span>
                  </div>
                  <div className="badge">
                    <span>30 MINS <ClockSvg /> </span>
                  </div>
                </div>
                <div className="card">
                  <img className="w-full h-32 sm:h-48 object-cover" src={f3.src} alt="food" />
                  <div className="m-2">
                    <span className="font-bold">Chiken wings hamperger</span>
                    <span className="block text-gray-500 text-sm">Recipe by Mario</span>
                  </div>
                  <div className="badge">
                    <span>30 MINS <ClockSvg /> </span>
                  </div>
                </div>
              </div>
              <h4 className="font-simebold mt-12 pb-2 border-b border-gray-200">Most Popular Recipes</h4>
              <div className="mt-8">
                {/*more cards*/}
                {/*card start*/}
                <div className="card">
                  <img className="w-full h-32 sm:h-48 object-cover" src='https://imagesvc.meredithcorp.io/v3/mm/image?q=60&c=sc&poi=face&w=2000&h=1000&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2022%2F02%2F22%2F22180-waffles-mfs-82.jpg' alt="food" />
                  <div className="m-2">
                    <span className="font-bold">6 Hamperger box</span>
                    <span className="block text-gray-500 text-sm">Recipe by Mario</span>
                  </div>
                  <div className="badge">
                    <span>30 MINS <ClockSvg /></span>
                  </div>
                </div>
                <div className="card">
                  <img className="w-full h-32 md:h-48  object-cover" src='https://static01.nyt.com/images/2021/02/17/dining/17tootired-grilled-cheese/17tootired-grilled-cheese-articleLarge.jpg?quality=75&auto=webp&disable=upscale' alt="food" />
                  <div className="m-2">
                    <span className="font-bold">Fries and brusted chiken</span>
                    <span className="block text-gray-500 text-sm">Recipe by Mario</span>
                  </div>
                  <div className="badge">
                    <span>30 MINS <ClockSvg /> </span>
                  </div>
                </div>
                <div className="card">
                  <img className="w-full h-32 sm:h-48 object-cover" src='https://www.eatthis.com/wp-content/uploads/sites/4/2019/06/deep-dish-pizza-chicago.jpg' alt="food" />
                  <div className="m-2">
                    <span className="font-bold">Chiken wings hamperger</span>
                    <span className="block text-gray-500 text-sm">Recipe by Mario</span>
                  </div>
                  <div className="badge">
                    <span>30 MINS <ClockSvg /> </span>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="btn text-[10px] sm:text-xs text-gray-600 bg-[#f9e9c4] hover:shadow-inner transform hover:scale-125 hover:bg-opacity-25 transition ease-out duration-300">Load more</div>
              </div>

            </div>
          </main> {/*end the main section*/}

        </div>
      </div>
    </div>
  )
}
