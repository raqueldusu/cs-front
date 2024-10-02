import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoadNewComponent } from './components/loadnew/loadnew.component';
import { SearchpatternsComponent } from './components/searchpattern/searchpatterns.component';

const routes: Routes = [
  { path: 'carga-nuevo', component: LoadNewComponent },
  { path: 'consulta-patrones', component: SearchpatternsComponent },
  { path: '', pathMatch: 'full', redirectTo: '#' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,  { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
