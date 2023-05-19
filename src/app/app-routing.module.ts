import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmacionComponent } from './pages/confirmacion/confirmacion/confirmacion.component';
import { ErrorComponent } from './pages/error-component/error/error.component';
import { VerificacionComponent } from './pages/confirmacion/verificacion/verificacion.component';

const routes: Routes = [
  {
    path: "verificacion",
    component: VerificacionComponent,
    data: {queryParams: '_id'}
  },
  {
    path: "confirmacion",
    component: ConfirmacionComponent,
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
