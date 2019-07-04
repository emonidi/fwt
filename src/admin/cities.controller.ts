import { Injectable, Inject, Get } from '@nestjs/common';

@Injectable()
export class CitiesControler {
  constructor(@Inject('CitiesService') private citiesService) {}

  @Get('/cities')
  getCities(@Request() req, @Response() res) {}
}
