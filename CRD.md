# Component Relation Diagram (CRD)

     |                                                                        | Code   |                                                                           |
No   | Tree                                                                   | Lines  |     Path                                                                  |
-----+------------------------------------------------------------------------+--------+---------------------------------------------------------------------------|
01   | App.tsx                                                                |   41   |     './src/App.tsx'                                                       |
02   | └── [ConfigProvider]                                                   |        |     'antd'                                                                | 
03   |     └── CrudExample                                                    |   35   |     './src/pages/CrudExample.tsx'                                         |
04   |         ├── [Row] {Layout Container}                                   |        |     'antd'                                                                |
05   |         │   ├── [Col] {Form Column}                                    |        |     'antd'                                                                |
06   |         │   │   └── CreateUpdateCrudExample                            |   47   |     './src/components/CreateUpdateCrudExample.tsx'                        |
07   |         │   │       └── Card {Form Card Container}                     |   25   |     './src/components/Card.tsx'                                           |
08   |         │   │           ├── Input {Product Name Field}                 |   29   |     './src/components/Input.tsx'                                          |
09   |         │   │           ├── SelectBox {Category Dropdown}              |   36   |     './src/components/SelectBox.tsx'                                      |
10   |         │   │           ├── TextArea {Product Description Field}       |   40   |     './src/components/TextArea.tsx'                                       |
11   |         │   │           └── Button {Create/Update Button}              |   34   |     './src/components/Button.tsx'                                         |
12   |         │   └── [Col] {Table Column}                                   |        |     'antd'                                                                |
13   |         │       └── TableCrudExample                                   |   24   |     './src/components/TableCrudExample.tsx'                               |
14   |         │           └── Card {Table Card Container}                    |   25   |     './src/components/Card.tsx'                                           |
15   |         │               └── Table {CRUD Data Table}                    |   78   |     './src/components/Table.tsx'                                          |
16   |         │                   ├── [th] {Name Column}                     |        |     'native HTML element'                                                 |
17   |         │                   ├── [th] {Category Column}                 |        |     'native HTML element'                                                 |
18   |         │                   ├── [th] {Description Column}              |        |     'native HTML element'                                                 |
19   |         │                   ├── [th] {Created At Column}               |        |     'native HTML element'                                                 |
20   |         │                   └── [th] {Actions Column}                  |        |     'native HTML element'                                                 |
21   |         └── useCrudExample                                             |   45   |     './src/hooks/useCrudExample.tsx'                                      |

-----+------------------------------------------------------------------------+--------+---------------------------------------------------------------------------|
     |                                                       TOTAL CODE LINES |   409  |                                                                           |
-----+------------------------------------------------------------------------+--------+---------------------------------------------------------------------------|

## Legend

- `├──<props>` ➝ Component props/attributes/types passed to components
- `[ComponentName]` = Library components
- `ComponentName` = Developer components
- `{Description}` = UI element purpose/content

