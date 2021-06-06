

# Unlucky Numbers

lucky_num = int(input('What is you favorite number? '))

def unlucky_nums(int: lucky_num) -> dict:
    nums_dict = {}
    for n in range(1,21):
        if n == lucky_num:
            nums_dict[n] = 'Lucky!!!'
        elif n == 13 or n == 4:
            nums_dict[n] = 'Unlucky!!!'
        elif n % 2 == 0:
            nums_dict[n] = 'Even!'
        else:
            nums_dict[n] = 'Odd!'

    return nums_dict


print(unlucky_nums(lucky_num)) 
