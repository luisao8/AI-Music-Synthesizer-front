const Replicate = require("../node_modules/replicate"); // You'll need to provide the correct path or module name for Replicate
 // If you're using fetch inside the Replicate module

const REPLICATE_API_TOKEN = "r8_c8I70iWUM1k69Nemv4D2Lm7wDcwHl090EOcob";

const replicate = new Replicate({
  auth: REPLICATE_API_TOKEN,
});

const input = { prompt: "Sexy drom rythm with a nostalgic tub with dancing triangle melodies" };

const fetchData = async () => {
  try {
    const output = await replicate.run("pphu/musicgen-small:65f6182bfcbc05fc05a28c78f1fbb9ddd1d8fd4ff439f4d9043d6aa8cd515dc1", { input });
    console.log(output);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

fetchData();

