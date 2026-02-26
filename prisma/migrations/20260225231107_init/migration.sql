-- CreateEnum
CREATE TYPE "League" AS ENUM ('AL', 'NL');

-- CreateTable
CREATE TABLE "Stadium" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "name_team" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "league" "League" NOT NULL,
    "capacity" INTEGER NOT NULL,
    "year_open" INTEGER NOT NULL,
    "longitude" DECIMAL(9,6) NOT NULL,
    "latitude" DECIMAL(9,6) NOT NULL,
    "image_url" TEXT NOT NULL,
    "left_field_ft" INTEGER NOT NULL,
    "center_field_ft" INTEGER NOT NULL,
    "right_field_ft" INTEGER NOT NULL,
    "total_games" INTEGER NOT NULL,
    "home_win_percentage" DECIMAL(5,2) NOT NULL,
    "perfect_games" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Stadium_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Attendance" (
    "id" SERIAL NOT NULL,
    "stadium_id" INTEGER NOT NULL,
    "year" INTEGER NOT NULL,
    "total_attendance" INTEGER NOT NULL,
    "perfect_games" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Attendance_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Attendance_stadium_id_year_key" ON "Attendance"("stadium_id", "year");

-- AddForeignKey
ALTER TABLE "Attendance" ADD CONSTRAINT "Attendance_stadium_id_fkey" FOREIGN KEY ("stadium_id") REFERENCES "Stadium"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
