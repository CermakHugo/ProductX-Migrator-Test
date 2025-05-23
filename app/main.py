

from hello import hello

def main() -> int:
    try:
        hello()
        return 0
    except Exception as e:
        print(f"An error occurred: {e}")
        return 1

if __name__ == "__main__":
    main()