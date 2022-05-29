import "./sidebar.css"
import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import TagIcon from '@mui/icons-material/Tag';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOption from "./SidebarOption";



const Sidebar = () => {
  return (
    <div className="sidebar">
        < TwitterIcon />


        < SidebarOption text="Home" Icon={HomeIcon} />
        < SidebarOption text="Explore" Icon={TagIcon} />
        < SidebarOption text="Communities" Icon={PeopleOutlineIcon} />
        < SidebarOption text="Notification" Icon={NotificationsNoneIcon} />
        < SidebarOption text="Messages" Icon={MailOutlineIcon} />
        < SidebarOption text="Bookmarks" Icon={BookmarkBorderIcon} />
        < SidebarOption text="Profile" Icon={PermIdentityIcon} />
        < SidebarOption text="More" Icon={MoreHorizIcon} />
    </div>
  )
}

export default Sidebar
