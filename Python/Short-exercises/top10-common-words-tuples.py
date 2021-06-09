

# The Top 10 Most common words

# 1- Open 'lines.txt' file
# 2- Create a 'counts' dictionary
# 3- Loop over each line on the file and count the occurence of each word
# 4- Create a list 'lst' then loop over the 'counts' dictionary items and append a new tuple to the 'lst' list
# using the value as the first item of the tuple and then the key as the second value of the tuple
# 5- Sort the 'lst' list in desending order or reverse order
# 6- print the top 10 words and their occurences 


# Write you code below this line #########

# 1
file = open('lines.txt')

# 2
counts = dict()

# 3
for line in file:
    words = line.split()
    for word in words:
        counts[word] = counts.get(word, 0) + 1

# 4
lst = list()

for k,v in counts.items():
    lst.append( (v,k) ) # here we flip the values to be able to sort by the value of the dictionary

# 5 
lst = sorted(lst, reverse=True) # here we perform the sorting

# 6
for v,k in lst[:10]: # here we keep the same order v,k because we flipped them before
    print(f'{k}:{v}') # now we print them in the order we need

