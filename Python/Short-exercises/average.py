

# Calculate Average

total = 0
count = 0

while True:
    inp = input('Enter a number: \n')
    if inp == 'done': break

    value = float(inp)
    total += value
    count += 1

average = total / count

print("""=================================
Average: """, average)