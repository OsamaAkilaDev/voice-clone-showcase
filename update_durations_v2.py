
import re

durations = {}
with open('durations.txt', 'r') as f:
    for line in f:
        if ':' in line:
            parts = line.strip().split(': ')
            if len(parts) >= 2:
                path = parts[0]
                dur = parts[1]
                rel_path = path.replace('public', '')
                try:
                    durations[rel_path] = float(dur)
                except ValueError:
                    continue

with open('app/data/recordings.ts', 'r') as f:
    content = f.read()

# Update Speaker interface if not already done
if 'duration: number;' not in content:
    content = content.replace('originalAudio: string;', 'originalAudio: string;\n  duration: number;')

# Perform global replacement for each duration found
for path, dur in durations.items():
    # Use regex to match the exact path in quotes to avoid partial matches
    target = f'"originalAudio": "{path}"'
    replacement = f'"originalAudio": "{path}",\n    "duration": {dur}'
    content = content.replace(target, replacement)

with open('app/data/recordings.ts', 'w') as f:
    f.write(content)
