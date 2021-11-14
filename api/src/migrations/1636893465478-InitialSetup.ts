import {MigrationInterface, QueryRunner} from "typeorm";

export class InitialSetup1636893465478 implements MigrationInterface {
    name = 'InitialSetup1636893465478'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`n_ote\` (\`id\` int NOT NULL AUTO_INCREMENT, \`description\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`n_ote\``);
    }

}
