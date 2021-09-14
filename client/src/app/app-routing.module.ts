import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { AppGuard } from './app.guard';
import { ProductComponent } from './pages/product/product.component';
import { PublicityComponent } from './pages/publicity/publicity.component';
import { SettingComponent } from './pages/setting/setting.component';
const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent, canActivate:[AppGuard]},
  {path: '', redirectTo: 'login', pathMatch: "full"},
  {path: 'product',component: ProductComponent, canActivate:[AppGuard]},
  {path: 'publicity', component: PublicityComponent, canActivate:[AppGuard]},
  {path: 'setting', component:SettingComponent, canActivate:[AppGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
