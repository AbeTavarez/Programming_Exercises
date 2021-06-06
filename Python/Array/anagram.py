


# Anagram


def anagram1(s1,s2):
    print(s1)
    print(s2)
    # remove whitespace
    s1 = s1.replace(' ', '').lower()
    s2 = s2.replace(' ', '').lower()
    # Sort strings
    print(sorted(s1))
    print(sorted(s2))
    return sorted(s1) == sorted(s2)


#print(anagram1('clint Eastwood', 'old West Action'))

# ====================================================================#

def anagram2(s1, s2):
    # remove whitespace
    s1 = s1.replace(' ', '').lower()
    s2 = s2.replace(' ', '').lower()

    # Edge case check
    if len(s1) != len(s2):
        return False
    
    count = {}

    # Add letters to count dictionary
    for letter in s1:
        if letter in count:
            count[letter] += 1
        else:
            count[letter] = 1

    # Remover letter from  dictionary
    for letter in s2:
        if letter in count:
            count[letter] -= 1
        else:
            count[letter] = 1

    # Check that all letters are zero
    for c in count:
        if count[c] != 0:
            return False
    
    return True

print(anagram2('clint Eastwood', 'old West Action'))