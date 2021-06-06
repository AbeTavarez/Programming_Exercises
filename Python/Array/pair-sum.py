

# Given an integer array, output all the unique pairs that sum up to a specific value k


def pai_sum(arr, k):

    # Checking lenght of array
    if len(arr) < 2:
        print('no pairs in the array')

    # Sets for tracking
    seen = set()
    output = set()
