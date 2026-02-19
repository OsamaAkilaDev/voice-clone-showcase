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
    qwen: { audio: "/shakespeare/qwen/shk-001.mp3", ttfb: "1.3s", latency: "4.0s", fileSize: "102KB" },
    chatterbox: { audio: "/shakespeare/chatterbox/shk-001.mp3", ttfb: "2.8s", latency: "3.2s", fileSize: "134KB" },
    chatterboxTurbo: { audio: "/shakespeare/chatterbox-turbo/shk-001.mp3", ttfb: "2.9s", latency: "4.3s", fileSize: "165KB" },
  },
  {
    id: "shk-002",
    text: "Good try, Sarah! Instead of \'I feel very great,\' it\'s better to say \'I feel great.\' Could you say that corrected part?",
    qwen: { audio: "/shakespeare/qwen/shk-002.mp3", ttfb: "913ms", latency: "2.6s", fileSize: "69KB" },
    chatterbox: { audio: "/shakespeare/chatterbox/shk-002.mp3", ttfb: "2.3s", latency: "3.3s", fileSize: "107KB" },
    chatterboxTurbo: { audio: "/shakespeare/chatterbox-turbo/shk-002.mp3", ttfb: "2.1s", latency: "2.5s", fileSize: "97KB" },
  },
  {
    id: "shk-003",
    text: "Nice and clear, Khalid! That shows your experience. You can also add more details like: \'I\'ve taken on extra projects and have consistently exceeded my targets.\' Can you try that?",
    qwen: { audio: "/shakespeare/qwen/shk-003.mp3", ttfb: "906ms", latency: "3.9s", fileSize: "114KB" },
    chatterbox: { audio: "/shakespeare/chatterbox/shk-003.mp3", ttfb: "3.0s", latency: "3.4s", fileSize: "158KB" },
    chatterboxTurbo: { audio: "/shakespeare/chatterbox-turbo/shk-003.mp3", ttfb: "2.3s", latency: "2.6s", fileSize: "143KB" },
  },
  {
    id: "shk-004",
    text: "Almost there, Emily! Please try to say the full sentence using \'share\' instead of \'spray,\' like this: \'They will share all these papers between the colleagues.\' Give it a go!",
    qwen: { audio: "/shakespeare/qwen/shk-004.mp3", ttfb: "757ms", latency: "3.2s", fileSize: "94KB" },
    chatterbox: { audio: "/shakespeare/chatterbox/shk-004.mp3", ttfb: "2.4s", latency: "3.6s", fileSize: "115KB" },
    chatterboxTurbo: { audio: "/shakespeare/chatterbox-turbo/shk-004.mp3", ttfb: "2.2s", latency: "3.3s", fileSize: "131KB" },
  },
  {
    id: "shk-005",
    text: "Well done, Zainab! Question 2: Can you describe a situation where you had been studying for hours before you finally understood a difficult concept?",
    qwen: { audio: "/shakespeare/qwen/shk-005.mp3", ttfb: "932ms", latency: "3.1s", fileSize: "84KB" },
    chatterbox: { audio: "/shakespeare/chatterbox/shk-005.mp3", ttfb: "2.2s", latency: "2.5s", fileSize: "105KB" },
    chatterboxTurbo: { audio: "/shakespeare/chatterbox-turbo/shk-005.mp3", ttfb: "2.0s", latency: "3.2s", fileSize: "111KB" },
  },
  {
    id: "shk-006",
    text: "Sorry, John, that sentence is a bit unclear. Try this: \'I spend a lot of money on room service for housekeeping and food.\' Can you say the corrected sentence?",
    qwen: { audio: "/shakespeare/qwen/shk-006.mp3", ttfb: "849ms", latency: "3.5s", fileSize: "93KB" },
    chatterbox: { audio: "/shakespeare/chatterbox/shk-006.mp3", ttfb: "2.4s", latency: "3.8s", fileSize: "122KB" },
    chatterboxTurbo: { audio: "/shakespeare/chatterbox-turbo/shk-006.mp3", ttfb: "2.2s", latency: "3.5s", fileSize: "125KB" },
  },
  {
    id: "shk-007",
    text: "Nice try, Layla! The sentence should start with \'I had been studying for hours before I finally understood a difficult concept.\' Please say the corrected sentence.",
    qwen: { audio: "/shakespeare/qwen/shk-007.mp3", ttfb: "762ms", latency: "3.2s", fileSize: "95KB" },
    chatterbox: { audio: "/shakespeare/chatterbox/shk-007.mp3", ttfb: "2.4s", latency: "2.8s", fileSize: "118KB" },
    chatterboxTurbo: { audio: "/shakespeare/chatterbox-turbo/shk-007.mp3", ttfb: "2.2s", latency: "3.5s", fileSize: "122KB" },
  },
  {
    id: "shk-008",
    text: "Nice, Adam! Correct this: \'Yes, I have forgiven someone, and I felt better afterward, but the relationship was not like before.\' Please say the corrected sentence aloud.",
    qwen: { audio: "/shakespeare/qwen/shk-008.mp3", ttfb: "906ms", latency: "3.9s", fileSize: "113KB" },
    chatterbox: { audio: "/shakespeare/chatterbox/shk-008.mp3", ttfb: "2.5s", latency: "3.7s", fileSize: "124KB" },
    chatterboxTurbo: { audio: "/shakespeare/chatterbox-turbo/shk-008.mp3", ttfb: "2.4s", latency: "3.5s", fileSize: "138KB" },
  },
  {
    id: "shk-009",
    text: "What do you think, Hana, can help rebuild a relationship after forgiveness?",
    qwen: { audio: "/shakespeare/qwen/shk-009.mp3", ttfb: "855ms", latency: "1.9s", fileSize: "43KB" },
    chatterbox: { audio: "/shakespeare/chatterbox/shk-009.mp3", ttfb: "1.5s", latency: "1.9s", fileSize: "50KB" },
    chatterboxTurbo: { audio: "/shakespeare/chatterbox-turbo/shk-009.mp3", ttfb: "1.4s", latency: "1.5s", fileSize: "52KB" },
  },
  {
    id: "shk-010",
    text: "Great job, Yusuf! Can you list three types of food you like? For example: 1. Mansaf; 2. Tabbouleh; 3. Falafel.",
    qwen: { audio: "/shakespeare/qwen/shk-010.mp3", ttfb: "972ms", latency: "3.2s", fileSize: "85KB" },
    chatterbox: { audio: "/shakespeare/chatterbox/shk-010.mp3", ttfb: "2.4s", latency: "2.7s", fileSize: "106KB" },
    chatterboxTurbo: { audio: "/shakespeare/chatterbox-turbo/shk-010.mp3", ttfb: "2.5s", latency: "2.7s", fileSize: "125KB" },
  },
  {
    id: "shk-011",
    text: "Excellent, Maryam! Try using the word كبسة (Kabsa) in a sentence about your favorite dinner.",
    qwen: { audio: "/shakespeare/qwen/shk-011.mp3", ttfb: "819ms", latency: "2.4s", fileSize: "64KB" },
    chatterbox: { audio: "/shakespeare/chatterbox/shk-011.mp3", ttfb: "1.8s", latency: "2.8s", fileSize: "75KB" },
    chatterboxTurbo: { audio: "/shakespeare/chatterbox-turbo/shk-011.mp3", ttfb: "1.6s", latency: "2.5s", fileSize: "73KB" },
  },
  {
    id: "shk-012",
    text: "Listen closely, Peter. To improve your flow, try listing your morning routine: 1. I wake up; 2. I drink coffee; 3. I start working.",
    qwen: { audio: "/shakespeare/qwen/shk-012.mp3", ttfb: "815ms", latency: "3.0s", fileSize: "83KB" },
    chatterbox: { audio: "/shakespeare/chatterbox/shk-012.mp3", ttfb: "2.4s", latency: "3.6s", fileSize: "119KB" },
    chatterboxTurbo: { audio: "/shakespeare/chatterbox-turbo/shk-012.mp3", ttfb: "2.2s", latency: "3.1s", fileSize: "119KB" },
  },
  {
    id: "shk-013",
    text: "Fatima, that was almost perfect! Just remember that my favorite dessert is actually كنافة (Kunafa). Can you repeat that?",
    qwen: { audio: "/shakespeare/qwen/shk-013.mp3", ttfb: "754ms", latency: "2.9s", fileSize: "81KB" },
    chatterbox: { audio: "/shakespeare/chatterbox/shk-013.mp3", ttfb: "2.4s", latency: "3.6s", fileSize: "108KB" },
    chatterboxTurbo: { audio: "/shakespeare/chatterbox-turbo/shk-013.mp3", ttfb: "1.8s", latency: "2.9s", fileSize: "92KB" },
  },
  {
    id: "shk-014",
    text: "Well said, Ibrahim! To be more specific about your goals, try this list: 1. Learn Python; 2. Master data analysis; 3. Get a new job.",
    qwen: { audio: "/shakespeare/qwen/shk-014.mp3", ttfb: "1.5s", latency: "4.7s", fileSize: "101KB" },
    chatterbox: { audio: "/shakespeare/chatterbox/shk-014.mp3", ttfb: "2.4s", latency: "2.6s", fileSize: "123KB" },
    chatterboxTurbo: { audio: "/shakespeare/chatterbox-turbo/shk-014.mp3", ttfb: "2.3s", latency: "2.5s", fileSize: "125KB" },
  },
  {
    id: "shk-015",
    text: "Nice effort, Chloe! Instead of saying \'I want food,\' try: \'I would like to order some شاورما (Shawarma), please.\'",
    qwen: { audio: "/shakespeare/qwen/shk-015.mp3", ttfb: "783ms", latency: "2.7s", fileSize: "74KB" },
    chatterbox: { audio: "/shakespeare/chatterbox/shk-015.mp3", ttfb: "1.9s", latency: "2.5s", fileSize: "88KB" },
    chatterboxTurbo: { audio: "/shakespeare/chatterbox-turbo/shk-015.mp3", ttfb: "2.1s", latency: "2.7s", fileSize: "88KB" },
  },
  {
    id: "shk-016",
    text: "Ahmed, you are doing great! Let\'s practice your sequence: 1. First, I open the book; 2. Second, I read the notes; 3. Third, I write the summary.",
    qwen: { audio: "/shakespeare/qwen/shk-016.mp3", ttfb: "848ms", latency: "3.7s", fileSize: "101KB" },
    chatterbox: { audio: "/shakespeare/chatterbox/shk-016.mp3", ttfb: "2.8s", latency: "4.0s", fileSize: "136KB" },
    chatterboxTurbo: { audio: "/shakespeare/chatterbox-turbo/shk-016.mp3", ttfb: "2.5s", latency: "3.7s", fileSize: "136KB" },
  },
  {
    id: "shk-017",
    text: "Correct, Noor! When you visit a friend, it is polite to bring a gift like بخور (Bakhoor). Can you say that word?",
    qwen: { audio: "/shakespeare/qwen/shk-017.mp3", ttfb: "848ms", latency: "3.0s", fileSize: "81KB" },
    chatterbox: { audio: "/shakespeare/chatterbox/shk-017.mp3", ttfb: "2.0s", latency: "2.5s", fileSize: "81KB" },
    chatterboxTurbo: { audio: "/shakespeare/chatterbox-turbo/shk-017.mp3", ttfb: "1.8s", latency: "2.0s", fileSize: "80KB" },
  },
  {
    id: "shk-018",
    text: "That is interesting, Michael! Can you name three cities you want to visit? 1. Dubai; 2. Cairo; 3. Riyadh.",
    qwen: { audio: "/shakespeare/qwen/shk-018.mp3", ttfb: "944ms", latency: "2.9s", fileSize: "73KB" },
    chatterbox: { audio: "/shakespeare/chatterbox/shk-018.mp3", ttfb: "2.2s", latency: "3.3s", fileSize: "102KB" },
    chatterboxTurbo: { audio: "/shakespeare/chatterbox-turbo/shk-018.mp3", ttfb: "2.0s", latency: "2.7s", fileSize: "96KB" },
  },
  {
    id: "shk-019",
    text: "Perfect timing, Salma! You can describe your hospitality by saying: \'I served my guests delicious قهوة (Coffee) and dates.\'",
    qwen: { audio: "/shakespeare/qwen/shk-019.mp3", ttfb: "830ms", latency: "3.0s", fileSize: "84KB" },
    chatterbox: { audio: "/shakespeare/chatterbox/shk-019.mp3", ttfb: "2.0s", latency: "2.3s", fileSize: "95KB" },
    chatterboxTurbo: { audio: "/shakespeare/chatterbox-turbo/shk-019.mp3", ttfb: "2.1s", latency: "2.8s", fileSize: "116KB" },
  },
  {
    id: "shk-020",
    text: "Keep it up, David! Try to use these steps for better sleep: 1. Turn off the lights; 2. Put away the phone; 3. Read a book.",
    qwen: { audio: "/shakespeare/qwen/shk-020.mp3", ttfb: "876ms", latency: "3.0s", fileSize: "84KB" },
    chatterbox: { audio: "/shakespeare/chatterbox/shk-020.mp3", ttfb: "2.0s", latency: "2.3s", fileSize: "87KB" },
    chatterboxTurbo: { audio: "/shakespeare/chatterbox-turbo/shk-020.mp3", ttfb: "2.2s", latency: "2.4s", fileSize: "112KB" },
  },
  {
    id: "shk-021",
    text: "Wonderful, Amira! In the market, I usually look for fresh خضار (Vegetables). Can you practice saying that?",
    qwen: { audio: "/shakespeare/qwen/shk-021.mp3", ttfb: "767ms", latency: "2.8s", fileSize: "80KB" },
    chatterbox: { audio: "/shakespeare/chatterbox/shk-021.mp3", ttfb: "1.9s", latency: "3.0s", fileSize: "86KB" },
    chatterboxTurbo: { audio: "/shakespeare/chatterbox-turbo/shk-021.mp3", ttfb: "1.5s", latency: "2.2s", fileSize: "69KB" },
  },
  {
    id: "shk-022",
    text: "Good catch, Sam! Remember to organize your tasks: 1. Email the client; 2. Update the sheet; 3. Call the manager.",
    qwen: { audio: "/shakespeare/qwen/shk-022.mp3", ttfb: "928ms", latency: "3.2s", fileSize: "89KB" },
    chatterbox: { audio: "/shakespeare/chatterbox/shk-022.mp3", ttfb: "2.2s", latency: "3.4s", fileSize: "101KB" },
    chatterboxTurbo: { audio: "/shakespeare/chatterbox-turbo/shk-022.mp3", ttfb: "2.1s", latency: "2.3s", fileSize: "105KB" },
  },
  {
    id: "shk-023",
    text: "Bravo, Reem! When we celebrate, we often wear a beautiful عباية (Abaya). Try incorporating that into your story.",
    qwen: { audio: "/shakespeare/qwen/shk-023.mp3", ttfb: "892ms", latency: "3.1s", fileSize: "85KB" },
    chatterbox: { audio: "/shakespeare/chatterbox/shk-023.mp3", ttfb: "2.2s", latency: "2.4s", fileSize: "95KB" },
    chatterboxTurbo: { audio: "/shakespeare/chatterbox-turbo/shk-023.mp3", ttfb: "1.9s", latency: "3.1s", fileSize: "100KB" },
  },
  {
    id: "shk-024",
    text: "Almost perfect, George! Let\'s refine your plan: 1. Save money; 2. Book a flight; 3. Pack the bags.",
    qwen: { audio: "/shakespeare/qwen/shk-024.mp3", ttfb: "871ms", latency: "2.9s", fileSize: "78KB" },
    chatterbox: { audio: "/shakespeare/chatterbox/shk-024.mp3", ttfb: "2.2s", latency: "3.4s", fileSize: "110KB" },
    chatterboxTurbo: { audio: "/shakespeare/chatterbox-turbo/shk-024.mp3", ttfb: "1.9s", latency: "2.6s", fileSize: "91KB" },
  },
  {
    id: "shk-025",
    text: "Spot on, Laila! In Arabic culture, the word كرم (Generosity) is very important. How do you show it?",
    qwen: { audio: "/shakespeare/qwen/shk-025.mp3", ttfb: "763ms", latency: "2.5s", fileSize: "68KB" },
    chatterbox: { audio: "/shakespeare/chatterbox/shk-025.mp3", ttfb: "1.8s", latency: "1.9s", fileSize: "76KB" },
    chatterboxTurbo: { audio: "/shakespeare/chatterbox-turbo/shk-025.mp3", ttfb: "1.8s", latency: "2.0s", fileSize: "93KB" },
  },
  {
    id: "shk-026",
    text: "Great pronunciation, Hassan! Tell me three things in your room: 1. A bed; 2. A desk; 3. A lamp.",
    qwen: { audio: "/shakespeare/qwen/shk-026.mp3", ttfb: "861ms", latency: "2.8s", fileSize: "72KB" },
    chatterbox: { audio: "/shakespeare/chatterbox/shk-026.mp3", ttfb: "2.3s", latency: "2.8s", fileSize: "102KB" },
    chatterboxTurbo: { audio: "/shakespeare/chatterbox-turbo/shk-026.mp3", ttfb: "2.0s", latency: "3.1s", fileSize: "92KB" },
  },
  {
    id: "shk-027",
    text: "Well phrased, Sophie! I love the smell of عود (Oud) in the morning. Can you repeat this sentence?",
    qwen: { audio: "/shakespeare/qwen/shk-027.mp3", ttfb: "852ms", latency: "2.7s", fileSize: "69KB" },
    chatterbox: { audio: "/shakespeare/chatterbox/shk-027.mp3", ttfb: "1.8s", latency: "2.9s", fileSize: "76KB" },
    chatterboxTurbo: { audio: "/shakespeare/chatterbox-turbo/shk-027.mp3", ttfb: "1.6s", latency: "2.6s", fileSize: "69KB" },
  },
  {
    id: "shk-028",
    text: "Excellent structure, Mustafa! Follow these steps for the recipe: 1. Boil the water; 2. Add the rice; 3. Simmer for twenty minutes.",
    qwen: { audio: "/shakespeare/qwen/shk-028.mp3", ttfb: "867ms", latency: "3.3s", fileSize: "92KB" },
    chatterbox: { audio: "/shakespeare/chatterbox/shk-028.mp3", ttfb: "2.4s", latency: "3.7s", fileSize: "125KB" },
    chatterboxTurbo: { audio: "/shakespeare/chatterbox-turbo/shk-028.mp3", ttfb: "2.2s", latency: "3.4s", fileSize: "119KB" },
  },
  {
    id: "shk-029",
    text: "Beautifully said, Mona! The word سماء (Sky) sounds very poetic in that sentence. Would you like to try it again?",
    qwen: { audio: "/shakespeare/qwen/shk-029.mp3", ttfb: "865ms", latency: "2.7s", fileSize: "71KB" },
    chatterbox: { audio: "/shakespeare/chatterbox/shk-029.mp3", ttfb: "1.9s", latency: "2.1s", fileSize: "85KB" },
    chatterboxTurbo: { audio: "/shakespeare/chatterbox-turbo/shk-029.mp3", ttfb: "1.7s", latency: "2.0s", fileSize: "80KB" },
  },
  {
    id: "shk-030",
    text: "Top notch, Ryan! Let\'s finish with your top priorities: 1. Family; 2. Health; 3. Career.",
    qwen: { audio: "/shakespeare/qwen/shk-030.mp3", ttfb: "849ms", latency: "2.8s", fileSize: "76KB" },
    chatterbox: { audio: "/shakespeare/chatterbox/shk-030.mp3", ttfb: "1.8s", latency: "2.9s", fileSize: "79KB" },
    chatterboxTurbo: { audio: "/shakespeare/chatterbox-turbo/shk-030.mp3", ttfb: "1.9s", latency: "2.6s", fileSize: "100KB" },
  },
  {
    id: "shk-031",
    text: "Well done! Now, please say this sentence again with a small correction: \"I have worked on the — field for —.\" Try to say \"in the\" instead of \"on the.\" Can you give it a go?",
    qwen: { audio: "/shakespeare/qwen/shk-031.mp3", ttfb: "741ms", latency: "3.3s", fileSize: "96KB" },
    chatterbox: { audio: "/shakespeare/chatterbox/shk-031.mp3", ttfb: "2.7s", latency: "3.2s", fileSize: "135KB" },
    chatterboxTurbo: { audio: "/shakespeare/chatterbox-turbo/shk-031.mp3", ttfb: "2.9s", latency: "3.6s", fileSize: "150KB" },
  },
  {
    id: "shk-032",
    text: "Good try! Instead of \"I feel very great,\" it\'s better to say \"I feel great.\" Could you say that corrected part?",
    qwen: { audio: "/shakespeare/qwen/shk-032.mp3", ttfb: "968ms", latency: "2.6s", fileSize: "67KB" },
    chatterbox: { audio: "/shakespeare/chatterbox/shk-032.mp3", ttfb: "2.3s", latency: "3.3s", fileSize: "108KB" },
    chatterboxTurbo: { audio: "/shakespeare/chatterbox-turbo/shk-032.mp3", ttfb: "1.9s", latency: "2.3s", fileSize: "94KB" },
  },
  {
    id: "shk-033",
    text: `Well said! Try this: \"Yes, I think so. When you understand why people do this, it is easier to forgive them. Sometimes, people have health problems like mental illness.\" Please say the corrected sentence aloud.

    Have you ever forgiven someone and felt better afterward? Can you share that experience?`,
    qwen: { audio: "/shakespeare/qwen/shk-033.mp3", ttfb: "852ms", latency: "5.6s", fileSize: "177KB" },
    chatterbox: { audio: "/shakespeare/chatterbox/shk-033.mp3", ttfb: "3.6s", latency: "5.1s", fileSize: "237KB" },
    chatterboxTurbo: { audio: "/shakespeare/chatterbox-turbo/shk-033.mp3", ttfb: "3.4s", latency: "5.0s", fileSize: "242KB" },
  },
  {
    id: "shk-034",
    text: "Well done! Now, use \"resolve\" in a sentence. Need a hint? It means to solve a problem or decide something.",
    qwen: { audio: "/shakespeare/qwen/shk-034.mp3", ttfb: "804ms", latency: "2.9s", fileSize: "74KB" },
    chatterbox: { audio: "/shakespeare/chatterbox/shk-034.mp3", ttfb: "2.3s", latency: "3.4s", fileSize: "85KB" },
    chatterboxTurbo: { audio: "/shakespeare/chatterbox-turbo/shk-034.mp3", ttfb: "1.9s", latency: "2.4s", fileSize: "92KB" },
  },
  {
    id: "shk-035",
    text: `Great! Let\'s start with question 1: 

    Can you tell me about a time when you had finished your homework but then you realized you forgot to include an important detail?`,
    qwen: { audio: "/shakespeare/qwen/shk-035.mp3", ttfb: "785ms", latency: "3.1s", fileSize: "87KB" },
    chatterbox: { audio: "/shakespeare/chatterbox/shk-035.mp3", ttfb: "2.5s", latency: "2.7s", fileSize: "116KB" },
    chatterboxTurbo: { audio: "/shakespeare/chatterbox-turbo/shk-035.mp3", ttfb: "2.1s", latency: "3.3s", fileSize: "115KB" },
  },
  {
    id: "shk-036",
    text: "Perfect! We finished our practice today. Please keep going with your course. It was lovely talking with you about nature!",
    qwen: { audio: "/shakespeare/qwen/shk-036.mp3", ttfb: "945ms", latency: "2.5s", fileSize: "66KB" },
    chatterbox: { audio: "/shakespeare/chatterbox/shk-036.mp3", ttfb: "2.4s", latency: "2.6s", fileSize: "114KB" },
    chatterboxTurbo: { audio: "/shakespeare/chatterbox-turbo/shk-036.mp3", ttfb: "1.9s", latency: "2.9s", fileSize: "92KB" },
  },
  {
    id: "shk-037",
    text: "Almost perfect! Try saying: \"When I had finished my homework, I realized I had forgotten to include an important detail.\" Now, please say the corrected sentence.",
    qwen: { audio: "/shakespeare/qwen/shk-037.mp3", ttfb: "872ms", latency: "3.5s", fileSize: "97KB" },
    chatterbox: { audio: "/shakespeare/chatterbox/shk-037.mp3", ttfb: "2.5s", latency: "3.6s", fileSize: "118KB" },
    chatterboxTurbo: { audio: "/shakespeare/chatterbox-turbo/shk-037.mp3", ttfb: "2.4s", latency: "3.5s", fileSize: "147KB" },
  },
  {
    id: "shk-038",
    text: "Well done! Now, can you say the full sentence again with \"share\" in the right place? This will help you practice it better.",
    qwen: { audio: "/shakespeare/qwen/shk-038.mp3", ttfb: "823ms", latency: "2.8s", fileSize: "72KB" },
    chatterbox: { audio: "/shakespeare/chatterbox/shk-038.mp3", ttfb: "1.9s", latency: "3.0s", fileSize: "88KB" },
    chatterboxTurbo: { audio: "/shakespeare/chatterbox-turbo/shk-038.mp3", ttfb: "1.9s", latency: "2.0s", fileSize: "89KB" },
  },
  {
    id: "shk-039",
    text: "Nice and clear! That shows your experience. You can also add more details like: \"I\'ve taken on — and have consistently exceeded my targets.\" This shows your extra responsibilities and success. Can you try that with something you’ve done?",
    qwen: { audio: "/shakespeare/qwen/shk-039.mp3", ttfb: "904ms", latency: "4.6s", fileSize: "142KB" },
    chatterbox: { audio: "/shakespeare/chatterbox/shk-039.mp3", ttfb: "3.3s", latency: "4.4s", fileSize: "194KB" },
    chatterboxTurbo: { audio: "", ttfb: "—", latency: "—", fileSize: "—" },
  },
  {
    id: "shk-040",
    text: "Almost there! Please try to say the full sentence using \"share\" instead of \"spray,\" like this: \"They will share all these papers between the colleagues.\" Give it a go!",
    qwen: { audio: "/shakespeare/qwen/shk-040.mp3", ttfb: "813ms", latency: "3.1s", fileSize: "95KB" },
    chatterbox: { audio: "/shakespeare/chatterbox/shk-040.mp3", ttfb: "2.5s", latency: "3.7s", fileSize: "131KB" },
    chatterboxTurbo: { audio: "/shakespeare/chatterbox-turbo/shk-040.mp3", ttfb: "2.3s", latency: "3.4s", fileSize: "132KB" },
  },
  {
    id: "shk-041",
    text: "Well done! Question 2: Can you describe a situation where you had been studying for hours before you finally understood a difficult concept?",
    qwen: { audio: "/shakespeare/qwen/shk-041.mp3", ttfb: "817ms", latency: "3.1s", fileSize: "89KB" },
    chatterbox: { audio: "/shakespeare/chatterbox/shk-041.mp3", ttfb: "2.2s", latency: "2.5s", fileSize: "108KB" },
    chatterboxTurbo: { audio: "/shakespeare/chatterbox-turbo/shk-041.mp3", ttfb: "1.9s", latency: "3.0s", fileSize: "104KB" },
  },
  {
    id: "shk-042",
    text: "Sorry, that sentence is a bit unclear. Try this: \"I spend a lot of money on room service for housekeeping and food.\" Can you say the corrected sentence?",
    qwen: { audio: "/shakespeare/qwen/shk-042.mp3", ttfb: "834ms", latency: "3.2s", fileSize: "93KB" },
    chatterbox: { audio: "/shakespeare/chatterbox/shk-042.mp3", ttfb: "2.4s", latency: "3.6s", fileSize: "127KB" },
    chatterboxTurbo: { audio: "/shakespeare/chatterbox-turbo/shk-042.mp3", ttfb: "2.3s", latency: "2.8s", fileSize: "123KB" },
  },
  {
    id: "shk-043",
    text: "Nice try! The sentence should start with \"I had been studying for hours before I finally understood a difficult concept.\" Please say the corrected sentence.",
    qwen: { audio: "/shakespeare/qwen/shk-043.mp3", ttfb: "745ms", latency: "3.1s", fileSize: "92KB" },
    chatterbox: { audio: "/shakespeare/chatterbox/shk-043.mp3", ttfb: "2.4s", latency: "3.6s", fileSize: "119KB" },
    chatterboxTurbo: { audio: "/shakespeare/chatterbox-turbo/shk-043.mp3", ttfb: "2.2s", latency: "2.4s", fileSize: "123KB" },
  },
  {
    id: "shk-044",
    text: `Nice! Correct this: \"Yes, I have forgiven someone, and I felt better afterward, but the relationship was not like before.\" Please say the corrected sentence aloud.

    What do you think can help rebuild a relationship after forgiveness?`,
    qwen: { audio: "/shakespeare/qwen/shk-044.mp3", ttfb: "963ms", latency: "4.5s", fileSize: "138KB" },
    chatterbox: { audio: "/shakespeare/chatterbox/shk-044.mp3", ttfb: "2.9s", latency: "4.3s", fileSize: "181KB" },
    chatterboxTurbo: { audio: "/shakespeare/chatterbox-turbo/shk-044.mp3", ttfb: "2.9s", latency: "4.1s", fileSize: "173KB" },
  },
];
