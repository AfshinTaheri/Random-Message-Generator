const object = ["I", "You", "They", "we", "he", "she"];
const verb = ["work", "drive", "act", "workout", "eat"];
const adjective = ["good", "bad", "fast", "wierd", "great", "better"];
const adverb = ["recently", "clearly", "apparentlly", "currently"];

const wordRandomPicker = (array) => Math.floor(Math.random() * array.length);

const sentenceGenerator = (object, verb, adjective, adverb) => {
  let pickedObject = object[wordRandomPicker(object)];
  let pickedVerb = verb[wordRandomPicker(verb)];
  if (pickedObject === "he" || pickedObject === "she") {
    pickedVerb = `${pickedVerb}s`;
  }

  console.log(
    `${pickedObject} ${pickedVerb} ${adjective[wordRandomPicker(adjective)]} ${
      adverb[wordRandomPicker(adverb)]
    }`
  );
};

sentenceGenerator(object, verb, adjective, adverb);
