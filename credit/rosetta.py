def luhn(n):
    x = [int(y) for y in str(n)][::-1]
    return (sum(x[0::2]) + sum(sum(divmod(d * 2, 10)) for d in x[1::2])) % 10 == 0


for n in (49927398716, 356938035643809, 1234567812345678, 1234567812345670):
    print(n, luhn(n))
