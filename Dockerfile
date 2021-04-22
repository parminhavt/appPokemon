FROM node:15.14.0-alpine3.10 AS build

WORKDIR /home/node
ADD . .
RUN npm i && \
    /home/node/node_modules/@angular/cli/bin/ng build

FROM httpd AS final

COPY --from=build /home/node/dist/appPokemon /usr/local/apache2/htdocs