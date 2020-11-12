import React from 'react'

import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as MdIcons from 'react-icons/md'

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        className: 'sidebar-nav-text'
    },
    {
        title: 'About',
        path: '/about',
        icon: <IoIcons.IoMdHelpCircle />,
        className: 'sidebar-nav-text'
    },
    {
        title: 'Partner Program',
        path: '/partner',
        icon: <IoIcons.IoMdPeople />,
        className: 'sidebar-nav-text'
    },
    {
        title: 'Portal',
        path: '/portal',
        icon: <MdIcons.MdDashboard />,
        className: 'sidebar-nav-text'
    }
]