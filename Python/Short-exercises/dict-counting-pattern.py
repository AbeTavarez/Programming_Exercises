

# Counting Pattern

counts = dict() #create a dictionary

line = input('\nEnter a line of text: ') # takes line of text from user

words = line.split(' ')

print(f'Words: {words}')

print('Counting...')

for word in words:
    #counts[word] = counts.get(word, 0) + 1
    if word not in counts:
        counts[word] = 1
    else:
        counts[word] += 1

print(f'Counts {counts}')
