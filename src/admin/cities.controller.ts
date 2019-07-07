import {
  Inject,
  Get,
  Request,
  Response,
  Controller,
  Param,
  Post,
  Body,
  Render,
  UseGuards,
  UseFilters,
} from '@nestjs/common';
import { async } from 'rxjs/internal/scheduler/async';
import { AuthGuard } from '../auth/auth.guard';
import { AuthExceptionFilter } from './exception.fitler';
@UseGuards(new AuthGuard())
@UseFilters(new AuthExceptionFilter())
@Controller()
export class CitiesControler {
  constructor(@Inject('CitiesService') private citiesService) { }

  @Get('admin/cities')
  async getCities(@Request() req, @Response() res) {
    try {
      const cities = await this.citiesService.findAll();
      res.render('admin/views/cities', { error: null, cities });
    } catch (e) {
      console.log(e);
    }
  }

  @Get('admin/cities/add')
  @Render('admin/views/add_city')

  @Post('admin/cities/add')
  async addCity(@Body() body, @Response() res) {
    try {
      const result = await this.citiesService.add(this.convertLocation(body));
      res.redirect('/admin/cities');
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
      const result = await this.citiesService.updateCity(id, this.convertLocation(body));
      res.redirect('/admin/cities');
    } catch (e) {
      console.log(e);
    }
  }

  private convertLocation(body) {
    body = {
      ...body, location: {
        type: 'Point',
        coordinates: [parseFloat(body.lng), parseFloat(body.lat)],
      },
    };
    delete body.lat;
    delete body.lng;

    return body;
  }
}
