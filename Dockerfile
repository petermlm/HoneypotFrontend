FROM node:13.12.0-alpine

WORKDIR /app
COPY . /app

RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent
RUN npm install -g serve
RUN npm build

CMD ["serve", "-s", "build", "-l", "8200"]
