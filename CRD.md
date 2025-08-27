# Component Relation Diagram (CRD)

No   | Tree                                                                   | Code Lines|     Path                                                                  |
-----+------------------------------------------------------------------------+-----------+---------------------------------------------------------------------------|
01   | App.tsx                                                                |   36      |     './src/App.tsx'                                                       |
02   | └── [ConfigProvider]                                                   |           |     'antd'                                                                | 
03   |     └── CrudExample                                                    |   54      |     './src/pages/CrudExample.tsx'                                         |
04   |         ├── [Row] {Layout Container}                                   |           |     'antd'                                                                |
05   |         │   ├── [Col] {Form Column}                                    |           |     'antd'                                                                |
06   |         │   │   └── CreateUpdateCrudExample                            |   66      |     './src/components/CreateUpdateCrudExample.tsx'                        |
07   |         │   │       └── Card {Form Card Container}                     |   33      |     './src/components/Card.tsx'                                           |
08   |         │   │           ├──<props> BaseComponentProps                  |   24      |     './src/types/common.ts'                                               |
09   |         │   │           ├──<props> ComponentChildren                   |           |     './src/types/common.ts'                                               |
10   |         │   │           ├── Input {Product Name Field}                 |   43      |     './src/components/Input.tsx'                                          |
11   |         │   │           │   └──<props> BaseComponentProps              |           |     './src/types/common.ts'                                               |
12   |         │   │           ├── SelectBox {Category Dropdown}              |   53      |     './src/components/SelectBox.tsx'                                      |
13   |         │   │           │   ├──<props> BaseComponentProps              |           |     './src/types/common.ts'                                               |
14   |         │   │           │   └──<props> SelectOption                    |           |     './src/types/common.ts'                                               |
15   |         │   │           ├── TextArea {Product Description Field}       |   56      |     './src/components/TextArea.tsx'                                       |
16   |         │   │           │   └──<props> BaseComponentProps              |           |     './src/types/common.ts'                                               |
17   |         │   │           ├── Button {Cancel Button}                     |   45      |     './src/components/Button.tsx'                                         |
18   |         │   │           │   ├──<props> BaseComponentProps              |           |     './src/types/common.ts'                                               |
19   |         │   │           │   └──<props> ButtonVariant                   |           |     './src/types/common.ts'                                               |
20   |         │   │           └── Button {Create/Update Button}              |   45      |     './src/components/Button.tsx'                                         |
21   |         │   │               ├──<props> BaseComponentProps              |           |     './src/types/common.ts'                                               |
22   |         │   │               └──<props> ButtonVariant                   |           |     './src/types/common.ts'                                               |
23   |         │   └── [Col] {Table Column}                                   |           |     'antd'                                                                |
24   |         │       └── TableCrudExample                                   |   28      |     './src/components/TableCrudExample.tsx'                               |
25   |         │           └── Card {Table Card Container}                    |   33      |     './src/components/Card.tsx'                                           |
26   |         │               ├──<props> BaseComponentProps                  |           |     './src/types/common.ts'                                               |
27   |         │               ├──<props> ComponentChildren                   |           |     './src/types/common.ts'                                               |
28   |         │               └── Table {CRUD Data Table}                    |   87      |     './src/components/Table.tsx'                                          |
29   |         │                   ├──<props> BaseComponentProps              |           |     './src/types/common.ts'                                               |
30   |         │                   ├── [th] {Name Column}                     |           |     'native HTML element'                                                 |
31   |         │                   ├── [th] {Category Column}                 |           |     'native HTML element'                                                 |
32   |         │                   ├── [th] {Description Column}              |           |     'native HTML element'                                                 |
33   |         │                   ├── [th] {Created At Column}               |           |     'native HTML element'                                                 |
34   |         │                   └── [th] {Actions Column}                  |           |     'native HTML element'                                                 |
35   |         │                       └── [Space]                            |           |     'antd'                                                                |
37   |         │                             ├── [AntButton] {Edit Record}    |           |     'antd'                                                                |
38   |         │                             └── [AntButton] {Delete Record}  |           |     'antd'                                                                |
40   |         └── useCrudExample                                             |   130     |     './src/hooks/useCrudExample.tsx'                                      |
41   |             ├──<props> SelectOption                                    |           |     './src/types/common.ts'                                               |
42   |             ├──<props> CrudRecord                                      |           |     './src/types/common.ts'                                               |
43   |             └──<props> FormData                                        |           |     './src/types/common.ts'                                               |
     |                                                                        |           |                                                                           |
-----|------------------------------------------------------------------------+-----------+---------------------------------------------------------------------------|
     |                                                       TOTAL CODE LINES |   627     |                                                                           |
-----|------------------------------------------------------------------------+-----------+---------------------------------------------------------------------------|

## Legend

- `├──<props>` ➝ Component props/attributes/types passed to components
- `[ComponentName]` = Library components
- `ComponentName` = Developer components
- `{Description}` = UI element purpose/content