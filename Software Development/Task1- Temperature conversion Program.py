def celsius_to_fahrenheit(temp_c):
    return (temp_c * 9/5) + 32

def celsius_to_kelvin(temp_c):
    return temp_c + 273.15

def fahrenheit_to_celsius(temp_f):
    return (temp_f - 32) * 5/9

def fahrenheit_to_kelvin(temp_f):
    return (temp_f - 32) * 5/9 + 273.15

def kelvin_to_celsius(temp_k):
    return temp_k - 273.15

def kelvin_to_fahrenheit(temp_k):
    return (temp_k - 273.15) * 9/5 + 32

def temperature_converter():
    temp_value = float(input("Enter the temperature value: "))
    temp_unit = input("Enter the unit (C for Celsius, F for Fahrenheit, K for Kelvin): ").strip().upper()

    if temp_unit == 'C':
        temp_f = celsius_to_fahrenheit(temp_value)
        temp_k = celsius_to_kelvin(temp_value)
        print(f"{temp_value}°C is equivalent to {temp_f:.2f}°F and {temp_k:.2f}K.")
    elif temp_unit == 'F':
        temp_c = fahrenheit_to_celsius(temp_value)
        temp_k = fahrenheit_to_kelvin(temp_value)
        print(f"{temp_value}°F is equivalent to {temp_c:.2f}°C and {temp_k:.2f}K.")
    elif temp_unit == 'K':
        temp_c = kelvin_to_celsius(temp_value)
        temp_f = kelvin_to_fahrenheit(temp_value)
        print(f"{temp_value}K is equivalent to {temp_c:.2f}°C and {temp_f:.2f}°F.")
    else:
        print("Invalid unit. Please enter C for Celsius, F for Fahrenheit, or K for Kelvin.")

temperature_converter()