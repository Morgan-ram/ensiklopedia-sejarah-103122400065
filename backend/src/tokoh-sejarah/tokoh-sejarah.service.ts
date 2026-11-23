import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { CreateTokohSejarahDto } from './dto/create-tokoh-sejarah.dto.js';
import { UpdateTokohSejarahDto } from './dto/update-tokoh-sejarah.dto.js';
import { TokohSejarah } from './entities/tokoh-sejarah.entity.js';

@Injectable()
export class TokohSejarahService {
  private tokohList: TokohSejarah[] = [
    {
      id: 1,
      nama: 'R.A. Kartini',
      negara: 'Indonesia',
      peran: 'Pelopor emansipasi perempuan',
      biografi: 'Tokoh yang memperjuangkan pendidikan dan hak perempuan Indonesia.',
      tahunLahir: 1879,
      
    },
    {
      id: 2,
      nama: 'Soekarno',
      negara: 'Indonesia',
      peran: 'Proklamator dan Presiden pertama',
      biografi: 'Tokoh proklamator kemerdekaan Republik Indonesia.',
      tahunLahir: 1901,
      
    },
    {
      id: 3,
      nama: 'Marie Curie',
      negara: 'Polandia dan Prancis',
      peran: 'Ilmuwan fisika dan kimia',
      biografi: 'Ilmuwan yang melakukan penelitian penting tentang radioaktivitas.',
      tahunLahir: 1867,
     
    },
  ];

  // CREATE: Menambahkan tokoh
  create(createTokohSejarahDto: CreateTokohSejarahDto) {
    const namaDuplikat = this.tokohList.some(
      (tokoh) =>
        tokoh.nama.toLowerCase() === createTokohSejarahDto.nama.toLowerCase(),
    );

    if (namaDuplikat) {
      throw new ConflictException('Nama tokoh sudah terdaftar');
    }

    const tokohBaru: TokohSejarah = {
      id: this.tokohList.length > 0
        ? Math.max(...this.tokohList.map((tokoh) => tokoh.id)) + 1
        : 1,
      ...createTokohSejarahDto,
    };

    this.tokohList.push(tokohBaru);
    return tokohBaru;
  }

  // READ ALL: Mengambil semua tokoh
  findAll() {
    return this.tokohList;
  }

  // READ ONE: Mengambil satu tokoh berdasarkan ID
  findOne(id: number) {
    const tokoh = this.tokohList.find((tokoh) => tokoh.id === id);

    if (!tokoh) {
      throw new NotFoundException(`Tokoh dengan ID ${id} tidak ditemukan`);
    }

    return tokoh;
  }

  // UPDATE: Mengubah data tokoh
  update(id: number, updateTokohSejarahDto: UpdateTokohSejarahDto) {
    const tokoh = this.findOne(id);

    Object.assign(tokoh, updateTokohSejarahDto);

    return tokoh;
  }

  // DELETE: Menghapus tokoh
  remove(id: number) {
    const tokoh = this.findOne(id);

    this.tokohList = this.tokohList.filter(
      (item) => item.id !== id,
    );

    return {
      message: 'Tokoh berhasil dihapus',
      data: tokoh,
    };
  }
}
