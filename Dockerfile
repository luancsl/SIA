FROM node:9-slim

WORKDIR /usr/app
COPY package.json ./

RUN npm cache clean -f
RUN npm install

COPY . .

EXPOSE 3000 27017

CMD ["npm", "start"]
