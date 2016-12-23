FROM node:6

RUN mkdir /angular-client

WORKDIR /angular-client

RUN npm install -g angular-cli

RUN npm install -g yarn

COPY yarn.lock /angular-client

COPY package.json /angular-client

RUN yarn

COPY . /angular-client

EXPOSE 4200

CMD ["ng", "serve"]