export interface ShakespeareMetrics {
  audio: string;     // Path to audio file
  ttfb: string;      // Time to First Byte (ms)
  latency: string;   // Total latency (ms)
  fileSize: string;  // File size (KB)
}

export interface ShakespeareEntry {
  id: string;
  text: string;
  qwen: ShakespeareMetrics;
  resemble: ShakespeareMetrics;
}

export const shakespeareEntries: ShakespeareEntry[] = [
  {
    id: "shk-001",
    text: "Well done, Omar! Now, please say this sentence again with a small correction: \'I have worked in the field for five years.\' Try to say \'in the\' instead of \'on the.\' Can you give it a go?",
    qwen: { audio: "/shakespeare/qwen/shk-001.mp3", ttfb: "902ms", latency: "3.7s", fileSize: "105KB" },
    resemble: { audio: "/shakespeare/resemble/shk-001.mp3", ttfb: "2.5s", latency: "3.5s", fileSize: "108KB" },
  },
  {
    id: "shk-002",
    text: "Good try, Sarah! Instead of \'I feel very great,\' it\'s better to say \'I feel great.\' Could you say that corrected part?",
    qwen: { audio: "/shakespeare/qwen/shk-002.mp3", ttfb: "940ms", latency: "2.8s", fileSize: "76KB" },
    resemble: { audio: "/shakespeare/resemble/shk-002.mp3", ttfb: "2.2s", latency: "3.2s", fileSize: "91KB" },
  },
  {
    id: "shk-003",
    text: "Nice and clear, Khalid! That shows your experience. You can also add more details like: \'I\'ve taken on extra projects and have consistently exceeded my targets.\' Can you try that?",
    qwen: { audio: "/shakespeare/qwen/shk-003.mp3", ttfb: "772ms", latency: "3.2s", fileSize: "95KB" },
    resemble: { audio: "/shakespeare/resemble/shk-003.mp3", ttfb: "2.8s", latency: "4.0s", fileSize: "136KB" },
  },
  {
    id: "shk-004",
    text: "Almost there, Emily! Please try to say the full sentence using \'share\' instead of \'spray,\' like this: \'They will share all these papers between the colleagues.\' Give it a go!",
    qwen: { audio: "/shakespeare/qwen/shk-004.mp3", ttfb: "826ms", latency: "3.4s", fileSize: "101KB" },
    resemble: { audio: "/shakespeare/resemble/shk-004.mp3", ttfb: "2.5s", latency: "3.4s", fileSize: "110KB" },
  },
  {
    id: "shk-005",
    text: "Well done, Zainab! Question 2: Can you describe a situation where you had been studying for hours before you finally understood a difficult concept?",
    qwen: { audio: "/shakespeare/qwen/shk-005.mp3", ttfb: "887ms", latency: "3.1s", fileSize: "87KB" },
    resemble: { audio: "/shakespeare/resemble/shk-005.mp3", ttfb: "2.5s", latency: "3.6s", fileSize: "109KB" },
  },
  {
    id: "shk-006",
    text: "Sorry, John, that sentence is a bit unclear. Try this: \'I spend a lot of money on room service for housekeeping and food.\' Can you say the corrected sentence?",
    qwen: { audio: "/shakespeare/qwen/shk-006.mp3", ttfb: "797ms", latency: "3.3s", fileSize: "93KB" },
    resemble: { audio: "/shakespeare/resemble/shk-006.mp3", ttfb: "2.6s", latency: "3.4s", fileSize: "111KB" },
  },
  {
    id: "shk-007",
    text: "Nice try, Layla! The sentence should start with \'I had been studying for hours before I finally understood a difficult concept.\' Please say the corrected sentence.",
    qwen: { audio: "/shakespeare/qwen/shk-007.mp3", ttfb: "785ms", latency: "3.1s", fileSize: "91KB" },
    resemble: { audio: "/shakespeare/resemble/shk-007.mp3", ttfb: "2.6s", latency: "3.7s", fileSize: "112KB" },
  },
  {
    id: "shk-008",
    text: "Nice, Adam! Correct this: \'Yes, I have forgiven someone, and I felt better afterward, but the relationship was not like before.\' Please say the corrected sentence aloud.",
    qwen: { audio: "/shakespeare/qwen/shk-008.mp3", ttfb: "845ms", latency: "3.4s", fileSize: "97KB" },
    resemble: { audio: "/shakespeare/resemble/shk-008.mp3", ttfb: "2.7s", latency: "3.5s", fileSize: "118KB" },
  },
  {
    id: "shk-009",
    text: "What do you think, Hana, can help rebuild a relationship after forgiveness?",
    qwen: { audio: "/shakespeare/qwen/shk-009.mp3", ttfb: "1.0s", latency: "2.2s", fileSize: "44KB" },
    resemble: { audio: "/shakespeare/resemble/shk-009.mp3", ttfb: "1.5s", latency: "1.6s", fileSize: "48KB" },
  },
  {
    id: "shk-010",
    text: "Great job, Yusuf! Can you list three types of food you like? For example: 1. Mansaf; 2. Tabbouleh; 3. Falafel.",
    qwen: { audio: "/shakespeare/qwen/shk-010.mp3", ttfb: "894ms", latency: "3.4s", fileSize: "91KB" },
    resemble: { audio: "/shakespeare/resemble/shk-010.mp3", ttfb: "2.2s", latency: "2.6s", fileSize: "86KB" },
  },
  {
    id: "shk-011",
    text: "Excellent, Maryam! Try using the word كبسة (Kabsa) in a sentence about your favorite dinner.",
    qwen: { audio: "/shakespeare/qwen/shk-011.mp3", ttfb: "946ms", latency: "2.1s", fileSize: "55KB" },
    resemble: { audio: "/shakespeare/resemble/shk-011.mp3", ttfb: "1.6s", latency: "2.4s", fileSize: "58KB" },
  },
  {
    id: "shk-012",
    text: "Listen closely, Peter. To improve your flow, try listing your morning routine: 1. I wake up; 2. I drink coffee; 3. I start working.",
    qwen: { audio: "/shakespeare/qwen/shk-012.mp3", ttfb: "812ms", latency: "3.3s", fileSize: "90KB" },
    resemble: { audio: "/shakespeare/resemble/shk-012.mp3", ttfb: "2.3s", latency: "3.4s", fileSize: "105KB" },
  },
  {
    id: "shk-013",
    text: "Fatima, that was almost perfect! Just remember that my favorite dessert is actually كنافة (Kunafa). Can you repeat that?",
    qwen: { audio: "/shakespeare/qwen/shk-013.mp3", ttfb: "810ms", latency: "2.9s", fileSize: "75KB" },
    resemble: { audio: "/shakespeare/resemble/shk-013.mp3", ttfb: "1.9s", latency: "2.1s", fileSize: "74KB" },
  },
  {
    id: "shk-014",
    text: "Well said, Ibrahim! To be more specific about your goals, try this list: 1. Learn Python; 2. Master data analysis; 3. Get a new job.",
    qwen: { audio: "/shakespeare/qwen/shk-014.mp3", ttfb: "767ms", latency: "3.9s", fileSize: "119KB" },
    resemble: { audio: "/shakespeare/resemble/shk-014.mp3", ttfb: "2.3s", latency: "2.5s", fileSize: "104KB" },
  },
  {
    id: "shk-015",
    text: "Nice effort, Chloe! Instead of saying \'I want food,\' try: \'I would like to order some شاورما (Shawarma), please.\'",
    qwen: { audio: "/shakespeare/qwen/shk-015.mp3", ttfb: "855ms", latency: "2.7s", fileSize: "74KB" },
    resemble: { audio: "/shakespeare/resemble/shk-015.mp3", ttfb: "2.2s", latency: "3.2s", fileSize: "95KB" },
  },
  {
    id: "shk-016",
    text: "Ahmed, you are doing great! Let\'s practice your sequence: 1. First, I open the book; 2. Second, I read the notes; 3. Third, I write the summary.",
    qwen: { audio: "/shakespeare/qwen/shk-016.mp3", ttfb: "798ms", latency: "3.3s", fileSize: "97KB" },
    resemble: { audio: "/shakespeare/resemble/shk-016.mp3", ttfb: "2.5s", latency: "3.0s", fileSize: "106KB" },
  },
  {
    id: "shk-017",
    text: "Correct, Noor! When you visit a friend, it is polite to bring a gift like بخور (Bakhoor). Can you say that word?",
    qwen: { audio: "/shakespeare/qwen/shk-017.mp3", ttfb: "959ms", latency: "2.8s", fileSize: "72KB" },
    resemble: { audio: "/shakespeare/resemble/shk-017.mp3", ttfb: "1.9s", latency: "2.0s", fileSize: "77KB" },
  },
  {
    id: "shk-018",
    text: "That is interesting, Michael! Can you name three cities you want to visit? 1. Dubai; 2. Cairo; 3. Riyadh.",
    qwen: { audio: "/shakespeare/qwen/shk-018.mp3", ttfb: "858ms", latency: "2.9s", fileSize: "82KB" },
    resemble: { audio: "/shakespeare/resemble/shk-018.mp3", ttfb: "2.0s", latency: "3.0s", fileSize: "80KB" },
  },
  {
    id: "shk-019",
    text: "Perfect timing, Salma! You can describe your hospitality by saying: \'I served my guests delicious قهوة (Coffee) and dates.\'",
    qwen: { audio: "/shakespeare/qwen/shk-019.mp3", ttfb: "742ms", latency: "2.7s", fileSize: "73KB" },
    resemble: { audio: "/shakespeare/resemble/shk-019.mp3", ttfb: "2.1s", latency: "3.0s", fileSize: "83KB" },
  },
  {
    id: "shk-020",
    text: "Keep it up, David! Try to use these steps for better sleep: 1. Turn off the lights; 2. Put away the phone; 3. Read a book.",
    qwen: { audio: "/shakespeare/qwen/shk-020.mp3", ttfb: "829ms", latency: "2.8s", fileSize: "75KB" },
    resemble: { audio: "/shakespeare/resemble/shk-020.mp3", ttfb: "2.3s", latency: "3.1s", fileSize: "85KB" },
  },
  {
    id: "shk-021",
    text: "Wonderful, Amira! In the market, I usually look for fresh خضار (Vegetables). Can you practice saying that?",
    qwen: { audio: "/shakespeare/qwen/shk-021.mp3", ttfb: "812ms", latency: "2.4s", fileSize: "67KB" },
    resemble: { audio: "/shakespeare/resemble/shk-021.mp3", ttfb: "1.7s", latency: "2.7s", fileSize: "67KB" },
  },
  {
    id: "shk-022",
    text: "Good catch, Sam! Remember to organize your tasks: 1. Email the client; 2. Update the sheet; 3. Call the manager.",
    qwen: { audio: "/shakespeare/qwen/shk-022.mp3", ttfb: "798ms", latency: "2.8s", fileSize: "78KB" },
    resemble: { audio: "/shakespeare/resemble/shk-022.mp3", ttfb: "2.5s", latency: "2.6s", fileSize: "108KB" },
  },
  {
    id: "shk-023",
    text: "Bravo, Reem! When we celebrate, we often wear a beautiful عباية (Abaya). Try incorporating that into your story.",
    qwen: { audio: "/shakespeare/qwen/shk-023.mp3", ttfb: "847ms", latency: "3.0s", fileSize: "86KB" },
    resemble: { audio: "/shakespeare/resemble/shk-023.mp3", ttfb: "2.7s", latency: "3.8s", fileSize: "117KB" },
  },
  {
    id: "shk-024",
    text: "Almost perfect, George! Let\'s refine your plan: 1. Save money; 2. Book a flight; 3. Pack the bags.",
    qwen: { audio: "/shakespeare/qwen/shk-024.mp3", ttfb: "930ms", latency: "3.0s", fileSize: "79KB" },
    resemble: { audio: "/shakespeare/resemble/shk-024.mp3", ttfb: "2.9s", latency: "3.0s", fileSize: "83KB" },
  },
  {
    id: "shk-025",
    text: "Spot on, Laila! In Arabic culture, the word كرم (Generosity) is very important. How do you show it?",
    qwen: { audio: "/shakespeare/qwen/shk-025.mp3", ttfb: "738ms", latency: "2.7s", fileSize: "78KB" },
    resemble: { audio: "/shakespeare/resemble/shk-025.mp3", ttfb: "2.4s", latency: "2.5s", fileSize: "78KB" },
  },
  {
    id: "shk-026",
    text: "Great pronunciation, Hassan! Tell me three things in your room: 1. A bed; 2. A desk; 3. A lamp.",
    qwen: { audio: "/shakespeare/qwen/shk-026.mp3", ttfb: "732ms", latency: "2.8s", fileSize: "76KB" },
    resemble: { audio: "/shakespeare/resemble/shk-026.mp3", ttfb: "2.3s", latency: "3.3s", fileSize: "96KB" },
  },
  {
    id: "shk-027",
    text: "Well phrased, Sophie! I love the smell of عود (Oud) in the morning. Can you repeat this sentence?",
    qwen: { audio: "/shakespeare/qwen/shk-027.mp3", ttfb: "745ms", latency: "2.7s", fileSize: "72KB" },
    resemble: { audio: "/shakespeare/resemble/shk-027.mp3", ttfb: "1.9s", latency: "2.9s", fileSize: "71KB" },
  },
  {
    id: "shk-028",
    text: "Excellent structure, Mustafa! Follow these steps for the recipe: 1. Boil the water; 2. Add the rice; 3. Simmer for twenty minutes.",
    qwen: { audio: "/shakespeare/qwen/shk-028.mp3", ttfb: "906ms", latency: "3.3s", fileSize: "91KB" },
    resemble: { audio: "/shakespeare/resemble/shk-028.mp3", ttfb: "2.5s", latency: "3.2s", fileSize: "113KB" },
  },
  {
    id: "shk-029",
    text: "Beautifully said, Mona! The word سماء (Sky) sounds very poetic in that sentence. Would you like to try it again?",
    qwen: { audio: "/shakespeare/qwen/shk-029.mp3", ttfb: "732ms", latency: "2.6s", fileSize: "70KB" },
    resemble: { audio: "/shakespeare/resemble/shk-029.mp3", ttfb: "1.7s", latency: "1.8s", fileSize: "65KB" },
  },
  {
    id: "shk-030",
    text: "Top notch, Ryan! Let\'s finish with your top priorities: 1. Family; 2. Health; 3. Career.",
    qwen: { audio: "/shakespeare/qwen/shk-030.mp3", ttfb: "764ms", latency: "2.8s", fileSize: "82KB" },
    resemble: { audio: "/shakespeare/resemble/shk-030.mp3", ttfb: "2.2s", latency: "2.8s", fileSize: "85KB" },
  },
];
