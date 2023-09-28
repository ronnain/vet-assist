-- CreateTable
CREATE TABLE `Prospect` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `email` VARCHAR(191) NOT NULL,
    `offerName` VARCHAR(191) NOT NULL,
    `offerDescription` VARCHAR(191) NOT NULL,
    `rgpd` BOOLEAN NOT NULL DEFAULT false,
    `unsubscribe` BOOLEAN NOT NULL DEFAULT false,
    `unsubscribeLink` VARCHAR(191) NOT NULL,
    `problem` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Prospect_email_key`(`email`),
    UNIQUE INDEX `Prospect_unsubscribeLink_key`(`unsubscribeLink`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
