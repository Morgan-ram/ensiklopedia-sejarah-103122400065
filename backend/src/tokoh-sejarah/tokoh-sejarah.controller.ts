
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';

import { TokohSejarahService } from './tokoh-sejarah.service.js';
import { CreateTokohSejarahDto } from './dto/create-tokoh-sejarah.dto.js';
import { UpdateTokohSejarahDto } from './dto/update-tokoh-sejarah.dto.js';

@Controller('tokoh-sejarah')
export class TokohSejarahController {
  constructor(
    private readonly tokohSejarahService: TokohSejarahService,
  ) {}

  // POST: Menambahkan tokoh
  @Post()
  create(@Body() createTokohSejarahDto: CreateTokohSejarahDto) {
    return this.tokohSejarahService.create(createTokohSejarahDto);
  }

  // GET: Mengambil semua tokoh
  @Get()
  findAll() {
    return this.tokohSejarahService.findAll();
  }

  // GET: Mengambil tokoh berdasarkan ID
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.tokohSejarahService.findOne(id);
  }

  // PATCH: Mengubah tokoh
  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateTokohSejarahDto: UpdateTokohSejarahDto,
  ) {
    return this.tokohSejarahService.update(
      id,
      updateTokohSejarahDto,
    );
  }

  // DELETE: Menghapus tokoh
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.tokohSejarahService.remove(id);
  }
}
