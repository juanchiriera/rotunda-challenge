FROM node:14
WORKDIR /app

COPY package*.json ./
RUN npm install

# Copy the current directory contents into the container at /app
COPY . .

# Expose the port that the app will run on
EXPOSE 3000

# Define the command to run your app
CMD ["npm", "start"]
