FROM node:16.13.0-alpine3.14

WORKDIR /app

COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json

RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent
RUN npm install -g serve

COPY . /app
RUN npm run build

CMD ["serve", "-s", "build", "-l", "8200"]
