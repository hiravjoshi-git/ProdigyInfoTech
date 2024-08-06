import random


def play_guessing_game():
    target_number = random.randint(1, 100)
    guess_count = 0
    correct_guess = False

    print("Guess the number I'm thinking of, between 1 and 100!")

    while not correct_guess:
        user_input = input("Your guess: ")

        if not user_input.isdigit():
            print("Please enter a valid number.")
            continue

        user_guess = int(user_input)
        guess_count += 1

        if user_guess < target_number:
            print("Your guess is too low. Try again.")
        elif user_guess > target_number:
            print("Your guess is too high. Try again.")
        else:
            correct_guess = True
            print(f"Well done! You guessed the number in {guess_count} attempts.")

if __name__ == "__main__":
    play_guessing_game()
