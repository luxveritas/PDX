### Function for taking in Snake_Case and outputting CamelCase


def main():
    words = response.split('_')
    print(words[0] + "".join(x.title() for x in words[1:]))


response = input("Please enter your Snake_Case statement; ")

main()
