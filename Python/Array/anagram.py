


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

def anagram2(s1, s2):
    # remove whitespace
    s1 = s1.replace(' ', '').lower()
    s2 = s2.replace(' ', '').lower()

    # Edge case check
    if len(s1) != len(s2):
        return False