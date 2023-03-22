# Escolhendo a versão do node. Versão alpine é mais reduzida e mais leve.
FROM node:18-alpine3.16

# Definindo o diretório da máquina onde vamos trabalhar
WORKDIR /finances/server

# Copiando arquivos package para dentro da máquina
COPY package*.json ./

# Instalando os pacotes copiados para dentro da máquina
RUN npm install --silent

# Copiando todos os arquivos restantes para dentro da máquina. Usando o .dockerignore para não copiar a node_modules
COPY . .

# Expondo a porta de acesso 
EXPOSE 3000

# Comando para rodar o servidor. [ Gerenciador de pacotes, Script usado para rodar o servidor]
CMD ["npm", "run", "dev"]

# Como rodar o docker:
#   1. Rode: docker build -t [nome_do_container] [localização_do_docker_file] 
#      Ex: docker build -t finances/server . 
#   2. Rode: docker run -p(porta) [porta_externa_do_docker]:[porta_interna_do_docker] -d(imagem que estamos utilizando) [nome_do_container]
#      Ex: docker run -p 3003:3003 -d inances/server
