import {Experience} from "@/types";

const experiencesData: Experience[] = [
  {
    date: 'Present',
    title: 'Raw Brand Media',
    role: "Founder & Creative Lead",
    companyName: "Raw Brand Media",
    description: 'Visual identity, social direction, and video content for clinics and specialists.',
    website: '',
    techStack: ["Creative Direction", "Branding", "Short-Form Video"],
    points: [
      'Full creative direction: visual identity, logo design, and high-retention video content.',
      'Helping specialized clinics replace generic stock posts with authentic personal authority.',
    ],
  },
  {
    date: '2024',
    title: 'Video for Byron',
    role: "Video Editor & Content Strategist",
    companyName: "Byron Walsh",
    description: 'End-to-end organic video editing and growth sprint for Byron Walsh (Forex Trading).',
    website: 'https://instagram.com',
    techStack: ["Video Strategy", "Pacing & Hooks", "Sound Design"],
    points: [
      'Scaled Instagram from 58 to 3,015 followers in 90 days with 0 ad spend.',
      'Peak reel hit 222K views, driving 237K profile impressions.',
    ],
    videoReview: {
      wistiaId: "cd6006ukjm",
      author: "Byron Walsh",
      label: "Watch Byron's Video Review",
    },
  },
  {
    date: '2024',
    title: 'Client Video Production',
    role: "Video Editor",
    companyName: "Client Project",
    description: 'Transforming raw talking-head footage into crisp, narrative-driven final edits.',
    website: '',
    techStack: ["Premiere Pro", "J-Cuts", "Retention Editing"],
    points: [
      'Tight narrative pacing, dynamic captions, and sound design built to keep viewers watching.',
    ],
  },
];

export default experiencesData;
