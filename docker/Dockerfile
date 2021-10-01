# Docker file, thanks to: https://dzone.com/articles/how-to-dockerize-reactjs-app
# Build stage
FROM node:lts-alpine3.13 as build-step

RUN mkdir /app
WORKDIR /app

#ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json /app
COPY yarn.lock /app
RUN yarn install

# add app
COPY . /app

# build app
RUN yarn build

# Package stage
FROM nginx:1.21.3-alpine

# nginx configuration
COPY docker/nginx/default.conf /etc/nginx/conf.d/default.conf

COPY --from=build-step /app/build /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
