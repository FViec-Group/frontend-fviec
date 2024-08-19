GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m'

ROOT_DIR=$(git rev-parse --show-toplevel 2>/dev/null || echo $(pwd))

if [ -f "$ROOT_DIR/.env.local" ]; then
  echo -e ">> ${RED}.env.local already exists. << ${NC}"
else
  cat <<EOL > "$ROOT_DIR/.env.local"
ANALYZE=false
EOL

  if [ -f "$ROOT_DIR/.env.local" ]; then
    echo -e ">> ${GREEN}.env.local has been created. << ${NC}"
  else
    echo -e ">> ${RED}Failed to create .env.local. << ${NC}"
  fi
fi
