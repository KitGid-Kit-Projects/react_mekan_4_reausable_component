# Component Relation Diagram (CRD)

No   | Tree                                                                   | Code Lines|     Path                                                                  |
-----+------------------------------------------------------------------------+-----------+---------------------------------------------------------------------------|
01   | App.tsx                                                                |   41      |     './src/App.tsx'                                                       |
02   | └── [ConfigProvider]                                                   |           |     'antd'                                                                | 
03   |     └── CrudExample                                                    |   45      |     './src/pages/CrudExample.tsx'                                         |
04   |         ├── [Row] {Layout Container}                                   |           |     'antd'                                                                |
05   |         │   ├── [Col] {Form Column}                                    |           |     'antd'                                                                |
06   |         │   │   └── CreateUpdateCrudExample                            |   57      |     './src/components/CreateUpdateCrudExample.tsx'                        |
07   |         │   │       └── Card {Form Card Container}                     |   25      |     './src/components/Card.tsx'                                           |
08   |         │   │           ├── Input {Product Name Field}                 |   33      |     './src/components/Input.tsx'                                          |
09   |         │   │           ├── SelectBox {Category Dropdown}              |   42      |     './src/components/SelectBox.tsx'                                      |
10   |         │   │           ├── TextArea {Product Description Field}       |   44      |     './src/components/TextArea.tsx'                                       |
11   |         │   │           └── Button {Create/Update Button}              |   36      |     './src/components/Button.tsx'                                         |
12   |         │   └── [Col] {Table Column}                                   |           |     'antd'                                                                |
13   |         │       └── TabelCrudExample                                   |   24      |     './src/components/TabelCrudExample.tsx'                               |
14   |         │           └── Card {Table Card Container}                    |   25      |     './src/components/Card.tsx'                                           |
15   |         │               └── Table {CRUD Data Table}                    |   69      |     './src/components/Table.tsx'                                          |
16   |         │                   ├── [th] {Name Column}                     |           |     'native HTML element'                                                 |
17   |         │                   ├── [th] {Category Column}                 |           |     'native HTML element'                                                 |
18   |         │                   ├── [th] {Description Column}              |           |     'native HTML element'                                                 |
19   |         │                   ├── [th] {Created At Column}               |           |     'native HTML element'                                                 |
20   |         └── useCrudExample                                             |   84      |     './src/hooks/useCrudExample.tsx'                                      |
     |                                                                        |           |                                                                           |
-----|------------------------------------------------------------------------+-----------+---------------------------------------------------------------------------|
     |                                                       TOTAL CODE LINES |   509     |                                                                           |
-----|------------------------------------------------------------------------+-----------+---------------------------------------------------------------------------|

## Legend

- `├──<props>` ➝ Component props/attributes/types passed to components
- `[ComponentName]` = Library components
- `ComponentName` = Developer components
- `{Description}` = UI element purpose/content

