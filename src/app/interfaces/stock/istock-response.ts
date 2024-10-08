import { IStock } from './istock';

export interface IStockResponse {
  item_list: IStock[];
  paging: {
    page_number: number;
    page_size: number;
    total_number_of_records: number;
    total_number_of_pages: number;
    has_next_page: boolean;
    has_previous_page: boolean;
    sorting_criteria: string;
  };
}
