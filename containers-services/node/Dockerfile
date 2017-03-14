FROM node:7

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install nodemon
RUN npm install -g nodemon
# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY . /usr/src/app

EXPOSE 8080
CMD [ "npm", "start" ]
#CMD ["nodemon", "-L", "./src/index.js"]
