FROM node:12

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY ./package*.json ./

# Install node_modules
RUN npm install

# Bundle app source
COPY . .

# If you are building your code for production
#RUN npm ci --only=production

EXPOSE 3000
CMD [ "npm", "build" ]