import { useId } from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SelectNative } from "@/components/ui/select-native";
import {
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaDribbble,
  FaBehance,
  FaMedium,
} from "react-icons/fa";
import { User } from "lucide-react";

const AVAILABLE_SOCIAL_LINKS = [
  {
    Icon: "FaLinkedin",
    value: "linkedin",
    placeholder: "linkedin.com/in/username",
  },
  { Icon: "FaGithub", value: "github", placeholder: "github.com/username" },
  { Icon: "Twitter", value: "twitter", placeholder: "twitter.com/username" },
  {
    Icon: "FaFacebook",
    value: "facebook",
    placeholder: "facebook.com/username",
  },
  {
    Icon: "FaInstagram",
    value: "instagram",
    placeholder: "instagram.com/username",
  },
  { Icon: "User", value: "portfolio", placeholder: "your-portfolio.com" },
  { Icon: "Website", value: "website", placeholder: "yourwebsite.com" },
  {
    Icon: "FaDribbble",
    value: "dribbble",
    placeholder: "dribbble.com/username",
  },
  { Icon: "FaBehance", value: "behance", placeholder: "behance.net/username" },
  { Icon: "FaMedium", value: "medium", placeholder: "medium.com/@username" },
];

export default function SocialLinksInput() {
  const id = useId();
  return (
    <div className="*:not-first:mt-2">
      <Label htmlFor={id}>Input with start select</Label>
      <div className="flex rounded-md shadow-xs">
        <SelectNative className="text-muted-foreground hover:text-foreground w-fit rounded-e-none shadow-none">
          {AVAILABLE_SOCIAL_LINKS.map((asl) => (
            <option key={asl.value} value={asl.value}>
              <asl.Icon />
            </option>
          ))}
        </SelectNative>
        <Input
          id={id}
          className="-ms-px rounded-s-none shadow-none focus-visible:z-10"
          placeholder="192.168.1.1"
          type="text"
        />
      </div>
    </div>
  );
}
