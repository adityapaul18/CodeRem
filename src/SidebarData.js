import React from 'react'
import CodeIcon from '@material-ui/icons/Code';
import HomeIcon from '@material-ui/icons/Home';
import GitHubIcon from '@material-ui/icons/GitHub';
import CallIcon from '@material-ui/icons/Call';
import InfoIcon from '@material-ui/icons/Info';

export const SidebarData = [
    {
        title:'Home',
        path:'coderem-508f2.web.app',
        icon: <HomeIcon />,
        cName: 'nav-text'
    },
    {
        title:'WhosCoding',
        path:'http://whoscoding.cf/',
        icon: <CodeIcon />,
        cName: 'nav-text'
    },
    {
        title:'Github',
        path:'https://github.com/adityapaul18/CodeRem',
        icon: <GitHubIcon />,
        cName: 'nav-text'
    },
    {
        title:'Contact',
        path:'https://adityapaul.herokuapp.com/',
        icon: <CallIcon />,
        cName: 'nav-text'
    },
]
