import { NgModule } from '@angular/core';
import  {RouterModule, Routes} from '@angular/router'
import { HomeComponent } from './components/home/home.component';
import { AddFoodComponent } from './components/add-food/add-food.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'add-food', component: AddFoodComponent}
];


@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
