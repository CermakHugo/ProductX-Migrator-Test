

def simc():
    def add(a, b):
        z = a + b
        print("Sum is %d" % z)

    def sub(a, b):
        return a - b

    def mul(a, b):
        return a * b

    def div(a, b):
        return a / b

    def rem(a, b):
        return a % b

    print("Simple Calculator")
    while True:
        print("1.Add\n2.Subtract\n3.Multiply\n4.Divide\n5.Remainder\n6.Exit")
        try:
            ch = int(input("Enter your choice: "))
        except ValueError:
            print("Invalid input!")
            continue
        if ch == 6:
            print("Thank you and Exiting")
            break
        else:
            try:
                a = int(input("Enter first number: "))
                b = int(input("Enter second number: "))
            except ValueError:
                print("Invalid input!")
                continue
            if ch == 1:
                add(a, b)
            elif ch == 2:
                z = sub(a, b)
                print("Difference is %d" % z)
            elif ch == 3:
                z = mul(a, b)
                print("Product is %d" % z)
            elif ch == 4:
                if b == 0:
                    print("Cannot divide by zero!")
                    continue
                z = div(a, b)
                print("Quotient is %f" % z)
            elif ch == 5:
                z = rem(a, b)
                print("Remainder is %d" % z)
            else:
                print("Invalid input!")
            ch = input("Continue? (y/n): ")
            if ch == "y":
                continue
            elif ch == "n":
                break
            else:
                print("Invalid input!\nExiting.")
                break

simc()