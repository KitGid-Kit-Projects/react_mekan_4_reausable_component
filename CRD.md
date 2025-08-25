# Component Relation Diagram (CRD)

No   | Tree                                                                   |     Path                                                                  |
-----+------------------------------------------------------------------------+---------------------------------------------------------------------------|
01   | App.tsx                                                                |     './src/App.tsx'                                                       |
02   | └── [ConfigProvider]                                                   |     'antd'                                                                | 
03   |     └── CrudExample                                                    |     './src/pages/CrudExample.tsx'                                         |
04   |         ├── [Row] {Layout Container}                                   |     'antd'                                                                |
05   |         │   ├── [Col] {Form Column}                                    |     'antd'                                                                |
06   |         │   └── [Col] {Table Column}                                   |     'antd'                                                                |
07   |         │       └── TableCrudExample                                   |     './src/components/TableCrudExample.tsx'                               |
08   |         │           └── Card {Table Card Container}                    |     './src/components/Card.tsx'                                           |
09   |         │               └── Table {CRUD Data Table}                    |     './src/components/Table.tsx'                                          |
10   |         │                   ├── [th] {Name Column}                     |     'native HTML element'                                                 |
11   |         │                   ├── [th] {Category Column}                 |     'native HTML element'                                                 |
12   |         │                   ├── [th] {Description Column}              |     'native HTML element'                                                 |
13   |         │                   ├── [th] {Created At Column}               |     'native HTML element'                                                 |
14   |         │                   └── [th] {Actions Column}                  |     'native HTML element'                                                 |
15   |         └── useCrudExample                                             |     './src/hooks/useCrudExample.tsx'                                      |
     |                                                                        |                                                                           |
-----|------------------------------------------------------------------------|---------------------------------------------------------------------------|      

## Legend                

- `├──<props>` ➝ Component props/attributes/types passed to components
- `[ComponentName]` = Library components
- `ComponentName` = Developer components
- `{Description}` = UI element purpose/content

