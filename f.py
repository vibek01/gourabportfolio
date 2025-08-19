import os

# Directories and files to skip
EXCLUDED_DIRS = {".bolt", "node_modules", ".git"}
EXCLUDED_FILES = {"f.py", ".gitignore", "package-lock.json"}

OUTPUT_FILE = "project_files_output.txt"

def collect_files(base_dir):
    collected = {}

    for root, dirs, files in os.walk(base_dir):
        # Skip excluded directories
        dirs[:] = [d for d in dirs if d not in EXCLUDED_DIRS]

        for file in files:
            if file in EXCLUDED_FILES:
                continue

            filepath = os.path.join(root, file)

            try:
                with open(filepath, "r", encoding="utf-8") as f:
                    collected[filepath] = f.read()
            except Exception as e:
                print(f"⚠️ Could not read {filepath}: {e}")

    return collected

if __name__ == "__main__":
    base_dir = os.path.dirname(os.path.abspath(__file__))
    collected_files = collect_files(base_dir)

    with open(OUTPUT_FILE, "w", encoding="utf-8") as out:
        for path, content in collected_files.items():
            out.write(f"{path}\n")
            out.write(content + "\n\n")

    print(f"✅ All file contents have been saved to {OUTPUT_FILE}")
