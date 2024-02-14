# Use official Node.js image as base
FROM node:14-alpine

# Set environment variables
ENV NODE_ENV=production
ENV PORT=3000

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the application code to the working directory
COPY . .

# Build the Next.js application
RUN npm run build

# Expose the port on which the application will run
EXPOSE ${PORT}

# Command to start the Next.js application
CMD ["npm", "start"]