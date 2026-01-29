FROM openresty/openresty:1.27.1.1-0-buster
WORKDIR /app
COPY ./packages/frontend/apps/web/dist ./dist
COPY ./packages/frontend/admin/dist ./admin
COPY ./packages/frontend/apps/mobile/dist ./mobile
COPY ./.github/deployment/front/nginx.conf /usr/local/openresty/nginx/conf/nginx.conf
COPY ./.github/deployment/front/lovenotes.nginx.conf /etc/nginx/conf.d/lovenotes.nginx.conf

RUN mkdir -p /var/log/nginx && \
  rm /etc/nginx/conf.d/default.conf

EXPOSE 8080
CMD ["/usr/local/openresty/bin/openresty", "-g", "daemon off;"]
