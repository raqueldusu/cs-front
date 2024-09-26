import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { iapicommonrequest } from '../../interfaces/load/iapicommonrequest';

import { MandarotyDialogComponent } from '../dialogs/mandaroty-dialog/mandaroty-dialog.component';
import { OperationOKComponent } from '../dialogs/operationOK/operation-ok/operation-ok.component';
import { LoadService } from 'src/app/services/load/load.service';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';

@Component({
  selector: 'app-loadnew',
  templateUrl: './loadnew.component.html',
  styleUrls: ['./loadnew.component.css'],
})
export class LoadNewComponent implements OnInit {
  form: UntypedFormGroup;

  showStopBackup: boolean = false;
  showStopCleanUpBackup: boolean = false;
  showStopPayments: boolean = false;
  showStopCombinePayments: boolean = false;

  constructor(
    private router: Router,
    private loadService: LoadService,
    private dialog: MatDialog,
    private formBuilder: UntypedFormBuilder,
  ) {
    this.form = this.formBuilder.group({
      fileName: '',
      ct: '',
      imageFixedSize: true,
      height: 0,
      width: 0,
      numberColours: 0,
    });
  }

  ngOnInit(): void {}

  goBack() {
    this.router.navigateByUrl('');
  }

  cargaImagen() {
    let idSet: string = '';
    const bodyDataFlow: iapicommonrequest = {
      commandId: '',
      parameter: idSet,
      user: ''
    };
    this.loadService.cargaImagen(bodyDataFlow).subscribe((res) => {
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

      this.loadService.procesarImagen(bodyDataFlow).subscribe((res) => {});

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

    this.loadService.descargarPatron(bodyDataFlow).subscribe((res) => {});
    this.dialog.open(OperationOKComponent);
  }

}
