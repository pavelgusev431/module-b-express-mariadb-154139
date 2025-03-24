# Naudojame oficialų Node.js 18 vaizdą
FROM node:18

# Working folder
WORKDIR /app

RUN npm install -g nodemon

# Copy package.json and  package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy project files
COPY . .

# Start app
CMD ["npm", "start"]

#Open port
EXPOSE 3000