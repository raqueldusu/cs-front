import { SelectionModel } from '@angular/cdk/collections';
import { DatePipe, registerLocaleData } from '@angular/common';
import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import es from '@angular/common/locales/es';
import { IStock } from 'src/app/interfaces/stock/istock';
import { IApiStockFilter } from 'src/app/interfaces/stock/iapistockfilter';
import { SearchstockService } from 'src/app/services/stock/searchstock.service';

@Component({
  selector: 'app-tablestock',
  templateUrl: './tablestock.component.html',
  styleUrls: ['./tablestock.component.css'],
})
export class TableStockComponent implements OnInit, AfterViewInit {
  spanishRangeLabel = (page: number, pageSize: number, length: number) => {
    if (length == 0 || pageSize == 0) {
      return `0 de ${length}`;
    }

    length = Math.max(length, 0);

    const startIndex = page * pageSize;
    const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;

    return `${startIndex + 1} - ${endIndex} de ${length}`;
  };

  stockDataSource: MatTableDataSource<IStock> = new MatTableDataSource<IStock>();
  displayedColumns = [
    'check',
    'filename',
    'size',
    'numberColours',
    'preview',
    'btn1',
  ];
  clickedRows = new Set<any>();
  selection = new SelectionModel<any>(true, []);
  selectedRowIndex = -1;

  totalRows: number = 0;
  pageSize: any = 10;
  currentPage: any = 0;
  pageSizeOptions: number[] = [3, 10, 25, 50];

  sortColum: string = '';

  spinner: boolean = true;
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'indeterminate';
  value = 50;
  bufferValue = 75;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('empTbSort') empTbSort = new MatSort();

  constructor(
    private stockService: SearchstockService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    setTimeout(() => {
      registerLocaleData(es);
      this.getStock(this.sortColum, false);
    }, 1100);
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.stockDataSource.paginator = this.paginator;
    });
  }

  getStock(sortColum: string, pageChange: boolean, request?: IApiStockFilter) {
    this.spinner = true;
    this.clickedRows.clear();
    this.selection.clear();

    this.stockService.searchStock(this.currentPage, this.pageSize, sortColum, request).subscribe((response) => {
      if (response != null && response != undefined) {
        this.stockDataSource = new MatTableDataSource<IStock>(response.item_list);

        if (response.paging != null && response.paging != undefined) {
          this.currentPage = response.paging.page_number;
          if (!pageChange) {
            this.paginator.firstPage();
          }

          this.paginator.pageIndex = this.currentPage;
          this.paginator.length = response.paging.total_number_of_records;
          this.paginator._intl.itemsPerPageLabel = 'Registros por página';
          this.paginator._intl.nextPageLabel = 'Siguiente';
          this.paginator._intl.previousPageLabel = 'Anterior';
          this.paginator._intl.lastPageLabel = 'Última página';
          this.paginator._intl.firstPageLabel = 'Primera página';
          this.paginator._intl.getRangeLabel = this.spanishRangeLabel;
        }
      }
      this.spinner = false;
    });
  }

  deletePatterns() {
    //TODO
  }

  pageChanged(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.currentPage = event.pageIndex;
    this.getStock(this.sortColum, true);
  }

  customSort = (sort: Sort) => {
    if (sort.direction != '') {
      this.sortColum = sort.active + ',' + sort.direction.toLocaleUpperCase();
    } else {
      this.sortColum = '';
    }

    if (this.currentPage != 0) {
      this.getStock(this.sortColum, true);
    } else {
      this.getStock(this.sortColum, false);
    }
  };

  filter = (event: Event) => {
    const filterValue = (event.target as HTMLInputElement).value;
    this.stockDataSource.filter = filterValue.trim().toLocaleLowerCase();
  };

  refresh() {
    this.getStock(this.sortColum, false);
  }

  searchStock(stock: IStock) {
    this.router.navigate(['/consulta-patron', stock.idStock]);
  }

  newLote() {
    this.router.navigateByUrl('cargar-patron');
  }

  isSomeSelected() {
    return this.selection.selected.length > 0;
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.stockDataSource.data.length;
    return numSelected === numRows;
  }

  selectRow(row: any, i: number) {
    this.selectedRowIndex = i;
  }
}
