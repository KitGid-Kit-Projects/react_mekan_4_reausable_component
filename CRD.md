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
08   |         │   │           ├──<props> BaseComponentProps                  |     './src/types/common.ts'                                               |
09   |         │   │           ├──<props> ComponentChildren                   |     './src/types/common.ts'                                               |
10   |         │   │           ├── Input {Product Name Field}                 |     './src/components/Input.tsx'                                          |
11   |         │   │           │   └──<props> BaseComponentProps              |     './src/types/common.ts'                                               |
12   |         │   │           ├── SelectBox {Category Dropdown}              |     './src/components/SelectBox.tsx'                                      |
13   |         │   │           │   ├──<props> BaseComponentProps              |     './src/types/common.ts'                                               |
14   |         │   │           │   └──<props> SelectOption                    |     './src/types/common.ts'                                               |
15   |         │   │           ├── TextArea {Product Description Field}       |     './src/components/TextArea.tsx'                                       |
16   |         │   │           │   └──<props> BaseComponentProps              |     './src/types/common.ts'                                               |
17   |         │   │           └── Button {Create/Update Button}              |     './src/components/Button.tsx'                                         |
18   |         │   │               ├──<props> BaseComponentProps              |     './src/types/common.ts'                                               |
19   |         │   │               └──<props> ButtonVariant                   |     './src/types/common.ts'                                               |
20   |         │   └── [Col] {Table Column}                                   |     'antd'                                                                |
21   |         │       └── TabelCrudExample                                   |     './src/components/TabelCrudExample.tsx'                               |
22   |         │           └── Card {Table Card Container}                    |     './src/components/Card.tsx'                                           |
23   |         │               ├──<props> BaseComponentProps                  |     './src/types/common.ts'                                               |
24   |         │               ├──<props> ComponentChildren                   |     './src/types/common.ts'                                               |
25   |         │               └── Table {CRUD Data Table}                    |     './src/components/Table.tsx'                                          |
26   |         │                   ├──<props> BaseComponentProps              |     './src/types/common.ts'                                               |
27   |         │                   ├── [th] {Name Column}                     |     'native HTML element'                                                 |
28   |         │                   ├── [th] {Category Column}                 |     'native HTML element'                                                 |
29   |         │                   ├── [th] {Description Column}              |     'native HTML element'                                                 |
30   |         │                   ├── [th] {Created At Column}               |     'native HTML element'                                                 |
31   |         │                   └── [th] {Actions Column}                  |     'native HTML element'                                                 |
32   |         │                       └── [Space]                            |     'antd'                                                                |
33   |         │                             └── [AntButton] {Delete Record}  |     'antd'                                                                |
34   |         └── useCrudExample                                             |     './src/hooks/crudExample/useCrudExample.tsx'                          |
35   |             ├──<props> SelectOption                                    |     './src/types/common.ts'                                               |
36   |             ├──<props> CrudRecord                                      |     './src/types/common.ts'                                               |
37   |             └──<props> FormData                                        |     './src/types/common.ts'                                               |
     |                                                                        |                                                                           |
-----|------------------------------------------------------------------------|---------------------------------------------------------------------------|      

## Legend

- `├──<props>` ➝ Component props/attributes/types passed to components
- `[ComponentName]` = Library components
- `ComponentName` = Developer components
- `{Description}` = UI element purpose/content

