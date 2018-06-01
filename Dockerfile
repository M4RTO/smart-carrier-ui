# Base
FROM node:8.9-alpine AS base
ENV NODE_ENV production
WORKDIR /usr/src/app
COPY . .
RUN npm install --production --silent
RUN npm run build

# Production
FROM node:8.9-alpine
ENV PORT 4000
ENV API_PORT 8080
COPY --from=base /usr/src/app/server.js .
COPY --from=base /usr/src/app/build ./build
RUN npm install express http-proxy-middleware --silent
EXPOSE $PORT
CMD [ "node", "server.js" ]