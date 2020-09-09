FROM node:14

RUN mkdir -p /home/node/app/node_modules &&  mkdir -p /home/node/app/dist

WORKDIR /home/node/app
COPY package.json ./

RUN npm config set unsafe-perm true
RUN npm cache clean -f
RUN npm i --unsafe-perm

COPY . .

RUN npm run build

RUN chown -R node:node /home/node/app

COPY --chown=node:node . .

USER node

EXPOSE 3000 27017

CMD ["npm", "start"]
