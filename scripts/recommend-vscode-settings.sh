GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m'

# Get the root directory of the Git repository, or use the current directory if not in a Git repo
ROOT_DIR=$(git rev-parse --show-toplevel 2>/dev/null || echo $(pwd))

# Define the .vscode directory path
VSCODE_DIR="$ROOT_DIR/.vscode"

# Check if the .vscode directory already exists
if [ ! -d "$VSCODE_DIR" ]; then
  # Create the .vscode directory
  mkdir -p "$VSCODE_DIR"
else
  # Throw an error and exit if the directory already exists
  echo -e "${RED}Error: The .vscode directory already exists. Aborting setup.${NC}"
  exit 1
fi

# Create the settings.json file in the .vscode directory
cat <<EOL > "$VSCODE_DIR/settings.json"
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnPaste": true,
  "editor.formatOnSave": true,
  "editor.tabSize": 2,
  "diffEditor.ignoreTrimWhitespace": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "always",
    "source.sortImports": "always",
    "source.organizeImports": "always"
  },
  "files.associations": {
    "*.css": "tailwindcss",
    "*.scss": "tailwindcss"
  },
  "files.exclude": {
    "**/.git": true,
    "**/.svn": true,
    "**/.hg": true,
    "**/CVS": true,
    "**/.DS_Store": true,
    "**/Thumbs.db": true,
    "**/.swc": true,
    "**/.next": true
  }
}
EOL

echo -e "${GREEN} >> Setup local VSCode settings successfully!!. Enjoy coding 🚀 << ${NC}"
