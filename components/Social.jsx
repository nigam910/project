import { Item } from "@radix-ui/react-select";
import { icons } from "lucide-react";
import Link from "next/link";

import { FaGithub, FaTwitter, FaLinkedin} from 'react-icons/fa';

const Socials = [
  { icon: <FaGithub />, path:""},
  { icon: <FaTwitter />, path:""},
  { icon: <FaLinkedin />, path:""},
  
]

const Social = ({containerStyle, iconStyles}) => {
  return <div className={containerStyle}>
      {Socials.map((item, index)=>{
        return <Link key={index} href={item.path} className={iconStyles}>{item.icon}</Link>
      })}
    </div>
  
};

export default Social