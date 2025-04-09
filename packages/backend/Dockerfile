FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV DATABASE_URL=$DATABASE_URL

RUN npx prisma generate
RUN npx prisma migrate deploy

RUN npm run build

EXPOSE 3001

CMD ["npm", "run", "start:prod"]
