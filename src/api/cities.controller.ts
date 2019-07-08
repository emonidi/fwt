import { Controller, Get, Inject, Request, Response } from '@nestjs/common';

@Controller('api/cities')
export class CitiesController {

    constructor(@Inject('CitiesService') private citiesService) { }

    @Get()
    async getCities(@Request() req, @Response() res) {
        const result = await this.citiesService.findAll();
        res.json(result);
    }
}
