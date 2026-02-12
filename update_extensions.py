import re
import os

file_path = '/Users/usamait/Desktop/Voice TTS showcase/tts-archive-2/voice-clone-showcase/app/data/recordings.ts'

with open(file_path, 'r') as f:
    lines = f.readlines()

new_lines = []
inside_target_model = False
target_models = ['"fish"']

for line in lines:
    # Check if we are entering a target model block
    for model in target_models:
        if f'"modelId": {model}' in line:
            inside_target_model = True
            break
    
    # If inside target model, replace .wav with .mp3
    if inside_target_model:
        if '.wav' in line:
            line = line.replace('.wav', '.mp3')
    
    new_lines.append(line)
    
    # Check if we are leaving the model block
    # Model blocks in this file end with '      },' or '      }'
    if inside_target_model and line.strip() in ['},', '}']:
        inside_target_model = False

with open(file_path, 'w') as f:
    f.writelines(new_lines)

print("Update complete.")
