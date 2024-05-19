import { Injectable } from '@nestjs/common';
import { CreateVaultDto } from './dto/create-vault.dto';
import { UpdateVaultDto } from './dto/update-vault.dto';
import { MockVaults } from './mock/vaults';

@Injectable()
export class VaultsService {
  create(createVaultDto: CreateVaultDto) {
    return 'This action adds a new vault';
  }

  findAll() {
    return MockVaults;
  }

  findOne(id: number) {
    return `This action returns a #${id} vault`;
  }

  update(id: number, updateVaultDto: UpdateVaultDto) {
    return `This action updates a #${id} vault`;
  }

  remove(id: number) {
    return `This action removes a #${id} vault`;
  }
}
