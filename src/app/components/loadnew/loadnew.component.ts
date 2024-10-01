import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { iapicommonrequest } from '../../interfaces/load/iapicommonrequest';

import { MandarotyDialogComponent } from '../dialogs/mandaroty-dialog/mandaroty-dialog.component';
import { OperationOKComponent } from '../dialogs/operationOK/operation-ok/operation-ok.component';
import { LoadService } from 'src/app/services/load/load.service';
import { MatDialog } from '@angular/material/dialog';
import { Isellection } from 'src/app/interfaces/common/isellection';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-loadnew',
  templateUrl: './loadnew.component.html',
  styleUrls: ['./loadnew.component.css'],
})
export class LoadNewComponent implements OnInit {
  form: FormGroup;

  collectionList: Isellection[] = [];
  showStopBackup: boolean = false;
  showStopCleanUpBackup: boolean = false;
  imageB64: string = '';
  previewB64: string = '';

  constructor(
    private router: Router,
    private loadService: LoadService,
    private dialog: MatDialog,
    private formBuilder: FormBuilder,
  ) {
    this.form = this.formBuilder.group({
      fileName: '',
      name: '',
      width: 0,
      numberColours: 0,
      collection: 0,
    });
  }

  ngOnInit(): void {}

  getCollections() {
    this.loadService.searchCollections().subscribe((response) => {
      const todos: Isellection = {
        id: '',
        desc: 'Todos',
      };

      response.unshift(todos);
      this.collectionList = response;
    });
  }

  goBack() {
    this.router.navigateByUrl('');
  }

  capturarFichero(event: any): any {
    const file = event.target.files[0];
    
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.imageB64 = String (reader.result);
    };
    reader.onerror = error => {
      this.imageB64 = '';
    }
    setTimeout(() => {
      console.log(this.imageB64);
    }, 1200);
    
  }

  cargaImagen() {
    let idSet: string = '';
    const bodyDataFlow: iapicommonrequest = {
      commandId: '',
      parameter: idSet,
      user: ''
    };
    this.loadService.cargaImagen(bodyDataFlow).subscribe((res: any) => {
    });

    this.dialog.open(OperationOKComponent);
  }

  procesarImagen() {
    let idSet: string = '';

    if (idSet === '') {
      this.dialog.open(MandarotyDialogComponent);
    } else {
      const bodyDataFlow: iapicommonrequest = {
        commandId: '',
        parameter: idSet,
        user: ''
      };

      this.loadService.procesarImagen(bodyDataFlow).subscribe((res: any) => {});

      setTimeout(() => {
        this.dialog.open(OperationOKComponent);
      }, 1200);
    }
  }

  get width() {
    return this.form.get('width');
  }

  get height() {
    return this.form.get('height');
  }

  get nColores() {
    return this.form.get('numberColours');
  }

  get ct() {
    return this.form.get('ct');
  }

  get fileName() {
    return this.form.get('filename');
  }

  descargarPatron() {
    const bodyDataFlow: iapicommonrequest = {
      commandId: '',
      parameter: '',
      user: ''
    };

    this.loadService.descargarPatron(bodyDataFlow).subscribe((res: any) => {});
    this.dialog.open(OperationOKComponent);
  }

}
