# reads Siddhartha and picks top ten words
# I want to add a nice format to the output
import re

from collections import Counter

words = re.findall(r'\w+', open('Siddhartha.txt').read().lower())
print("There are {0} total words in Siddhartha".format(len(words)))
print(Counter(words).most_common(10))
