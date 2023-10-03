import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ViewComponent } from './pages/view/view.component';
import { ViewTwoComponent } from './pages/view-two/view-two.component';
import { ViewThreeComponent } from './pages/view-three/view-three.component';

const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
  { path: 'View_1', component: ViewComponent },
  { path: 'View_2', component: ViewTwoComponent },
  { path: 'View_3', component: ViewThreeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
