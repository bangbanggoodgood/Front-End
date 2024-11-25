# Build stage
FROM node:18-alpine as build-stage

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json yarn.lock ./

# Install dependencies using yarn
RUN yarn install

# Copy project files
COPY . .

# Copy environment variables
COPY .env .

# Build the project
RUN yarn build

# Production stage
FROM nginx:stable-alpine as production-stage

# Copy built files from build stage to nginx
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Copy nginx configuration if you have custom config
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
