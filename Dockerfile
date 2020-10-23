FROM node:12.17.0
WORKDIR /var/www/html/app
COPY ./package.json ./
RUN npm install
COPY . .
CMD ["npm", "run", "dev"]
