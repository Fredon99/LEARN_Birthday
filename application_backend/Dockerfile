# Imagem do NodeJS
FROM node:22

# Cria diretorio
WORKDIR /app/application-backend

# Altera owner
RUN chown -R node:node /app/application-backend

# Copia arquivos e seta permissao
COPY --chown=node:node package*.json ./

# Instala pacotes
RUN npm install

# Copia o restante dos arquivos
COPY --chown=node:node . .

# Altera user (nao root)
USER node

# Expoe a porta
EXPOSE 8000

# Comando usado quando iniciado o container
CMD ["node", "app.js"]