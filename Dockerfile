FROM node:alpine
WORKDIR /app
ENV VITE_NOMBRE="Rafa"
ARG VITE_EDAD
ENV VITE_EDAD=$VITE_EDAD
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx
COPY --from=0 /app/dist /usr/share/nginx/html

