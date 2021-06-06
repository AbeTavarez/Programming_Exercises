
# Asking user how many time to repeat string

message = input('What\'s you message?' )
times = int(input('How many times should I repeat it?'))

def repeater(str: message, int: times) -> None:
    for _ in range(times):
         print(message)
    return None


print(repeater(message, times))