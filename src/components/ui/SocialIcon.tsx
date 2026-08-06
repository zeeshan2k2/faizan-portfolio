import type { IconType } from "react-icons";
import { FaLinkedinIn } from "react-icons/fa";
import { SiBehance, SiGmail, SiInstagram } from "react-icons/si";

import type { SocialIcon as SocialIconName } from "@/content/site";

export const socialIconMap = {
  behance: SiBehance,
  linkedin: FaLinkedinIn,
  instagram: SiInstagram,
  gmail: SiGmail,
} satisfies Record<SocialIconName, IconType>;
