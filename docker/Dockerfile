# Dockerfile for universalresolver/driver-did-key

FROM node:14-alpine
MAINTAINER Jhonattan Ramirez <camicasii@hotmail.com>

# build driver-did-key

WORKDIR /usr/src/app
COPY . .
RUN yarn install
# done

EXPOSE 8080

CMD ["yarn", "start"]

