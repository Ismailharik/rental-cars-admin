# first stage of buiding docker image
FROM node:16.19-bullseye as build

# RUN command
RUN mkdir -p /app

# WORKDIR /the/workdir/path
WORKDIR /app

# COPY source dest
COPY package.json /app/
RUN npm install 

# COPY source dest
COPY .  /app/
RUN npm run build --omit=dev
# RUN npm run build --prod

# final stage 
FROM  nginx:alpine
COPY --from=build  /app/dist/rental-cars-admin /usr/share/nginx/html