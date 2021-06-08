

# Tuples are sequeces just like a list BUT Tuples are Immutable
# This means you can't change the values in a Tuple
# NOT ALLOWED: .sort(), .append(), .reverse()
# Tuples are made more speed, they are more memory efficient

users = ('user-1', 'user-2', 'user-3')

users_ids = (1,2,3)

print(users)
print(users[0])

# Get trhe max number in the Tuple
print(max(users_ids))

# Loop over a Tuple
for user in users:
    print(user)

print(users.count('user-3')) # count how many are there

print('==================================')

# Tuple unpacking
(new_user, new_user_id) = ('abe', 11)
print(new_user)
print(new_user_id)

print('==================================')

# Tuples and Dictionaries
sudoers = dict()
sudoers['user-1'] = 1
sudoers['user-2'] = 2
sudoers[new_user] = new_user_id


for (k,v) in sudoers.items():
    print(f'{k} is a super-user and has id: {v}')

print('==================================')
# Returns a dict_items list of Tuples
sudoers_list = sudoers.items()
print(sudoers_list)

print('==================================')

# Comparing Tuples
# First compares the first item of each tuple
print((0,1,2) < (5,1,2) ) #True
print((0,1,2000000) < (0,3,4)) #True
print(('Jones', 'Sally') < ('Jones', 'Sam')) # True
print(('Jones', 'Sally') > ('Adams', 'Sam')) # True