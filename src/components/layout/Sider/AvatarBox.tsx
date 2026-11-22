import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar.tsx";
import {useRouter} from "next/router";
import {Typewriter} from "react-simple-typewriter";
import { siteConfig } from "@/config/site.config";

type AvatarBoxProps = {
  mobile?: boolean;
};

const AvatarBox = ({ mobile = false }: AvatarBoxProps) => {
  const router = useRouter();

  const returnToHome = () => {
    router.push('/')
  }

  return (
    <div
      className={`flex items-center justify-start space-x-3 ${!mobile ? 'sm:mb-8' : ''} px-2`}
      onClick={() => returnToHome()}
    >
      <Avatar>
        <AvatarImage
          className="h-10 w-10 rounded-full object-cover"
          alt={siteConfig.name}
          src={siteConfig.avatar}
        />
        <AvatarFallback>
          {siteConfig.name.slice(0, 2).toUpperCase()}
        </AvatarFallback>
      </Avatar>
      <div
        className="text-sm flex flex-col"
      >
        <span className="text-gray-900 dark:text-gray-100 font-semibold md:text-lg">
          {siteConfig.name}
        </span>
        <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
          <Typewriter
            words={["Video Editor", "Short-Form Specialist"]}
            loop
            cursor
          />
        </span>
      </div>
    </div>
  )
};

export default AvatarBox;
