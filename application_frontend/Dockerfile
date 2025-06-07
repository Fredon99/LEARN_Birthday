# Imagem NGINX
FROM nginx

# Instala vim
RUN apt-get update && apt-get install vim -y

# Substitui o conteudo do default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Substitui os arquivos estaticos
COPY ./src/ /usr/share/nginx/html/

EXPOSE 3000