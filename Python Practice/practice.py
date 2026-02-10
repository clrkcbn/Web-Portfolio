print("Calculator Program")

print('Select Operation: ')
print('1. Add')
print('2. Subtract')
print('3. Multiply')   
print('4. Divide \n')

choice = int(input('Enter choice (1/2/3/4): '))

if choice == 1:
    num1 = float(input("Enter first number: "))
    num2 = float(input("Enter second number: "))
    print("Result:", num1 + num2)
elif choice == 2:
    num1 = float(input("Enter first number: "))
    num2 = float(input("Enter second number: "))
    print("Result:", num1 - num2)
elif choice == 3:
    num1 = float(input("Enter first number: "))
    num2 = float(input("Enter second number: "))
    print("Result:", num1 * num2)
elif choice == 4:
    num1 = float(input("Enter first number: "))
    num2 = float(input("Enter second number: "))
    if num2 != 0:
        print("Result:", num1 / num2)
    else:
        print("Error! Division by zero is not allowed.")
else:
    print("Invalid input")