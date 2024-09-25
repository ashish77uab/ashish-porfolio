import React from 'react'
import { reactIcons } from '../../utils/icons'
const socialLinks=[
    {
        icon: reactIcons.facebook ,
        link: 'https://www.facebook.com',
    },
    {
        icon: reactIcons.instagram ,
        link: 'https://www.instagram.com',
    },
    {
        icon: reactIcons.twitter,
        link: 'https://www.twitter.com',
    },
    {
        icon: reactIcons.linkedin,
        link: 'https://www.linkedin.com',
    },


]
const sidebarLinks =[
    {
        icon: reactIcons.home ,
        title:'Home',
    },
    {
        icon: reactIcons.about ,
        title:'About',
    },
    {
        icon: reactIcons.resume ,
        title:'Resume',
    },
    {
        icon: reactIcons.projects ,
        title:'Projects',
    },
    {
        icon: reactIcons.contact ,
        title:'Contact',
    },

]
const Sidebar = () => {
  return (
    <div className='flex flex-col h-full py-16 px-8'>
        <div className='flex justify-center flex-col items-center'>
            <div className='w-32 h-32 rounded-full flex-center overflow-hidden p-3 bg-zinc-700'>
                  <img className='h-full w-full rounded-full object-cover' src='/images/profile.jpg' alt='logo' />
            </div>
            <div>
                <h4 className='heading-4 text-white mt-2 '>
                    Ashish Patel
                </h4>
                <p className='text-white opacity-60 text-sm'>Full stack developer</p>
            </div>
            

        </div>
          <div className="flex gap-4 justify-center items-center mt-4">
              {socialLinks?.map((linnk) => {
                  return <a key={linnk.link} href={linnk.link} className='text-white w-10 h-10 rounded-full flex-center bg-zinc-700 text-lg font-medium hover:text-cyan-400 hover:scale-95 transition-all duration-200'>{linnk.icon}</a>
              })}

          </div>
          <div className="flex flex-col py-10 ">
              {sidebarLinks?.map((linnk) => {
                  return <div key={linnk.link} href={linnk.link} className='text-white flex items-center gap-4 font-medium group py-4 cursor-pointer '>
                      <span className='text-xl group-hover:text-cyan-400'>   {linnk.icon}</span>
                      <span className='text-lg group-hover:text-cyan-400'>   {linnk.title}</span>
                    
                    </div>
              })}

          </div>

    </div>
  )
}

export default Sidebar