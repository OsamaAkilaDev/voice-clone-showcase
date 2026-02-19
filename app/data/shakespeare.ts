export interface ShakespeareMetrics {
  audio: string;     // Path to audio file
  ttfb: string;      // Time to First Byte (ms)
  latency: string;   // Total latency (ms)
  fileSize: string;  // File size (KB)
}

export interface ShakespeareEntry {
  id: string;
  text: string;
  qwen: ShakespeareMetrics;              // Qwen TTS (WebSocket, voice-cloned)
  chatterbox: ShakespeareMetrics;        // Resemble.ai Chatterbox
  chatterboxTurbo: ShakespeareMetrics;   // Resemble.ai Chatterbox Turbo
}

export const shakespeareEntries: ShakespeareEntry[] = [
  {
    id: "shk-001",
    text: "Well done, Omar! Now, please say this sentence again with a small correction: \'I have worked in the field for five years.\' Try to say \'in the\' instead of \'on the.\' Can you give it a go?",
    qwen: { audio: "/shakespeare/qwen/shk-001.mp3", ttfb: "1.4s", latency: "4.0s", fileSize: "103KB" },
    chatterbox: { audio: "/shakespeare/chatterbox/shk-001.mp3", ttfb: "2.8s", latency: "4.1s", fileSize: "145KB" },
    chatterboxTurbo: { audio: "/shakespeare/chatterbox-turbo/shk-001.mp3", ttfb: "2.7s", latency: "2.9s", fileSize: "147KB" },
  },
  {
    id: "shk-002",
    text: "Good try, Sarah! Instead of \'I feel very great,\' it\'s better to say \'I feel great.\' Could you say that corrected part?",
    qwen: { audio: "/shakespeare/qwen/shk-002.mp3", ttfb: "856ms", latency: "2.9s", fileSize: "76KB" },
    chatterbox: { audio: "/shakespeare/chatterbox/shk-002.mp3", ttfb: "2.0s", latency: "3.0s", fileSize: "84KB" },
    chatterboxTurbo: { audio: "/shakespeare/chatterbox-turbo/shk-002.mp3", ttfb: "2.1s", latency: "3.1s", fileSize: "98KB" },
  },
  {
    id: "shk-003",
    text: "Nice and clear, Khalid! That shows your experience. You can also add more details like: \'I\'ve taken on extra projects and have consistently exceeded my targets.\' Can you try that?",
    qwen: { audio: "/shakespeare/qwen/shk-003.mp3", ttfb: "944ms", latency: "3.8s", fileSize: "113KB" },
    chatterbox: { audio: "/shakespeare/chatterbox/shk-003.mp3", ttfb: "3.1s", latency: "4.2s", fileSize: "158KB" },
    chatterboxTurbo: { audio: "/shakespeare/chatterbox-turbo/shk-003.mp3", ttfb: "2.7s", latency: "3.3s", fileSize: "156KB" },
  },
  {
    id: "shk-004",
    text: "Almost there, Emily! Please try to say the full sentence using \'share\' instead of \'spray,\' like this: \'They will share all these papers between the colleagues.\' Give it a go!",
    qwen: { audio: "/shakespeare/qwen/shk-004.mp3", ttfb: "994ms", latency: "3.5s", fileSize: "102KB" },
    chatterbox: { audio: "/shakespeare/chatterbox/shk-004.mp3", ttfb: "2.4s", latency: "3.6s", fileSize: "124KB" },
    chatterboxTurbo: { audio: "/shakespeare/chatterbox-turbo/shk-004.mp3", ttfb: "2.4s", latency: "3.1s", fileSize: "131KB" },
  },
  {
    id: "shk-005",
    text: "Well done, Zainab! Question 2: Can you describe a situation where you had been studying for hours before you finally understood a difficult concept?",
    qwen: { audio: "/shakespeare/qwen/shk-005.mp3", ttfb: "808ms", latency: "2.9s", fileSize: "87KB" },
    chatterbox: { audio: "/shakespeare/chatterbox/shk-005.mp3", ttfb: "2.2s", latency: "2.5s", fileSize: "112KB" },
    chatterboxTurbo: { audio: "/shakespeare/chatterbox-turbo/shk-005.mp3", ttfb: "2.1s", latency: "2.3s", fileSize: "116KB" },
  },
  {
    id: "shk-006",
    text: "Sorry, John, that sentence is a bit unclear. Try this: \'I spend a lot of money on room service for housekeeping and food.\' Can you say the corrected sentence?",
    qwen: { audio: "/shakespeare/qwen/shk-006.mp3", ttfb: "951ms", latency: "3.6s", fileSize: "100KB" },
    chatterbox: { audio: "/shakespeare/chatterbox/shk-006.mp3", ttfb: "3.8s", latency: "4.6s", fileSize: "121KB" },
    chatterboxTurbo: { audio: "/shakespeare/chatterbox-turbo/shk-006.mp3", ttfb: "2.5s", latency: "2.7s", fileSize: "129KB" },
  },
  {
    id: "shk-007",
    text: "Nice try, Layla! The sentence should start with \'I had been studying for hours before I finally understood a difficult concept.\' Please say the corrected sentence.",
    qwen: { audio: "/shakespeare/qwen/shk-007.mp3", ttfb: "732ms", latency: "3.2s", fileSize: "94KB" },
    chatterbox: { audio: "/shakespeare/chatterbox/shk-007.mp3", ttfb: "2.4s", latency: "3.5s", fileSize: "114KB" },
    chatterboxTurbo: { audio: "/shakespeare/chatterbox-turbo/shk-007.mp3", ttfb: "2.4s", latency: "3.4s", fileSize: "130KB" },
  },
  {
    id: "shk-008",
    text: "Nice, Adam! Correct this: \'Yes, I have forgiven someone, and I felt better afterward, but the relationship was not like before.\' Please say the corrected sentence aloud.",
    qwen: { audio: "/shakespeare/qwen/shk-008.mp3", ttfb: "921ms", latency: "3.9s", fileSize: "104KB" },
    chatterbox: { audio: "/shakespeare/chatterbox/shk-008.mp3", ttfb: "3.7s", latency: "3.9s", fileSize: "140KB" },
    chatterboxTurbo: { audio: "/shakespeare/chatterbox-turbo/shk-008.mp3", ttfb: "2.4s", latency: "3.6s", fileSize: "135KB" },
  },
  {
    id: "shk-009",
    text: "What do you think, Hana, can help rebuild a relationship after forgiveness?",
    qwen: { audio: "/shakespeare/qwen/shk-009.mp3", ttfb: "751ms", latency: "1.8s", fileSize: "42KB" },
    chatterbox: { audio: "/shakespeare/chatterbox/shk-009.mp3", ttfb: "1.4s", latency: "1.8s", fileSize: "56KB" },
    chatterboxTurbo: { audio: "/shakespeare/chatterbox-turbo/shk-009.mp3", ttfb: "1.4s", latency: "2.2s", fileSize: "60KB" },
  },
  {
    id: "shk-010",
    text: "Great job, Yusuf! Can you list three types of food you like? For example: 1. Mansaf; 2. Tabbouleh; 3. Falafel.",
    qwen: { audio: "/shakespeare/qwen/shk-010.mp3", ttfb: "906ms", latency: "3.0s", fileSize: "78KB" },
    chatterbox: { audio: "/shakespeare/chatterbox/shk-010.mp3", ttfb: "2.2s", latency: "2.5s", fileSize: "103KB" },
    chatterboxTurbo: { audio: "/shakespeare/chatterbox-turbo/shk-010.mp3", ttfb: "2.1s", latency: "3.3s", fileSize: "111KB" },
  },
  {
    id: "shk-011",
    text: "Excellent, Maryam! Try using the word كبسة (Kabsa) in a sentence about your favorite dinner.",
    qwen: { audio: "/shakespeare/qwen/shk-011.mp3", ttfb: "781ms", latency: "2.3s", fileSize: "57KB" },
    chatterbox: { audio: "/shakespeare/chatterbox/shk-011.mp3", ttfb: "1.7s", latency: "1.8s", fileSize: "80KB" },
    chatterboxTurbo: { audio: "/shakespeare/chatterbox-turbo/shk-011.mp3", ttfb: "1.5s", latency: "1.6s", fileSize: "72KB" },
  },
  {
    id: "shk-012",
    text: "Listen closely, Peter. To improve your flow, try listing your morning routine: 1. I wake up; 2. I drink coffee; 3. I start working.",
    qwen: { audio: "/shakespeare/qwen/shk-012.mp3", ttfb: "947ms", latency: "3.3s", fileSize: "90KB" },
    chatterbox: { audio: "/shakespeare/chatterbox/shk-012.mp3", ttfb: "2.2s", latency: "3.3s", fileSize: "97KB" },
    chatterboxTurbo: { audio: "/shakespeare/chatterbox-turbo/shk-012.mp3", ttfb: "2.2s", latency: "3.6s", fileSize: "128KB" },
  },
  {
    id: "shk-013",
    text: "Fatima, that was almost perfect! Just remember that my favorite dessert is actually كنافة (Kunafa). Can you repeat that?",
    qwen: { audio: "/shakespeare/qwen/shk-013.mp3", ttfb: "849ms", latency: "2.8s", fileSize: "74KB" },
    chatterbox: { audio: "/shakespeare/chatterbox/shk-013.mp3", ttfb: "2.3s", latency: "3.0s", fileSize: "101KB" },
    chatterboxTurbo: { audio: "/shakespeare/chatterbox-turbo/shk-013.mp3", ttfb: "1.7s", latency: "1.9s", fileSize: "80KB" },
  },
  {
    id: "shk-014",
    text: "Well said, Ibrahim! To be more specific about your goals, try this list: 1. Learn Python; 2. Master data analysis; 3. Get a new job.",
    qwen: { audio: "/shakespeare/qwen/shk-014.mp3", ttfb: "779ms", latency: "3.6s", fileSize: "103KB" },
    chatterbox: { audio: "/shakespeare/chatterbox/shk-014.mp3", ttfb: "2.6s", latency: "3.0s", fileSize: "135KB" },
    chatterboxTurbo: { audio: "/shakespeare/chatterbox-turbo/shk-014.mp3", ttfb: "2.5s", latency: "3.7s", fileSize: "131KB" },
  },
  {
    id: "shk-015",
    text: "Nice effort, Chloe! Instead of saying \'I want food,\' try: \'I would like to order some شاورما (Shawarma), please.\'",
    qwen: { audio: "/shakespeare/qwen/shk-015.mp3", ttfb: "903ms", latency: "2.8s", fileSize: "70KB" },
    chatterbox: { audio: "/shakespeare/chatterbox/shk-015.mp3", ttfb: "2.1s", latency: "2.8s", fileSize: "87KB" },
    chatterboxTurbo: { audio: "/shakespeare/chatterbox-turbo/shk-015.mp3", ttfb: "1.8s", latency: "2.2s", fileSize: "84KB" },
  },
  {
    id: "shk-016",
    text: "Ahmed, you are doing great! Let\'s practice your sequence: 1. First, I open the book; 2. Second, I read the notes; 3. Third, I write the summary.",
    qwen: { audio: "/shakespeare/qwen/shk-016.mp3", ttfb: "869ms", latency: "3.9s", fileSize: "110KB" },
    chatterbox: { audio: "/shakespeare/chatterbox/shk-016.mp3", ttfb: "2.7s", latency: "3.7s", fileSize: "127KB" },
    chatterboxTurbo: { audio: "/shakespeare/chatterbox-turbo/shk-016.mp3", ttfb: "2.4s", latency: "3.6s", fileSize: "138KB" },
  },
  {
    id: "shk-017",
    text: "Correct, Noor! When you visit a friend, it is polite to bring a gift like بخور (Bakhoor). Can you say that word?",
    qwen: { audio: "/shakespeare/qwen/shk-017.mp3", ttfb: "968ms", latency: "3.1s", fileSize: "81KB" },
    chatterbox: { audio: "/shakespeare/chatterbox/shk-017.mp3", ttfb: "2.0s", latency: "3.1s", fileSize: "90KB" },
    chatterboxTurbo: { audio: "/shakespeare/chatterbox-turbo/shk-017.mp3", ttfb: "1.8s", latency: "1.9s", fileSize: "88KB" },
  },
  {
    id: "shk-018",
    text: "That is interesting, Michael! Can you name three cities you want to visit? 1. Dubai; 2. Cairo; 3. Riyadh.",
    qwen: { audio: "/shakespeare/qwen/shk-018.mp3", ttfb: "782ms", latency: "3.0s", fileSize: "84KB" },
    chatterbox: { audio: "/shakespeare/chatterbox/shk-018.mp3", ttfb: "2.2s", latency: "3.1s", fileSize: "95KB" },
    chatterboxTurbo: { audio: "/shakespeare/chatterbox-turbo/shk-018.mp3", ttfb: "2.1s", latency: "2.4s", fileSize: "109KB" },
  },
  {
    id: "shk-019",
    text: "Perfect timing, Salma! You can describe your hospitality by saying: \'I served my guests delicious قهوة (Coffee) and dates.\'",
    qwen: { audio: "/shakespeare/qwen/shk-019.mp3", ttfb: "841ms", latency: "2.8s", fileSize: "81KB" },
    chatterbox: { audio: "/shakespeare/chatterbox/shk-019.mp3", ttfb: "2.2s", latency: "3.4s", fileSize: "105KB" },
    chatterboxTurbo: { audio: "/shakespeare/chatterbox-turbo/shk-019.mp3", ttfb: "1.9s", latency: "2.1s", fileSize: "101KB" },
  },
  {
    id: "shk-020",
    text: "Keep it up, David! Try to use these steps for better sleep: 1. Turn off the lights; 2. Put away the phone; 3. Read a book.",
    qwen: { audio: "/shakespeare/qwen/shk-020.mp3", ttfb: "859ms", latency: "2.8s", fileSize: "77KB" },
    chatterbox: { audio: "/shakespeare/chatterbox/shk-020.mp3", ttfb: "2.1s", latency: "2.5s", fileSize: "96KB" },
    chatterboxTurbo: { audio: "/shakespeare/chatterbox-turbo/shk-020.mp3", ttfb: "2.1s", latency: "3.1s", fileSize: "105KB" },
  },
  {
    id: "shk-021",
    text: "Wonderful, Amira! In the market, I usually look for fresh خضار (Vegetables). Can you practice saying that?",
    qwen: { audio: "/shakespeare/qwen/shk-021.mp3", ttfb: "811ms", latency: "2.4s", fileSize: "65KB" },
    chatterbox: { audio: "/shakespeare/chatterbox/shk-021.mp3", ttfb: "2.0s", latency: "2.7s", fileSize: "93KB" },
    chatterboxTurbo: { audio: "/shakespeare/chatterbox-turbo/shk-021.mp3", ttfb: "1.6s", latency: "1.8s", fileSize: "74KB" },
  },
  {
    id: "shk-022",
    text: "Good catch, Sam! Remember to organize your tasks: 1. Email the client; 2. Update the sheet; 3. Call the manager.",
    qwen: { audio: "/shakespeare/qwen/shk-022.mp3", ttfb: "853ms", latency: "3.0s", fileSize: "82KB" },
    chatterbox: { audio: "/shakespeare/chatterbox/shk-022.mp3", ttfb: "2.2s", latency: "2.5s", fileSize: "106KB" },
    chatterboxTurbo: { audio: "/shakespeare/chatterbox-turbo/shk-022.mp3", ttfb: "2.1s", latency: "3.1s", fileSize: "111KB" },
  },
  {
    id: "shk-023",
    text: "Bravo, Reem! When we celebrate, we often wear a beautiful عباية (Abaya). Try incorporating that into your story.",
    qwen: { audio: "/shakespeare/qwen/shk-023.mp3", ttfb: "752ms", latency: "2.7s", fileSize: "77KB" },
    chatterbox: { audio: "/shakespeare/chatterbox/shk-023.mp3", ttfb: "2.5s", latency: "3.5s", fileSize: "129KB" },
    chatterboxTurbo: { audio: "/shakespeare/chatterbox-turbo/shk-023.mp3", ttfb: "1.9s", latency: "3.0s", fileSize: "92KB" },
  },
  {
    id: "shk-024",
    text: "Almost perfect, George! Let\'s refine your plan: 1. Save money; 2. Book a flight; 3. Pack the bags.",
    qwen: { audio: "/shakespeare/qwen/shk-024.mp3", ttfb: "852ms", latency: "3.1s", fileSize: "81KB" },
    chatterbox: { audio: "/shakespeare/chatterbox/shk-024.mp3", ttfb: "2.3s", latency: "3.2s", fileSize: "105KB" },
    chatterboxTurbo: { audio: "/shakespeare/chatterbox-turbo/shk-024.mp3", ttfb: "2.0s", latency: "3.1s", fileSize: "95KB" },
  },
  {
    id: "shk-025",
    text: "Spot on, Laila! In Arabic culture, the word كرم (Generosity) is very important. How do you show it?",
    qwen: { audio: "/shakespeare/qwen/shk-025.mp3", ttfb: "743ms", latency: "2.6s", fileSize: "73KB" },
    chatterbox: { audio: "/shakespeare/chatterbox/shk-025.mp3", ttfb: "1.9s", latency: "2.1s", fileSize: "85KB" },
    chatterboxTurbo: { audio: "/shakespeare/chatterbox-turbo/shk-025.mp3", ttfb: "1.8s", latency: "2.7s", fileSize: "96KB" },
  },
  {
    id: "shk-026",
    text: "Great pronunciation, Hassan! Tell me three things in your room: 1. A bed; 2. A desk; 3. A lamp.",
    qwen: { audio: "/shakespeare/qwen/shk-026.mp3", ttfb: "884ms", latency: "2.9s", fileSize: "75KB" },
    chatterbox: { audio: "/shakespeare/chatterbox/shk-026.mp3", ttfb: "2.2s", latency: "3.2s", fileSize: "100KB" },
    chatterboxTurbo: { audio: "/shakespeare/chatterbox-turbo/shk-026.mp3", ttfb: "1.8s", latency: "2.0s", fileSize: "90KB" },
  },
  {
    id: "shk-027",
    text: "Well phrased, Sophie! I love the smell of عود (Oud) in the morning. Can you repeat this sentence?",
    qwen: { audio: "/shakespeare/qwen/shk-027.mp3", ttfb: "885ms", latency: "2.5s", fileSize: "63KB" },
    chatterbox: { audio: "/shakespeare/chatterbox/shk-027.mp3", ttfb: "1.9s", latency: "2.5s", fileSize: "82KB" },
    chatterboxTurbo: { audio: "/shakespeare/chatterbox-turbo/shk-027.mp3", ttfb: "1.7s", latency: "2.7s", fileSize: "75KB" },
  },
  {
    id: "shk-028",
    text: "Excellent structure, Mustafa! Follow these steps for the recipe: 1. Boil the water; 2. Add the rice; 3. Simmer for twenty minutes.",
    qwen: { audio: "/shakespeare/qwen/shk-028.mp3", ttfb: "783ms", latency: "3.2s", fileSize: "93KB" },
    chatterbox: { audio: "/shakespeare/chatterbox/shk-028.mp3", ttfb: "2.5s", latency: "3.7s", fileSize: "116KB" },
    chatterboxTurbo: { audio: "/shakespeare/chatterbox-turbo/shk-028.mp3", ttfb: "2.2s", latency: "3.4s", fileSize: "121KB" },
  },
  {
    id: "shk-029",
    text: "Beautifully said, Mona! The word سماء (Sky) sounds very poetic in that sentence. Would you like to try it again?",
    qwen: { audio: "/shakespeare/qwen/shk-029.mp3", ttfb: "887ms", latency: "2.8s", fileSize: "76KB" },
    chatterbox: { audio: "/shakespeare/chatterbox/shk-029.mp3", ttfb: "2.1s", latency: "3.0s", fileSize: "88KB" },
    chatterboxTurbo: { audio: "/shakespeare/chatterbox-turbo/shk-029.mp3", ttfb: "1.7s", latency: "1.8s", fileSize: "77KB" },
  },
  {
    id: "shk-030",
    text: "Top notch, Ryan! Let\'s finish with your top priorities: 1. Family; 2. Health; 3. Career.",
    qwen: { audio: "/shakespeare/qwen/shk-030.mp3", ttfb: "790ms", latency: "2.9s", fileSize: "78KB" },
    chatterbox: { audio: "/shakespeare/chatterbox/shk-030.mp3", ttfb: "2.1s", latency: "3.2s", fileSize: "87KB" },
    chatterboxTurbo: { audio: "/shakespeare/chatterbox-turbo/shk-030.mp3", ttfb: "2.8s", latency: "3.5s", fileSize: "93KB" },
  },
];
