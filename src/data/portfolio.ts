export type ThemeMedia = {
  dark: string;
  light: string;
  alt: string;
};

export type ClientRecord = {
  label: string;
  platform: string;
  url: string | null;
};

export type PortfolioRecord = {
  id: string;
  folderPath: string[];
  year: number;
  month: number;
  order: number;
  type: string;
  title: string;
  client: ClientRecord | null;
  media: ThemeMedia;
  isNew: boolean;
};

export type PortfolioDirectory = {
  path: string[];
  code: string;
  title: string;
  description: string;
  children?: PortfolioDirectory[];
};

export const monthLabels = [
  "",
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];

export const portfolioDirectories: PortfolioDirectory[] = [
  {
    path: ["emotes"],
    code: "FOLDER 01",
    title: "EMOTE FILES",
    description: "Static and animated emote commissions.",
    children: [
      {
        path: ["emotes", "static"],
        code: "01-A",
        title: "STATIC EMOTES",
        description: "Static emote commissions and public service samples.",
      },
      {
        path: ["emotes", "animated"],
        code: "01-B",
        title: "ANIMATED EMOTES",
        description: "Animated emote commissions and motion-based reactions.",
      },
    ],
  },
  {
    path: ["badges"],
    code: "FOLDER 02",
    title: "BADGE FILES",
    description: "Badge commissions grouped by visual style.",
    children: [
      {
        path: ["badges", "normal"],
        code: "02-A",
        title: "NORMAL BADGES",
        description: "Standard badge sets for communities and milestones.",
      },
      {
        path: ["badges", "pixel"],
        code: "02-B",
        title: "PIXEL BADGES",
        description: "Pixel badge sets for communities and subscriber tiers.",
      },
    ],
  },
  {
    path: ["profile-pictures-icons"],
    code: "FOLDER 03",
    title: "PROFILE PICTURE / ICON FILES",
    description: "Profile picture and icon commissions grouped by visual style.",
    children: [
      {
        path: ["profile-pictures-icons", "normal"],
        code: "03-A",
        title: "NORMAL PFP / ICONS",
        description: "Standard profile pictures and icon commissions.",
      },
      {
        path: ["profile-pictures-icons", "pixel"],
        code: "03-B",
        title: "PIXEL PFP / ICONS",
        description: "Pixel-style profile pictures and icon commissions.",
      },
    ],
  },
  {
    path: ["pngtuber"],
    code: "FOLDER 04",
    title: "PNGTUBER FILES",
    description: "PNGTuber commissions grouped by visual style.",
    children: [
      {
        path: ["pngtuber", "normal"],
        code: "04-A",
        title: "NORMAL PNGTUBERS",
        description: "Standard PNGTuber commissions for expressive creator avatars.",
      },
      {
        path: ["pngtuber", "pixel"],
        code: "04-B",
        title: "PIXEL PNGTUBERS",
        description: "Pixel-art PNGTuber commissions for expressive creator avatars.",
      },
    ],
  },
  {
    path: ["ych"],
    code: "FOLDER 05",
    title: "YCH FILES",
    description: "Your Character Here commission files.",
    children: [
      {
        path: ["ych", "emotes"],
        code: "05-A",
        title: "YCH EMOTES",
        description: "Seasonal YCH emote bases personalized for each client.",
      },
    ],
  },
  {
    path: ["banners-stream-assets"],
    code: "FOLDER 06",
    title: "BANNER & STREAM ASSET FILES",
    description: "Banners, overlays, panels, alerts, and stream-ready assets.",
    children: [
      {
        path: ["banners-stream-assets", "banners"],
        code: "06-A",
        title: "BANNERS",
        description: "Banner commissions for creator profiles and channels.",
      },
      {
        path: ["banners-stream-assets", "overlays"],
        code: "06-B",
        title: "OVERLAYS",
        description: "Stream overlays and layout commissions.",
      },
      {
        path: ["banners-stream-assets", "panels"],
        code: "06-C",
        title: "PANELS",
        description: "Stream panel and information asset commissions.",
      },
      {
        path: ["banners-stream-assets", "alerts"],
        code: "06-D",
        title: "ALERTS",
        description: "Alert and motion asset commissions.",
      },
    ],
  },
  {
    path: ["illustration"],
    code: "FOLDER 07",
    title: "ILLUSTRATION FILES",
    description: "Illustration commissions grouped by request type.",
    children: [
      {
        path: ["illustration", "character-art"],
        code: "07-A",
        title: "CHARACTER ART",
        description: "Character illustration commissions.",
      },
      {
        path: ["illustration", "chibi"],
        code: "07-B",
        title: "CHIBI",
        description: "Chibi illustration commissions.",
      },
      {
        path: ["illustration", "custom-requests"],
        code: "07-C",
        title: "CUSTOM REQUESTS",
        description: "Custom illustration requests that do not fit another file.",
      },
    ],
  },
];

