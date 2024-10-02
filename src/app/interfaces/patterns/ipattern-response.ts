import { Ipattern } from "./ipattern";

export interface IpatternResponse {
  item_list: Ipattern[];
  paging: {
    page_number: number;
    page_size: number;
    total_number_of_records: number;
    total_number_of_pages: number;
    has_next_page: boolean;
    has_previous_page: boolean;
    sorting_criteria: string;
    totalAmount: number;
    uploadReport: string;
    downloadReport: string;
  };
}
