# Component Relation Diagram (CRD)

No   | Tree                                                                   | Code Lines|     Path                                                                  |
-----+------------------------------------------------------------------------+-----------+---------------------------------------------------------------------------|
01   | App.tsx                                                                |   54      |     './src/App.tsx'                                                       |
02   | └── [ConfigProvider]                                                   |           |     'antd'                                                                | 
03   |     └── CrudExample                                                    |   54      |     './src/pages/CrudExample.tsx'                                         |
04   |         ├── [Row] {Layout Container}                                   |           |     'antd'                                                                |
05   |         │   ├── [Col] {Form Column}                                    |           |     'antd'                                                                |
06   |         │   │   └── CreateUpdateCrudExample                            |   49      |     './src/components/CreateUpdateCrudExample.tsx'                        |
07   |         │   │       └── Card {Form Card Container}                     |   56      |     './src/components/Card.tsx'                                           |
08   |         │   │           ├──<props> BaseComponentProps                  |           |     './src/types/common.ts'                                               |
09   |         │   │           ├──<props> ComponentChildren                   |           |     './src/types/common.ts'                                               |
10   |         │   │           ├── Input {Product Name Field}                 |   46      |     './src/components/Input.tsx'                                          |
11   |         │   │           │   └──<props> BaseComponentProps              |           |     './src/types/common.ts'                                               |
12   |         │   │           ├── SelectBox {Category Dropdown}              |   54      |     './src/components/SelectBox.tsx'                                      |
13   |         │   │           │   ├──<props> BaseComponentProps              |           |     './src/types/common.ts'                                               |
14   |         │   │           │   └──<props> SelectOption                    |           |     './src/types/common.ts'                                               |
15   |         │   │           ├── TextArea {Product Description Field}       |   54      |     './src/components/TextArea.tsx'                                       |
16   |         │   │           │   └──<props> BaseComponentProps              |           |     './src/types/common.ts'                                               |
17   |         │   │           └── Button {Create/Update Button}              |   61      |     './src/components/Button.tsx'                                         |
18   |         │   │               ├──<props> BaseComponentProps              |           |     './src/types/common.ts'                                               |
19   |         │   │               └──<props> ButtonVariant                   |           |     './src/types/common.ts'                                               |
20   |         │   └── [Col] {Table Column}                                   |           |     'antd'                                                                |
21   |         │       └── TabelCrudExample                                   |   32      |     './src/components/TabelCrudExample.tsx'                               |
22   |         │           └── Card {Table Card Container}                    |   56      |     './src/components/Card.tsx'                                           |
23   |         │               ├──<props> BaseComponentProps                  |           |     './src/types/common.ts'                                               |
24   |         │               ├──<props> ComponentChildren                   |           |     './src/types/common.ts'                                               |
25   |         │               └── Table {CRUD Data Table}                    |   98      |     './src/components/Table.tsx'                                          |
26   |         │                   ├──<props> BaseComponentProps              |           |     './src/types/common.ts'                                               |
27   |         │                   ├── [th] {Name Column}                     |           |     'native HTML element'                                                 |
28   |         │                   ├── [th] {Category Column}                 |           |     'native HTML element'                                                 |
29   |         │                   ├── [th] {Description Column}              |           |     'native HTML element'                                                 |
30   |         │                   ├── [th] {Created At Column}               |           |     'native HTML element'                                                 |
31   |         │                   └── [th] {Actions Column}                  |           |     'native HTML element'                                                 |
34   |         └── useCrudExample                                             |   54      |     './src/hooks/crudExample/useCrudExample.tsx'                          |
35   |             ├──<props> SelectOption                                    |           |     './src/types/common.ts'                                               |
36   |             ├──<props> CrudRecord                                      |           |     './src/types/common.ts'                                               |
37   |             └──<props> FormData                                        |           |     './src/types/common.ts'                                               |
     |                                                                        |           |                                                                           |
-----|------------------------------------------------------------------------+-----------+---------------------------------------------------------------------------|
     |                                                       TOTAL CODE LINES |   558     |                                                                           |
-----|------------------------------------------------------------------------+-----------+---------------------------------------------------------------------------|

## Legend

- `├──<props>` ➝ Component props/attributes/types passed to components
- `[ComponentName]` = Library components
- `ComponentName` = Developer components
- `{Description}` = UI element purpose/content

