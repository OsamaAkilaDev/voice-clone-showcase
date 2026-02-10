
import re
import os

durations = {}
with open('durations.txt', 'r') as f:
    for line in f:
        if ':' in line:
            path, dur = line.strip().split(': ', 1)
            # path is like public/audio/original/user_102647_34t_f7479253.webm
            # originalAudio in TS is like /audio/original/user_102647_34t_f7479253.webm
            rel_path = path.replace('public', '')
            durations[rel_path] = float(dur)

with open('app/data/recordings.ts', 'r') as f:
    content = f.read()

# Update Speaker interface
content = content.replace('originalAudio: string;', 'originalAudio: string;\n  duration: number;')

def add_duration(match):
    obj_str = match.group(0)
    audio_match = re.search(r'"originalAudio":\s*"([^"]+)"', obj_str)
    if audio_match:
        audio_path = audio_match.group(1)
        if audio_path in durations:
            dur = durations[audio_path]
            # Insert duration after originalAudio
            return obj_str.replace(f'"originalAudio": "{audio_path}"', f'"originalAudio": "{audio_path}",\n    "duration": {dur}')
    return obj_str

# Match each speaker block
new_content = re.sub(r'\{[^{}]*"id": "spk-[^{}]*\}', add_duration, content, flags=re.DOTALL)

with open('app/data/recordings.ts', 'w') as f:
    f.write(new_content)
