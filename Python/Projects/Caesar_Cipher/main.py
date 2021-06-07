import string


def caesar_cipher():
    alphabet = string.ascii_lowercase

    direction = input("Type 'encode' to encrypt, type 'decode' to decrypt:\n")
    plain_msg = input("Type your message:\n").lower()
    shift = int(input("Type the shift number:\n"))

    def encrypt(msg, shiftby):
        new_msg = ''
        indexes = []
        for char in msg:
            indexes.append(alphabet.index(char))
        for idx in indexes:
            new_msg += alphabet[idx+shift]
        print(new_msg)
    encrypt(plain_msg, shift)


caesar_cipher()
