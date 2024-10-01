import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoadNewComponent } from './components/loadnew/loadnew.component';

const routes: Routes = [
  { path: 'carga-nuevo', component: LoadNewComponent },
  { path: '', pathMatch: 'full', redirectTo: '#' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,  { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