export const portfolioRecords: PortfolioRecord[] = [
  {
    id: "static-emote-chayanne-28-2025-10",
    folderPath: ["emotes", "static"],
    year: 2025,
    month: 10,
    order: 2,
    type: "STATIC EMOTE",
    title: "Static emote for @chayanne_28",
    client: {
      label: "@chayanne_28",
      platform: "Discord",
      url: "https://discord.com/users/1036811691117265006",
    },
    isNew: false,
    media: {
      dark: "/images/portfolio/emotes/static/static-emote-chayanne-28-dark-2025-10-02.png",
      light:
        "/images/portfolio/emotes/static/static-emote-chayanne-28-light-2025-10-02.png",
      alt: "Static emote commission for @chayanne_28 completed in October 2025",
    },
  },
  {
    id: "static-emote-chayanne-28-2025-09",
    folderPath: ["emotes", "static"],
    year: 2025,
    month: 9,
    order: 1,
    type: "STATIC EMOTE",
    title: "Static emote for @chayanne_28",
    client: {
      label: "@chayanne_28",
      platform: "Discord",
      url: "https://discord.com/users/1036811691117265006",
    },
    isNew: false,
    media: {
      dark: "/images/portfolio/emotes/static/static-emote-chayanne-28-dark-2025-09-01.png",
      light:
        "/images/portfolio/emotes/static/static-emote-chayanne-28-light-2025-09-01.png",
      alt: "Static emote commission for @chayanne_28 completed in September 2025",
    },
  },
  {
    id: "animated-emote-fxckology-2024-12",
    folderPath: ["emotes", "animated"],
    year: 2024,
    month: 12,
    order: 1,
    type: "ANIMATED EMOTE",
    title: "Animated emote for @fxckology",
    client: {
      label: "@fxckology",
      platform: "X (Twitter)",
      url: "https://x.com/SakiSharkBait",
    },
    isNew: false,
    media: {
      dark: "/images/portfolio/emotes/animated/animated-emote-fxckology-dark-2024-12-01.gif",
      light:
        "/images/portfolio/emotes/animated/animated-emote-fxckology-light-2024-12-01.gif",
      alt: "Animated emote commission for @fxckology completed in December 2024",
    },
  },
  {
    id: "animated-emote-calvariarose-2024-10",
    folderPath: ["emotes", "animated"],
    year: 2024,
    month: 10,
    order: 2,
    type: "ANIMATED EMOTE",
    title: "Animated emote for @CalvariaRose",
    client: {
      label: "@CalvariaRose",
      platform: "X (Twitter)",
      url: "https://x.com/CalvariaRose",
    },
    isNew: false,
    media: {
      dark: "/images/portfolio/emotes/animated/animated-emote-calvariarose-dark-2024-10-02.gif",
      light:
        "/images/portfolio/emotes/animated/animated-emote-calvariarose-light-2024-10-02.gif",
      alt: "Animated emote commission for @CalvariaRose completed in October 2024",
    },
  },
  {
    id: "animated-emote-sonialudwing-2023-12",
    folderPath: ["emotes", "animated"],
    year: 2023,
    month: 12,
    order: 2,
    type: "ANIMATED EMOTE",
    title: "Animated emote for @sonialudwing",
    client: {
      label: "@sonialudwing",
      platform: "X (Twitter)",
      url: "https://x.com/sonialudwing",
    },
    isNew: false,
    media: {
      dark: "/images/portfolio/emotes/animated/animated-emote-sonialudwing-dark-2023-12-01.gif",
      light:
        "/images/portfolio/emotes/animated/animated-emote-sonialudwing-light-2023-12-01.gif",
      alt: "Animated emote commission for @sonialudwing completed in December 2023",
    },
  },
  {
    id: "animated-emote-nomadicwhovian-2023-12",
    folderPath: ["emotes", "animated"],
    year: 2023,
    month: 12,
    order: 1,
    type: "ANIMATED EMOTE",
    title: "Animated emote for @NomadicWhovian",
    client: {
      label: "@NomadicWhovian",
      platform: "X (Twitter)",
      url: "https://x.com/NomadicWhovian",
    },
    isNew: false,
    media: {
      dark: "/images/portfolio/emotes/animated/animated-emote-nomadicwhovian-dark-2023-12-01.gif",
      light:
        "/images/portfolio/emotes/animated/animated-emote-nomadicwhovian-light-2023-12-01.gif",
      alt: "Animated emote commission for @NomadicWhovian completed in December 2023",
    },
  },
  {
    id: "static-emote-emotetober-2023-10",
    folderPath: ["emotes", "static"],
    year: 2023,
    month: 10,
    order: 0,
    type: "SERVICE SAMPLE",
    title: "Free Emotetober static emotes",
    client: null,
    isNew: false,
    media: {
      dark: "/images/portfolio/emotes/static/static-emote-emotetober-dark-2023-10-00.png",
      light:
        "/images/portfolio/emotes/static/static-emote-emotetober-light-2023-10-00.png",
      alt: "Static emote created for Emotetober in October 2023",
    },
  },
  {
    id: "static-emote-yuunaruvt-2023-10",
    folderPath: ["emotes", "static"],
    year: 2023,
    month: 10,
    order: 1,
    type: "STATIC EMOTE",
    title: "Static emote for @YuunaruVT",
    client: {
      label: "@YuunaruVT",
      platform: "Discord",
      url: "https://discord.com/users/939340700309409842",
    },
    isNew: false,
    media: {
      dark: "/images/portfolio/emotes/static/static-emote-yuunaruvt-dark-2023-10-01.png",
      light:
        "/images/portfolio/emotes/static/static-emote-yuunaruvt-light-2023-10-01.png",
      alt: "Static emote commission for @YuunaruVT completed in October 2023",
    },
  },
  {
    id: "static-emote-sandynet-2023-09",
    folderPath: ["emotes", "static"],
    year: 2023,
    month: 9,
    order: 1,
    type: "STATIC EMOTE",
    title: "Static emote for @Sandiskie",
    client: {
      label: "@Sandiskie",
      platform: "X (Twitter)",
      url: "https://x.com/Sandiskie",
    },
    isNew: false,
    media: {
      dark: "/images/portfolio/emotes/static/static-emote-sandynet-dark-2023-09-01.png",
      light:
        "/images/portfolio/emotes/static/static-emote-sandynet-light-2023-09-01.png",
      alt: "Static emote commission for @Sandiskie completed in September 2023",
    },
  },
  {
    id: "static-emote-lotteoddities-2023-08",
    folderPath: ["emotes", "static"],
    year: 2023,
    month: 8,
    order: 1,
    type: "STATIC EMOTE",
    title: "Static emote for @LotteOddities",
    client: {
      label: "@lotteoddities",
      platform: "X (Twitter)",
      url: "https://x.com/LotteOddities",
    },
    isNew: false,
    media: {
      dark: "/images/portfolio/emotes/static/static-emote-lotteoddities-dark-2023-08-01.png",
      light:
        "/images/portfolio/emotes/static/static-emote-lotteoddities-light-2023-08-01.png",
      alt: "Static emote commission for @LotteOddities completed in August 2023",
    },
  },
  {
    id: "static-emote-vortexylum-2023-07",
    folderPath: ["emotes", "static"],
    year: 2023,
    month: 7,
    order: 1,
    type: "STATIC EMOTE",
    title: "Static emote for @VorteXylum",
    client: {
      label: "@VorteXylum",
      platform: "X (Twitter)",
      url: "https://x.com/_4StarsOutOf5_",
    },
    isNew: false,
    media: {
      dark: "/images/portfolio/emotes/static/static-emote-vortexylum-dark-2023-07-01.png",
      light:
        "/images/portfolio/emotes/static/static-emote-vortexylum-light-2023-07-01.png",
      alt: "Static emote commission for @VorteXylum completed in July 2023",
    },
  },
  {
    id: "static-emote-nightowl-2023-05",
    folderPath: ["emotes", "static"],
    year: 2023,
    month: 5,
    order: 1,
    type: "STATIC EMOTE",
    title: "Static emote for @NightOwl",
    client: {
      label: "@nightowl",
      platform: "X (Twitter)",
      url: "https://x.com/Nowl_OW",
    },
    isNew: false,
    media: {
      dark: "/images/portfolio/emotes/static/static-emote-nightowl-dark-2023-05-01.png",
      light:
        "/images/portfolio/emotes/static/static-emote-nightowl-light-2023-05-01.png",
      alt: "Static emote commission for @NightOwl completed in May 2023",
    },
  },
  {
    id: "static-emote-kayroslonewolf-2023-04",
    folderPath: ["emotes", "static"],
    year: 2023,
    month: 4,
    order: 2,
    type: "STATIC EMOTE",
    title: "Static emote for @Kayros_LoneWolf",
    client: {
      label: "@Kayros_LoneWolf",
      platform: "X (Twitter)",
      url: "https://x.com/KayrosLw",
    },
    isNew: false,
    media: {
      dark: "/images/portfolio/emotes/static/static-emote-kayroslonewolf-dark-2023-04-01.png",
      light:
        "/images/portfolio/emotes/static/static-emote-kayroslonewolf-light-2023-04-01.png",
      alt: "Static emote commission for @Kayros_LoneWolf completed in April 2023",
    },
  },
  {
    id: "static-emote-evilist-2023-04",
    folderPath: ["emotes", "static"],
    year: 2023,
    month: 4,
    order: 1,
    type: "STATIC EMOTE",
    title: "Static emote for @Evilist_",
    client: {
      label: "@Evilist_",
      platform: "X (Twitter)",
      url: "https://x.com/Evilist_",
    },
    isNew: false,
    media: {
      dark: "/images/portfolio/emotes/static/static-emote-evilist-dark-2023-04-01.png",
      light:
        "/images/portfolio/emotes/static/static-emote-evilist-light-2023-04-01.png",
      alt: "Static emote commission for @Evilist_ completed in April 2023",
    },
  },
  {
    id: "static-emote-weldrock-2022-01",
    folderPath: ["emotes", "static"],
    year: 2022,
    month: 1,
    order: 1,
    type: "STATIC EMOTE",
    title: "Static emote for @Weldrock",
    client: {
      label: "@Weldrock",
      platform: "Twitch",
      url: "https://www.twitch.tv/weldrock",
    },
    isNew: false,
    media: {
      dark: "/images/portfolio/emotes/static/static-emote-weldrock-dark-2022-01-01.png",
      light:
        "/images/portfolio/emotes/static/static-emote-weldrock-light-2022-01-01.png",
      alt: "Static emote commission for @Weldrock completed in January 2022",
    },
  },
  {
    id: "pixel-badge-example-2025-01",
    folderPath: ["badges", "pixel"],
    year: 2025,
    month: 1,
    order: 0,
    type: "SERVICE SAMPLE",
    title: "Pixel badge service sample",
    client: null,
    isNew: false,
    media: {
      dark: "/images/portfolio/badges/pixel/pixel-badge-example-dark-2025-01-00.png",
      light:
        "/images/portfolio/badges/pixel/pixel-badge-example-light-2025-01-00.png",
      alt: "Pixel badge service sample created in January 2025",
    },
  },
  {
    id: "pixel-badge-white117-2024-12",
    folderPath: ["badges", "pixel"],
    year: 2024,
    month: 12,
    order: 1,
    type: "PIXEL BADGE",
    title: "Pixel badge set for @white117_",
    client: {
      label: "@white117_",
      platform: "profile link",
      url: "https://x.com/white117_",
    },
    isNew: false,
    media: {
      dark: "/images/portfolio/badges/pixel/pixel-badge-white117-dark-2024-12-01.png",
      light:
        "/images/portfolio/badges/pixel/pixel-badge-white117-light-2024-12-01.png",
      alt: "Pixel badge commission for @white117_ completed in December 2024",
    },
  },
  {
    id: "badge-vortexylum-2023-08",
    folderPath: ["badges", "normal"],
    year: 2023,
    month: 8,
    order: 1,
    type: "BADGE SET",
    title: "Badge set for @VorteXylum",
    client: {
      label: "@VorteXylum",
      platform: "X (Twitter)",
      url: "https://x.com/_4StarsOutOf5_",
    },
    isNew: false,
    media: {
      dark: "/images/portfolio/badges/normal/badge-vortexylum-dark-2023-08-01.png",
      light:
        "/images/portfolio/badges/normal/badge-vortexylum-light-2023-08-01.png",
      alt: "Badge commission for @VorteXylum completed in August 2023",
    },
  },
  {
    id: "badge-example-2023-04",
    folderPath: ["badges", "normal"],
    year: 2023,
    month: 4,
    order: 0,
    type: "SERVICE SAMPLE",
    title: "Badge service sample",
    client: null,
    isNew: false,
    media: {
      dark: "/images/portfolio/badges/normal/badge-example-dark-2023-04-00.png",
      light:
        "/images/portfolio/badges/normal/badge-example-light-2023-04-00.png",
      alt: "Badge service sample created in April 2023",
    },
  },
  {
    id: "pfp-lily-2024-04",
    folderPath: ["profile-pictures-icons", "normal"],
    year: 2024,
    month: 4,
    order: 1,
    type: "PROFILE PICTURE",
    title: "Profile picture for @LiilyCrispin24",
    client: {
      label: "@LiilyCrispin24",
      platform: "TikTok",
      url: "https://www.tiktok.com/@liilycrispin24",
    },
    isNew: false,
    media: {
      dark: "/images/portfolio/profile-pictures-icons/normal/pfp-lily-dark-2024-04-01.png",
      light:
        "/images/portfolio/profile-pictures-icons/normal/pfp-lily-light-2024-04-01.png",
      alt: "Profile picture commission for @LiilyCrispin24 completed in April 2024",
    },
  },
  {
    id: "pfp-kriss-sns-2023-11",
    folderPath: ["profile-pictures-icons", "normal"],
    year: 2023,
    month: 11,
    order: 1,
    type: "PROFILE PICTURE",
    title: "Profile picture for @Kriss_sns",
    client: {
      label: "@Kriss_sns",
      platform: "X (Twitter)",
      url: "https://x.com/Burgos_Alexiss",
    },
    isNew: false,
    media: {
      dark: "/images/portfolio/profile-pictures-icons/normal/pfp-kriss-sns-dark-2023-11-01.png",
      light:
        "/images/portfolio/profile-pictures-icons/normal/pfp-kriss-sns-light-2023-11-01.png",
      alt: "Profile picture commission for @Kriss_sns completed in November 2023",
    },
  },
  {
    id: "pfp-lawliet-2022-12",
    folderPath: ["profile-pictures-icons", "normal"],
    year: 2022,
    month: 12,
    order: 1,
    type: "PROFILE PICTURE",
    title: "Profile picture for @lawx",
    client: {
      label: "@lawx",
      platform: "Instagram",
      url: "https://www.instagram.com/lawx",
    },
    isNew: false,
    media: {
      dark: "/images/portfolio/profile-pictures-icons/normal/pfp-lawliet-dark-2022-12-01.png",
      light:
        "/images/portfolio/profile-pictures-icons/normal/pfp-lawliet-light-2022-12-01.png",
      alt: "Profile picture commission for @lawx completed in December 2022",
    },
  },
  {
    id: "pfp-weldrock-2022-01",
    folderPath: ["profile-pictures-icons", "normal"],
    year: 2022,
    month: 1,
    order: 1,
    type: "PROFILE PICTURE",
    title: "Profile picture for @Weldrock",
    client: {
      label: "@Weldrock",
      platform: "Twitch",
      url: "https://www.twitch.tv/weldrock",
    },
    isNew: false,
    media: {
      dark: "/images/portfolio/profile-pictures-icons/normal/pfp-weldrock-dark-2022-01-01.png",
      light:
        "/images/portfolio/profile-pictures-icons/normal/pfp-weldrock-light-2022-01-01.png",
      alt: "Profile picture commission for @Weldrock completed in January 2022",
    },
  },
  {
    id: "pngtuber-rydax-s-2025-09",
    folderPath: ["pngtuber", "normal"],
    year: 2025,
    month: 9,
    order: 2,
    type: "PNGTUBER",
    title: "PNGTuber commission for @Rydax_s",
    client: {
      label: "@Rydax_s",
      platform: "Discord",
      url: "https://discord.com/users/1234996877045268550",
    },
    isNew: false,
    media: {
      dark: "/images/portfolio/pngtuber/normal/pngtuber-rydax-s-dark-2025-09-01.gif",
      light:
        "/images/portfolio/pngtuber/normal/pngtuber-rydax-s-light-2025-09-01.gif",
      alt: "PNGTuber commission for @Rydax_s completed in September 2025",
    },
  },
  {
    id: "pngtuber-hardcorejerry-2025-09",
    folderPath: ["pngtuber", "normal"],
    year: 2025,
    month: 9,
    order: 1,
    type: "PNGTUBER",
    title: "PNGTuber commission for @HardCoreJerry",
    client: {
      label: "@HardCoreJerry",
      platform: "Discord",
      url: "https://discord.com/users/438724732049948672",
    },
    isNew: false,
    media: {
      dark: "/images/portfolio/pngtuber/normal/pngtuber-hardcorejerry-dark-2025-09-01.gif",
      light:
        "/images/portfolio/pngtuber/normal/pngtuber-hardcorejerry-light-2025-09-01.gif",
      alt: "PNGTuber commission for @HardCoreJerry completed in September 2025",
    },
  },
  {
    id: "pngtuber-weldrock-2024-01",
    folderPath: ["pngtuber", "normal"],
    year: 2024,
    month: 1,
    order: 1,
    type: "PNGTUBER",
    title: "PNGTuber commission for @Weldrock",
    client: {
      label: "@weldrock",
      platform: "Twitch",
      url: "https://www.twitch.tv/Weldrock",
    },
    isNew: false,
    media: {
      dark: "/images/portfolio/pngtuber/normal/pngtuber-weldrock-dark-2024-01-01.gif",
      light:
        "/images/portfolio/pngtuber/normal/pngtuber-weldrock-light-2024-01-01.gif",
      alt: "PNGTuber commission for @Weldrock completed in January 2024",
    },
  },
  {
    id: "ych-valentines-ccakeroll-2024-01",
    folderPath: ["ych", "emotes"],
    year: 2024,
    month: 1,
    order: 2,
    type: "YCH / VALENTINES",
    title: "Valentines YCH for @ccakeroll",
    client: {
      label: "@CCakeroll",
      platform: "profile link",
      url: "https://x.com/CCakeroll",
    },
    isNew: false,
    media: {
      dark: "/images/portfolio/ych/emotes/ych-valentines-ccakeroll-dark-2024-01-02.png",
      light:
        "/images/portfolio/ych/emotes/ych-valentines-ccakeroll-light-2024-01-02.png",
      alt: "Valentines YCH commission for @CCakeroll completed in January 2024",
    },
  },
  {
    id: "ych-valentines-lotteoddities-2024-01",
    folderPath: ["ych", "emotes"],
    year: 2024,
    month: 1,
    order: 1,
    type: "YCH / VALENTINES",
    title: "Valentines YCH for @LotteOddities",
    client: {
      label: "@LotteOddities",
      platform: "profile link",
      url: "https://x.com/LotteOddities",
    },
    isNew: false,
    media: {
      dark: "/images/portfolio/ych/emotes/ych-valentines-lotteoddities-dark-2024-01-01.png",
      light:
        "/images/portfolio/ych/emotes/ych-valentines-lotteoddities-light-2024-01-01.png",
      alt: "Valentines YCH commission for @LotteOddities completed in January 2024",
    },
  },
  {
    id: "ych-valentines-example-2024-01",
    folderPath: ["ych", "emotes"],
    year: 2024,
    month: 1,
    order: 0,
    type: "SERVICE SAMPLE",
    title: "Valentines YCH base sample",
    client: null,
    isNew: false,
    media: {
      dark: "/images/portfolio/ych/emotes/ych-valentines-example-dark-2024-01-00.png",
      light:
        "/images/portfolio/ych/emotes/ych-valentines-example-light-2024-01-00.png",
      alt: "Valentines YCH base sample created in January 2024",
    },
  },
  {
    id: "ych-halloween-lotteoddities-2023-10",
    folderPath: ["ych", "emotes"],
    year: 2023,
    month: 10,
    order: 2,
    type: "YCH / HALLOWEEN",
    title: "Halloween YCH for @LotteOddities",
    client: {
      label: "@LotteOddities",
      platform: "profile link",
      url: "https://x.com/LotteOddities",
    },
    isNew: false,
    media: {
      dark: "/images/portfolio/ych/emotes/ych-halloween-lotteoddities-dark-2023-10-02.png",
      light:
        "/images/portfolio/ych/emotes/ych-halloween-lotteoddities-light-2023-10-02.png",
      alt: "Halloween YCH commission for @LotteOddities completed in October 2023",
    },
  },
  {
    id: "ych-halloween-qtcinnarin-2023-10",
    folderPath: ["ych", "emotes"],
    year: 2023,
    month: 10,
    order: 1,
    type: "YCH / HALLOWEEN",
    title: "Halloween YCH for @qtcinnarin",
    client: {
      label: "@qtcinnarin",
      platform: "profile link",
      url: "https://x.com/qtcinnarin",
    },
    isNew: false,
    media: {
      dark: "/images/portfolio/ych/emotes/ych-halloween-qtcinnarin-dark-2023-10-01.png",
      light:
        "/images/portfolio/ych/emotes/ych-halloween-qtcinnarin-light-2023-10-01.png",
      alt: "Halloween YCH commission for @qtcinnarin completed in October 2023",
    },
  },
  {
    id: "ych-halloween-example-2023-10",
    folderPath: ["ych", "emotes"],
    year: 2023,
    month: 10,
    order: 0,
    type: "SERVICE SAMPLE",
    title: "Halloween YCH base sample",
    client: null,
    isNew: false,
    media: {
      dark: "/images/portfolio/ych/emotes/ych-halloween-example-dark-2023-10-00.png",
      light:
        "/images/portfolio/ych/emotes/ych-halloween-example-light-2023-10-00.png",
      alt: "Halloween YCH base sample created in October 2023",
    },
  },
];

