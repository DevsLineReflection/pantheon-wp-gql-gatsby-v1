FROM node:14

#create work directory
WORKDIR /app
RUN npm install --global gatsby-cli
#copy the json file
COPY package.* ./

RUN npm install

COPY . .

RUN npm build

EXPOSE 2635

CMD [ "npm", "run", "serve" ]