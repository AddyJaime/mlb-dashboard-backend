 #--------- Stage 1: Build --------#

FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm ci


COPY . .
# compilamos typscript
RUN npm run build 

# -------- Stage 2: Production --------

  FROM node:20-alpine

  WORKDIR /app

  # solo es optimizacion anda mas cuando ls ismgen corra en produccion el behavior cambia 
ENV NODE_ENV=production

  COPY --from=builder /app/package*.json ./
# instalar solo dependecias necesarias, basado en el packge.lock
  RUN npm ci --omit=dev

  # copiar solo codigo compilado
  COPY --from=builder /app/build ./build

# Crear usuario no-root
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

  EXPOSE 3000

  CMD ["node", "build/server.js"]