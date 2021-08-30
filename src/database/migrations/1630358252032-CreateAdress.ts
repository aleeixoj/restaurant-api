import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateAdress1630358252032 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'adress',
        columns: [
          { name: 'id', type: 'uuid', isPrimary: true },
          { name: 'street', type: 'varchar' },
          { name: 'number', type: 'int' },
          { name: 'city', type: 'varchar' },
          { name: 'state', type: 'varchar' },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('adress');
  }
}
