FROM node:alpine

WORKDIR /app

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "run" , "dev"]
