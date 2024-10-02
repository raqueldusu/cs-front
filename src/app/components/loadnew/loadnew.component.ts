import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { iapicommonrequest } from '../../interfaces/load/iapicommonrequest';

import { MandarotyDialogComponent } from '../dialogs/mandaroty-dialog/mandaroty-dialog.component';
import { OperationOKComponent } from '../dialogs/operationOK/operation-ok/operation-ok.component';
import { LoadService } from 'src/app/services/load/load.service';
import { MatDialog } from '@angular/material/dialog';
import { Iselection } from 'src/app/interfaces/common/iselection';
import { ISendImageRequest } from 'src/app/interfaces/load/isendimagerequest';

@Component({
  selector: 'app-loadnew',
  templateUrl: './loadnew.component.html',
  styleUrls: ['./loadnew.component.css'],
})
export class LoadNewComponent implements OnInit {
  form: FormGroup;

  collectionList: Iselection[] = [];
  showStopBackup: boolean = false;
  showStopCleanUpBackup: boolean = false;
  imageB64: string = '';
  previewB64: string = '';
  height: number = 0;

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
      const todos: Iselection = {
        id: '',
        desc: 'Todos',
        selected: true,
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

  procesarImagen() {
    let mandatory: boolean = false;
    let width: number = 0;
    let numColours: number = 0;
    let image: string = '';

    if (this.width != null && this.width.value != '0' && this.width.value != '') {
      width = this.width.value;
    } else {
      mandatory = true;
    }

    if (this.nColores != null && this.nColores.value != '0' && this.nColores.value != '') {
      numColours = this.nColores.value;
    } else {
      mandatory = true;
    }

    if(this.imageB64 != null && this.imageB64 != ''){
      image = this.imageB64;
    } else {
      mandatory = true;
    }

    if (mandatory){
      this.dialog.open(MandarotyDialogComponent);
    } else {

      const request: ISendImageRequest = {
        width: width,
        colours: numColours,
        image: image,
        name: '',
        user: '',
        collection: '',
      }

      this.loadService.procesarImagen(request).subscribe((result) => {
        if (result){
          setTimeout(() => {
            this.previewB64 = result.image;
            this.height = result.height;
          }, 2000)
        }
      });

      setTimeout(() => {
        this.dialog.open(OperationOKComponent);
      }, 1200);
    }
  }

  get width() {
    return this.form.get('width');
  }

  get nColores() {
    return this.form.get('numberColours');
  }

  get collection() {
    return this.form.get('collection');
  }

  get name() {
    return this.form.get('name');
  }

  guardarPatron() {
    let mandatory: boolean = false;
    let width: number = 0;
    let numColours: number = 0;
    let image: string = '';
    let name: string = '';
    let collection: string = '';

    if (this.width != null && this.width.value != '0' && this.width.value != '') {
      width = this.width.value;
    } else {
      mandatory = true;
    }

    if (this.name != null && this.name.value != '0' && this.name.value != '') {
      name = this.name.value;
    } else {
      mandatory = true;
    }

    if (this.nColores != null && this.nColores.value != '0' && this.nColores.value != '') {
      numColours = this.nColores.value;
    } else {
      mandatory = true;
    }
    if(this.collection != null && this.collection.value != ''){
      collection = this.collection.value;
    }

    if(this.imageB64 != null && this.imageB64 != ''){
      image = this.imageB64;
    } else {
      mandatory = true;
    }

    if (mandatory){
      this.dialog.open(MandarotyDialogComponent);
    } else {
      const request: ISendImageRequest = {
        width: width,
        colours: numColours,
        image: image,
        name: name,
        user: '',
        collection: collection,
      }

      this.loadService.descargarPatron(request).subscribe((res: any) => {});
      this.dialog.open(OperationOKComponent);
    }

    
  }

}
