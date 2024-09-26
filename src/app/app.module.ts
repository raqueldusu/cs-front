import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyMenuModule as MatMenuModule } from '@angular/material/legacy-menu';
import { MatLegacyPaginatorModule as MatPaginatorModule } from '@angular/material/legacy-paginator';
import { MatLegacyProgressBarModule as MatProgressBarModule } from '@angular/material/legacy-progress-bar';
import { MatLegacyProgressSpinnerModule as MatProgressSpinnerModule } from '@angular/material/legacy-progress-spinner';
import { MatSortModule } from '@angular/material/sort';
import { MatLegacyTableModule as MatTableModule } from '@angular/material/legacy-table';

import { CrossStitchToolbarComponent } from './components/toolbar/cross-stitch-toolbar.component';
import { LoadNewComponent } from './components/loadnew/loadnew.component';
import { OperationKOComponent } from './components/dialogs/operationKO/operation-ko/operation-ko.component';
import { OperationOKComponent } from './components/dialogs/operationOK/operation-ok/operation-ok.component';
import { MandarotyDialogComponent } from './components/dialogs/mandaroty-dialog/mandaroty-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    CrossStitchToolbarComponent,
    LoadNewComponent,
    OperationKOComponent,
    OperationOKComponent,
    MandarotyDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatMenuModule,
    MatIconModule,
    MatDialogModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
