# Use a lightweight web server to serve the prebuilt React app
FROM nginx:alpine

# Set working directory (optional)
WORKDIR /usr/share/nginx/html

# Remove the default Nginx welcome page (before copying dist)
RUN rm -rf /usr/share/nginx/html/*

# Copy the already-built dist/ folder into Nginx's web root
COPY dist/ /usr/share/nginx/html

# Fix file permissions (optional but helps on some OS like Windows)
RUN chmod -R 755 /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
