FROM node:21-alpine 

#Create app directory 
WORKDIR /app

#Install app dependencies
COPY package*.json ./ 

#Run npm install
RUN npm install 

#Bundle app source
COPY . .

#PORT
EXPOSE 5000

CMD ["npm", "run", "dev"]