# Use official Node.js image
FROM node:20

# Create and set working directory
WORKDIR /salon-app

# Copy only package.json and package-lock.json to install dependencies first (cache)
COPY package*.json ./

# Install npm dependencies
RUN npm install

# Copy the rest of your source code
COPY . .

# Expose the desired port
EXPOSE 5173

# Start Vite dev server
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "5173"]
