import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmacionComponent } from './pages/confirmacion/confirmacion/confirmacion.component';
import { ErrorComponent } from './pages/error-component/error/error.component';

const routes: Routes = [
  {
    path: "confirmacion",
    component: ConfirmacionComponent,
    data: {queryParams: '_id'}
  },
  {
    path: "error",
    component: ErrorComponent
  },
  {
    path: "**",
    redirectTo: 'error'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
