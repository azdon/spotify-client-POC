FROM node:12-alpine
WORKDIR /client
COPY package.json ./
RUN npm install
COPY . .
CMD ["npm", "start"]