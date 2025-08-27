# Component Relation Diagram (CRD)

     |                                                                        | Code   |                                                                           |
No   | Tree                                                                   | Lines  |     Path                                                                  |
-----+------------------------------------------------------------------------+--------+---------------------------------------------------------------------------|
01   | App.tsx                                                                |   54   |     './src/App.tsx'                                                       |
02   | └── [ConfigProvider]                                                   |        |     'antd'                                                                | 
03   |     └── CrudExample                                                    |   54   |     './src/pages/CrudExample.tsx'                                         |
04   |         ├── [Row] {Layout Container}                                   |        |     'antd'                                                                |
05   |         │   ├── [Col] {Form Column}                                    |        |     'antd'                                                                |
06   |         │   │   └── CreateUpdateCrudExample                            |   49   |     './src/components/CreateUpdateCrudExample.tsx'                        |
07   |         │   │       └── Card {Form Card Container}                     |   56   |     './src/components/Card.tsx'                                           |
08   |         │   │           ├── Input {Product Name Field}                 |   46   |     './src/components/Input.tsx'                                          |
09   |         │   │           ├── SelectBox {Category Dropdown}              |   54   |     './src/components/SelectBox.tsx'                                      |
10   |         │   │           ├── TextArea {Product Description Field}       |   54   |     './src/components/TextArea.tsx'                                       |
11   |         │   │           └── Button {Create/Update Button}              |   61   |     './src/components/Button.tsx'                                         |
12   |         │   └── [Col] {Table Column}                                   |        |     'antd'                                                                |
13   |         │       └── TableCrudExample                                   |   32   |     './src/components/TableCrudExample.tsx'                               |
14   |         │           └── Card {Table Card Container}                    |   56   |     './src/components/Card.tsx'                                           |
15   |         │               └── Table {CRUD Data Table}                    |   98   |     './src/components/Table.tsx'                                          |
16   |         │                   ├── [th] {Name Column}                     |        |     'native HTML element'                                                 |
17   |         │                   ├── [th] {Category Column}                 |        |     'native HTML element'                                                 |
18   |         │                   ├── [th] {Description Column}              |        |     'native HTML element'                                                 |
19   |         │                   ├── [th] {Created At Column}               |        |     'native HTML element'                                                 |
20   |         │                   └── [th] {Actions Column}                  |        |     'native HTML element'                                                 |
21   |         └── useCrudExample                                             |   54   |     './src/hooks/useCrudExample.tsx'                                      |

-----+------------------------------------------------------------------------+--------+---------------------------------------------------------------------------|
     |                                                       TOTAL CODE LINES |   708  |                                                                           |
-----+------------------------------------------------------------------------+--------+---------------------------------------------------------------------------|

## Legend

- `├──<props>` ➝ Component props/attributes/types passed to components
- `[ComponentName]` = Library components
- `ComponentName` = Developer components
- `{Description}` = UI element purpose/content

