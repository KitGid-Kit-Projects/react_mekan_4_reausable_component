# Component Relation Diagram (CRD)

| No | Tree                                                                                        | Code Lines | Path                                                                  |
|----|---------------------------------------------------------------------------------------------|-----------:|-----------------------------------------------------------------------|
| 01 | App.tsx                                                                                     | 41         | './src/App.tsx'                                                       |
| 02 | └── [ConfigProvider]                                                                        |            | 'antd'                                                                |
| 03 |     └── CrudExample                                                                         | 45         | './src/pages/CrudExample.tsx'                                         |
| 04 |         │   ├──<props> formData:useCrudExample-> formData                                   |            |                                                                       |
| 05 |         │   ├──<props> records:useCrudExample-> records                                     |            |                                                                       |
| 06 |         │   ├──<props> handleInputChange:useCrudExample-> handleInputChange                 |            |                                                                       |
| 07 |         │   ├──<props> handleSelectChange:useCrudExample-> handleSelectChange               |            |                                                                       |
| 08 |         │   └──<props> handleSubmit:useCrudExample-> handleSubmit                           |            |                                                                       |
| 09 |         ├── [Row] {Layout Container}                                                        |            | 'antd'                                                                |
| 10 |         │   ├── [Col] {Form Column}                                                         |            | 'antd'                                                                |
| 11 |         │   │   └── CreateUpdateCrudExample                                                 | 57         | './src/components/CreateUpdateCrudExample.tsx'                        |
| 12 |         │   │       ├──<props> formData: @ -> formData                                      |            |                                                                       |
| 13 |         │   │       ├──<props> handleInputChange: @ -> handleInputChange                    |            |                                                                       |
| 14 |         │   │       ├──<props> handleSelectChange: @ -> handleSelectChange                  |            |                                                                       |
| 15 |         │   │       ├──<props> handleSubmit: @-> handleSubmit                               |            |                                                                       |
| 16 |         │   │       └── Card {Form Card Container}                                          | 25         | './src/components/Card.tsx'                                           |
| 17 |         │   │           ├── Input {Product Name Field}                                      | 33         | './src/components/Input.tsx'                                          |
| 18 |         │   │           │   ├──<props> value: @ -> formData.name                            |            |                                                                       |
| 19 |         │   │           │   ├──<props> handleInputChange:@-> handleInputChange              |            |                                                                       |
| 20 |         │   │           │   └──<event> onChange:@-> handleInputChange                       |            |                                                                       |
| 21 |         │   │           ├── SelectBox {Category Dropdown}                                   | 42         | './src/components/SelectBox.tsx'                                      |
| 22 |         │   │           │   ├──<props> value: @ -> formData.category                        |            |                                                                       |
| 23 |         │   │           │   ├──<props> handleSelectChange: @-> handleSelectChange           |            |                                                                       |
| 24 |         │   │           │   └──<event> onChange:@-> handleSelectChange                      |            |                                                                       |
| 25 |         │   │           ├── TextArea {Product Description Field}                            | 44         | './src/components/TextArea.tsx'                                       |
| 26 |         │   │           │   ├──<props> value: @ -> formData.description                     |            |                                                                       |
| 27 |         │   │           │   ├──<props> handleInputChange:@-> handleInputChange              |            |                                                                       |
| 28 |         │   │           │   └──<event> onChange:handleInputChange                           |            |                                                                       |
| 29 |         │   │           └── Button {Create/Update Button}                                   | 36         | './src/components/Button.tsx'                                         |
| 30 |         │   │               ├──<props> handleSubmit:@-> handleSubmit                        |            |                                                                       |
| 31 |         │   │               └──<event> onClick:handleSubmit                                 |            |                                                                       |
| 32 |         │   └── [Col] {Table Column}                                                        |            | 'antd'                                                                |
| 33 |         │       └── TabelCrudExample                                                        | 24         | './src/components/TabelCrudExample.tsx'                               |
| 34 |         │           ├──<props> records:@ -> records                                         |            |                                                                       |
| 35 |         │           └── Card {Table Card Container}                                         | 25         | './src/components/Card.tsx'                                           |
| 36 |         │               └── Table {CRUD Data Table}                                         | 69         | './src/components/Table.tsx'                                          |
| 37 |         │                  └──<props> data: @ -> records                                    |            |                                                                       |
| 38 |         │                   ├── [th] {Name Column}                                          |            | 'native HTML element'                                                 |
| 39 |         │                   ├── [th] {Category Column}                                      |            | 'native HTML element'                                                 |
| 40 |         │                   ├── [th] {Description Column}                                   |            | 'native HTML element'                                                 |
| 41 |         │                   └── [th] {Created At Column}                                    |            | 'native HTML element'                                                 |
| 42 |         └── useCrudExample                                                                  | 84         | './src/hooks/useCrudExample.tsx'                                      |
| 43 |             ├──<data-storage> formData                                                      |            |                                                                       |
| 44 |             ├──<data-storage> records                                                       |            |                                                                       |
| 45 |             ├────────<setter> formData:handleInputChange                                    |            |                                                                       |
| 46 |             ├────────<setter> formData:handleSelectChange                                   |            |                                                                       |
| 47 |             └────────<setter> records:handleSubmit                                          |            |                                                                       |
|    |                                                                                             |            |                                                                       |
|----|---------------------------------------------------------------------------------------------|------------|-----------------------------------------------------------------------|
|    |                                                                           TOTAL CODE LINES  | 479        |                                                                       |
|----|---------------------------------------------------------------------------------------------|------------|-----------------------------------------------------------------------|

## Legend

- `├──<props>` ➝ Component props/attributes/types passed to components
- `├──<event>` ➝ Events bound to handlers (onChange, onClick)  
- `├──<data-storage>` ➝ In-memory data managed by the hook
- `├──<setter>` ➝ Setter functions that update state
- `[ComponentName]` = Library components
- `ComponentName` = Developer components
- `{Description}` = UI element purpose/content

