import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUsers1630358252032 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'user',
        columns: [
          { name: 'id', type: 'uuid', isPrimary: true },
          { name: 'name', type: 'varchar' },
          { name: 'last_name', type: 'varchar' },
          { name: 'password', type: 'varchar' },
          { name: 'email', type: 'varchar' },
          { name: 'phone', type: 'varchar' },
          { name: 'isAdmin', type: 'boolean', default: false },
          { name: 'created_at', type: 'timestamp' },
          { name: 'adress_id', type: 'uuid' },
        ],
        foreignKeys: [
          {
            name: 'FKAdress',
            referencedTableName: 'adress',
            referencedColumnNames: ['id'],
            columnNames: ['adress_id'],
            onDelete: 'SET NULL',
            onUpdate: 'SET NULL',
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('user');
  }
}
