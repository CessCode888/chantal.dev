import Image from 'next/image'
import cat from 'public/images/home/cat2.webp'
import glove from 'public/images/home/glove.png'
import Link from './components/Link'
import Svg from './components/Svg'
import social from './utils/social'


export default function Page() {
  return (

    <section>
      <div className='relative flex space-between'>
        <h1 className='mt-28 md:mt-32 text-[#e8a5ea] font-bold text-3xl tracking-tighter'>
          Hello! I'm Chantal, a Full-Stack Developer <br /> based in San José, Costa Rica.
        </h1>
        <Image
          alt='cat'
          src={cat}
          priority
          className='w-36 absolute right-0 top-0 h-36 md:w-44 md:h-44 '
        />
      </div>
      <div className='prose text-[#bfc7d5] mb-10'>
        <p>
          With hands-on experience in web and mobile app development,
          I specialize in creating digital experiences. My expertise lies in
          delivering high-quality UI/UX, ensuring that every project not only looks great
          but also functions flawlessly.
        </p>
      </div>

      <p className="text-4xl font-bold pb-7 mt-50 mb-30">
        Here are some of my skills
      </p>

      <div className="flex">
        <div className="flex-none p-2 mt-7 flex flex-col items-center text-sm font-extrabold text-[#75d3c1] w-16">

          <div className='transform -rotate-90'>S</div>
          <div className='transform -rotate-90'>E</div>
          <div className='transform -rotate-90'>R</div>
          <div className='transform -rotate-90'>V</div>
          <div className='transform -rotate-90'>I</div>
          <div className='transform -rotate-90'>C</div>
          <div className='transform -rotate-90'>E</div>
          <div className='transform -rotate-90'>S</div>
          <div className="flex flex-col items-center mb-2">
            <div className='transform -rotate-90 w-24 h-0.5 bg-[#75d3c1] mt-14'></div>
          </div>
        </div>

        <div className="flex-1 p-4 text-[#bfc7d5]">


        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

            <div className="p-4  text-white">
              <h2 className="text-lg font-semibold text-[#75d3c1]">Front End Development</h2>
              <ul className="list-disc list-inside mt-2">
                <li className="font-normal text-white marker:text-[#75d3c1]">Typescript</li>
                <li className="font-normal text-white marker:text-[#75d3c1]">React.js</li>
                <li className="font-normal text-white marker:text-[#75d3c1]">React Native</li>
              </ul>
            </div>
            <div className="p-4 text-white">
              <h2 className="text-lg font-semibold text-[#75d3c1]">Back End Development</h2>
              <ul className="list-disc list-inside mt-2">
                <li className="font-normal text-white marker:text-[#75d3c1]">Python</li>
                <li className="font-normal text-white marker:text-[#75d3c1]">Node.js/express</li>
                <li className="font-normal text-white marker:text-[#75d3c1]">Postgres</li>
                <li className="font-normal text-white marker:text-[#75d3c1]">AWS</li>
              </ul>
            </div>
            <div className="p-4  text-white">
              <h2 className="text-lg font-semibold text-[#75d3c1]">Web Design</h2>
              <ul className="list-disc list-inside mt-2">
                <li className="font-normal text-white marker:text-[#75d3c1]">Figma</li>
                <li className="font-normal text-white marker:text-[#75d3c1]">Tailwind</li>
                <li className="font-normal text-white marker:text-[#75d3c1]">UX/UI Principles</li>
              </ul>
            </div>
            <div className="p-4  text-white">
              <h2 className="text-lg font-semibold text-[#75d3c1]">Team Management</h2>
              <ul className="list-disc list-inside mt-2">
                <li className="font-normal text-white marker:text-[#75d3c1]">Agile Methodologies</li>
                <li className="font-normal text-white marker:text-[#75d3c1]">KPIs and Metrics</li>
                <li className="font-normal text-white marker:text-[#75d3c1]">Result Delivery</li>
              </ul>
            </div>
          </div>
        </div>
      </div>


      <div className='flex flex-row justify-between mt-10'>
        <div>
          <h3 className='text-[#e8a5ea] font-bold text-3xl tracking-tighter'>
            Ready to connect?
          </h3>
          <p>Let's code together.</p>
        </div>
        <Image
          alt='below'
          src={glove}
          priority
          className='w-12 md:w-16 rotate-[10deg] md:rotate-45'
        />
      </div>

      <div className='flex pt-4 md:pt-0'>
        <Link href='https://wa.me/50686770737?text=Hi,%20I%20would%20like%20to%20inquire%20about%20your%20services'>
          <a className='flex items-center text-black-500 hover:text-white'>
            <Svg className='mr-1'>
              <path d='M16 3h-14c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H2V5h14v14zm-7-4h-1v-3h1v3zm0-4h-1V7h1v3z' />
            </Svg>
            WhatsApp
          </a>
        </Link>

        <Link className='ml-4' href='https://cal.com/ce-chantal'>
          <Svg className='mr-1' viewBox='0 0 20 20'>
            <path d='M11 6.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1z' />
            <path d='M3.5 0a.5.5 0 01.5.5V1h8V.5a.5.5 0 011 0V1h1a2 2 0 012 2v11a2 2 0 01-2 2H2a2 2 0 01-2-2V3a2 2 0 012-2h1V.5a.5.5 0 01.5-.5zM1 4v10a1 1 0 001 1h12a1 1 0 001-1V4H1z' />
          </Svg>
          Book a call
        </Link>
      </div>

      <Link href='/cesia_montenegro.pdf' className='mt-4' download>
        <Svg viewBox='0 0 20 20' className='mr-1'>
          <path d='M.5 9.9a.5.5 0 01.5.5v2.5a1 1 0 001 1h12a1 1 0 001-1v-2.5a.5.5 0 011 0v2.5a2 2 0 01-2 2H2a2 2 0 01-2-2v-2.5a.5.5 0 01.5-.5z' />
          <path d='M7.646 11.854a.5.5 0 00.708 0l3-3a.5.5 0 00-.708-.708L8.5 10.293V1.5a.5.5 0 00-1 0v8.793L5.354 8.146a.5.5 0 10-.708.708l3 3z' />
        </Svg>
        Download resume
      </Link>

      <div className='flex items-center mt-8 mb-8'>
        {social.map(({ icon, href }, i) => (
          <a href={href} target='_blank' rel='noopener noreferrer' key={i}>
            <Svg className='mr-4'>{icon}</Svg>
          </a>
        ))}
      </div>
    </section>
  )
}
