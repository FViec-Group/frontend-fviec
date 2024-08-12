GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m'

ROOT_DIR=$(git rev-parse --show-toplevel 2>/dev/null || echo $(pwd))

mkdir -p "$ROOT_DIR/.vscode"

cat <<EOL > "$ROOT_DIR/.vscode/settings.json"
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
  }
}
EOL

echo -e "${GREEN} >> Setup local VSCode settings successfully!!. Enjoy coding 🚀 << ${NC}"