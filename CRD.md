# Component Relation Diagram (CRD)

No   | Tree                                                                   |     Path                                                                  |
-----+------------------------------------------------------------------------+---------------------------------------------------------------------------|
01   | App.tsx                                                                |     './src/App.tsx'                                                       |
02   | └── [ConfigProvider]                                                   |     'antd'                                                                | 
03   |     └── CrudExample                                                    |     './src/pages/CrudExample.tsx'                                         |
04   |         ├── [Row] {Layout Container}                                   |     'antd'                                                                |
05   |         │   ├── [Col] {Form Column}                                    |     'antd'                                                                |
06   |         │   │   └── CreateUpdateCrudExample                            |     './src/components/CreateUpdateCrudExample.tsx'                        |
07   |         │   │       └── Card {Form Card Container}                     |     './src/components/Card.tsx'                                           |
08   |         │   │           ├── Input {Product Name Field}                 |     './src/components/Input.tsx'                                          |
09   |         │   │           ├── SelectBox {Category Dropdown}              |     './src/components/SelectBox.tsx'                                      |
10   |         │   │           ├── TextArea {Product Description Field}       |     './src/components/TextArea.tsx'                                       |
11   |         │   │           └── Button {Create/Update Button}              |     './src/components/Button.tsx'                                         |
12   |         │   └── [Col] {Table Column}                                   |     'antd'                                                                |
13   |         │       └── TabelCrudExample                                   |     './src/components/TabelCrudExample.tsx'                               |
14   |         │           └── Card {Table Card Container}                    |     './src/components/Card.tsx'                                           |
15   |         │               └── Table {CRUD Data Table}                    |     './src/components/Table.tsx'                                          |
16   |         │                   ├── [th] {Name Column}                     |     'native HTML element'                                                 |
17   |         │                   ├── [th] {Category Column}                 |     'native HTML element'                                                 |
18   |         │                   ├── [th] {Description Column}              |     'native HTML element'                                                 |
19   |         │                   ├── [th] {Created At Column}               |     'native HTML element'                                                 |
20   |         │                   └── [th] {Actions Column}                  |     'native HTML element'                                                 |
21   |         └── useCrudExample                                             |     './src/hooks/useCrudExample.tsx'                          |
     |                                                                        |                                                                           |
-----|------------------------------------------------------------------------|---------------------------------------------------------------------------|      

## Legend

- `├──<props>` ➝ Component props/attributes/types passed to components
- `[ComponentName]` = Library components
- `ComponentName` = Developer components
- `{Description}` = UI element purpose/content

