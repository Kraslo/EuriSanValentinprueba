# pull official base image
FROM node:erbium-bullseye-slim

# set working directory
WORKDIR /app

# add app
COPY . .

# install app dependencies
RUN yarn install
# RUN yarn prisma migrate dev --name init
RUN yarn run build

EXPOSE 3000

# start
CMD ["yarn", "prisma", "migrate", "dev", "--name", "init", "&", "yarn", "run",  "start"]
