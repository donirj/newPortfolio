import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="w-screen h-screen relative">
      <div className="flex items-center w-full h-full bg-cover bg-center" 
      style={{backgroundImage: "url(/main-bg.webp)"}}
      >
        <div className="pl-20 md:pl-40 pb-56 md:pb-20 flex flex-col gap-5 z-[10] max-w-[750px]">
          <h1 className="text-[50] text-white font-semibold">
              Make anything possible with
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
                {" "}
                Web Development
              </span>
          </h1>
          <p className="text-gray-200 hidden md:block">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          </p>
          <div className="flex-col md:flex-row hidden md:flex gap-5">
            <Link 
              href="/my-skills" 
              className="rounded-[20px] group relative bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]"
              >
              learn more
            </Link>
            <Link 
              href="/my-projects" 
              className="rounded-[20px] group relative bg-trasparent px-5 border border-white py-3 text-lg text-white max-w-[200px]"
              >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hver:opacity-20" />
              my projects
            </Link>
            <Link 
              href="/contact-me" 
              className="rounded-[20px] group relative bg-trasparent border border-white px-5 py-3 text-lg text-white max-w-[200px]"
              >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hver:opacity-20" />
              contact me
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute flex absolute bottom-10 z-[20] right-5 flex-col md:hidden gap-5">
            <Link 
              href="/my-skills" 
              className="rounded-[20px] group bg-blue-500 px-5 py-3 text-lg text-white max-w-[200px]">
              learn more
            </Link>

            <Link 
              href="/my-projects" 
              className="rounded-[20px] group bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px]">
              my projects
            </Link>

            <Link 
              href="/contact-me" 
              className="rounded-[20px] group bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px]">
              contact me
            </Link>
          </div>

          <div className="absolute bottom-0 right-0 z-[10]">
            <Image 
              src='/./horse.png'
              alt='horse'
              height={300}
              width={300}
            />
          </div>

    </main>
  )
}