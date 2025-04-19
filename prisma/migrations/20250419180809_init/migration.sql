-- CreateTable
CREATE TABLE "Filme" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "descricao" TEXT,
    "ano" INTEGER NOT NULL,

    CONSTRAINT "Filme_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Critica" (
    "id" SERIAL NOT NULL,
    "nota" INTEGER NOT NULL,
    "conteudo" TEXT NOT NULL,
    "filmeId" INTEGER NOT NULL,

    CONSTRAINT "Critica_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "nomeUsuario" TEXT NOT NULL,
    "senhaUsuario" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Critica" ADD CONSTRAINT "Critica_filmeId_fkey" FOREIGN KEY ("filmeId") REFERENCES "Filme"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
