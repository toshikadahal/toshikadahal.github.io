import type { MetadataRoute } from "next";

const baseUrl = "https://anujdevkota.vercel.app";

const routes = [
  "",
  "/topics/allergic-rhinitis",
  "/topics/cholesteatoma",
  "/topics/csf-leak-skull-base-awareness",
  "/topics/ear-discharge-chronic-ear-disease",
  "/topics/earwax-ear-blockage",
  "/topics/ent-surgery-preparation",
  "/topics/facial-nerve-weakness",
  "/topics/head-neck-cancer-warning-signs",
  "/topics/hearing-loss",
  "/topics/hoarseness-voice-change",
  "/topics/nasal-blockage",
  "/topics/neck-lump",
  "/topics/nosebleed-epistaxis",
  "/topics/otosclerosis-conductive-hearing-loss",
  "/topics/pediatric-ent",
  "/topics/post-nasal-drip",
  "/topics/salivary-gland-swelling",
  "/topics/sinusitis",
  "/topics/smell-loss",
  "/topics/snoring-sleep-apnea",
  "/topics/swallowing-difficulty",
  "/topics/swimmers-ear-otomycosis",
  "/topics/throat-reflux-lpr",
  "/topics/thyroid-nodules-goiter",
  "/topics/tinnitus",
  "/topics/tonsil-adenoid-snoring",
  "/topics/tympanic-membrane-perforation",
  "/topics/vertigo-dizziness-balance"
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8
  }));
}
