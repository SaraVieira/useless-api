import { CATEGORIES } from "./categories";

const icelandFacts = [
  "There is a supermarket called Iceland that operates in the country of iceland",
  "Iceland is a volcanic island with over 130 active volcanoes",
  "Beer was illegal in Iceland until 1989",
  "Iceland does not possess an army, air force or navy",
  "There are only two places on earth that do not have mosquitoes; Antarctica and Iceland",
  "There is not a single McDonald's restaurant to be found in Iceland",
  "According to local Icelandic Christmas traditions, there are 13 Santa Clauses",
  "Iceland imports ice",
  "The safest country in the world is Iceland",
  "Many Icelanders believe in elves",
  "Iceland was the last place on earth to be settled by humans",
  "Iceland is the safest country in the world",
].map((fact) => ({ fact, category: CATEGORIES.ICELAND }));

export const facts = [
  ...icelandFacts,
  {
    fact: "Flamingos can only eat with their heads upside down",
    category: CATEGORIES.ANIMAL,
  },
  {
    fact: "There are 32 muscles in a cat's ear",
    category: CATEGORIES.ANIMAL,
  },
  {
    fact: "There are 6 muscles in a human's hear",
    category: CATEGORIES.ANIMAL,
  },
  {
    fact: "The chicken and the ostrich are the closest living relatives of the Tyrannosaurus rex",
    category: CATEGORIES.ANIMAL,
  },
  {
    fact: "Dr Seuss invented the word 'nerd'",
    category: CATEGORIES.MEDIA,
  },
  {
    fact: "Barbie's full name is Barbara Millicent Roberts",
    category: CATEGORIES.MEDIA,
  },
  {
    fact: "A blob of toothpaste is called a nurdle",
    category: CATEGORIES.THINGS,
  },
  {
    fact: "Slinkies are 82 feet long",
    category: CATEGORIES.THINGS,
  },
  {
    fact: "If you open your eyes in a pitch-black room, the colour you'll see is called 'eigengrau'",
    category: CATEGORIES.LANGUAGE,
  },
  {
    fact: "Astronauts say that space smells like hot meat",
    category: CATEGORIES.THINGS,
  },
  {
    fact: "The unicorn is the national animal of Scotland",
    category: CATEGORIES.GEOGRAPHY,
  },
  {
    fact: "The Australian government once banned the word 'mate' for a day",
    category: CATEGORIES.GEOGRAPHY,
  },
  {
    fact: "There are more chickens in England than people",
    category: CATEGORIES.ANIMAL,
  },
  {
    fact: "The word 'hipster' goes back to the 1930s",
    category: CATEGORIES.HUMAN,
  },
  {
    fact: "The little plastic tube at the end of a shoelace is called an aglet",
    category: CATEGORIES.THINGS,
  },
  {
    fact: "No word in the English language rhymes with 'MONTH'",
    category: CATEGORIES.LANGUAGE,
  },
  {
    fact: "The cigarette lighter was invented before the match",
    category: CATEGORIES.THINGS,
  },
  {
    fact: "'Dreamt' is the only word in the English language that ends with 'mt'",
    category: CATEGORIES.LANGUAGE,
  },
  {
    fact: "A Greek-Canadian man invented the 'Hawaiian' pizza",
    category: CATEGORIES.FOOD,
  },
  {
    fact: "The Spanish flu did not start in Spain",
    category: CATEGORIES.THINGS,
  },
  {
    fact: "A 'jiffy' is about one trillionth of a second",
    category: CATEGORIES.THINGS,
  },
  {
    fact: "Golf balls tend to have 336 'dimples'",
    category: CATEGORIES.SPORTS,
  },
  {
    fact: "Mulan has the highest kill-count of any Disney character",
    category: CATEGORIES.MEDIA,
  },
  {
    fact: "The real name of Monopoly mascot Uncle Pennybags is Milburn Pennybags",
    category: CATEGORIES.THINGS,
  },
  {
    fact: "The infinity sign is called a lemniscate",
    category: CATEGORIES.THINGS,
  },
  {
    fact: "There's a city called 'Rome' on every continent except Antarctica",
    category: CATEGORIES.GEOGRAPHY,
  },
  {
    fact: "Cap'n Crunch's full name is Captain Horatio Magellan Crunch",
    category: CATEGORIES.THINGS,
  },
  {
    fact: "Movie trailers got their name because they were originally shown after the movie",
    category: CATEGORIES.MEDIA,
  },
  {
    fact: "There's a tiny home in Virginia called the 'Spite House' because that's why it was built",
    category: CATEGORIES.GEOGRAPHY,
  },
  {
    fact: "The Tor browser was invited by the United States navy",
    category: CATEGORIES.ANIMAL,
  },
  {
    fact: "According to the Bible, the chicken came before the egg",
    category: CATEGORIES.ANIMAL,
  },
  { fact: "Barbie and Ken broke up in 2004", category: CATEGORIES.THINGS },
  { fact: "Apple seeds contain cyanide", category: CATEGORIES.FOOD },
  {
    fact: "In 2016, Mozart sold more CDs than Beyonce",
    category: CATEGORIES.MEDIA,
  },
  {
    fact: "The Super Soaker was designed and invented by a NASA engineer",
    category: CATEGORIES.THINGS,
  },
  {
    fact: "More Monopoly money is printed in a year, than real money throughout the world",
    category: CATEGORIES.THINGS,
  },
  {
    fact: "You can't bring a Furby to the Pentagon",
    category: CATEGORIES.THINGS,
  },
  { fact: "Babies are born without kneecaps", category: CATEGORIES.HUMAN },
  {
    fact: "A blob of toothpaste is called a nurdle",
    category: CATEGORIES.THINGS,
  },
  {
    fact: "The Rubik's cube is the best-selling toy of all time",
    category: CATEGORIES.THINGS,
  },
  {
    fact: "Germans eat twice as much chocolate as Americans",
    category: CATEGORIES.GEOGRAPHY,
  },
  {
    fact: "Pennsylvania is misspelled on the Liberty Bell",
    category: CATEGORIES.GEOGRAPHY,
  },
  {
    fact: "The first webcam was invented to monitor a coffee pot",
    category: CATEGORIES.THINGS,
  },
  { fact: "Croissants were invented in Vienna", category: CATEGORIES.FOOD },
  {
    fact: "There's an island that France and Spain takes turns owning every 6 months",
    category: CATEGORIES.GEOGRAPHY,
  },
  {
    fact: "Finland has the most metal bands per capita, with 53.5 metal bands per 100,000 people",
    category: CATEGORIES.MEDIA,
  },
  {
    fact: "Coca-Cola would be green if there wasn't coloring",
    category: CATEGORIES.FOOD,
  },
  { fact: "Carrots were originally purple", category: CATEGORIES.FOOD },
  {
    fact: "The first written instance of 'OMG' that we know of was in a letter to Winston Churchill in 1917",
    category: CATEGORIES.LANGUAGE,
  },
  {
    fact: "Sony's first product was the electrical rice cooker",
    category: CATEGORIES.THINGS,
  },
  {
    fact: "The very first internet meme went viral in 1996, and it's known as Baby Cha-Cha-Cha",
    category: CATEGORIES.MEDIA,
  },
  {
    fact: "There is a conspiracy theory that Finland is not real",
    category: CATEGORIES.GEOGRAPHY,
  },
  {
    fact: "It's possible to lead a cow upstairs... but not downstairs",
    category: CATEGORIES.ANIMAL,
  },
  {
    fact: "Women blink nearly twice as much as men",
    category: CATEGORIES.HUMAN,
  },
  {
    fact: "Pepsi originally contained pepsin, thus the name",
    category: CATEGORIES.THINGS,
  },
  {
    fact: "A crocodile cannot stick its tongue out",
    category: CATEGORIES.ANIMAL,
  },
  {
    fact: "Our eyes are always the same size from birth, but our nose and ears never stop growing",
    category: CATEGORIES.HUMAN,
  },
  {
    fact: "The electric chair was invented by a dentist",
    category: CATEGORIES.THINGS,
  },
  { fact: "A snail can sleep for three years", category: CATEGORIES.ANIMAL },
  {
    fact: "The 'pound' key on your keyboard (#) is called an octotroph",
    category: CATEGORIES.LANGUAGE,
  },
  {
    fact: "The 'dot' over the letter 'i' is called a tittle",
    category: CATEGORIES.LANGUAGE,
  },
  {
    fact: "The house fly hums in the middle octave key of F",
    category: CATEGORIES.ANIMAL,
  },
  {
    fact: "Marie Curie's 100-year-old belongings are still radioactive",
    category: CATEGORIES.HUMAN,
  },
  {
    fact: "The inventor of Pringles is buried in a Pringles can",
    category: CATEGORIES.THINGS,
  },
  {
    fact: "Queen Elizabeth II was a trained mechanic",
    category: CATEGORIES.HUMAN,
  },
  {
    fact: "Pound cake originally included a pound of all of its ingredients",
    category: CATEGORIES.FOOD,
  },
  {
    fact: "Montpelier, Vermont, is the only U.S. capital without a McDonald's",
    category: CATEGORIES.GEOGRAPHY,
  },
  {
    fact: "Dragonflies have six legs but can't walk",
    category: CATEGORIES.ANIMAL,
  },
  {
    fact: "In old Christian art, good angels were red and Satan was blue",
    category: CATEGORIES.THINGS,
  },
  {
    fact: "Octopuses and squid have three hearts",
    category: CATEGORIES.ANIMAL,
  },
  {
    fact: "Around 16 million people alive today are direct descendants of Genghis Khan",
    category: CATEGORIES.HUMAN,
  },
  { fact: "The Play-Doh scent is patented", category: CATEGORIES.THINGS },
  {
    fact: "Mustache shields were a thing in the Victorian Era",
    category: CATEGORIES.THINGS,
  },
  { fact: "Bees have 5 eyes", category: CATEGORIES.ANIMAL },
  {
    fact: "Oreo has made enough cookies to go to the Moon and back 5 times",
    category: CATEGORIES.FOOD,
  },
  {
    fact: "The sun makes up more than 99 percent of our solar system's mass",
    category: CATEGORIES.SPACE,
  },
  {
    fact: "Jupiter is twice as massive as all the other planets combined",
    category: CATEGORIES.SPACE,
  },
  {
    fact: "A dragonfly has a lifespan of only one day",
    category: CATEGORIES.ANIMAL,
  },
  {
    fact: "Venus is the only planet that rotates clockwise",
    category: CATEGORIES.SPACE,
  },
  {
    fact: "Al Capone's business card said he was a used furniture dealer",
    category: CATEGORIES.HUMAN,
  },
  {
    fact: "New Jersey grows two-thirds of the world's eggplants",
    category: CATEGORIES.GEOGRAPHY,
  },
  {
    fact: "An ostrich's eye is bigger than its brain",
    category: CATEGORIES.ANIMAL,
  },
  {
    fact: "Most car horns are in the key of F. 53",
    category: CATEGORIES.THINGS,
  },
  {
    fact: "Most American car horns honk in the key of F. 71",
    category: CATEGORIES.THINGS,
  },
  {
    fact: "Somali pirates have such a hatred for Western culture, that the British Navy uses music from Britney Spears to scare them off",
    category: CATEGORIES.HUMAN,
  },
  { fact: "Women see more colors than men", category: CATEGORIES.HUMAN },
  { fact: "Women hiccup less than men", category: CATEGORIES.HUMAN },
  {
    fact: "The two highest IQ scores in history both belonged to women",
    category: CATEGORIES.HUMAN,
  },
  {
    fact: "The country of Russia is bigger than Pluto",
    category: CATEGORIES.SPACE,
  },
  {
    fact: "It's possible to turn peanut butter into diamonds",
    category: CATEGORIES.FOOD,
  },
  {
    fact: "Linda Lou Taylor of Indiana holds the Guinness World Record for the most married person. She's been married 23 times",
    category: CATEGORIES.HUMAN,
  },
  {
    fact: "Emus and kangaroos cannot walk backward",
    category: CATEGORIES.ANIMAL,
  },
  {
    fact: "In the 1830s, ketchup was used medicinally",
    category: CATEGORIES.FOOD,
  },
  {
    fact: "Neptune orbits the sun once every 165 years",
    category: CATEGORIES.SPACE,
  },
  {
    fact: "Dark Matter accounts for over 85 percent of the universe",
    category: CATEGORIES.SPACE,
  },
  {
    fact: "Fruit flies were the first living creatures sent into space",
    category: CATEGORIES.SPACE,
  },
  {
    fact: "The footprints made on the moon will be there for 100 million years",
    category: CATEGORIES.SPACE,
  },
  {
    fact: "The moon was once a piece of the Earth",
    category: CATEGORIES.SPACE,
  },
  {
    fact: "Cats use their whiskers to assess if the space is too small for them to squeeze through. They are also a navigation tool and a mood indicator",
    category: CATEGORIES.ANIMAL,
  },
  {
    fact: "Flamingos can only eat when its head is upside down",
    category: CATEGORIES.ANIMAL,
  },
  {
    fact: "Cockroaches have personalities! For instance, some are boisterous, some are shy! They also have a rich social life",
    category: CATEGORIES.ANIMAL,
  },
  {
    fact: "Human eye can distinguish about 10 million unique colors but only 30 shades of gray",
    category: CATEGORIES.HUMAN,
  },
  {
    fact: "It takes about an 45-60 minutes for a snowflake to fall down from the cloud",
    category: CATEGORIES.THINGS,
  },
  {
    fact: "Anne Frank, Audrey Hepburn, Yayoi Kusama, and Martin Luther King Jr. were born in the same year",
    category: CATEGORIES.HUMAN,
  },
  { fact: "Antarctica is a desert", category: CATEGORIES.GEOGRAPHY },
  {
    fact: "You can grow 3% taller during the time spent in space, according to NASA",
    category: CATEGORIES.ANIMAL,
  },
  {
    fact: "Camels have three eyelids to protect them from sand",
    category: CATEGORIES.ANIMAL,
  },
  {
    fact: "Cleopatra's birth happened closer to the moon landing than when pyramids were built",
    category: CATEGORIES.HUMAN,
  },
  {
    fact: "The origins of the Yo-Yo is seen on the side of Greek vases 500 BC",
    category: CATEGORIES.THINGS,
  },
  {
    fact: "France was still using guillotine when the first Star Wars movie came out",
    category: CATEGORIES.GEOGRAPHY,
  },
  {
    fact: "The country with the highest personal debt in the world is the Netherlands",
    category: CATEGORIES.GEOGRAPHY,
  },
  {
    fact: "Portugal was actually a part of Spain for like 30 years, and they still have an independence day because of that",
    category: CATEGORIES.GEOGRAPHY,
  },
  {
    fact: "Germany and mexico do not increase your prison sentence if you try to escape and get caught, they see the pursuit if freedom as a human right",
    category: CATEGORIES.GEOGRAPHY,
  },
  {
    fact: "The US has around 800 military bases outside of their territory",
    category: CATEGORIES.GEOGRAPHY,
  },
  {
    fact: "The country with the most gay and transgender rights in the world is Canada",
    category: CATEGORIES.GEOGRAPHY,
  },
  {
    fact: "Juventus has been to 9 champions league finals and lost 7",
    category: CATEGORIES.SPORTS,
  },
  {
    fact: "Denmark once won the euro without qualifying",
    category: CATEGORIES.SPORTS,
  },
  {
    fact: "There is a football club in Ecuador called Barcelona that has an identical crest",
    category: CATEGORIES.SPORTS,
  },
  {
    fact: "The biggest reason for hospital visits regarding chest pain is panic attacks",
    category: CATEGORIES.HUMAN,
  },
  {
    fact: "In Mexico you cannot renounce your citizenship",
    category: CATEGORIES.GEOGRAPHY,
  },
  {
    fact: "Olympic Gold Medals are Predominantly Made from Sterling Silver",
    category: CATEGORIES.SPORTS,
  },
  {
    fact: "Sports Have Been Played on the Moon",
    category: CATEGORIES.SPORTS,
  },
  {
    fact: "Michael Phelps Has Won More Olympic Golds Than Mexico",
    category: CATEGORIES.SPORTS,
  },
  {
    fact: "Danny ???Shiphtur??? Le was the First E-Gamer to be Given an Athlete???s Visa in the US",
    category: CATEGORIES.SPORTS,
  },
  {
    fact: "The longest recorded tennis match lasted for 11 hours",
    category: CATEGORIES.SPORTS,
  },
  {
    fact: "Tug of war was once an Olympic event",
    category: CATEGORIES.SPORTS,
  },
  // { fact: "", category: CATEGORIES.ANIMAL },
].map((f) => ({
  ...f,
  fact: f.fact.trim(),
  category: f.category.name,
}));
