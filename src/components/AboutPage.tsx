import ContainerTitle from "@/components/Common/ContainerTitle";
import EmailButton from "@/components/Common/EmailButton";
import GetInTouchButton from "@/components/Common/GetInTouchButton";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { siteConfig } from "@/config/site.config";

const SKILLS = [
  "Premiere Pro",
  "CapCut",
  "Video Editing",
  "Short-Form",
  "Branding",
  "Logo Design",
];

const SECTIONS = [
  {
    title: "Who I Am",
    content:
      "Self-taught video editor from Himachal Pradesh. I make short-form videos, mostly talking-head stuff, and I care a lot about keeping people watching past the first few seconds. I'm also in college, about a year left.",
  },
  {
    title: "What I Do",
    content:
      "I edit videos and build brands for doctors and clinics, mainly dermatologists. That means the logo, how the Instagram page looks, and the videos that go on it. I do it all myself, from the first idea to the final export. Run under Raw Brand Media.",
  },
  {
    title: "My Journey",
    content:
      "I started with Instagram theme pages. I grew one, sold it, and learned how attention works online by doing it, not by watching a course. After that I edited videos for an international client, then started my own agency, Atlas Media. It didn't work out the way I wanted, so I shut it down, kept what I learned, and started Raw Brand Media. Since then I've worked with Byron and client productions on their videos, and Byron even recorded a review for me. No connections, no roadmap. I'm just posting the work as it happens.",
  },
];

const AboutPage = () => {
  return (
    <div className="max-w-3xl mx-auto relative md:p-8 rounded-2xl">
      <BackgroundBeams />

      <div className="relative z-10 space-y-4 md:space-y-6">
        <ContainerTitle title={siteConfig.name} />

        <h3 className="text-sm uppercase tracking-wide text-gray-500 dark:text-gray-400 font-mono">
          {siteConfig.role}
        </h3>

        <ul className="flex flex-wrap gap-1.5 md:gap-2">
          {SKILLS.map((skill) => (
            <li
              key={skill}
              className="px-3 py-1 bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-zinc-300 rounded-full text-xs font-medium border border-gray-200 dark:border-zinc-700"
            >
              {skill}
            </li>
          ))}
        </ul>

        <div className="space-y-6 pt-2">
          {SECTIONS.map(({ title, content }) => (
            <section key={title} className="space-y-1.5">
              <h4 className="text-base md:text-lg font-semibold text-gray-900 dark:text-gray-100">
                {title}
              </h4>
              <p
                className="text-sm md:text-base leading-relaxed text-gray-700 dark:text-gray-300"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            </section>
          ))}
        </div>

        <div className="flex gap-4 pt-4">
          <GetInTouchButton />
          <EmailButton />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