export function getDirectoryByPath(path: string[]) {
  let currentDirectories = portfolioDirectories;
  let currentDirectory: PortfolioDirectory | undefined;

  for (const segment of path) {
    currentDirectory = currentDirectories.find(
      (directory) => directory.path.at(-1) === segment,
    );

    if (!currentDirectory) {
      return undefined;
    }

    currentDirectories = currentDirectory.children ?? [];
  }

  return currentDirectory;
}

export function getRecordsForPath(path: string[]) {
  return portfolioRecords.filter(
    (record) => record.folderPath.join("/") === path.join("/"),
  );
}

export function getGroupedRecords(records: PortfolioRecord[]) {
  const sortedRecords = [...records].sort(
    (first, second) =>
      second.year - first.year ||
      second.month - first.month ||
      second.order - first.order,
  );

  return sortedRecords.reduce<Record<number, PortfolioRecord[]>>(
    (groups, record) => {
      groups[record.year] ??= [];
      groups[record.year].push(record);
      return groups;
    },
    {},
  );
}

export function getLatestRecordForPath(path: string[]) {
  const [latestRecord] = [...getRecordsForPath(path)].sort(
    (first, second) =>
      second.year - first.year ||
      second.month - first.month ||
      second.order - first.order,
  );

  return latestRecord ?? null;
}

export function hasNewRecordsForPath(path: string[]) {
  return getRecordsForPath(path).some((record) => record.isNew);
}

export function getAllDirectoryPaths() {
  return portfolioDirectories.flatMap((directory) => [
    directory.path,
    ...(directory.children?.map((child) => child.path) ?? []),
  ]);
}