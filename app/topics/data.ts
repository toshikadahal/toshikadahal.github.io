export type Topic = {
  slug: string;
  title: string;
  subtitle: string;
  points: string[];
};

export const topics: Topic[] = [
  {
    slug: "child-eye-checkup",
    title: "Child eye checkup",
    subtitle: "When parents should bring a child for an eye examination.",
    points: [
      "Eye checkup is advised when a child has squint, poor school performance, frequent headache, eye rubbing, or sitting very close to books or screens.",
      "Early examination helps detect refractive error, lazy eye, cataract, retinal problems, and eye alignment disorders.",
      "Small children may not complain even when vision is reduced in one eye. Screening is therefore important."
    ]
  },
  {
    slug: "strabismus-squint",
    title: "Strabismus or squint",
    subtitle: "Eye misalignment in children and adults.",
    points: [
      "Squint means the two eyes are not aligned in the same direction.",
      "It may cause reduced binocular vision, lazy eye in children, double vision in adults, and cosmetic concern.",
      "Treatment may include glasses, patching, exercises in selected cases, or surgery."
    ]
  },
  {
    slug: "amblyopia-lazy-eye",
    title: "Amblyopia or lazy eye",
    subtitle: "Reduced vision from abnormal visual development.",
    points: [
      "Amblyopia happens when one eye does not develop clear vision during childhood.",
      "Common causes include unequal spectacle power, squint, cataract, and drooping eyelid blocking vision.",
      "Early treatment gives the best result. Glasses, patching, and regular follow up are commonly needed."
    ]
  },
  {
    slug: "myopia-in-children",
    title: "Myopia in children",
    subtitle: "Short sightedness and school age vision problems.",
    points: [
      "Myopia causes difficulty seeing distant objects clearly.",
      "Children may squeeze eyes, sit near the board or television, or complain of blurred distance vision.",
      "Regular refraction and appropriate glasses help vision and learning."
    ]
  },
  {
    slug: "pediatric-cataract",
    title: "Pediatric cataract",
    subtitle: "Clouding of the lens in infancy or childhood.",
    points: [
      "A white reflex in the pupil, poor fixation, eye shaking, or squint can suggest cataract in a child.",
      "Early diagnosis is important as untreated cataract can cause permanent lazy eye.",
      "Treatment depends on age, cataract density, and visual development."
    ]
  },
  {
    slug: "retinoblastoma-awareness",
    title: "Retinoblastoma awareness",
    subtitle: "Warning signs of a serious eye tumor in children.",
    points: [
      "A white pupil reflex in photographs, new squint, poor vision, or painful red eye can be warning signs.",
      "Urgent eye examination is needed when retinoblastoma is suspected.",
      "Early referral can save life, eye, and vision."
    ]
  },
  {
    slug: "watering-eye-child",
    title: "Watering eye in children",
    subtitle: "Common causes of persistent tearing.",
    points: [
      "Persistent watering in infants may be due to blocked tear duct.",
      "Redness, discharge, light sensitivity, or cloudy cornea needs early evaluation.",
      "Treatment depends on age, severity, and associated signs."
    ]
  },
  {
    slug: "red-eye-child",
    title: "Red eye in children",
    subtitle: "When red eye needs urgent care.",
    points: [
      "Redness with pain, reduced vision, injury, light sensitivity, or corneal opacity needs urgent assessment.",
      "Not all red eye is simple conjunctivitis.",
      "Avoid unsupervised steroid eye drops in children."
    ]
  }
];

export function getTopic(slug: string) {
  return topics.find((topic) => topic.slug === slug);
}
