# ETAPA 1: BUILD
FROM node:lts-alpine AS builder

WORKDIR /app

RUN apk add --no-cache python3 make g++ vips-dev && rm -rf /var/cache/apk/*

COPY package.json package-lock.json ./
RUN npm install --frozen-lockfile

COPY . .
RUN npm run build

RUN npm prune --prod


# ETAPA 2: PRODUCCIÓN
FROM node:lts-alpine AS runner

WORKDIR /app

RUN apk add --no-cache vips

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/dist ./dist

ENV HOST=0.0.0.0
ENV PORT=4321
EXPOSE 4321

CMD ["node", "./dist/server/entry.mjs"]
