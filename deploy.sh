npm run build;
sed -i -e 's/.js"/.js?v='$(cat /dev/urandom | env LC_CTYPE=C tr -dc "a-zA-Z0-9" | fold -w 32 | head -n 1)'"/g' build/index.html;
rsync build/ rapi@rapi.md:dashboard -r;
