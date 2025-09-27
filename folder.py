#!/usr/bin/env python3
"""
make_tree.py — Create a directory tree listing and write it to a text file.

Usage examples:
  python make_tree.py
  python make_tree.py --root "C:/path/to/project" --output tree.txt
  python make_tree.py --ignore-dirs node_modules,.git,.next,dist --ignore-files "*.log,*.tmp"
"""

from __future__ import annotations
import argparse
import os
from pathlib import Path
from fnmatch import fnmatch

DEFAULT_IGNORE_DIRS = {
    # VCS / IDE
    ".git", ".hg", ".svn", ".idea", ".vscode",
    # JS/TS builds & caches
    "node_modules", "dist", "build", ".next", ".nuxt", ".cache",
    ".parcel-cache", ".turbo", ".vercel", ".pnpm", ".svelte-kit",
    # Python
    "__pycache__", ".mypy_cache", ".pytest_cache", ".venv", "venv", "env",
    # Mobile / misc
    "android", "ios", "Pods", ".expo",
    # OS junk
    ".DS_Store", "Thumbs.db",
}

DEFAULT_IGNORE_FILE_GLOBS = {
    "*.pyc", "*.pyo", ".DS_Store", "Thumbs.db",
}

def should_ignore(path: Path, ignore_dirs: set[str], ignore_file_globs: set[str]) -> bool:
    name = path.name
    if path.is_dir():
        if name in ignore_dirs:
            return True
    else:
        for pat in ignore_file_globs:
            if fnmatch(name, pat):
                return True
    return False

def iter_visible_children(dir_path: Path, ignore_dirs: set[str], ignore_file_globs: set[str]):
    try:
        entries = list(dir_path.iterdir())
    except PermissionError:
        return []

    # Sort: directories first, then files; both case-insensitive
    entries.sort(key=lambda p: (p.is_file(), p.name.lower()))
    return [e for e in entries if not should_ignore(e, ignore_dirs, ignore_file_globs)]

def draw_tree(root: Path, out, ignore_dirs: set[str], ignore_file_globs: set[str], follow_symlinks: bool):
    out.write(f"{root.resolve().name}\n")
    def _walk(dir_path: Path, prefix: str):
        children = iter_visible_children(dir_path, ignore_dirs, ignore_file_globs)
        count = len(children)
        for i, child in enumerate(children):
            connector = "└── " if i == count - 1 else "├── "
            out.write(prefix + connector + child.name + ("/" if child.is_dir() else "") + ("\n"))
            if child.is_dir():
                if child.is_symlink() and not follow_symlinks:
                    continue
                extension = "    " if i == count - 1 else "│   "
                _walk(child, prefix + extension)
    _walk(root, "")

def parse_args():
    parser = argparse.ArgumentParser(description="Create a directory tree listing.")
    parser.add_argument("--root", type=str, default=".", help="Root folder to scan (default: current directory).")
    parser.add_argument("--output", type=str, default="tree.txt", help="Output text file (default: tree.txt).")
    parser.add_argument("--ignore-dirs", type=str, default="",
                        help="Comma-separated dir names to ignore (added to defaults).")
    parser.add_argument("--ignore-files", type=str, default="",
                        help="Comma-separated file globs to ignore (added to defaults).")
    parser.add_argument("--no-default-ignores", action="store_true",
                        help="If set, only use the patterns you provide (no defaults).")
    parser.add_argument("--follow-symlinks", action="store_true",
                        help="Follow directory symlinks (default: do not follow).")
    return parser.parse_args()

def main():
    args = parse_args()
    root = Path(args.root).resolve()

    if args.no_default_ignores:
        ignore_dirs = set()
        ignore_file_globs = set()
    else:
        ignore_dirs = set(DEFAULT_IGNORE_DIRS)
        ignore_file_globs = set(DEFAULT_IGNORE_FILE_GLOBS)

    if args.ignore_dirs.strip():
        ignore_dirs.update(s.strip() for s in args.ignore_dirs.split(",") if s.strip())
    if args.ignore_files.strip():
        ignore_file_globs.update(s.strip() for s in args.ignore_files.split(",") if s.strip())

    # Always ignore the output file itself if it's inside root
    output_path = Path(args.output).resolve()
    if output_path.is_relative_to(root):
        ignore_file_globs.add(output_path.name)

    os.makedirs(output_path.parent, exist_ok=True)
    with open(output_path, "w", encoding="utf-8") as f:
        draw_tree(root, f, ignore_dirs, ignore_file_globs, args.follow_symlinks)

    print(f"Tree written to: {output_path}")

if __name__ == "__main__":
    main()
