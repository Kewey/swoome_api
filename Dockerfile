FROM node:latest As development

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=development

COPY . .

RUN npx prisma generate

RUN npx prisma migrate dev --name init

RUN npm run build