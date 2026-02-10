export interface ModelRecording {
  modelId: string;
  modelName: string;
  clonedOriginalAudio: string;
  clonedOriginalText: string;
  clonedNewAudio: string;
  clonedNewText: string;
}

export interface Speaker {
  id: string;
  name: string;
  originalText: string;
  originalAudio: string;
  models: ModelRecording[];
}

export const speakers: Speaker[] = [
  {
    "id": "spk-133821",
    "name": "User 133821",
    "originalText": "It's very tough. I didn't have time to read the whole passage. I read one passage in one hour and that is very difficult.",
    "originalAudio": "/audio/original/user_133821_29t_ce02936f.webm",
    "models": [
      {
        "modelId": "qwen",
        "modelName": "Qwen3 Engine",
        "clonedOriginalAudio": "/audio/qwen/spk-133821-qwen-original.wav",
        "clonedOriginalText": "It's very tough. I didn't have time to read the whole passage. I read one passage in one hour and that is very difficult.",
        "clonedNewAudio": "/audio/qwen/spk-133821-qwen-new.wav",
        "clonedNewText": "The quick brown fox jumps over the lazy dog. But what about the man who watched over them? He barely noticed."
      }
    ]
  },
  {
    "id": "spk-180823",
    "name": "User 180823",
    "originalText": "Yes, I think I feel fun if I do it, this sport, but I feel lazy so I don't go.",
    "originalAudio": "/audio/original/user_180823_26t_ff1a3d32.webm",
    "models": [
      {
        "modelId": "qwen",
        "modelName": "Qwen3 Engine",
        "clonedOriginalAudio": "/audio/qwen/spk-180823-qwen-original.wav",
        "clonedOriginalText": "Yes, I think I feel fun if I do it, this sport, but I feel lazy so I don't go.",
        "clonedNewAudio": "/audio/qwen/spk-180823-qwen-new.wav",
        "clonedNewText": "The quick brown fox jumps over the lazy dog. But what about the man who watched over them? He barely noticed."
      }
    ]
  },
  {
    "id": "spk-185111",
    "name": "User 185111",
    "originalText": "No, we don't have dinner. We are playing a card game and we drink mojito, blue mojito.",
    "originalAudio": "/audio/original/user_185111_25t_db452f25.webm",
    "models": [
      {
        "modelId": "qwen",
        "modelName": "Qwen3 Engine",
        "clonedOriginalAudio": "/audio/qwen/spk-185111-qwen-original.wav",
        "clonedOriginalText": "No, we don't have dinner. We are playing a card game and we drink mojito, blue mojito.",
        "clonedNewAudio": "/audio/qwen/spk-185111-qwen-new.wav",
        "clonedNewText": "The quick brown fox jumps over the lazy dog. But what about the man who watched over them? He barely noticed."
      }
    ]
  },
  {
    "id": "spk-102647",
    "name": "User 102647",
    "originalText": "Usually I do with friends to go like resort or out of city to get more relax, no noisy and make barbecue or make food and watch TV or soccer.",
    "originalAudio": "/audio/original/user_102647_34t_f7479253.webm",
    "models": [
      {
        "modelId": "qwen",
        "modelName": "Qwen3 Engine",
        "clonedOriginalAudio": "/audio/qwen/spk-102647-qwen-original.wav",
        "clonedOriginalText": "Usually I do with friends to go like resort or out of city to get more relax, no noisy and make barbecue or make food and watch TV or soccer.",
        "clonedNewAudio": "/audio/qwen/spk-102647-qwen-new.wav",
        "clonedNewText": "The quick brown fox jumps over the lazy dog. But what about the man who watched over them? He barely noticed."
      }
    ]
  },
  {
    "id": "spk-139705",
    "name": "User 139705",
    "originalText": "I always find information on the internet like apps and booking sites. Additionally, I read customer comments before booking a hotel.",
    "originalAudio": "/audio/original/user_139705_26t_86d54d0f.webm",
    "models": [
      {
        "modelId": "qwen",
        "modelName": "Qwen3 Engine",
        "clonedOriginalAudio": "/audio/qwen/spk-139705-qwen-original.wav",
        "clonedOriginalText": "I always find information on the internet like apps and booking sites. Additionally, I read customer comments before booking a hotel.",
        "clonedNewAudio": "/audio/qwen/spk-139705-qwen-new.wav",
        "clonedNewText": "The quick brown fox jumps over the lazy dog. But what about the man who watched over them? He barely noticed."
      }
    ]
  },
  {
    "id": "spk-40401",
    "name": "User 40401",
    "originalText": "I take a shower then playing with my baby Faris and after Faris is sleeping I watch TV and make dinner. Then I'm sleeping at 11 pm.",
    "originalAudio": "/audio/original/user_40401_34t_ad2a3a01.webm",
    "models": [
      {
        "modelId": "qwen",
        "modelName": "Qwen3 Engine",
        "clonedOriginalAudio": "/audio/qwen/spk-40401-qwen-original.wav",
        "clonedOriginalText": "I take a shower then playing with my baby Faris and after Faris is sleeping I watch TV and make dinner. Then I'm sleeping at 11 pm.",
        "clonedNewAudio": "/audio/qwen/spk-40401-qwen-new.wav",
        "clonedNewText": "The quick brown fox jumps over the lazy dog. But what about the man who watched over them? He barely noticed."
      }
    ]
  },
  {
    "id": "spk-167035",
    "name": "User 167035",
    "originalText": "I like my job, but I don't like the position because the work is so hard and the salary is not well.",
    "originalAudio": "/audio/original/user_167035_26t_f892f749.webm",
    "models": [
      {
        "modelId": "qwen",
        "modelName": "Qwen3 Engine",
        "clonedOriginalAudio": "/audio/qwen/spk-167035-qwen-original.wav",
        "clonedOriginalText": "I like my job, but I don't like the position because the work is so hard and the salary is not well.",
        "clonedNewAudio": "/audio/qwen/spk-167035-qwen-new.wav",
        "clonedNewText": "The quick brown fox jumps over the lazy dog. But what about the man who watched over them? He barely noticed."
      }
    ]
  },
  {
    "id": "spk-188505",
    "name": "User 188505",
    "originalText": "When the chief has a meeting with coworkers, he makes a funny story or a simple situation funny to break the ice in the meeting.",
    "originalAudio": "/audio/original/user_188505_29t_a87424f3.webm",
    "models": [
      {
        "modelId": "qwen",
        "modelName": "Qwen3 Engine",
        "clonedOriginalAudio": "/audio/qwen/spk-188505-qwen-original.wav",
        "clonedOriginalText": "When the chief has a meeting with coworkers, he makes a funny story or a simple situation funny to break the ice in the meeting.",
        "clonedNewAudio": "/audio/qwen/spk-188505-qwen-new.wav",
        "clonedNewText": "The quick brown fox jumps over the lazy dog. But what about the man who watched over them? He barely noticed."
      }
    ]
  },
  {
    "id": "spk-159175",
    "name": "User 159175",
    "originalText": "I think the best way is that a person needs to commit without fear and just needs to relax and enjoy that with his group.",
    "originalAudio": "/audio/original/user_159175_28t_58dadd8d.webm",
    "models": [
      {
        "modelId": "qwen",
        "modelName": "Qwen3 Engine",
        "clonedOriginalAudio": "/audio/qwen/spk-159175-qwen-original.wav",
        "clonedOriginalText": "I think the best way is that a person needs to commit without fear and just needs to relax and enjoy that with his group.",
        "clonedNewAudio": "/audio/qwen/spk-159175-qwen-new.wav",
        "clonedNewText": "The quick brown fox jumps over the lazy dog. But what about the man who watched over them? He barely noticed."
      }
    ]
  },
  {
    "id": "spk-187339",
    "name": "User 187339",
    "originalText": "If it is an expense, I trust the application or I already paid from the application, I actually don't read the reviews.",
    "originalAudio": "/audio/original/user_187339_27t_81f63336.webm",
    "models": [
      {
        "modelId": "qwen",
        "modelName": "Qwen3 Engine",
        "clonedOriginalAudio": "/audio/qwen/spk-187339-qwen-original.wav",
        "clonedOriginalText": "If it is an expense, I trust the application or I already paid from the application, I actually don't read the reviews.",
        "clonedNewAudio": "/audio/qwen/spk-187339-qwen-new.wav",
        "clonedNewText": "The quick brown fox jumps over the lazy dog. But what about the man who watched over them? He barely noticed."
      }
    ]
  },
  {
    "id": "spk-151837",
    "name": "User 151837",
    "originalText": "I think the differences are about both types and colors of the toys. Usually girls' toys come in pink and boys' toys come in blue.",
    "originalAudio": "/audio/original/user_151837_31t_d33c7c98.webm",
    "models": [
      {
        "modelId": "qwen",
        "modelName": "Qwen3 Engine",
        "clonedOriginalAudio": "/audio/qwen/spk-151837-qwen-original.wav",
        "clonedOriginalText": "I think the differences are about both types and colors of the toys. Usually girls' toys come in pink and boys' toys come in blue.",
        "clonedNewAudio": "/audio/qwen/spk-151837-qwen-new.wav",
        "clonedNewText": "The quick brown fox jumps over the lazy dog. But what about the man who watched over them? He barely noticed."
      }
    ]
  },
  {
    "id": "spk-183601",
    "name": "User 183601",
    "originalText": "If the doctor asks me to explain the issue in detail, I would say a long story short, it's easy.",
    "originalAudio": "/audio/original/user_183601_25t_d0b42c06.webm",
    "models": [
      {
        "modelId": "qwen",
        "modelName": "Qwen3 Engine",
        "clonedOriginalAudio": "/audio/qwen/spk-183601-qwen-original.wav",
        "clonedOriginalText": "If the doctor asks me to explain the issue in detail, I would say a long story short, it's easy.",
        "clonedNewAudio": "/audio/qwen/spk-183601-qwen-new.wav",
        "clonedNewText": "The quick brown fox jumps over the lazy dog. But what about the man who watched over them? He barely noticed."
      }
    ]
  },
  {
    "id": "spk-188593",
    "name": "User 188593",
    "originalText": "My colleagues, they don't call me in my busy time because they know I am the busiest employee in my work.",
    "originalAudio": "/audio/original/user_188593_25t_71c095ec.webm",
    "models": [
      {
        "modelId": "qwen",
        "modelName": "Qwen3 Engine",
        "clonedOriginalAudio": "/audio/qwen/spk-188593-qwen-original.wav",
        "clonedOriginalText": "My colleagues, they don't call me in my busy time because they know I am the busiest employee in my work.",
        "clonedNewAudio": "/audio/qwen/spk-188593-qwen-new.wav",
        "clonedNewText": "The quick brown fox jumps over the lazy dog. But what about the man who watched over them? He barely noticed."
      }
    ]
  },
  {
    "id": "spk-176709",
    "name": "User 176709",
    "originalText": "Now I shop online because I don't have any time because my work until 5 pm and I have too much working after the work because I use online stuff.",
    "originalAudio": "/audio/original/user_176709_34t_93bb2d40.webm",
    "models": [
      {
        "modelId": "qwen",
        "modelName": "Qwen3 Engine",
        "clonedOriginalAudio": "/audio/qwen/spk-176709-qwen-original.wav",
        "clonedOriginalText": "Now I shop online because I don't have any time because my work until 5 pm and I have too much working after the work because I use online stuff.",
        "clonedNewAudio": "/audio/qwen/spk-176709-qwen-new.wav",
        "clonedNewText": "The quick brown fox jumps over the lazy dog. But what about the man who watched over them? He barely noticed."
      }
    ]
  },
  {
    "id": "spk-181479",
    "name": "User 181479",
    "originalText": "That's all. As I said, I like to eat pasta, noodles, sushi, a lot of kind of food.",
    "originalAudio": "/audio/original/user_181479_26t_0741f489.m4a",
    "models": [
      {
        "modelId": "qwen",
        "modelName": "Qwen3 Engine",
        "clonedOriginalAudio": "/audio/qwen/spk-181479-qwen-original.wav",
        "clonedOriginalText": "That's all. As I said, I like to eat pasta, noodles, sushi, a lot of kind of food.",
        "clonedNewAudio": "/audio/qwen/spk-181479-qwen-new.wav",
        "clonedNewText": "The quick brown fox jumps over the lazy dog. But what about the man who watched over them? He barely noticed."
      }
    ]
  },
  {
    "id": "spk-135375",
    "name": "User 135375",
    "originalText": "I think it is not related to cooking and English skills, but maybe if I watch videos in YouTube with the recipe in English content.",
    "originalAudio": "/audio/original/user_135375_30t_3aaceb0a.webm",
    "models": [
      {
        "modelId": "qwen",
        "modelName": "Qwen3 Engine",
        "clonedOriginalAudio": "/audio/qwen/spk-135375-qwen-original.wav",
        "clonedOriginalText": "I think it is not related to cooking and English skills, but maybe if I watch videos in YouTube with the recipe in English content.",
        "clonedNewAudio": "/audio/qwen/spk-135375-qwen-new.wav",
        "clonedNewText": "The quick brown fox jumps over the lazy dog. But what about the man who watched over them? He barely noticed."
      }
    ]
  },
  {
    "id": "spk-19313",
    "name": "User 19313",
    "originalText": "I think how much salary is getting at the end of the month and what's the job and responsibility for the job.",
    "originalAudio": "/audio/original/user_19313_25t_64004b50.m4a",
    "models": [
      {
        "modelId": "qwen",
        "modelName": "Qwen3 Engine",
        "clonedOriginalAudio": "/audio/qwen/spk-19313-qwen-original.wav",
        "clonedOriginalText": "I think how much salary is getting at the end of the month and what's the job and responsibility for the job.",
        "clonedNewAudio": "/audio/qwen/spk-19313-qwen-new.wav",
        "clonedNewText": "The quick brown fox jumps over the lazy dog. But what about the man who watched over them? He barely noticed."
      }
    ]
  },
  {
    "id": "spk-124903",
    "name": "User 124903",
    "originalText": "I want to visit the fantasy sculpture and painting festival held yearly in the Global Sculpture Exhibition in Paris, sometimes in London.",
    "originalAudio": "/audio/original/user_124903_26t_9ff4331b.webm",
    "models": [
      {
        "modelId": "qwen",
        "modelName": "Qwen3 Engine",
        "clonedOriginalAudio": "/audio/qwen/spk-124903-qwen-original.wav",
        "clonedOriginalText": "I want to visit the fantasy sculpture and painting festival held yearly in the Global Sculpture Exhibition in Paris, sometimes in London.",
        "clonedNewAudio": "/audio/qwen/spk-124903-qwen-new.wav",
        "clonedNewText": "The quick brown fox jumps over the lazy dog. But what about the man who watched over them? He barely noticed."
      }
    ]
  },
  {
    "id": "spk-185319",
    "name": "User 185319",
    "originalText": "I think better to have a job you love because I get better in the job and I go every day to job and I'm so happy and comfortable.",
    "originalAudio": "/audio/original/user_185319_32t_25231290.webm",
    "models": [
      {
        "modelId": "qwen",
        "modelName": "Qwen3 Engine",
        "clonedOriginalAudio": "/audio/qwen/spk-185319-qwen-original.wav",
        "clonedOriginalText": "I think better to have a job you love because I get better in the job and I go every day to job and I'm so happy and comfortable.",
        "clonedNewAudio": "/audio/qwen/spk-185319-qwen-new.wav",
        "clonedNewText": "The quick brown fox jumps over the lazy dog. But what about the man who watched over them? He barely noticed."
      }
    ]
  },
  {
    "id": "spk-132723",
    "name": "User 132723",
    "originalText": "We decided to form a group at the beginning of the semester just to keep track and achieve better scores. I tend to avoid studying with anyone during my final exams.",
    "originalAudio": "/audio/original/user_132723_35t_eb16e54a.m4a",
    "models": [
      {
        "modelId": "qwen",
        "modelName": "Qwen3 Engine",
        "clonedOriginalAudio": "/audio/qwen/spk-132723-qwen-original.wav",
        "clonedOriginalText": "We decided to form a group at the beginning of the semester just to keep track and achieve better scores. I tend to avoid studying with anyone during my final exams.",
        "clonedNewAudio": "/audio/qwen/spk-132723-qwen-new.wav",
        "clonedNewText": "The quick brown fox jumps over the lazy dog. But what about the man who watched over them? He barely noticed."
      }
    ]
  },
  {
    "id": "spk-129009",
    "name": "User 129009",
    "originalText": "I prefer eating knafeh at the cafe with Turkish coffee because I like to eat knafeh very hot.",
    "originalAudio": "/audio/original/user_129009_25t_44dbbf4f.webm",
    "models": [
      {
        "modelId": "qwen",
        "modelName": "Qwen3 Engine",
        "clonedOriginalAudio": "/audio/qwen/spk-129009-qwen-original.wav",
        "clonedOriginalText": "I prefer eating knafeh at the cafe with Turkish coffee because I like to eat knafeh very hot.",
        "clonedNewAudio": "/audio/qwen/spk-129009-qwen-new.wav",
        "clonedNewText": "The quick brown fox jumps over the lazy dog. But what about the man who watched over them? He barely noticed."
      }
    ]
  },
  {
    "id": "spk-173225",
    "name": "User 173225",
    "originalText": "To be honest with you, I don't have specific exercise because I don't understand about this kind of exercise. Can you please give me the answer?",
    "originalAudio": "/audio/original/user_173225_31t_e81031a0.m4a",
    "models": [
      {
        "modelId": "qwen",
        "modelName": "Qwen3 Engine",
        "clonedOriginalAudio": "/audio/qwen/spk-173225-qwen-original.wav",
        "clonedOriginalText": "To be honest with you, I don't have specific exercise because I don't understand about this kind of exercise. Can you please give me the answer?",
        "clonedNewAudio": "/audio/qwen/spk-173225-qwen-new.wav",
        "clonedNewText": "The quick brown fox jumps over the lazy dog. But what about the man who watched over them? He barely noticed."
      }
    ]
  },
  {
    "id": "spk-124285",
    "name": "User 124285",
    "originalText": "There are weak people who follow anything and don't have strong beliefs, and others who are strong and their opinion don't change quickly until they believe it.",
    "originalAudio": "/audio/original/user_124285_31t_42e71d90.webm",
    "models": [
      {
        "modelId": "qwen",
        "modelName": "Qwen3 Engine",
        "clonedOriginalAudio": "/audio/qwen/spk-124285-qwen-original.wav",
        "clonedOriginalText": "There are weak people who follow anything and don't have strong beliefs, and others who are strong and their opinion don't change quickly until they believe it.",
        "clonedNewAudio": "/audio/qwen/spk-124285-qwen-new.wav",
        "clonedNewText": "The quick brown fox jumps over the lazy dog. But what about the man who watched over them? He barely noticed."
      }
    ]
  },
  {
    "id": "spk-174715",
    "name": "User 174715",
    "originalText": "The traditional food is different from country to country in the name, but it is maybe same rice and chicken but another country different name.",
    "originalAudio": "/audio/original/user_174715_29t_a904d134.webm",
    "models": [
      {
        "modelId": "qwen",
        "modelName": "Qwen3 Engine",
        "clonedOriginalAudio": "/audio/qwen/spk-174715-qwen-original.wav",
        "clonedOriginalText": "The traditional food is different from country to country in the name, but it is maybe same rice and chicken but another country different name.",
        "clonedNewAudio": "/audio/qwen/spk-174715-qwen-new.wav",
        "clonedNewText": "The quick brown fox jumps over the lazy dog. But what about the man who watched over them? He barely noticed."
      }
    ]
  },
  {
    "id": "spk-77469",
    "name": "User 77469",
    "originalText": "On the weekend, I usually with my family and I go for lunch and go around in the lake. That's it.",
    "originalAudio": "/audio/original/user_77469_26t_faa12a7c.webm",
    "models": [
      {
        "modelId": "qwen",
        "modelName": "Qwen3 Engine",
        "clonedOriginalAudio": "/audio/qwen/spk-77469-qwen-original.wav",
        "clonedOriginalText": "On the weekend, I usually with my family and I go for lunch and go around in the lake. That's it.",
        "clonedNewAudio": "/audio/qwen/spk-77469-qwen-new.wav",
        "clonedNewText": "The quick brown fox jumps over the lazy dog. But what about the man who watched over them? He barely noticed."
      }
    ]
  },
  {
    "id": "spk-146499",
    "name": "User 146499",
    "originalText": "We have to start the formal email by the introduction, which we have to mention Dear the name of the person.",
    "originalAudio": "/audio/original/user_146499_25t_9520c9ab.webm",
    "models": [
      {
        "modelId": "qwen",
        "modelName": "Qwen3 Engine",
        "clonedOriginalAudio": "/audio/qwen/spk-146499-qwen-original.wav",
        "clonedOriginalText": "We have to start the formal email by the introduction, which we have to mention Dear the name of the person.",
        "clonedNewAudio": "/audio/qwen/spk-146499-qwen-new.wav",
        "clonedNewText": "The quick brown fox jumps over the lazy dog. But what about the man who watched over them? He barely noticed."
      }
    ]
  },
  {
    "id": "spk-174161",
    "name": "User 174161",
    "originalText": "We tried sushi first, we tried ramen next, we explored the rich traditions, we also made a lot of connections there. I improved my social skills.",
    "originalAudio": "/audio/original/user_174161_33t_23a235be.webm",
    "models": [
      {
        "modelId": "qwen",
        "modelName": "Qwen3 Engine",
        "clonedOriginalAudio": "/audio/qwen/spk-174161-qwen-original.wav",
        "clonedOriginalText": "We tried sushi first, we tried ramen next, we explored the rich traditions, we also made a lot of connections there. I improved my social skills.",
        "clonedNewAudio": "/audio/qwen/spk-174161-qwen-new.wav",
        "clonedNewText": "The quick brown fox jumps over the lazy dog. But what about the man who watched over them? He barely noticed."
      }
    ]
  },
  {
    "id": "spk-185229",
    "name": "User 185229",
    "originalText": "We have a special Islamic holiday. It's called Eid al-Fitr and Eid al-Adha. This is my favorite.",
    "originalAudio": "/audio/original/user_185229_26t_bae5e9f3.webm",
    "models": [
      {
        "modelId": "qwen",
        "modelName": "Qwen3 Engine",
        "clonedOriginalAudio": "/audio/qwen/spk-185229-qwen-original.wav",
        "clonedOriginalText": "We have a special Islamic holiday. It's called Eid al-Fitr and Eid al-Adha. This is my favorite.",
        "clonedNewAudio": "/audio/qwen/spk-185229-qwen-new.wav",
        "clonedNewText": "The quick brown fox jumps over the lazy dog. But what about the man who watched over them? He barely noticed."
      }
    ]
  },
  {
    "id": "spk-184447",
    "name": "User 184447",
    "originalText": "My uncle is a good example of a generous person. Really I admire him. He is my role model in my life.",
    "originalAudio": "/audio/original/user_184447_27t_5bfbf2f0.webm",
    "models": [
      {
        "modelId": "qwen",
        "modelName": "Qwen3 Engine",
        "clonedOriginalAudio": "/audio/qwen/spk-184447-qwen-original.wav",
        "clonedOriginalText": "My uncle is a good example of a generous person. Really I admire him. He is my role model in my life.",
        "clonedNewAudio": "/audio/qwen/spk-184447-qwen-new.wav",
        "clonedNewText": "The quick brown fox jumps over the lazy dog. But what about the man who watched over them? He barely noticed."
      }
    ]
  },
  {
    "id": "spk-188641",
    "name": "User 188641",
    "originalText": "No, I prefer physical stores because I don't like shopping online because the clothes online are not nice and not interesting online.",
    "originalAudio": "/audio/original/user_188641_26t_e0cbe85c.webm",
    "models": [
      {
        "modelId": "qwen",
        "modelName": "Qwen3 Engine",
        "clonedOriginalAudio": "/audio/qwen/spk-188641-qwen-original.wav",
        "clonedOriginalText": "No, I prefer physical stores because I don't like shopping online because the clothes online are not nice and not interesting online.",
        "clonedNewAudio": "/audio/qwen/spk-188641-qwen-new.wav",
        "clonedNewText": "The quick brown fox jumps over the lazy dog. But what about the man who watched over them? He barely noticed."
      }
    ]
  },
  {
    "id": "spk-186197",
    "name": "User 186197",
    "originalText": "He knowns to have one of the most amazing omelets, so I would like to know how to make this kind of omelet.",
    "originalAudio": "/audio/original/user_186197_30t_716d9a26.webm",
    "models": [
      {
        "modelId": "qwen",
        "modelName": "Qwen3 Engine",
        "clonedOriginalAudio": "/audio/qwen/spk-186197-qwen-original.wav",
        "clonedOriginalText": "He knowns to have one of the most amazing omelets, so I would like to know how to make this kind of omelet.",
        "clonedNewAudio": "/audio/qwen/spk-186197-qwen-new.wav",
        "clonedNewText": "The quick brown fox jumps over the lazy dog. But what about the man who watched over them? He barely noticed."
      }
    ]
  },
  {
    "id": "spk-183655",
    "name": "User 183655",
    "originalText": "Well, actually we dance and we eating festivals and play some music, spend time, like we talk with each other and know each other well.",
    "originalAudio": "/audio/original/user_183655_31t_9fd9277e.webm",
    "models": [
      {
        "modelId": "qwen",
        "modelName": "Qwen3 Engine",
        "clonedOriginalAudio": "/audio/qwen/spk-183655-qwen-original.wav",
        "clonedOriginalText": "Well, actually we dance and we eating festivals and play some music, spend time, like we talk with each other and know each other well.",
        "clonedNewAudio": "/audio/qwen/spk-183655-qwen-new.wav",
        "clonedNewText": "The quick brown fox jumps over the lazy dog. But what about the man who watched over them? He barely noticed."
      }
    ]
  },
  {
    "id": "spk-99867",
    "name": "User 99867",
    "originalText": "In fact, I didn't until now research about it, but maybe the capital city of China will be my first direction to China when I visit it.",
    "originalAudio": "/audio/original/user_99867_32t_3b2d2814.webm",
    "models": [
      {
        "modelId": "qwen",
        "modelName": "Qwen3 Engine",
        "clonedOriginalAudio": "/audio/qwen/spk-99867-qwen-original.wav",
        "clonedOriginalText": "In fact, I didn't until now research about it, but maybe the capital city of China will be my first direction to China when I visit it.",
        "clonedNewAudio": "/audio/qwen/spk-99867-qwen-new.wav",
        "clonedNewText": "The quick brown fox jumps over the lazy dog. But what about the man who watched over them? He barely noticed."
      }
    ]
  },
  {
    "id": "spk-156387",
    "name": "User 156387",
    "originalText": "Yeah, I see. Inside my room, I see everything. I see a peach, I see plants, I see people, children.",
    "originalAudio": "/audio/original/user_156387_30t_2e5f00fb.webm",
    "models": [
      {
        "modelId": "qwen",
        "modelName": "Qwen3 Engine",
        "clonedOriginalAudio": "/audio/qwen/spk-156387-qwen-original.wav",
        "clonedOriginalText": "Yeah, I see. Inside my room, I see everything. I see a peach, I see plants, I see people, children.",
        "clonedNewAudio": "/audio/qwen/spk-156387-qwen-new.wav",
        "clonedNewText": "The quick brown fox jumps over the lazy dog. But what about the man who watched over them? He barely noticed."
      }
    ]
  },
  {
    "id": "spk-187491",
    "name": "User 187491",
    "originalText": "If the weather is hot, people prefer to do their activities indoor with an air conditioner. But if the weather is cold, people would prefer doing activities outside.",
    "originalAudio": "/audio/original/user_187491_34t_4b8b4b88.webm",
    "models": [
      {
        "modelId": "qwen",
        "modelName": "Qwen3 Engine",
        "clonedOriginalAudio": "/audio/qwen/spk-187491-qwen-original.wav",
        "clonedOriginalText": "If the weather is hot, people prefer to do their activities indoor with an air conditioner. But if the weather is cold, people would prefer doing activities outside.",
        "clonedNewAudio": "/audio/qwen/spk-187491-qwen-new.wav",
        "clonedNewText": "The quick brown fox jumps over the lazy dog. But what about the man who watched over them? He barely noticed."
      }
    ]
  },
  {
    "id": "spk-119223",
    "name": "User 119223",
    "originalText": "The most enjoyable part about walking in the evening is listening to podcasts and walking. It's really a relaxing and exciting time.",
    "originalAudio": "/audio/original/user_119223_26t_b376c88e.webm",
    "models": [
      {
        "modelId": "qwen",
        "modelName": "Qwen3 Engine",
        "clonedOriginalAudio": "/audio/qwen/spk-119223-qwen-original.wav",
        "clonedOriginalText": "The most enjoyable part about walking in the evening is listening to podcasts and walking. It's really a relaxing and exciting time.",
        "clonedNewAudio": "/audio/qwen/spk-119223-qwen-new.wav",
        "clonedNewText": "The quick brown fox jumps over the lazy dog. But what about the man who watched over them? He barely noticed."
      }
    ]
  },
  {
    "id": "spk-186345",
    "name": "User 186345",
    "originalText": "There are so much food in Qatar like kabsa and thareed and marqooq, so much food.",
    "originalAudio": "/audio/original/user_186345_25t_1eeba14f.webm",
    "models": [
      {
        "modelId": "qwen",
        "modelName": "Qwen3 Engine",
        "clonedOriginalAudio": "/audio/qwen/spk-186345-qwen-original.wav",
        "clonedOriginalText": "There are so much food in Qatar like kabsa and thareed and marqooq, so much food.",
        "clonedNewAudio": "/audio/qwen/spk-186345-qwen-new.wav",
        "clonedNewText": "The quick brown fox jumps over the lazy dog. But what about the man who watched over them? He barely noticed."
      }
    ]
  },
  {
    "id": "spk-183909",
    "name": "User 183909",
    "originalText": "My favorite season for taking nature photos is spring because the mountain covered with the grass and the flower is grow and opening.",
    "originalAudio": "/audio/original/user_183909_26t_d1b6f293.webm",
    "models": [
      {
        "modelId": "qwen",
        "modelName": "Qwen3 Engine",
        "clonedOriginalAudio": "/audio/qwen/spk-183909-qwen-original.wav",
        "clonedOriginalText": "My favorite season for taking nature photos is spring because the mountain covered with the grass and the flower is grow and opening.",
        "clonedNewAudio": "/audio/qwen/spk-183909-qwen-new.wav",
        "clonedNewText": "The quick brown fox jumps over the lazy dog. But what about the man who watched over them? He barely noticed."
      }
    ]
  },
  {
    "id": "spk-187971",
    "name": "User 187971",
    "originalText": "Yes, it has changed. There is a lot of schools, and malls, and a lot of new restaurants, of course.",
    "originalAudio": "/audio/original/user_187971_28t_a65c0cc9.webm",
    "models": [
      {
        "modelId": "qwen",
        "modelName": "Qwen3 Engine",
        "clonedOriginalAudio": "/audio/qwen/spk-187971-qwen-original.wav",
        "clonedOriginalText": "Yes, it has changed. There is a lot of schools, and malls, and a lot of new restaurants, of course.",
        "clonedNewAudio": "/audio/qwen/spk-187971-qwen-new.wav",
        "clonedNewText": "The quick brown fox jumps over the lazy dog. But what about the man who watched over them? He barely noticed."
      }
    ]
  },
  {
    "id": "spk-186963",
    "name": "User 186963",
    "originalText": "I prefer to work in the office and handing the files from this employers I check who attend or was absent and provide punishment for employers who did not work well.",
    "originalAudio": "/audio/original/user_186963_34t_505b1f43.webm",
    "models": [
      {
        "modelId": "qwen",
        "modelName": "Qwen3 Engine",
        "clonedOriginalAudio": "/audio/qwen/spk-186963-qwen-original.wav",
        "clonedOriginalText": "I prefer to work in the office and handing the files from this employers I check who attend or was absent and provide punishment for employers who did not work well.",
        "clonedNewAudio": "/audio/qwen/spk-186963-qwen-new.wav",
        "clonedNewText": "The quick brown fox jumps over the lazy dog. But what about the man who watched over them? He barely noticed."
      }
    ]
  },
  {
    "id": "spk-175103",
    "name": "User 175103",
    "originalText": "It is not respectful to ask your colleagues to open the camera because maybe there is a policy you need to protect.",
    "originalAudio": "/audio/original/user_175103_25t_01dadb4e.webm",
    "models": [
      {
        "modelId": "qwen",
        "modelName": "Qwen3 Engine",
        "clonedOriginalAudio": "/audio/qwen/spk-175103-qwen-original.wav",
        "clonedOriginalText": "It is not respectful to ask your colleagues to open the camera because maybe there is a policy you need to protect.",
        "clonedNewAudio": "/audio/qwen/spk-175103-qwen-new.wav",
        "clonedNewText": "The quick brown fox jumps over the lazy dog. But what about the man who watched over them? He barely noticed."
      }
    ]
  },
  {
    "id": "spk-148717",
    "name": "User 148717",
    "originalText": "Most of the time I use my smartphone to watch a video on the YouTube or sometime chatting with my friend.",
    "originalAudio": "/audio/original/user_148717_25t_922438d9.webm",
    "models": [
      {
        "modelId": "qwen",
        "modelName": "Qwen3 Engine",
        "clonedOriginalAudio": "/audio/qwen/spk-148717-qwen-original.wav",
        "clonedOriginalText": "Most of the time I use my smartphone to watch a video on the YouTube or sometime chatting with my friend.",
        "clonedNewAudio": "/audio/qwen/spk-148717-qwen-new.wav",
        "clonedNewText": "The quick brown fox jumps over the lazy dog. But what about the man who watched over them? He barely noticed."
      }
    ]
  },
  {
    "id": "spk-91363",
    "name": "User 91363",
    "originalText": "First, I like to drink lemon juice with fish dish. I like to eat with family because my mother make a better fish dish.",
    "originalAudio": "/audio/original/user_91363_29t_d1657743.m4a",
    "models": [
      {
        "modelId": "qwen",
        "modelName": "Qwen3 Engine",
        "clonedOriginalAudio": "/audio/qwen/spk-91363-qwen-original.wav",
        "clonedOriginalText": "First, I like to drink lemon juice with fish dish. I like to eat with family because my mother make a better fish dish.",
        "clonedNewAudio": "/audio/qwen/spk-91363-qwen-new.wav",
        "clonedNewText": "The quick brown fox jumps over the lazy dog. But what about the man who watched over them? He barely noticed."
      }
    ]
  },
  {
    "id": "spk-179749",
    "name": "User 179749",
    "originalText": "Yes, every morning or every day I walk 10,000 steps and two times every week I go to gym.",
    "originalAudio": "/audio/original/user_179749_26t_8655f4f4.webm",
    "models": [
      {
        "modelId": "qwen",
        "modelName": "Qwen3 Engine",
        "clonedOriginalAudio": "/audio/qwen/spk-179749-qwen-original.wav",
        "clonedOriginalText": "Yes, every morning or every day I walk 10,000 steps and two times every week I go to gym.",
        "clonedNewAudio": "/audio/qwen/spk-179749-qwen-new.wav",
        "clonedNewText": "The quick brown fox jumps over the lazy dog. But what about the man who watched over them? He barely noticed."
      }
    ]
  },
  {
    "id": "spk-163911",
    "name": "User 163911",
    "originalText": "Yes, I hold my chopstick like a pencil and rest the other between my thumb and ring finger. Then move only the top chopstick to pick up food.",
    "originalAudio": "/audio/original/user_163911_35t_7ae5bde6.webm",
    "models": [
      {
        "modelId": "qwen",
        "modelName": "Qwen3 Engine",
        "clonedOriginalAudio": "/audio/qwen/spk-163911-qwen-original.wav",
        "clonedOriginalText": "Yes, I hold my chopstick like a pencil and rest the other between my thumb and ring finger. Then move only the top chopstick to pick up food.",
        "clonedNewAudio": "/audio/qwen/spk-163911-qwen-new.wav",
        "clonedNewText": "The quick brown fox jumps over the lazy dog. But what about the man who watched over them? He barely noticed."
      }
    ]
  },
  {
    "id": "spk-84329",
    "name": "User 84329",
    "originalText": "Oh no. In fact, we talk about the people there and discussing about what we're going to order. Yeah, and sometimes we talk about daily life.",
    "originalAudio": "/audio/original/user_84329_33t_f582cc6b.webm",
    "models": [
      {
        "modelId": "qwen",
        "modelName": "Qwen3 Engine",
        "clonedOriginalAudio": "/audio/qwen/spk-84329-qwen-original.wav",
        "clonedOriginalText": "Oh no. In fact, we talk about the people there and discussing about what we're going to order. Yeah, and sometimes we talk about daily life.",
        "clonedNewAudio": "/audio/qwen/spk-84329-qwen-new.wav",
        "clonedNewText": "The quick brown fox jumps over the lazy dog. But what about the man who watched over them? He barely noticed."
      }
    ]
  },
  {
    "id": "spk-43223",
    "name": "User 43223",
    "originalText": "There are a lot of skills of course, but I'm thinking right now it be good speaking at the dialogue with other people.",
    "originalAudio": "/audio/original/user_43223_27t_5e043eca.webm",
    "models": [
      {
        "modelId": "qwen",
        "modelName": "Qwen3 Engine",
        "clonedOriginalAudio": "/audio/qwen/spk-43223-qwen-original.wav",
        "clonedOriginalText": "There are a lot of skills of course, but I'm thinking right now it be good speaking at the dialogue with other people.",
        "clonedNewAudio": "/audio/qwen/spk-43223-qwen-new.wav",
        "clonedNewText": "The quick brown fox jumps over the lazy dog. But what about the man who watched over them? He barely noticed."
      }
    ]
  },
  {
    "id": "spk-182073",
    "name": "User 182073",
    "originalText": "I think what makes the holiday fun for me is the companion with me and the place or the hotel we\u2019re staying.",
    "originalAudio": "/audio/original/user_182073_26t_ce20943d.webm",
    "models": [
      {
        "modelId": "qwen",
        "modelName": "Qwen3 Engine",
        "clonedOriginalAudio": "/audio/qwen/spk-182073-qwen-original.wav",
        "clonedOriginalText": "I think what makes the holiday fun for me is the companion with me and the place or the hotel we\u2019re staying.",
        "clonedNewAudio": "/audio/qwen/spk-182073-qwen-new.wav",
        "clonedNewText": "The quick brown fox jumps over the lazy dog. But what about the man who watched over them? He barely noticed."
      }
    ]
  },
  {
    "id": "spk-36727",
    "name": "User 36727",
    "originalText": "Well, how do you know my level around B1 or B2? How do you know me around B1, B2?",
    "originalAudio": "/audio/original/user_36727_29t_e31fddd2.webm",
    "models": [
      {
        "modelId": "qwen",
        "modelName": "Qwen3 Engine",
        "clonedOriginalAudio": "/audio/qwen/spk-36727-qwen-original.wav",
        "clonedOriginalText": "Well, how do you know my level around B1 or B2? How do you know me around B1, B2?",
        "clonedNewAudio": "/audio/qwen/spk-36727-qwen-new.wav",
        "clonedNewText": "The quick brown fox jumps over the lazy dog. But what about the man who watched over them? He barely noticed."
      }
    ]
  },
  {
    "id": "spk-34567",
    "name": "User 34567",
    "originalText": "I'm not really enjoying to go to the big malls and local market, but the online shopping it's not my thing.",
    "originalAudio": "/audio/original/user_34567_25t_25d45be4.webm",
    "models": [
      {
        "modelId": "qwen",
        "modelName": "Qwen3 Engine",
        "clonedOriginalAudio": "/audio/qwen/spk-34567-qwen-original.wav",
        "clonedOriginalText": "I'm not really enjoying to go to the big malls and local market, but the online shopping it's not my thing.",
        "clonedNewAudio": "/audio/qwen/spk-34567-qwen-new.wav",
        "clonedNewText": "The quick brown fox jumps over the lazy dog. But what about the man who watched over them? He barely noticed."
      }
    ]
  },
  {
    "id": "spk-187875",
    "name": "User 187875",
    "originalText": "All I know is that it's a drama, but I don't want to read or know anything before I read the play",
    "originalAudio": "/audio/original/user_187875_25t_ab1d0f71.webm",
    "models": [
      {
        "modelId": "qwen",
        "modelName": "Qwen3 Engine",
        "clonedOriginalAudio": "/audio/qwen/spk-187875-qwen-original.wav",
        "clonedOriginalText": "All I know is that it's a drama, but I don't want to read or know anything before I read the play",
        "clonedNewAudio": "/audio/qwen/spk-187875-qwen-new.wav",
        "clonedNewText": "The quick brown fox jumps over the lazy dog. But what about the man who watched over them? He barely noticed."
      }
    ]
  },
  {
    "id": "spk-184659",
    "name": "User 184659",
    "originalText": "Yes, I think this is a background of preparing this section. I mean, we are not needing to do another thing besides this.",
    "originalAudio": "/audio/original/user_184659_29t_0ceff86a.webm",
    "models": []
  },
  {
    "id": "spk-3705",
    "name": "User 3705",
    "originalText": "Honestly, I think conversation can change a person's life in many ways. For example, meaningful conversation might provide new perspectives or advice.",
    "originalAudio": "/audio/original/user_3705_28t_9e785e9b.webm",
    "models": [
      {
        "modelId": "qwen",
        "modelName": "Qwen3 Engine",
        "clonedOriginalAudio": "/audio/qwen/spk-3705-qwen-original.wav",
        "clonedOriginalText": "Honestly, I think conversation can change a person's life in many ways. For example, meaningful conversation might provide new perspectives or advice.",
        "clonedNewAudio": "/audio/qwen/spk-3705-qwen-new.wav",
        "clonedNewText": "The quick brown fox jumps over the lazy dog. But what about the man who watched over them? He barely noticed."
      }
    ]
  },
  {
    "id": "spk-185203",
    "name": "User 185203",
    "originalText": "Yeah, I like fries as a side, and salad also if I will eat meat. And yeah, everyone loves some side dish because it's free and yeah.",
    "originalAudio": "/audio/original/user_185203_34t_3da35c5c.webm",
    "models": [
      {
        "modelId": "qwen",
        "modelName": "Qwen3 Engine",
        "clonedOriginalAudio": "/audio/qwen/spk-185203-qwen-original.wav",
        "clonedOriginalText": "Yeah, I like fries as a side, and salad also if I will eat meat. And yeah, everyone loves some side dish because it's free and yeah.",
        "clonedNewAudio": "/audio/qwen/spk-185203-qwen-new.wav",
        "clonedNewText": "The quick brown fox jumps over the lazy dog. But what about the man who watched over them? He barely noticed."
      }
    ]
  },
  {
    "id": "spk-167729",
    "name": "User 167729",
    "originalText": "The teacher has to be creative not only explain the traditional way. The teacher must be using good tools to explain and remember to memorize.",
    "originalAudio": "/audio/original/user_167729_29t_c5f54e9a.webm",
    "models": [
      {
        "modelId": "qwen",
        "modelName": "Qwen3 Engine",
        "clonedOriginalAudio": "/audio/qwen/spk-167729-qwen-original.wav",
        "clonedOriginalText": "The teacher has to be creative not only explain the traditional way. The teacher must be using good tools to explain and remember to memorize.",
        "clonedNewAudio": "/audio/qwen/spk-167729-qwen-new.wav",
        "clonedNewText": "The quick brown fox jumps over the lazy dog. But what about the man who watched over them? He barely noticed."
      }
    ]
  },
  {
    "id": "spk-145253",
    "name": "User 145253",
    "originalText": "If you want to check for your health, you have to do a test and receive the medical report from the clinic.",
    "originalAudio": "/audio/original/user_145253_26t_7de620ef.webm",
    "models": [
      {
        "modelId": "qwen",
        "modelName": "Qwen3 Engine",
        "clonedOriginalAudio": "/audio/qwen/spk-145253-qwen-original.wav",
        "clonedOriginalText": "If you want to check for your health, you have to do a test and receive the medical report from the clinic.",
        "clonedNewAudio": "/audio/qwen/spk-145253-qwen-new.wav",
        "clonedNewText": "The quick brown fox jumps over the lazy dog. But what about the man who watched over them? He barely noticed."
      }
    ]
  },
  {
    "id": "spk-153409",
    "name": "User 153409",
    "originalText": "What is success and how do you define it? Use this word, mean different things at achieving my goals, financial outcome.",
    "originalAudio": "/audio/original/user_153409_27t_a950f619.webm",
    "models": []
  },
  {
    "id": "spk-151403",
    "name": "User 151403",
    "originalText": "When I want to change my habits and enjoy my time, I need to change my place and the people I'm with.",
    "originalAudio": "/audio/original/user_151403_26t_aee651a9.webm",
    "models": [
      {
        "modelId": "qwen",
        "modelName": "Qwen3 Engine",
        "clonedOriginalAudio": "/audio/qwen/spk-151403-qwen-original.wav",
        "clonedOriginalText": "When I want to change my habits and enjoy my time, I need to change my place and the people I'm with.",
        "clonedNewAudio": "/audio/qwen/spk-151403-qwen-new.wav",
        "clonedNewText": "The quick brown fox jumps over the lazy dog. But what about the man who watched over them? He barely noticed."
      }
    ]
  },
  {
    "id": "spk-164631",
    "name": "User 164631",
    "originalText": "Actually, I think it depends on the person. For me, I started studying again after I finished university study for about ten years.",
    "originalAudio": "/audio/original/user_164631_29t_1031ebb0.webm",
    "models": [
      {
        "modelId": "qwen",
        "modelName": "Qwen3 Engine",
        "clonedOriginalAudio": "/audio/qwen/spk-164631-qwen-original.wav",
        "clonedOriginalText": "Actually, I think it depends on the person. For me, I started studying again after I finished university study for about ten years.",
        "clonedNewAudio": "/audio/qwen/spk-164631-qwen-new.wav",
        "clonedNewText": "The quick brown fox jumps over the lazy dog. But what about the man who watched over them? He barely noticed."
      }
    ]
  },
  {
    "id": "spk-109173",
    "name": "User 109173",
    "originalText": "Sometime I usually reservation from app, but when the app have different price I prefer call the hotel and make my reservation.",
    "originalAudio": "/audio/original/user_109173_28t_6bde8159.webm",
    "models": [
      {
        "modelId": "qwen",
        "modelName": "Qwen3 Engine",
        "clonedOriginalAudio": "/audio/qwen/spk-109173-qwen-original.wav",
        "clonedOriginalText": "Sometime I usually reservation from app, but when the app have different price I prefer call the hotel and make my reservation.",
        "clonedNewAudio": "/audio/qwen/spk-109173-qwen-new.wav",
        "clonedNewText": "The quick brown fox jumps over the lazy dog. But what about the man who watched over them? He barely noticed."
      }
    ]
  },
  {
    "id": "spk-128331",
    "name": "User 128331",
    "originalText": "Some actors are paid extremely high salary because the popularity and influence that can attract a large number of audience that help the films to earn a lot of money.",
    "originalAudio": "/audio/original/user_128331_33t_87c1cc4a.webm",
    "models": [
      {
        "modelId": "qwen",
        "modelName": "Qwen3 Engine",
        "clonedOriginalAudio": "/audio/qwen/spk-128331-qwen-original.wav",
        "clonedOriginalText": "Some actors are paid extremely high salary because the popularity and influence that can attract a large number of audience that help the films to earn a lot of money.",
        "clonedNewAudio": "/audio/qwen/spk-128331-qwen-new.wav",
        "clonedNewText": "The quick brown fox jumps over the lazy dog. But what about the man who watched over them? He barely noticed."
      }
    ]
  },
  {
    "id": "spk-144167",
    "name": "User 144167",
    "originalText": "I would choose Burj Khalifa because it's the tallest building in the world, also because it has the best view of Dubai.",
    "originalAudio": "/audio/original/user_144167_28t_f5b0c48d.webm",
    "models": [
      {
        "modelId": "qwen",
        "modelName": "Qwen3 Engine",
        "clonedOriginalAudio": "/audio/qwen/spk-144167-qwen-original.wav",
        "clonedOriginalText": "I would choose Burj Khalifa because it's the tallest building in the world, also because it has the best view of Dubai.",
        "clonedNewAudio": "/audio/qwen/spk-144167-qwen-new.wav",
        "clonedNewText": "The quick brown fox jumps over the lazy dog. But what about the man who watched over them? He barely noticed."
      }
    ]
  },
  {
    "id": "spk-188747",
    "name": "User 188747",
    "originalText": "I want to improve my language learning especially English and Chinese because it is very old languages and very very spread ubiquitous and you know it is very reliable in the future.",
    "originalAudio": "/audio/original/user_188747_35t_1af5d1d9.webm",
    "models": [
      {
        "modelId": "qwen",
        "modelName": "Qwen3 Engine",
        "clonedOriginalAudio": "/audio/qwen/spk-188747-qwen-original.wav",
        "clonedOriginalText": "I want to improve my language learning especially English and Chinese because it is very old languages and very very spread ubiquitous and you know it is very reliable in the future.",
        "clonedNewAudio": "/audio/qwen/spk-188747-qwen-new.wav",
        "clonedNewText": "The quick brown fox jumps over the lazy dog. But what about the man who watched over them? He barely noticed."
      }
    ]
  },
  {
    "id": "spk-182389",
    "name": "User 182389",
    "originalText": "My favorite dish to cook I think chicken with indomie, I love cook because that easy ingredient and that recipe is so easy also.",
    "originalAudio": "/audio/original/user_182389_29t_3e15f5b5.webm",
    "models": [
      {
        "modelId": "qwen",
        "modelName": "Qwen3 Engine",
        "clonedOriginalAudio": "/audio/qwen/spk-182389-qwen-original.wav",
        "clonedOriginalText": "My favorite dish to cook I think chicken with indomie, I love cook because that easy ingredient and that recipe is so easy also.",
        "clonedNewAudio": "/audio/qwen/spk-182389-qwen-new.wav",
        "clonedNewText": "The quick brown fox jumps over the lazy dog. But what about the man who watched over them? He barely noticed."
      }
    ]
  },
  {
    "id": "spk-181575",
    "name": "User 181575",
    "originalText": "Any country I will go to Japan because I love Japan. I watching a lot of anime so I know a little bit of this country so I want to visit.",
    "originalAudio": "/audio/original/user_181575_35t_74527b32.webm",
    "models": [
      {
        "modelId": "qwen",
        "modelName": "Qwen3 Engine",
        "clonedOriginalAudio": "/audio/qwen/spk-181575-qwen-original.wav",
        "clonedOriginalText": "Any country I will go to Japan because I love Japan. I watching a lot of anime so I know a little bit of this country so I want to visit.",
        "clonedNewAudio": "/audio/qwen/spk-181575-qwen-new.wav",
        "clonedNewText": "The quick brown fox jumps over the lazy dog. But what about the man who watched over them? He barely noticed."
      }
    ]
  },
  {
    "id": "spk-187855",
    "name": "User 187855",
    "originalText": "And I prefer to drink cold coffee on a hot day. And I make it as V60 way, if you know it.",
    "originalAudio": "/audio/original/user_187855_28t_2029952c.webm",
    "models": [
      {
        "modelId": "qwen",
        "modelName": "Qwen3 Engine",
        "clonedOriginalAudio": "/audio/qwen/spk-187855-qwen-original.wav",
        "clonedOriginalText": "And I prefer to drink cold coffee on a hot day. And I make it as V60 way, if you know it.",
        "clonedNewAudio": "/audio/qwen/spk-187855-qwen-new.wav",
        "clonedNewText": "The quick brown fox jumps over the lazy dog. But what about the man who watched over them? He barely noticed."
      }
    ]
  },
  {
    "id": "spk-175125",
    "name": "User 175125",
    "originalText": "Yes, I have stood in a long queue to enter a museum, and I felt a little upset and tired.",
    "originalAudio": "/audio/original/user_175125_25t_8610cde5.m4a",
    "models": [
      {
        "modelId": "qwen",
        "modelName": "Qwen3 Engine",
        "clonedOriginalAudio": "/audio/qwen/spk-175125-qwen-original.wav",
        "clonedOriginalText": "Yes, I have stood in a long queue to enter a museum, and I felt a little upset and tired.",
        "clonedNewAudio": "/audio/qwen/spk-175125-qwen-new.wav",
        "clonedNewText": "The quick brown fox jumps over the lazy dog. But what about the man who watched over them? He barely noticed."
      }
    ]
  },
  {
    "id": "spk-37003",
    "name": "User 37003",
    "originalText": "I had been thinking about finishing my homework and chores. After I checked these things, I decided to go outside with my friends.",
    "originalAudio": "/audio/original/user_37003_28t_e3df9f1b.webm",
    "models": [
      {
        "modelId": "qwen",
        "modelName": "Qwen3 Engine",
        "clonedOriginalAudio": "/audio/qwen/spk-37003-qwen-original.wav",
        "clonedOriginalText": "I had been thinking about finishing my homework and chores. After I checked these things, I decided to go outside with my friends.",
        "clonedNewAudio": "/audio/qwen/spk-37003-qwen-new.wav",
        "clonedNewText": "The quick brown fox jumps over the lazy dog. But what about the man who watched over them? He barely noticed."
      }
    ]
  },
  {
    "id": "spk-186887",
    "name": "User 186887",
    "originalText": "In my opinion, important qualities for a good athlete are waking up early to exercise, going to a park or forest, and eating healthy food.",
    "originalAudio": "/audio/original/user_186887_31t_0a91e4e5.webm",
    "models": [
      {
        "modelId": "qwen",
        "modelName": "Qwen3 Engine",
        "clonedOriginalAudio": "/audio/qwen/spk-186887-qwen-original.wav",
        "clonedOriginalText": "In my opinion, important qualities for a good athlete are waking up early to exercise, going to a park or forest, and eating healthy food.",
        "clonedNewAudio": "/audio/qwen/spk-186887-qwen-new.wav",
        "clonedNewText": "The quick brown fox jumps over the lazy dog. But what about the man who watched over them? He barely noticed."
      }
    ]
  },
  {
    "id": "spk-162345",
    "name": "User 162345",
    "originalText": "Actually I like to be fitness, and with some of exercise I like it or I enjoyed it like CrossFit and horse riding.",
    "originalAudio": "/audio/original/user_162345_28t_455eb0a8.webm",
    "models": [
      {
        "modelId": "qwen",
        "modelName": "Qwen3 Engine",
        "clonedOriginalAudio": "/audio/qwen/spk-162345-qwen-original.wav",
        "clonedOriginalText": "Actually I like to be fitness, and with some of exercise I like it or I enjoyed it like CrossFit and horse riding.",
        "clonedNewAudio": "/audio/qwen/spk-162345-qwen-new.wav",
        "clonedNewText": "The quick brown fox jumps over the lazy dog. But what about the man who watched over them? He barely noticed."
      }
    ]
  },
  {
    "id": "spk-168395",
    "name": "User 168395",
    "originalText": "I think when your group works together should be allowed to explain your opinion, how to do this work perfectly and so on.",
    "originalAudio": "/audio/original/user_168395_27t_30ff4c7d.m4a",
    "models": [
      {
        "modelId": "qwen",
        "modelName": "Qwen3 Engine",
        "clonedOriginalAudio": "/audio/qwen/spk-168395-qwen-original.wav",
        "clonedOriginalText": "I think when your group works together should be allowed to explain your opinion, how to do this work perfectly and so on.",
        "clonedNewAudio": "/audio/qwen/spk-168395-qwen-new.wav",
        "clonedNewText": "The quick brown fox jumps over the lazy dog. But what about the man who watched over them? He barely noticed."
      }
    ]
  },
  {
    "id": "spk-168975",
    "name": "User 168975",
    "originalText": "I prefer spending my leisure time with myself, watching anime and eating something such as burger or chocolate, or maybe sometimes drinking soda.",
    "originalAudio": "/audio/original/user_168975_28t_ca1fcf75.webm",
    "models": [
      {
        "modelId": "qwen",
        "modelName": "Qwen3 Engine",
        "clonedOriginalAudio": "/audio/qwen/spk-168975-qwen-original.wav",
        "clonedOriginalText": "I prefer spending my leisure time with myself, watching anime and eating something such as burger or chocolate, or maybe sometimes drinking soda.",
        "clonedNewAudio": "/audio/qwen/spk-168975-qwen-new.wav",
        "clonedNewText": "The quick brown fox jumps over the lazy dog. But what about the man who watched over them? He barely noticed."
      }
    ]
  },
  {
    "id": "spk-139811",
    "name": "User 139811",
    "originalText": "Surely, I have bought an ancient handy gadget. I don't know what it's called, but it's like a pod.",
    "originalAudio": "/audio/original/user_139811_26t_26fa1059.webm",
    "models": [
      {
        "modelId": "qwen",
        "modelName": "Qwen3 Engine",
        "clonedOriginalAudio": "/audio/qwen/spk-139811-qwen-original.wav",
        "clonedOriginalText": "Surely, I have bought an ancient handy gadget. I don't know what it's called, but it's like a pod.",
        "clonedNewAudio": "/audio/qwen/spk-139811-qwen-new.wav",
        "clonedNewText": "The quick brown fox jumps over the lazy dog. But what about the man who watched over them? He barely noticed."
      }
    ]
  },
  {
    "id": "spk-24911",
    "name": "User 24911",
    "originalText": "I've planned a small barbecue with my family and my friends and maybe swimming. I had a great weekend because I went to a gym.",
    "originalAudio": "/audio/original/user_24911_29t_c2113103.webm",
    "models": [
      {
        "modelId": "qwen",
        "modelName": "Qwen3 Engine",
        "clonedOriginalAudio": "/audio/qwen/spk-24911-qwen-original.wav",
        "clonedOriginalText": "I've planned a small barbecue with my family and my friends and maybe swimming. I had a great weekend because I went to a gym.",
        "clonedNewAudio": "/audio/qwen/spk-24911-qwen-new.wav",
        "clonedNewText": "The quick brown fox jumps over the lazy dog. But what about the man who watched over them? He barely noticed."
      }
    ]
  },
  {
    "id": "spk-185037",
    "name": "User 185037",
    "originalText": "I prefer sport with the cardio at the gym. Like, I like to walk for half an hour or one hour and ride a bicycle.",
    "originalAudio": "/audio/original/user_185037_30t_845fd0a7.webm",
    "models": [
      {
        "modelId": "qwen",
        "modelName": "Qwen3 Engine",
        "clonedOriginalAudio": "/audio/qwen/spk-185037-qwen-original.wav",
        "clonedOriginalText": "I prefer sport with the cardio at the gym. Like, I like to walk for half an hour or one hour and ride a bicycle.",
        "clonedNewAudio": "/audio/qwen/spk-185037-qwen-new.wav",
        "clonedNewText": "The quick brown fox jumps over the lazy dog. But what about the man who watched over them? He barely noticed."
      }
    ]
  },
  {
    "id": "spk-148381",
    "name": "User 148381",
    "originalText": "Yes, of course. I made a curry from Indian food. It's a soup with meat and some spice like turmeric and pepper.",
    "originalAudio": "/audio/original/user_148381_28t_c8c2695a.webm",
    "models": [
      {
        "modelId": "qwen",
        "modelName": "Qwen3 Engine",
        "clonedOriginalAudio": "/audio/qwen/spk-148381-qwen-original.wav",
        "clonedOriginalText": "Yes, of course. I made a curry from Indian food. It's a soup with meat and some spice like turmeric and pepper.",
        "clonedNewAudio": "/audio/qwen/spk-148381-qwen-new.wav",
        "clonedNewText": "The quick brown fox jumps over the lazy dog. But what about the man who watched over them? He barely noticed."
      }
    ]
  },
  {
    "id": "spk-92377",
    "name": "User 92377",
    "originalText": "Yes, of course, you should talk with any person like your mother because your mother tries to understand your feelings.",
    "originalAudio": "/audio/original/user_92377_25t_320f1c81.webm",
    "models": [
      {
        "modelId": "qwen",
        "modelName": "Qwen3 Engine",
        "clonedOriginalAudio": "/audio/qwen/spk-92377-qwen-original.wav",
        "clonedOriginalText": "Yes, of course, you should talk with any person like your mother because your mother tries to understand your feelings.",
        "clonedNewAudio": "/audio/qwen/spk-92377-qwen-new.wav",
        "clonedNewText": "The quick brown fox jumps over the lazy dog. But what about the man who watched over them? He barely noticed."
      }
    ]
  },
  {
    "id": "spk-167305",
    "name": "User 167305",
    "originalText": "It's near to the cafe and I like to walk in the park after I buy coffee and sit a little minute and take some air.",
    "originalAudio": "/audio/original/user_167305_29t_816c7099.ogg",
    "models": [
      {
        "modelId": "qwen",
        "modelName": "Qwen3 Engine",
        "clonedOriginalAudio": "/audio/qwen/spk-167305-qwen-original.wav",
        "clonedOriginalText": "It's near to the cafe and I like to walk in the park after I buy coffee and sit a little minute and take some air.",
        "clonedNewAudio": "/audio/qwen/spk-167305-qwen-new.wav",
        "clonedNewText": "The quick brown fox jumps over the lazy dog. But what about the man who watched over them? He barely noticed."
      }
    ]
  },
  {
    "id": "spk-139099",
    "name": "User 139099",
    "originalText": "No, the Kabsa for bread because all of the people of Saudi Arabia eat the Kabsa with rice, not bread.",
    "originalAudio": "/audio/original/user_139099_27t_7b7c1adf.webm",
    "models": [
      {
        "modelId": "qwen",
        "modelName": "Qwen3 Engine",
        "clonedOriginalAudio": "/audio/qwen/spk-139099-qwen-original.wav",
        "clonedOriginalText": "No, the Kabsa for bread because all of the people of Saudi Arabia eat the Kabsa with rice, not bread.",
        "clonedNewAudio": "/audio/qwen/spk-139099-qwen-new.wav",
        "clonedNewText": "The quick brown fox jumps over the lazy dog. But what about the man who watched over them? He barely noticed."
      }
    ]
  },
  {
    "id": "spk-159039",
    "name": "User 159039",
    "originalText": "When I was in high school, I took a chemistry test. My answers were awful because the test was hard and stressful.",
    "originalAudio": "/audio/original/user_159039_27t_fee0484a.webm",
    "models": [
      {
        "modelId": "qwen",
        "modelName": "Qwen3 Engine",
        "clonedOriginalAudio": "/audio/qwen/spk-159039-qwen-original.wav",
        "clonedOriginalText": "When I was in high school, I took a chemistry test. My answers were awful because the test was hard and stressful.",
        "clonedNewAudio": "/audio/qwen/spk-159039-qwen-new.wav",
        "clonedNewText": "The quick brown fox jumps over the lazy dog. But what about the man who watched over them? He barely noticed."
      }
    ]
  },
  {
    "id": "spk-184353",
    "name": "User 184353",
    "originalText": "I don't know, but maybe the friend who shows up when you feel lonely and feel sad and is trying to cheer you up, that's a high-quality of friend.",
    "originalAudio": "/audio/original/user_184353_35t_e8429bce.webm",
    "models": [
      {
        "modelId": "qwen",
        "modelName": "Qwen3 Engine",
        "clonedOriginalAudio": "/audio/qwen/spk-184353-qwen-original.wav",
        "clonedOriginalText": "I don't know, but maybe the friend who shows up when you feel lonely and feel sad and is trying to cheer you up, that's a high-quality of friend.",
        "clonedNewAudio": "/audio/qwen/spk-184353-qwen-new.wav",
        "clonedNewText": "The quick brown fox jumps over the lazy dog. But what about the man who watched over them? He barely noticed."
      }
    ]
  },
  {
    "id": "spk-165947",
    "name": "User 165947",
    "originalText": "First you said \"I walk on the path.\" The second sentence is \"The ground is soft.\" And the third sentence is \"I live in the district.\"",
    "originalAudio": "/audio/original/user_165947_34t_9511b4dd.webm",
    "models": [
      {
        "modelId": "qwen",
        "modelName": "Qwen3 Engine",
        "clonedOriginalAudio": "/audio/qwen/spk-165947-qwen-original.wav",
        "clonedOriginalText": "First you said \"I walk on the path.\" The second sentence is \"The ground is soft.\" And the third sentence is \"I live in the district.\"",
        "clonedNewAudio": "/audio/qwen/spk-165947-qwen-new.wav",
        "clonedNewText": "The quick brown fox jumps over the lazy dog. But what about the man who watched over them? He barely noticed."
      }
    ]
  },
  {
    "id": "spk-173363",
    "name": "User 173363",
    "originalText": "Actually, in the place where I live there are a lot of salons around us, so no need to wait too much to make an appointment, just walk in.",
    "originalAudio": "/audio/original/user_173363_35t_86642ca5.webm",
    "models": [
      {
        "modelId": "qwen",
        "modelName": "Qwen3 Engine",
        "clonedOriginalAudio": "/audio/qwen/spk-173363-qwen-original.wav",
        "clonedOriginalText": "Actually, in the place where I live there are a lot of salons around us, so no need to wait too much to make an appointment, just walk in.",
        "clonedNewAudio": "/audio/qwen/spk-173363-qwen-new.wav",
        "clonedNewText": "The quick brown fox jumps over the lazy dog. But what about the man who watched over them? He barely noticed."
      }
    ]
  },
  {
    "id": "spk-61251",
    "name": "User 61251",
    "originalText": "There's no drawing and that I study English too, I can have a job and I can travel to study art.",
    "originalAudio": "/audio/original/user_61251_25t_8bd5b6e9.webm",
    "models": [
      {
        "modelId": "qwen",
        "modelName": "Qwen3 Engine",
        "clonedOriginalAudio": "/audio/qwen/spk-61251-qwen-original.wav",
        "clonedOriginalText": "There's no drawing and that I study English too, I can have a job and I can travel to study art.",
        "clonedNewAudio": "/audio/qwen/spk-61251-qwen-new.wav",
        "clonedNewText": "The quick brown fox jumps over the lazy dog. But what about the man who watched over them? He barely noticed."
      }
    ]
  },
  {
    "id": "spk-182321",
    "name": "User 182321",
    "originalText": "I'm really enjoy in a nature place because I like to go hiking also we like to doing some exercise in the forests.",
    "originalAudio": "/audio/original/user_182321_26t_776f5012.m4a",
    "models": [
      {
        "modelId": "qwen",
        "modelName": "Qwen3 Engine",
        "clonedOriginalAudio": "/audio/qwen/spk-182321-qwen-original.wav",
        "clonedOriginalText": "I'm really enjoy in a nature place because I like to go hiking also we like to doing some exercise in the forests.",
        "clonedNewAudio": "/audio/qwen/spk-182321-qwen-new.wav",
        "clonedNewText": "The quick brown fox jumps over the lazy dog. But what about the man who watched over them? He barely noticed."
      }
    ]
  },
  {
    "id": "spk-187475",
    "name": "User 187475",
    "originalText": "I live in a small town and I think the best thing about it is being a small town so that you can go anywhere in 10 minutes.",
    "originalAudio": "/audio/original/user_187475_32t_fe22f8e8.webm",
    "models": [
      {
        "modelId": "qwen",
        "modelName": "Qwen3 Engine",
        "clonedOriginalAudio": "/audio/qwen/spk-187475-qwen-original.wav",
        "clonedOriginalText": "I live in a small town and I think the best thing about it is being a small town so that you can go anywhere in 10 minutes.",
        "clonedNewAudio": "/audio/qwen/spk-187475-qwen-new.wav",
        "clonedNewText": "The quick brown fox jumps over the lazy dog. But what about the man who watched over them? He barely noticed."
      }
    ]
  },
  {
    "id": "spk-130459",
    "name": "User 130459",
    "originalText": "Fish is the healthy food I like the most because it's good for the body. I try to eat it regularly.",
    "originalAudio": "/audio/original/user_130459_25t_812f19a0.webm",
    "models": [
      {
        "modelId": "qwen",
        "modelName": "Qwen3 Engine",
        "clonedOriginalAudio": "/audio/qwen/spk-130459-qwen-original.wav",
        "clonedOriginalText": "Fish is the healthy food I like the most because it's good for the body. I try to eat it regularly.",
        "clonedNewAudio": "/audio/qwen/spk-130459-qwen-new.wav",
        "clonedNewText": "The quick brown fox jumps over the lazy dog. But what about the man who watched over them? He barely noticed."
      }
    ]
  },
  {
    "id": "spk-142731",
    "name": "User 142731",
    "originalText": "I usually prepare for public speaking while studying the topic perfectly and from all perspectives so I can be ready to have a conversation with other people to speak well and useful.",
    "originalAudio": "/audio/original/user_142731_35t_64cbe50a.webm",
    "models": [
      {
        "modelId": "qwen",
        "modelName": "Qwen3 Engine",
        "clonedOriginalAudio": "/audio/qwen/spk-142731-qwen-original.wav",
        "clonedOriginalText": "I usually prepare for public speaking while studying the topic perfectly and from all perspectives so I can be ready to have a conversation with other people to speak well and useful.",
        "clonedNewAudio": "/audio/qwen/spk-142731-qwen-new.wav",
        "clonedNewText": "The quick brown fox jumps over the lazy dog. But what about the man who watched over them? He barely noticed."
      }
    ]
  },
  {
    "id": "spk-181317",
    "name": "User 181317",
    "originalText": "Normally, after this routine, I feel relaxed. I take a light meal before going to bed and prepare for another day.",
    "originalAudio": "/audio/original/user_181317_27t_b1cde4c4.webm",
    "models": [
      {
        "modelId": "qwen",
        "modelName": "Qwen3 Engine",
        "clonedOriginalAudio": "/audio/qwen/spk-181317-qwen-original.wav",
        "clonedOriginalText": "Normally, after this routine, I feel relaxed. I take a light meal before going to bed and prepare for another day.",
        "clonedNewAudio": "/audio/qwen/spk-181317-qwen-new.wav",
        "clonedNewText": "The quick brown fox jumps over the lazy dog. But what about the man who watched over them? He barely noticed."
      }
    ]
  },
  {
    "id": "spk-123207",
    "name": "User 123207",
    "originalText": "No, actually most of her songs are slow ballads. She sang her song, sorry, most of them about love.",
    "originalAudio": "/audio/original/user_123207_27t_b327a16c.webm",
    "models": [
      {
        "modelId": "qwen",
        "modelName": "Qwen3 Engine",
        "clonedOriginalAudio": "/audio/qwen/spk-123207-qwen-original.wav",
        "clonedOriginalText": "No, actually most of her songs are slow ballads. She sang her song, sorry, most of them about love.",
        "clonedNewAudio": "/audio/qwen/spk-123207-qwen-new.wav",
        "clonedNewText": "The quick brown fox jumps over the lazy dog. But what about the man who watched over them? He barely noticed."
      }
    ]
  },
  {
    "id": "spk-151197",
    "name": "User 151197",
    "originalText": "Of course, I'm from a different generation than my children, as well as my parents are from a different generation than me.",
    "originalAudio": "/audio/original/user_151197_27t_542f29f8.webm",
    "models": [
      {
        "modelId": "qwen",
        "modelName": "Qwen3 Engine",
        "clonedOriginalAudio": "/audio/qwen/spk-151197-qwen-original.wav",
        "clonedOriginalText": "Of course, I'm from a different generation than my children, as well as my parents are from a different generation than me.",
        "clonedNewAudio": "/audio/qwen/spk-151197-qwen-new.wav",
        "clonedNewText": "The quick brown fox jumps over the lazy dog. But what about the man who watched over them? He barely noticed."
      }
    ]
  },
  {
    "id": "spk-158995",
    "name": "User 158995",
    "originalText": "My age is 29, so I'm still working for my achievements, a lot of achievements actually, something in my work, something in my health.",
    "originalAudio": "/audio/original/user_158995_32t_f43744e2.m4a",
    "models": [
      {
        "modelId": "qwen",
        "modelName": "Qwen3 Engine",
        "clonedOriginalAudio": "/audio/qwen/spk-158995-qwen-original.wav",
        "clonedOriginalText": "My age is 29, so I'm still working for my achievements, a lot of achievements actually, something in my work, something in my health.",
        "clonedNewAudio": "/audio/qwen/spk-158995-qwen-new.wav",
        "clonedNewText": "The quick brown fox jumps over the lazy dog. But what about the man who watched over them? He barely noticed."
      }
    ]
  },
  {
    "id": "spk-32947",
    "name": "User 32947",
    "originalText": "Opportunities like programs helps you to speak with native, I think it's helpful because it builds your confidence and helps you to get used to natural conversation.",
    "originalAudio": "/audio/original/user_32947_32t_bf79a2a0.webm",
    "models": [
      {
        "modelId": "qwen",
        "modelName": "Qwen3 Engine",
        "clonedOriginalAudio": "/audio/qwen/spk-32947-qwen-original.wav",
        "clonedOriginalText": "Opportunities like programs helps you to speak with native, I think it's helpful because it builds your confidence and helps you to get used to natural conversation.",
        "clonedNewAudio": "/audio/qwen/spk-32947-qwen-new.wav",
        "clonedNewText": "The quick brown fox jumps over the lazy dog. But what about the man who watched over them? He barely noticed."
      }
    ]
  },
  {
    "id": "spk-166863",
    "name": "User 166863",
    "originalText": "Yes, I helped a lot of friends who were going through hardships, but some of them, they didn't deserve what I did for them.",
    "originalAudio": "/audio/original/user_166863_30t_6d316858.webm",
    "models": [
      {
        "modelId": "qwen",
        "modelName": "Qwen3 Engine",
        "clonedOriginalAudio": "/audio/qwen/spk-166863-qwen-original.wav",
        "clonedOriginalText": "Yes, I helped a lot of friends who were going through hardships, but some of them, they didn't deserve what I did for them.",
        "clonedNewAudio": "/audio/qwen/spk-166863-qwen-new.wav",
        "clonedNewText": "The quick brown fox jumps over the lazy dog. But what about the man who watched over them? He barely noticed."
      }
    ]
  },
  {
    "id": "spk-152199",
    "name": "User 152199",
    "originalText": "Honestly none, but what I always do is throwing the waste in the trash bin. Many people throw it on the streets and parks",
    "originalAudio": "/audio/original/user_152199_28t_50a9a4ca.webm",
    "models": [
      {
        "modelId": "qwen",
        "modelName": "Qwen3 Engine",
        "clonedOriginalAudio": "/audio/qwen/spk-152199-qwen-original.wav",
        "clonedOriginalText": "Honestly none, but what I always do is throwing the waste in the trash bin. Many people throw it on the streets and parks",
        "clonedNewAudio": "/audio/qwen/spk-152199-qwen-new.wav",
        "clonedNewText": "The quick brown fox jumps over the lazy dog. But what about the man who watched over them? He barely noticed."
      }
    ]
  },
  {
    "id": "spk-75941",
    "name": "User 75941",
    "originalText": "Hello Shakespeare, how are you? How's it going? Everything is good? I'm good, thanks. How about you?",
    "originalAudio": "/audio/original/user_75941_27t_a5699071.m4a",
    "models": [
      {
        "modelId": "qwen",
        "modelName": "Qwen3 Engine",
        "clonedOriginalAudio": "/audio/qwen/spk-75941-qwen-original.wav",
        "clonedOriginalText": "Hello Shakespeare, how are you? How's it going? Everything is good? I'm good, thanks. How about you?",
        "clonedNewAudio": "/audio/qwen/spk-75941-qwen-new.wav",
        "clonedNewText": "The quick brown fox jumps over the lazy dog. But what about the man who watched over them? He barely noticed."
      }
    ]
  },
  {
    "id": "spk-169787",
    "name": "User 169787",
    "originalText": "Some people say the English is easy and some people say the English is not easy. Actually the English is not easy. It takes many time.",
    "originalAudio": "/audio/original/user_169787_31t_4983d27b.webm",
    "models": [
      {
        "modelId": "qwen",
        "modelName": "Qwen3 Engine",
        "clonedOriginalAudio": "/audio/qwen/spk-169787-qwen-original.wav",
        "clonedOriginalText": "Some people say the English is easy and some people say the English is not easy. Actually the English is not easy. It takes many time.",
        "clonedNewAudio": "/audio/qwen/spk-169787-qwen-new.wav",
        "clonedNewText": "The quick brown fox jumps over the lazy dog. But what about the man who watched over them? He barely noticed."
      }
    ]
  },
  {
    "id": "spk-162591",
    "name": "User 162591",
    "originalText": "It gives me more energy and I can tell you about the strength. I think that the more practice strength do me more flexibility to make any practice in the gym.",
    "originalAudio": "/audio/original/user_162591_35t_562d9eb5.webm",
    "models": [
      {
        "modelId": "qwen",
        "modelName": "Qwen3 Engine",
        "clonedOriginalAudio": "/audio/qwen/spk-162591-qwen-original.wav",
        "clonedOriginalText": "It gives me more energy and I can tell you about the strength. I think that the more practice strength do me more flexibility to make any practice in the gym.",
        "clonedNewAudio": "/audio/qwen/spk-162591-qwen-new.wav",
        "clonedNewText": "The quick brown fox jumps over the lazy dog. But what about the man who watched over them? He barely noticed."
      }
    ]
  },
  {
    "id": "spk-188185",
    "name": "User 188185",
    "originalText": "The oldest daughter is 25 years old. You ask me about my project. It's a normal project to everybody. I need a good style life and good health.",
    "originalAudio": "/audio/original/user_188185_35t_42f05489.webm",
    "models": [
      {
        "modelId": "qwen",
        "modelName": "Qwen3 Engine",
        "clonedOriginalAudio": "/audio/qwen/spk-188185-qwen-original.wav",
        "clonedOriginalText": "The oldest daughter is 25 years old. You ask me about my project. It's a normal project to everybody. I need a good style life and good health.",
        "clonedNewAudio": "/audio/qwen/spk-188185-qwen-new.wav",
        "clonedNewText": "The quick brown fox jumps over the lazy dog. But what about the man who watched over them? He barely noticed."
      }
    ]
  },
  {
    "id": "spk-188547",
    "name": "User 188547",
    "originalText": "My age 25 years old. My job I work to a company. My education is accounting, and my work is accounting.",
    "originalAudio": "/audio/original/user_188547_28t_63e2fd4a.webm",
    "models": [
      {
        "modelId": "qwen",
        "modelName": "Qwen3 Engine",
        "clonedOriginalAudio": "/audio/qwen/spk-188547-qwen-original.wav",
        "clonedOriginalText": "My age 25 years old. My job I work to a company. My education is accounting, and my work is accounting.",
        "clonedNewAudio": "/audio/qwen/spk-188547-qwen-new.wav",
        "clonedNewText": "The quick brown fox jumps over the lazy dog. But what about the man who watched over them? He barely noticed."
      }
    ]
  },
  {
    "id": "spk-72573",
    "name": "User 72573",
    "originalText": "Sleep well, eating healthy. Do exercise every day and make your brain active and do some exercise and take a break and meditate or imagine.",
    "originalAudio": "/audio/original/user_72573_30t_ba3178d5.webm",
    "models": [
      {
        "modelId": "qwen",
        "modelName": "Qwen3 Engine",
        "clonedOriginalAudio": "/audio/qwen/spk-72573-qwen-original.wav",
        "clonedOriginalText": "Sleep well, eating healthy. Do exercise every day and make your brain active and do some exercise and take a break and meditate or imagine.",
        "clonedNewAudio": "/audio/qwen/spk-72573-qwen-new.wav",
        "clonedNewText": "The quick brown fox jumps over the lazy dog. But what about the man who watched over them? He barely noticed."
      }
    ]
  },
  {
    "id": "spk-145073",
    "name": "User 145073",
    "originalText": "When I want to say something to anyone politely, I could use \"could you please?\" This phrase is very or the most useful.",
    "originalAudio": "/audio/original/user_145073_29t_70efa5f2.webm",
    "models": [
      {
        "modelId": "qwen",
        "modelName": "Qwen3 Engine",
        "clonedOriginalAudio": "/audio/qwen/spk-145073-qwen-original.wav",
        "clonedOriginalText": "When I want to say something to anyone politely, I could use \"could you please?\" This phrase is very or the most useful.",
        "clonedNewAudio": "/audio/qwen/spk-145073-qwen-new.wav",
        "clonedNewText": "The quick brown fox jumps over the lazy dog. But what about the man who watched over them? He barely noticed."
      }
    ]
  },
  {
    "id": "spk-188011",
    "name": "User 188011",
    "originalText": "My favorite thing is going to the gym and lifting weights. One of my hobbies is wanting to buy a new car.",
    "originalAudio": "/audio/original/user_188011_26t_b92db53f.webm",
    "models": [
      {
        "modelId": "qwen",
        "modelName": "Qwen3 Engine",
        "clonedOriginalAudio": "/audio/qwen/spk-188011-qwen-original.wav",
        "clonedOriginalText": "My favorite thing is going to the gym and lifting weights. One of my hobbies is wanting to buy a new car.",
        "clonedNewAudio": "/audio/qwen/spk-188011-qwen-new.wav",
        "clonedNewText": "The quick brown fox jumps over the lazy dog. But what about the man who watched over them? He barely noticed."
      }
    ]
  },
  {
    "id": "spk-170769",
    "name": "User 170769",
    "originalText": "Yes, eight years ago, I visited Spain and there were many historic sites such as Granada, C\u00f3rdoba, Sevilla, and Madrid.",
    "originalAudio": "/audio/original/user_170769_28t_c59701e6.webm",
    "models": [
      {
        "modelId": "qwen",
        "modelName": "Qwen3 Engine",
        "clonedOriginalAudio": "/audio/qwen/spk-170769-qwen-original.wav",
        "clonedOriginalText": "Yes, eight years ago, I visited Spain and there were many historic sites such as Granada, C\u00f3rdoba, Sevilla, and Madrid.",
        "clonedNewAudio": "/audio/qwen/spk-170769-qwen-new.wav",
        "clonedNewText": "The quick brown fox jumps over the lazy dog. But what about the man who watched over them? He barely noticed."
      }
    ]
  },
  {
    "id": "spk-173789",
    "name": "User 173789",
    "originalText": "I can give advice about improving family relationships: Speak to them every day and spend as much as possible you can.",
    "originalAudio": "/audio/original/user_173789_25t_565dcb4a.webm",
    "models": [
      {
        "modelId": "qwen",
        "modelName": "Qwen3 Engine",
        "clonedOriginalAudio": "/audio/qwen/spk-173789-qwen-original.wav",
        "clonedOriginalText": "I can give advice about improving family relationships: Speak to them every day and spend as much as possible you can.",
        "clonedNewAudio": "/audio/qwen/spk-173789-qwen-new.wav",
        "clonedNewText": "The quick brown fox jumps over the lazy dog. But what about the man who watched over them? He barely noticed."
      }
    ]
  },
  {
    "id": "spk-188109",
    "name": "User 188109",
    "originalText": "That question very interesting. Let me think, to begin with, I remember when I am born in my city Saudi Arabia, specifically my city",
    "originalAudio": "/audio/original/user_188109_30t_a604f123.m4a",
    "models": [
      {
        "modelId": "qwen",
        "modelName": "Qwen3 Engine",
        "clonedOriginalAudio": "/audio/qwen/spk-188109-qwen-original.wav",
        "clonedOriginalText": "That question very interesting. Let me think, to begin with, I remember when I am born in my city Saudi Arabia, specifically my city",
        "clonedNewAudio": "/audio/qwen/spk-188109-qwen-new.wav",
        "clonedNewText": "The quick brown fox jumps over the lazy dog. But what about the man who watched over them? He barely noticed."
      }
    ]
  },
  {
    "id": "spk-144817",
    "name": "User 144817",
    "originalText": "My favorite activity during the National Day is fireworks and dancing and eat the old food or talk with my grandfather and grandmother.",
    "originalAudio": "/audio/original/user_144817_26t_2c611a07.webm",
    "models": [
      {
        "modelId": "qwen",
        "modelName": "Qwen3 Engine",
        "clonedOriginalAudio": "/audio/qwen/spk-144817-qwen-original.wav",
        "clonedOriginalText": "My favorite activity during the National Day is fireworks and dancing and eat the old food or talk with my grandfather and grandmother.",
        "clonedNewAudio": "/audio/qwen/spk-144817-qwen-new.wav",
        "clonedNewText": "The quick brown fox jumps over the lazy dog. But what about the man who watched over them? He barely noticed."
      }
    ]
  },
  {
    "id": "spk-144847",
    "name": "User 144847",
    "originalText": "The most thing I like it I have time with my family, we can talk with each other, sharing our ideas and enjoy our time and also relaxing.",
    "originalAudio": "/audio/original/user_144847_33t_7373a6f2.webm",
    "models": [
      {
        "modelId": "qwen",
        "modelName": "Qwen3 Engine",
        "clonedOriginalAudio": "/audio/qwen/spk-144847-qwen-original.wav",
        "clonedOriginalText": "The most thing I like it I have time with my family, we can talk with each other, sharing our ideas and enjoy our time and also relaxing.",
        "clonedNewAudio": "/audio/qwen/spk-144847-qwen-new.wav",
        "clonedNewText": "The quick brown fox jumps over the lazy dog. But what about the man who watched over them? He barely noticed."
      }
    ]
  },
  {
    "id": "spk-175673",
    "name": "User 175673",
    "originalText": "Or if any member of my family gets very sick, I can delay everything and drive them to the nearest hospital or clinic to get medicine and a checkup.",
    "originalAudio": "/audio/original/user_175673_34t_a0b04fc5.webm",
    "models": [
      {
        "modelId": "qwen",
        "modelName": "Qwen3 Engine",
        "clonedOriginalAudio": "/audio/qwen/spk-175673-qwen-original.wav",
        "clonedOriginalText": "Or if any member of my family gets very sick, I can delay everything and drive them to the nearest hospital or clinic to get medicine and a checkup.",
        "clonedNewAudio": "/audio/qwen/spk-175673-qwen-new.wav",
        "clonedNewText": "The quick brown fox jumps over the lazy dog. But what about the man who watched over them? He barely noticed."
      }
    ]
  },
  {
    "id": "spk-175111",
    "name": "User 175111",
    "originalText": "Yeah I like outdoors so I can feel the atmosphere around me and get fresh air. And usually I'm doing cycling that time.",
    "originalAudio": "/audio/original/user_175111_27t_bd8e9127.webm",
    "models": [
      {
        "modelId": "qwen",
        "modelName": "Qwen3 Engine",
        "clonedOriginalAudio": "/audio/qwen/spk-175111-qwen-original.wav",
        "clonedOriginalText": "Yeah I like outdoors so I can feel the atmosphere around me and get fresh air. And usually I'm doing cycling that time.",
        "clonedNewAudio": "/audio/qwen/spk-175111-qwen-new.wav",
        "clonedNewText": "The quick brown fox jumps over the lazy dog. But what about the man who watched over them? He barely noticed."
      }
    ]
  },
  {
    "id": "spk-181359",
    "name": "User 181359",
    "originalText": "No, most of them prefer to go quite slowly, like a valley. Near the mountain, there is a valley, and people like to stay there.",
    "originalAudio": "/audio/original/user_181359_33t_acca528d.webm",
    "models": [
      {
        "modelId": "qwen",
        "modelName": "Qwen3 Engine",
        "clonedOriginalAudio": "/audio/qwen/spk-181359-qwen-original.wav",
        "clonedOriginalText": "No, most of them prefer to go quite slowly, like a valley. Near the mountain, there is a valley, and people like to stay there.",
        "clonedNewAudio": "/audio/qwen/spk-181359-qwen-new.wav",
        "clonedNewText": "The quick brown fox jumps over the lazy dog. But what about the man who watched over them? He barely noticed."
      }
    ]
  },
  {
    "id": "spk-84133",
    "name": "User 84133",
    "originalText": "The first reason is the people you know, your family, your memories. Sometimes you adapt to living in this city.",
    "originalAudio": "/audio/original/user_84133_26t_8058058c.webm",
    "models": [
      {
        "modelId": "qwen",
        "modelName": "Qwen3 Engine",
        "clonedOriginalAudio": "/audio/qwen/spk-84133-qwen-original.wav",
        "clonedOriginalText": "The first reason is the people you know, your family, your memories. Sometimes you adapt to living in this city.",
        "clonedNewAudio": "/audio/qwen/spk-84133-qwen-new.wav",
        "clonedNewText": "The quick brown fox jumps over the lazy dog. But what about the man who watched over them? He barely noticed."
      }
    ]
  },
  {
    "id": "spk-182817",
    "name": "User 182817",
    "originalText": "When it's easy to understand, I better to watch them without subtitles, but when it's hard to understand, I prefer to watch it with subtitles.",
    "originalAudio": "/audio/original/user_182817_31t_37b65861.webm",
    "models": [
      {
        "modelId": "qwen",
        "modelName": "Qwen3 Engine",
        "clonedOriginalAudio": "/audio/qwen/spk-182817-qwen-original.wav",
        "clonedOriginalText": "When it's easy to understand, I better to watch them without subtitles, but when it's hard to understand, I prefer to watch it with subtitles.",
        "clonedNewAudio": "/audio/qwen/spk-182817-qwen-new.wav",
        "clonedNewText": "The quick brown fox jumps over the lazy dog. But what about the man who watched over them? He barely noticed."
      }
    ]
  },
  {
    "id": "spk-185091",
    "name": "User 185091",
    "originalText": "When I have free time, usually I like to go have run or walk or sometimes have a ride in my car.",
    "originalAudio": "/audio/original/user_185091_26t_9ddacfdd.webm",
    "models": [
      {
        "modelId": "qwen",
        "modelName": "Qwen3 Engine",
        "clonedOriginalAudio": "/audio/qwen/spk-185091-qwen-original.wav",
        "clonedOriginalText": "When I have free time, usually I like to go have run or walk or sometimes have a ride in my car.",
        "clonedNewAudio": "/audio/qwen/spk-185091-qwen-new.wav",
        "clonedNewText": "The quick brown fox jumps over the lazy dog. But what about the man who watched over them? He barely noticed."
      }
    ]
  },
  {
    "id": "spk-145729",
    "name": "User 145729",
    "originalText": "Helping a lot. When you will be confident, you will know how to speaking with... don't be afraid or something, and you will know how to...",
    "originalAudio": "/audio/original/user_145729_33t_5d4cca14.m4a",
    "models": [
      {
        "modelId": "qwen",
        "modelName": "Qwen3 Engine",
        "clonedOriginalAudio": "/audio/qwen/spk-145729-qwen-original.wav",
        "clonedOriginalText": "Helping a lot. When you will be confident, you will know how to speaking with... don't be afraid or something, and you will know how to...",
        "clonedNewAudio": "/audio/qwen/spk-145729-qwen-new.wav",
        "clonedNewText": "The quick brown fox jumps over the lazy dog. But what about the man who watched over them? He barely noticed."
      }
    ]
  },
  {
    "id": "spk-132925",
    "name": "User 132925",
    "originalText": "I told you I want from you every single question, just the feedback, the all feedback, and the next question in one message.",
    "originalAudio": "/audio/original/user_132925_29t_7bd76fbd.webm",
    "models": [
      {
        "modelId": "qwen",
        "modelName": "Qwen3 Engine",
        "clonedOriginalAudio": "/audio/qwen/spk-132925-qwen-original.wav",
        "clonedOriginalText": "I told you I want from you every single question, just the feedback, the all feedback, and the next question in one message.",
        "clonedNewAudio": "/audio/qwen/spk-132925-qwen-new.wav",
        "clonedNewText": "The quick brown fox jumps over the lazy dog. But what about the man who watched over them? He barely noticed."
      }
    ]
  },
  {
    "id": "spk-155889",
    "name": "User 155889",
    "originalText": "In the weekend I prefer to sleep more, and I go out time with my friends, and sometimes I go to a restaurant with my family.",
    "originalAudio": "/audio/original/user_155889_31t_cf5aec3a.webm",
    "models": [
      {
        "modelId": "qwen",
        "modelName": "Qwen3 Engine",
        "clonedOriginalAudio": "/audio/qwen/spk-155889-qwen-original.wav",
        "clonedOriginalText": "In the weekend I prefer to sleep more, and I go out time with my friends, and sometimes I go to a restaurant with my family.",
        "clonedNewAudio": "/audio/qwen/spk-155889-qwen-new.wav",
        "clonedNewText": "The quick brown fox jumps over the lazy dog. But what about the man who watched over them? He barely noticed."
      }
    ]
  },
  {
    "id": "spk-171281",
    "name": "User 171281",
    "originalText": "I recommended to watch the Plan Date show because it's many programs and you can watch every time and love him and love with people.",
    "originalAudio": "/audio/original/user_171281_28t_537f1849.webm",
    "models": [
      {
        "modelId": "qwen",
        "modelName": "Qwen3 Engine",
        "clonedOriginalAudio": "/audio/qwen/spk-171281-qwen-original.wav",
        "clonedOriginalText": "I recommended to watch the Plan Date show because it's many programs and you can watch every time and love him and love with people.",
        "clonedNewAudio": "/audio/qwen/spk-171281-qwen-new.wav",
        "clonedNewText": "The quick brown fox jumps over the lazy dog. But what about the man who watched over them? He barely noticed."
      }
    ]
  },
  {
    "id": "spk-187593",
    "name": "User 187593",
    "originalText": "It's a strong certificate that contain every skills that I needed and there's some exams to ensure that I am ready to carriers and so on.",
    "originalAudio": "/audio/original/user_187593_29t_6c8764b7.webm",
    "models": [
      {
        "modelId": "qwen",
        "modelName": "Qwen3 Engine",
        "clonedOriginalAudio": "/audio/qwen/spk-187593-qwen-original.wav",
        "clonedOriginalText": "It's a strong certificate that contain every skills that I needed and there's some exams to ensure that I am ready to carriers and so on.",
        "clonedNewAudio": "/audio/qwen/spk-187593-qwen-new.wav",
        "clonedNewText": "The quick brown fox jumps over the lazy dog. But what about the man who watched over them? He barely noticed."
      }
    ]
  },
  {
    "id": "spk-23589",
    "name": "User 23589",
    "originalText": "Oh, I think the weather affect and change our mood. If the weather is sunny and very hot and change to cloudy and rain, I feel happy.",
    "originalAudio": "/audio/original/user_23589_33t_ffa85f97.webm",
    "models": [
      {
        "modelId": "qwen",
        "modelName": "Qwen3 Engine",
        "clonedOriginalAudio": "/audio/qwen/spk-23589-qwen-original.wav",
        "clonedOriginalText": "Oh, I think the weather affect and change our mood. If the weather is sunny and very hot and change to cloudy and rain, I feel happy.",
        "clonedNewAudio": "/audio/qwen/spk-23589-qwen-new.wav",
        "clonedNewText": "The quick brown fox jumps over the lazy dog. But what about the man who watched over them? He barely noticed."
      }
    ]
  }
];
