FROM nginx:latest

# Copy static assets
COPY index.html /usr/share/nginx/html/index.html
COPY theme.css /usr/share/nginx/html/theme.css
COPY script.js /usr/share/nginx/html/script.js

# Ensure Nginx (running as non-root user) can read files
RUN chmod 755 /usr/share/nginx/html \
    && chmod 644 /usr/share/nginx/html/*.html /usr/share/nginx/html/*.css /usr/share/nginx/html/*.js || true

CMD [ "nginx", "-g", "daemon off;" ]
