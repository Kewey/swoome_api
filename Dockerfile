FROM node:latest As development

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=development

COPY . .

RUN npx prisma generate

RUN npm run build