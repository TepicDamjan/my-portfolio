import type { CaseStudy } from "@/lib/case-studies/types";

export const musicOneCaseStudy: CaseStudy = {
  slug: "musicone",
  title: "MusicOne",
  tagline:
    "A minimal web app for saving music locally from Spotify and YouTube — paste a link, pick a format, download.",
  gradient: "from-[#35524A] via-[#57C785] to-[#BCF4DE]",
  meta: {
    role: "Design & Development",
    year: "2025",
    type: "Personal Project",
  },
  stack: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Flask",
    "spotdl",
    "yt-dlp",
    "Docker",
  ],
  images: {
    hero: {
      src: "/MusicOneHero.png",
      alt: "MusicOne home screen with Spotify and YouTube tabs and URL input",
    },
    screens: [
      {
        src: "/MusicOneDownload.png",
        alt: "MusicOne download screen with cover art, format picker, and download actions",
        caption: "Download screen — track preview, format selection, and one-click save",
      },
    ],
  },
  overview: {
    problem: {
      label: "Problem",
      title: "Downloading music shouldn't feel like a hack",
      body: "Most download tools are cluttered, ad-heavy, or only support one platform. I wanted something I would actually use: a clean two-screen flow that works for both Spotify tracks and YouTube videos without sign-up or friction.",
    },
    solution: {
      label: "Solution",
      title: "Two screens, one job",
      body: "MusicOne splits the experience into a home screen (paste URL, pick platform) and a download screen (cover art, metadata, format picker). A Flask backend orchestrates spotdl and yt-dlp, then streams the file back to the browser.",
    },
  },
  features: [
    {
      title: "Dual platform support",
      description:
        "Spotify and YouTube tabs with URL validation. Spotify links route through Spotipy for metadata; YouTube uses yt-dlp for titles, thumbnails, and duration.",
    },
    {
      title: "Format picker",
      description:
        "Spotify: MP3 or FLAC. YouTube: MP3, FLAC, or MP4 (video + audio). Each option shows a short quality hint before download.",
    },
    {
      title: "Reliable file delivery",
      description:
        "The backend snapshots the download folder before and after each job, parses yt-dlp output logs, and falls back to mtime detection. Playlists are bundled into a ZIP automatically.",
    },
    {
      title: "Resilient client",
      description:
        "The frontend retries failed requests with timeouts up to 10 minutes for downloads, parses Content-Disposition headers, and triggers blob saves directly in the browser.",
    },
  ],
  flow: [
    {
      step: "01",
      title: "Paste link",
      description:
        "Choose Spotify or YouTube, paste or copy a URL from the clipboard, and submit.",
    },
    {
      step: "02",
      title: "Preview track",
      description:
        "The download page loads cover art, title, artist, duration, and platform badge.",
    },
    {
      step: "03",
      title: "Pick format",
      description: "Select MP3, FLAC, or MP4 (YouTube only) based on quality needs.",
    },
    {
      step: "04",
      title: "Download",
      description:
        "The backend runs spotdl or yt-dlp, then streams the file — or ZIP for playlists — to the browser.",
    },
  ],
  technical: {
    label: "Architecture",
    title: "Next.js frontend, Flask download engine",
    body: "The frontend is a Next.js 16 app with two routes: home for URL input and /download for the preview-and-download flow. The Flask API exposes four endpoints — song-info, download, youtube-info, and download-youtube. Spotify downloads go through spotdl (YouTube Music as audio source); YouTube downloads use yt-dlp with ffmpeg for MP4 merges. The server ships in Docker with Gunicorn, ffmpeg, and Node (required by yt-dlp's JS runtime). Optional proxy support handles cloud IP blocks.",
  },
  learnings: {
    label: "Learnings",
    title: "Subprocess orchestration is the hard part",
    body: "The UI is straightforward; the real work is reliably finding output files after CLI tools finish, handling long-running requests without timeouts, and keeping yt-dlp working as YouTube changes. Supporting both spotdl v3 and v4 CLI shapes and building fallback file detection made the backend much more dependable than a naive subprocess wrapper.",
  },
};
