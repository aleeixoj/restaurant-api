FROM node

WORKDIR /usr/app

COPY package.json ./

RUN npm install yarn -g --force

RUN yarn

COPY . .

EXPOSE 3333

CMD ["yarn", "dev"]