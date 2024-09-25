import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoadNewComponent } from './components/loadnew/loadnew.component';

const routes: Routes = [
  { path: 'carga-nuevo', component: LoadNewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
