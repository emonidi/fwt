import {
  Inject,
  Get,
  Request,
  Response,
  Controller,
  Param,
  Post,
  Body,
} from '@nestjs/common';

@Controller()
export class CitiesControler {
  constructor(@Inject('CitiesService') private citiesService) {}

  @Get('admin/cities')
  async getCities(@Request() req, @Response() res) {
    try {
      const cities = await this.citiesService.findAll();
      res.render('admin/views/cities', { error: null, cities });
    } catch (e) {
      console.log(e);
    }
  }

  @Get('admin/cities/:id')
  async cityDetail(@Request() req, @Response() res, @Param('id') id) {
    const city = await this.citiesService.findByParam({ _id: id });
    res.render('admin/views/edit_city', { city: city[0] });
  }

  @Post('admin/cities/:id')
  async cityDetailPost(
    @Request() req,
    @Response() res,
    @Param('id') id,
    @Body() body,
  ) {
    try {
      console.log(body);
      const result = await this.citiesService.updateCity(id, body);
      res.redirect('/admin/cities');
    } catch (e) {
      console.log(e);
    }
  }
}
