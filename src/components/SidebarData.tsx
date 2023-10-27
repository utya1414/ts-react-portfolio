import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import ArticleIcon from '@mui/icons-material/Article';

export const SidebarData = [
    {
        title: "ホーム",
        icon:<HomeIcon />,
        link: "/home"
    },

    {
        title: "メール",
        icon:<EmailIcon />,
        link: "/email"
    },

    {
        title: "ポートフォリオ",
        icon:<ArticleIcon />,
        link: "/portfolio"
    }
]
export default SidebarData