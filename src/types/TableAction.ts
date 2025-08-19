export interface TableAction {
  key: string;
  label: string;
  onClick: (record: any) => void;
  type?: 'primary' | 'danger' | 'default';
}