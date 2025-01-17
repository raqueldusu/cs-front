import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

import { CrossStitchToolbarComponent } from './components/toolbar/cross-stitch-toolbar.component';
import { LoadNewComponent } from './components/loadnew/loadnew.component';
import { OperationKOComponent } from './components/dialogs/operationKO/operation-ko/operation-ko.component';
import { OperationOKComponent } from './components/dialogs/operationOK/operation-ok/operation-ok.component';
import { MandarotyDialogComponent } from './components/dialogs/mandaroty-dialog/mandaroty-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SearchpatternsComponent } from './components/searchpattern/searchpatterns.component';
import { FilterPatternComponent } from './components/searchpattern/filterpattern/filterpattern.component';
import { TablepatternComponent } from './components/searchpattern/tablepattern/tablepattern.component';
import { TableStockComponent } from './components/stock/tablestock/tablestock.component';
import { FilterStockComponent } from './components/stock/filterstock/filterstock.component';
import { SearchStockComponent } from './components/stock/searchstock.component';



@NgModule({
  declarations: [
    AppComponent,
    CrossStitchToolbarComponent,
    LoadNewComponent,
    OperationKOComponent,
    OperationOKComponent,
    MandarotyDialogComponent,
    TablepatternComponent,
    FilterPatternComponent,
    SearchpatternsComponent,
    TableStockComponent,
    FilterStockComponent,
    SearchStockComponent,   
  ],
  imports: [
    BrowserModule, 
    RouterModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatMenuModule,
    MatIconModule,
    MatDialogModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    HttpClientModule,
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
