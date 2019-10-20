FROM node:8.16.2-alpine as react-build
WORKDIR /app
COPY package*.json /app/
RUN npm install --prod
COPY . ./
RUN npm run build
RUN yarn global add serve
CMD ["serve","-s","build"]