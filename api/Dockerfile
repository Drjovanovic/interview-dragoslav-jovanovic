FROM node:alpine
USER node
WORKDIR /app

COPY --chown=node:node package.json .
COPY --chown=node:node package-lock.json .
COPY --chown=node:node . .


RUN npm i axios
RUN npm i

CMD ["npm", "run", "start"]
