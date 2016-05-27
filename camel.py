def main():
    words = []
    from_char_position = 0
    for current_char_position, char in enumerate(response):
        if char.isupper() and from_char_position < current_char_position:
            words.append(response[from_char_position:current_char_position].lower())
            from_char_position = current_char_position
    words.append(response[from_char_position:].lower())
    print('_'.join(words))

response = input("Please enter your CamelCase statement; ")
main()
