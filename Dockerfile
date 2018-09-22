FROM node:latest

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app

CMD [ "npm", "run", "install" ]

EXPOSE 7878

CMD [ "npm", "run", "seed" ]

CMD [ "npm", "run", "start" ]