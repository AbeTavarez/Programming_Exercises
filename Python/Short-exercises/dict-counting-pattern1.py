

#

# name = input('Enter file: ')

handle = open('./lines.txt')

counts = dict()

for line in handle:
    # split line into words
    words = line.split()
    print( words)

    # split words into single letters
    for word in words:
        if word in counts:
            counts[word] += 1
        else:
            counts[word] = 1

print(counts)