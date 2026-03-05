 #--------- Stage 1: Build --------#

FROM node:20-alpine AS builder

WORKDIR /app

# copiar dependencias
COPY package*.json ./

# instalar dependencias
RUN npm ci

# copiar codigo
COPY prisma ./prisma

# generar prisma client
RUN npx prisma generate

COPY tsconfig.json ./
COPY src ./src


# compilar typescript
RUN npm run build

# -------- Stage 2: Production --------

FROM node:20-alpine

WORKDIR /app

ENV NODE_ENV=production

COPY --from=builder /app/package*.json ./

#instalar solo depenedica de produccion
RUN npm ci --omit=dev

# copia prisma schema
COPY  --from=builder /app/prisma ./prisma

#copia codigo compilado
COPY --from=builder /app/build ./build

# copiar prisma engines
COPY --from=builder /app/node_modules/.prisma ./node_modules/.prisma

RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

EXPOSE 3000

CMD ["node", "build/server.js"]