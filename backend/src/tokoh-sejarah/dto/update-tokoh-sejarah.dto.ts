
import { PartialType } from '@nestjs/mapped-types';
import { CreateTokohSejarahDto } from './create-tokoh-sejarah.dto.js';

export class UpdateTokohSejarahDto extends PartialType(
  CreateTokohSejarahDto,
) {}
