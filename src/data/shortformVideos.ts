export type ShortformVideo = {
  id: string;
  title: string;
  category: string; // e.g. "Talking Head", "Motion Graphics", "Commercial", "Explainer"
  software: string; // e.g. "Premiere Pro", "After Effects", "CapCut"
  thumbnail: string;
  wistiaId: string;
};

export const shortformVideos: ShortformVideo[] = [
  {
    id: "reel-1",
    title: "Vidhi's almond shortform",
    category: "Talking Head & Hook",
    software: "Premiere Pro",
    thumbnail: "https://embed-ssl.wistia.com/deliveries/2288628ad83f481baf2ef0be3948d271.jpg?image_crop_resized=720x1280",
    wistiaId: "ijbngwsnkg",
  },
  {
    id: "reel-2",
    title: "Vidhi's fasting shortform",
    category: "Commercial Cut",
    software: "After Effects",
    thumbnail: "https://embed-ssl.wistia.com/deliveries/597294980213f54922db7fe6e2055e54.jpg?image_crop_resized=720x1280",
    wistiaId: "qvyazz2a5m",
  },
  {
    id: "reel-3",
    title: "Vidhi's meditation shortform",
    category: "Pacing & Sound Design",
    software: "Premiere Pro",
    thumbnail: "https://embed-ssl.wistia.com/deliveries/c8e809d6a2347566e9f9bd832a958723.jpg?image_crop_resized=720x1280",
    wistiaId: "6kb0dcflsu",
  },
  {
    id: "reel-4",
    title: "Vidhi's Yogic food shortform",
    category: "Talking Head",
    software: "Premiere Pro",
    thumbnail: "https://embed-ssl.wistia.com/deliveries/9e721c1d24aa073ff14dead7bfcad7553151615a.jpg?image_crop_resized=720x1280",
    wistiaId: "vr2icvnzw3",
  },
  {
    id: "reel-5",
    title: "Zero proof to ₹7L in 60 days",
    category: "Motion Graphics",
    software: "After Effects",
    thumbnail: "https://embed-ssl.wistia.com/deliveries/60ffe24ec1f2fabc5868ed75ac8f71ab2aaf6390.jpg?image_crop_resized=720x1280",
    wistiaId: "n84u7uibe3",
  },
  {
    id: "reel-6",
    title: "Vidhi Jain Project",
    category: "Explainer & Visuals",
    software: "Premiere Pro",
    thumbnail: "https://embed-ssl.wistia.com/deliveries/658942c2c0e6c0b73c4bf74a384a8fd5027eb0f4.jpg?image_crop_resized=720x1280",
    wistiaId: "a3uk2g4hjk",
  },
];
