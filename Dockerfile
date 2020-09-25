FROM node:14

RUN mkdir -p /home/node/app/node_modules &&  chown -R node:node /home/node/app
RUN mkdir -p /home/node/app/dist && chown -R node:node /home/node/app/dist && chmod -R 777 /home/node/app/dist

WORKDIR /home/node/app
COPY package.json ./

RUN npm config set unsafe-perm true
RUN npm cache clean -f
RUN npm i --unsafe-perm

COPY --chown=node:node tsconfig.json ./
COPY --chown=node:node src ./src

USER node

EXPOSE 3000 27017

CMD ["npm", "start"]
