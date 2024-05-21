import { Injectable } from '@nestjs/common';
import { MockVaults } from './mock/vaults';
import { VaultInfoResponseDto } from './dto/vault-info-response.dto';

@Injectable()
export class VaultsService {
  findAll(): VaultInfoResponseDto[] {
    return MockVaults;
  }

  findOne(id: string): VaultInfoResponseDto {
    const vault = MockVaults.find((vault) => vault.id === id);
    return vault;
  }
}
