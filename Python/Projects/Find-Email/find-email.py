

# Find email from document

file = open('email.txt')

for line in file:
    line = line.rstrip()
    #print(line)

    if not line.startswith('From') : continue
    words = line.split()
    print(words)

    email = words[1]
    print('Email: ', email)
