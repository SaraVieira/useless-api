const CATEGORIES = {
  ANIMAL: "animal",
  HUMAN: "human",
  ICELAND: "iceland",
  MEDIA: "media",
  THINGS: "things",
  LANGUAGE: "language",
  GEOGRAPHY: "geography",
  FOOD: "food",
};

const icelandFacts = [
  "Iceland is a volcanic island with over 130 active volcanoes",
  "Beer was illegal in Iceland until 1989.",
  "Iceland does not possess an army, air force or navy",
  "There are only two places on earth that do not have mosquitoes; Antarctica and Iceland.",
  "There is not a single McDonald’s restaurant to be found in Iceland. ",
  "According to local Icelandic Christmas traditions, there are 13 Santa Clauses ",
  "Iceland imports ice",
  "The safest country in the world is Iceland",
  "Many Icelanders believe in elves",
  "Iceland was the last place on earth to be settled by humans",
].map((fact) => ({ fact, category: CATEGORIES.ICELAND }));

export const facts = [
  ...icelandFacts,
  {
    fact: "Flamingos can only eat with their heads upside down.",
    category: CATEGORIES.ANIMAL,
  },
  {
    fact: "There are 32 muscles in a cat’s ear.",
    category: CATEGORIES.ANIMAL,
  },
  {
    fact: "There are 6 muscles in a human's hear.",
    category: CATEGORIES.ANIMAL,
  },
  {
    fact: "The chicken and the ostrich are the closest living relatives of the Tyrannosaurus rex.",
    category: CATEGORIES.ANIMAL,
  },
  {
    fact: "Dr Seuss invented the word ‘nerd’.",
    category: CATEGORIES.MEDIA,
  },
  {
    fact: "Barbie's full name is Barbara Millicent Roberts.",
    category: CATEGORIES.MEDIA,
  },
  {
    fact: "A blob of toothpaste is called a nurdle.",
    category: CATEGORIES.THINGS,
  },
  {
    fact: "Slinkies are 82 feet long.",
    category: CATEGORIES.THINGS,
  },
  {
    fact: "If you open your eyes in a pitch-black room, the colour you'll see is called 'eigengrau'.",
    category: CATEGORIES.LANGUAGE,
  },
  {
    fact: "Astronauts say that space smells like hot meat.",
    category: CATEGORIES.THINGS,
  },
  {
    fact: "The unicorn is the national animal of Scotland.",
    category: CATEGORIES.GEOGRAPHY,
  },
  {
    fact: "The Australian government once banned the word 'mate' for a day.",
    category: CATEGORIES.GEOGRAPHY,
  },
  {
    fact: "There are more chickens in England than people.",
    category: CATEGORIES.ANIMAL,
  },
  {
    fact: "The word 'hipster' goes back to the 1930s.",
    category: CATEGORIES.HUMAN,
  },
  {
    fact: "The little plastic tube at the end of a shoelace is called an aglet.",
    category: CATEGORIES.THINGS,
  },
  {
    fact: "No word in the English language rhymes with 'MONTH.'",
    category: CATEGORIES.LANGUAGE,
  },
  {
    fact: "The cigarette lighter was invented before the match.",
    category: CATEGORIES.THINGS,
  },
  {
    fact: "'Dreamt' is the only word in the English language that ends with 'mt.'",
    category: CATEGORIES.LANGUAGE,
  },
  {
    fact: "A Greek-Canadian man invented the 'Hawaiian' pizza.",
    category: CATEGORIES.FOOD,
  },
  {
    fact: "The Spanish flu did not start in Spain",
    category: CATEGORIES.THINGS,
  },
  {
    fact: "A 'jiffy' is about one trillionth of a second.",
    category: CATEGORIES.THINGS,
  },
  {
    fact: "Golf balls tend to have 336 'dimples.'",
    category: CATEGORIES.THINGS,
  },
  {
    fact: "Mulan has the highest kill-count of any Disney character.",
    category: CATEGORIES.MEDIA,
  },
  {
    fact: "The real name of Monopoly mascot Uncle Pennybags is Milburn Pennybags.",
    category: CATEGORIES.THINGS,
  },
  {
    fact: "The infinity sign is called a lemniscate.",
    category: CATEGORIES.THINGS,
  },
  {
    fact: "There's a city called 'Rome' on every continent except Antarctica'",
    category: CATEGORIES.GEOGRAPHY,
  },
  {
    fact: "Cap'n Crunch's full name is Captain Horatio Magellan Crunch.",
    category: CATEGORIES.THINGS,
  },
  {
    fact: "Movie trailers got their name because they were originally shown after the movie.",
    category: CATEGORIES.MEDIA,
  },
  {
    fact: "There's a tiny home in Virginia called the 'Spite House' because that's why it was built.",
    category: CATEGORIES.GEOGRAPHY,
  },
  {
    fact: "The Tor browser was invited by the United States navy",
    category: CATEGORIES.ANIMAL,
  },
  {
    fact: "According to the Bible, the chicken came before the egg.",
    category: CATEGORIES.ANIMAL,
  },
  { fact: "Barbie and Ken broke up in 2004.", category: CATEGORIES.THINGS },
  { fact: "Apple seeds contain cyanide.", category: CATEGORIES.FOOD },
  {
    fact: "In 2016, Mozart sold more CDs than Beyonce.",
    category: CATEGORIES.MEDIA,
  },
  {
    fact: "The Super Soaker was designed and invented by a NASA engineer.",
    category: CATEGORIES.THINGS,
  },
  {
    fact: "More Monopoly money is printed in a year, than real money throughout the world.",
    category: CATEGORIES.THINGS,
  },
  {
    fact: "You can’t bring a Furby to the Pentagon.",
    category: CATEGORIES.THINGS,
  },
  { fact: "Babies are born without kneecaps. ", category: CATEGORIES.HUMAN },
  {
    fact: "A blob of toothpaste is called a nurdle.",
    category: CATEGORIES.THINGS,
  },
  {
    fact: "The Rubik’s cube is the best-selling toy of all time.",
    category: CATEGORIES.THINGS,
  },
  {
    fact: "Germans eat twice as much chocolate as Americans.",
    category: CATEGORIES.GEOGRAPHY,
  },
  {
    fact: "Pennsylvania is misspelled on the Liberty Bell.",
    category: CATEGORIES.GEOGRAPHY,
  },
  {
    fact: "The first webcam was invented to monitor a coffee pot.",
    category: CATEGORIES.THINGS,
  },
  { fact: "Croissants were invented in Vienna", category: CATEGORIES.FOOD },
  {
    fact: "There’s an island that France and Spain takes turns owning every 6 months.",
    category: CATEGORIES.GEOGRAPHY,
  },
  {
    fact: "Finland has the most metal bands per capita, with 53.5 metal bands per 100,000 people.",
    category: CATEGORIES.MEDIA,
  },
  {
    fact: " Coca-Cola would be green if there wasn’t coloring.",
    category: CATEGORIES.FOOD,
  },
  { fact: "7. Carrots were originally purple.", category: CATEGORIES.FOOD },
  {
    fact: "The first written instance of “OMG” that we know of was in a letter to Winston Churchill in 1917.",
    category: CATEGORIES.LANGUAGE,
  },
  {
    fact: " Sony’s first product was the electrical rice cooker.",
    category: CATEGORIES.THINGS,
  },
  {
    fact: "The very first internet meme went viral in 1996, and it’s known as Baby Cha-Cha-Cha.",
    category: CATEGORIES.MEDIA,
  },
  // { fact: "", category: CATEGORIES.ANIMAL },
  // { fact: "", category: CATEGORIES.ANIMAL },
  // { fact: "", category: CATEGORIES.ANIMAL },
  // { fact: "", category: CATEGORIES.ANIMAL },
  // { fact: "", category: CATEGORIES.ANIMAL },
  // { fact: "", category: CATEGORIES.ANIMAL },
];
