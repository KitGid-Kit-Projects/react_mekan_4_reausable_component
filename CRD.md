# Component Relation Diagram (CRD)


No   | Tree                                                                   | Code Lines|     Path                                                                  |
-----+------------------------------------------------------------------------+-----------+---------------------------------------------------------------------------|
01   | App.tsx                                                                |   54      |     './src/App.tsx'                                                       |
02   | └── [ConfigProvider]                                                   |           |     'antd'                                                                | 
03   |     └── CrudExample                                                    |   54      |     './src/pages/CrudExample.tsx'                                         |
04   |         ├── [Row] {Layout Container}                                   |           |     'antd'                                                                |
05   |         │   ├── [Col] {Form Column}                                    |           |     'antd'                                                                |
06   |         │   └── [Col] {Table Column}                                   |           |     'antd'                                                                |
07   |         │       └── TableCrudExample                                   |   32      |     './src/components/TableCrudExample.tsx'                               |
08   |         │           └── Card {Table Card Container}                    |   56      |     './src/components/Card.tsx'                                           |
09   |         │               └── Table {CRUD Data Table}                    |   98      |     './src/components/Table.tsx'                                          |
10   |         │                   ├── [th] {Name Column}                     |           |     'native HTML element'                                                 |
11   |         │                   ├── [th] {Category Column}                 |           |     'native HTML element'                                                 |
12   |         │                   ├── [th] {Description Column}              |           |     'native HTML element'                                                 |
13   |         │                   ├── [th] {Created At Column}               |           |     'native HTML element'                                                 |
14   |         │                   └── [th] {Actions Column}                  |           |     'native HTML element'                                                 |
15   |         └── useCrudExample                                             |   54      |     './src/hooks/useCrudExample.tsx'                                      |
     |                                                                        |           |                                                                           |
-----|------------------------------------------------------------------------+-----------+---------------------------------------------------------------------------|
     |                                                       TOTAL CODE LINES |   348     |                                                                           |
-----|------------------------------------------------------------------------+-----------+---------------------------------------------------------------------------|

## Legend                

- `├──<props>` ➝ Component props/attributes/types passed to components
- `[ComponentName]` = Library components
- `ComponentName` = Developer components
- `{Description}` = UI element purpose/content
  
