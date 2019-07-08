import { Routes, Route } from "@angular/router";
import { HomeComponent } from "app/home/home.component";
import {CityComponent} from 'app/city/city.component';

export const AppRoutes: Routes = [
    {
        path: '', component: HomeComponent
    },
    {
        path:':cityName', component: CityComponent
    }
]

