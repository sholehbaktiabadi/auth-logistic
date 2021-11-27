# Create node image
FROM node:lts-alpine3.10

# Create app directory
WORKDIR /app

# Copy file to /app directory
COPY . /app

# install pm2
RUN npm install pm2 -g \
    # compile nest
    && npm run build \
    # Remove unused file/folder
    && rm -rf src \
    && rm tsconfig.json Dockerfile

# Expose port 10098
EXPOSE 3000

# run pm2-runtime
CMD ["pm2-runtime", "--raw", "ecosystem.config.js"]
