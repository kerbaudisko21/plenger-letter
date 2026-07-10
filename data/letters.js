// data/letters.js
// Farewell letters — one year of language study together in Zhejiang.
// Each entry: slug (used in the URL), display name, and the letter itself.
// Brewok's letter is intentionally left in Hokkien, as requested — not translated.

const letters = [
  {
    slug: "ruben",
    name: "Ruben",
    nickname: "bro Ruben",
    lang: "en",
    paragraphs: [
      "Yo, my bro Ruben. It was great meeting you in China — even though I only really showed up toward the end of the trip, I genuinely enjoyed hanging out with you.",
      "Good luck with your studies in Shanghai. Hope you land a job with a fat salary so you can treat me sometime, hahaha. And go easy on the clubbing.",
      "Let's stay in touch once you're back in Jakarta after you finish your studies."
    ],
    ps: "sorry for all the craziness during our hangouts."
  },
  {
    slug: "gigi",
    name: "Gigi",
    nickname: "Gigi",
    lang: "en",
    paragraphs: [
      "Hello Gigi. It was great getting to know you, even though I only really showed up toward the end. Arigathanks for all the hangouts these past few weeks — you're such a goofball, and somehow just as quick to get worked up, ha.",
      "Good luck going forward, I hope you get everything you're aiming for. And hey — it's fine to get frustrated sometimes, just maybe work on responding a little warmer when you do.",
      "Respect for being the one who could actually keep a whole crew's plans together — that's not easy."
    ],
    ps: "sorry for all the craziness during our hangouts."
  },
  {
    slug: "lucinda",
    name: "Lucinda",
    nickname: "Luci",
    lang: "en",
    paragraphs: [
      "Hello Luci. It was great meeting you, even though I only really showed up toward the end — it's been fun hanging out with you all.",
      "Honestly I don't really know what to write in this letter, so I'll just say: stay goofy, keep that accent of yours, and good luck going forward. I hope you achieve everything you're dreaming of."
    ],
    ps: "sorry for all the craziness during our hangouts."
  },
  {
    slug: "celine",
    name: "Celine",
    nickname: "Cel",
    lang: "en",
    paragraphs: [
      "Hello Cel. It was great meeting you, even though I only really showed up toward the end — it's been fun hanging out with you all.",
      "I don't really know what to say to you, so I'll just say: good luck and stay motivated for what's ahead. I hope you achieve everything you're dreaming of."
    ],
    ps: "sorry for all the craziness during our hangouts."
  },
  {
    slug: "natasha",
    name: "Natasha",
    nickname: "Nat",
    lang: "en",
    paragraphs: [
      "Hello Nat. It was great meeting you in China. I don't have much to say, but good luck with your studies in Shanghai — wishing you all the best, and I hope you achieve everything you're dreaming of."
    ],
    ps: null
  },
  {
    slug: "brewok",
    name: "Brewok",
    nickname: "wok",
    lang: "hokkien",
    paragraphs: [
      "Wok a wok, cibai wok, kamsia co wa e peng iu khi ini Hangzhou. Langgeng sama Alexa, sayangin ie mai main main lu lanciao, khaksien lang e kia cibe.",
      "Kamsia untuk jadi wa e sesama siao e pengiu yang seragam atau lebih gila wkwkw. Semoga kedepannya lu e achieve hamik yang lu ai, keep crazy brah."
    ],
    ps: null
  },
  {
    slug: "kenneth",
    name: "Kenneth",
    nickname: "anak Manado",
    lang: "en",
    paragraphs: [
      "Oi, kid from Manado. It was great meeting you, even though I only really showed up toward the end. Best of luck going forward, bro — and with your master's, hope you get to work in China.",
      "Stay the fashionista you are. Gotta admit, your outfits are always fire, hahaha."
    ],
    ps: null
  },
  {
    slug: "jason-hardi",
    name: "Jason Hardi",
    nickname: "Ko Jason",
    lang: "en",
    paragraphs: [
      "Yo, Ko Jason. It was great meeting you, even though I only really showed up toward the end. Thanks for playing badminton with me, even if it was just the once — you're a good friend, easygoing, and thanks for being someone to talk World Cup with, haha.",
      "Best of luck going forward, I hope you get everything you're after."
    ],
    ps: null
  },
  {
    slug: "jessica",
    name: "Jessica",
    nickname: "Jes",
    lang: "en",
    paragraphs: [
      "Hello Jes. It was great meeting you, even though I only really showed up toward the end. Thanks for being my badminton buddy — maybe ease up on the sliding tackles though, haha.",
      "Kind of wild that you're friends with a celebrity's kid — keeping company with a little artist. Thanks for this past week of hanging out with everyone and going to karaoke, I really appreciate it.",
      "Good luck in America — please don't get shot. I hope you get everything you're after, and stay goofy."
    ],
    ps: "sorry for all the craziness during our hangouts."
  },
  {
    slug: "alexa",
    name: "Alexa",
    nickname: "Lexi",
    lang: "en",
    paragraphs: [
      "Hello Lexi. It was great meeting you, even though I only really showed up toward the end. I don't really know what to say, so I'll just say — stay strong with Brewok, and take good care of him, you know how clumsy and chaotic he can be.",
      "Good luck going forward, I hope you achieve everything you're dreaming of."
    ],
    ps: "sorry for all the craziness during our hangouts."
  },
  {
    slug: "vega",
    name: "Vega",
    nickname: "Ko Veg",
    lang: "en",
    paragraphs: [
      "Hello Ko Veg. It was great meeting you, even though I only really showed up toward the end. Thank you for letting me be someone you could talk to about everything you've been through.",
      "Stay strong, Ko Veg. Whatever's already happened, don't let it weigh you down — it's not good for you. Try to focus on the positive, don't dwell on it too much, and take better care of yourself.",
      "I hope you succeed in everything you're aiming for."
    ],
    ps: "sorry for all the craziness during our hangouts."
  },
  {
    slug: "sylvia",
    name: "Sylvia (Silvia)",
    nickname: "Ci Sil",
    lang: "en",
    paragraphs: [
      "Hello Ci Sil. It was great meeting you, even though I only really showed up toward the end. Sorry we weren't closer — all I can say is good luck and stay motivated going forward. I hope you achieve everything you're dreaming of."
    ],
    ps: "sorry for all the craziness during our hangouts. And also — my name is not Winston."
  },
  {
    slug: "karen",
    name: "Karen",
    nickname: "Karen",
    lang: "en",
    paragraphs: [
      "Hello Karen, nice to meet you. Sorry we weren't closer — all I can say is good luck and stay motivated going forward. I hope you achieve everything you're dreaming of."
    ],
    ps: "sorry for all the craziness during our hangouts."
  },
  {
    slug: "olivia",
    name: "Olivia",
    nickname: "Oliv",
    lang: "en",
    paragraphs: [
      "Hello Oliv. It was great meeting you, even though I only really showed up toward the end — it's been fun hanging out with everyone.",
      "I hope you get everything you're after — 最聪明的学生在五班 (the smartest student is in Class 5)."
    ],
    ps: "sorry for all the craziness during our hangouts."
  },
  {
    slug: "geisya",
    name: "Geisya",
    nickname: "Geisya",
    lang: "en",
    paragraphs: [
      "Hello Geisya, nice to meet you. Sorry we weren't closer — all I can say is good luck and stay motivated going forward. I hope you achieve everything you're dreaming of."
    ],
    ps: null,
    hashtag: "#HUHA"
  },
  {
    slug: "delicia",
    name: "Delicia",
    nickname: "Del",
    lang: "en",
    paragraphs: [
      "Hello Del, nice to meet you. Sorry we weren't closer — all I can say is good luck and stay motivated going forward. I hope you achieve everything you're dreaming of."
    ],
    ps: null,
    hashtag: "#HUHA"
  },
  {
    slug: "maureen",
    name: "Maureen",
    nickname: "Maureen",
    lang: "en",
    paragraphs: [
      "Hello Maureen, nice to meet you. Sorry we weren't closer — all I can say is good luck and stay motivated going forward. I hope you achieve everything you're dreaming of."
    ],
    ps: "sorry for all the craziness during our hangouts."
  },
  {
    slug: "feb",
    name: "Feb",
    nickname: "Ci Feb",
    lang: "en",
    paragraphs: [
      "Hello Ci Feb, nice to meet you. Sorry we weren't closer — all I can say is good luck and stay motivated going forward. I hope you achieve everything you're dreaming of."
    ],
    ps: "sorry for all the craziness during our hangouts."
  },
  {
    slug: "karyn",
    name: "Karyn",
    nickname: "Karyn",
    lang: "en",
    paragraphs: [
      "Hello Karyn. It was great meeting you, even though I only really showed up toward the end. Thanks for being my badminton buddy — remember, communication matters in doubles, haha.",
      "Thanks for this past week of hanging out with everyone and going to karaoke, I really appreciate it. I hope you get everything you're after, and stay goofy."
    ],
    ps: "sorry for all the craziness during our hangouts."
  }
];

export function getAllLetters() {
  return letters;
}

export function getLetterBySlug(slug) {
  return letters.find((l) => l.slug === slug) || null;
}

export default letters;
