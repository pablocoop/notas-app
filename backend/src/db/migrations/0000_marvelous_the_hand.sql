CREATE TABLE `notas` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`asignaturaId` integer NOT NULL,
	`tipoNota` text NOT NULL,
	`valor` real NOT NULL,
	`peso` real NOT NULL,
	`fecha` text NOT NULL
);
