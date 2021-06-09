# Sorting a list of Tuples

my_dict = {
    'p': 1,
    'i': 2,
    'e': 3
}

# returns dict_items list
my_dict_items = my_dict.items()
print(my_dict_items)

# Now we can sort this list by dictionary keys
print(sorted(my_dict_items))

# Sort the Tuple before looping
for k,v in sorted(my_dict_items):
    print(f'{k}:{v}')

# Sorting by dictionary values
my_dict1 = {
    'a': 10,
    'b': 1,
    'c': 22
}

tmp = list() # Temporary list

# loop over dict_items list and 
# append a tuple with first the value then the key
for k,v in my_dict1.items():
    tmp.append((v,k))

print(tmp) # value is first then the key

# Sort in decending values
tmp = sorted(tmp, reverse=True)
print(tmp)