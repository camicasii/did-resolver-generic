# Dockerfile for universalresolver/driver-did-key

FROM node:14-alpine
MAINTAINER Jhonattan Ramirez <camicasii@hotmail.com>

# build driver-did-key

WORKDIR /usr/src/app
COPY package.json ./
RUN npm install
COPY . .

# done

EXPOSE 8081

#CMD [ "node", "index.js" ]
