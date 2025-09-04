# Component Relation Diagram (CRD)

| No | Tree                                                                                        | Code Lines | Path                                                                  |
|----|---------------------------------------------------------------------------------------------|------------|-----------------------------------------------------------------------|
| 01 | App.tsx                                                                                     | 36         | './src/App.tsx'                                                       |
| 02 | └── [ConfigProvider]                                                                        |            | 'antd'                                                                |
| 03 |     └── CrudExample                                                                         | 48         | './src/pages/CrudExample.tsx'                                         |
| 04 |         │   ├──<props> formData:useCrudExample-> formData                                   |            |                                                                       |
| 05 |         │   ├──<props> records:useCrudExample-> records                                     |            |                                                                       |
| 06 |         │   ├──<props> handleInputChange:useCrudExample-> handleInputChange                 |            |                                                                       |
| 07 |         │   ├──<props> handleSelectChange:useCrudExample-> handleSelectChange               |            |                                                                       |
| 08 |         │   ├──<props> handleSubmit:useCrudExample-> handleSubmit                           |            |                                                                       |
| 09 |         │   ├──<props> handleEdit:useCrudExample-> handleEdit                               |            |                                                                       |
| 10 |         │   ├──<props> handleDelete:useCrudExample-> handleDelete                           |            |                                                                       |
| 11 |         │   └──<props> handleCancelEdit:useCrudExample-> handleCancelEdit                   |            |                                                                       |
| 12 |         ├── [Row] {Layout Container}                                                        |            | 'antd'                                                                |
| 13 |         │   ├── [Col] {Form Column}                                                         |            | 'antd'                                                                |
| 14 |         │   │   └── CreateUpdateCrudExample                                                 | 65         | './src/components/CreateUpdateCrudExample.tsx'                        |
| 15 |         │   │       ├──<props> formData: @ -> formData                                      |            |                                                                       |
| 16 |         │   │       ├──<props> handleInputChange: @ -> handleInputChange                    |            |                                                                       |
| 17 |         │   │       ├──<props> handleSelectChange: @ -> handleSelectChange                  |            |                                                                       |
| 18 |         │   │       ├──<props> handleSubmit: @-> handleSubmit                               |            |                                                                       |
| 19 |         │   │       ├──<props> handleCancelEdit: @-> handleCancelEdit                       |            |                                                                       |
| 20 |         │   │       └── Card {Form Card Container}                                          | 25         | './src/components/Card.tsx'                                           |
| 21 |         │   │           ├── Input {Product Name Field}                                      | 30         | './src/components/Input.tsx'                                          |
| 22 |         │   │           │   ├──<props> value: @ -> formData.name                            |            |                                                                       |
| 23 |         │   │           │   ├──<props> handleInputChange:@-> handleInputChange              |            |                                                                       |
| 24 |         │   │           │   └──<event> onChange:@-> handleInputChange                       |            |                                                                       |
| 25 |         │   │           ├── SelectBox {Category Dropdown}                                   | 39         | './src/components/SelectBox.tsx'                                      |
| 26 |         │   │           │   ├──<props> value: @ -> formData.category                        |            |                                                                       |
| 27 |         │   │           │   ├──<props> handleSelectChange: @-> handleSelectChange           |            |                                                                       |
| 28 |         │   │           │   └──<event> onChange:@-> handleSelectChange                      |            |                                                                       |
| 29 |         │   │           ├── TextArea {Product Description Field}                            | 41         | './src/components/TextArea.tsx'                                       |
| 30 |         │   │           │   ├──<props> value: @ -> formData.description                     |            |                                                                       |
| 31 |         │   │           │   ├──<props> handleInputChange:@-> handleInputChange              |            |                                                                       |
| 32 |         │   │           │   └──<event> onChange:handleInputChange                           |            |                                                                       |
| 33 |         │   │           └── Button {Create/Update Button}                                   | 32         | './src/components/Button.tsx'                                         |
| 34 |         │   │               ├──<props> handleSubmit:@-> handleSubmit                        |            |                                                                       |
| 35 |         │   │               └──<event> onClick:handleSubmit                                 |            |                                                                       |
| 36 |         │   └── [Col] {Table Column}                                                        |            | 'antd'                                                                |
| 37 |         │       └── TableCrudExample                                                        | 27         | './src/components/TableCrudExample.tsx'                               |
| 38 |         │           ├──<props> records:@ -> records                                         |            |                                                                       |
| 39 |         │           ├──<props> handleEdit: @-> handleEdit                                   |            |                                                                       |
| 40 |         │           ├──<props> handleDelete: @-> handleDelete                               |            |                                                                       |
| 41 |         │           └── Card {Table Card Container}                                         | 25         | './src/components/Card.tsx'                                           |
| 42 |         │               └── Table {CRUD Data Table}                                         | 69         | './src/components/Table.tsx'                                          |
| 43 |         │                   ├──<props> data: @ -> records                                   |            |                                                                       |
| 44 |         │                   ├── [th] {Name Column}                                          |            | 'native HTML element'                                                 |
| 45 |         │                   ├── [th] {Category Column}                                      |            | 'native HTML element'                                                 |
| 46 |         │                   ├── [th] {Description Column}                                   |            | 'native HTML element'                                                 |
| 47 |         │                   ├── [th] {Created At Column}                                    |            | 'native HTML element'                                                 |
| 48 |         │                   └── [th] {Action Column}                                        |            | 'native HTML element'                                                 |
| 49 |         │                            ├── [AntButton] {Edit Button}                          |            | 'antd'                                                                |
| 50 |         │                            │    ├──<props> handleEdit:@-> handleEdit              |            |                                                                       |
| 51 |         │                            │    └──<event> onClick:handleEdit                     |            |                                                                       |
| 52 |         │                            └── [AntButton] {Delete Button}                        |            | 'antd'                                                                |
| 53 |         │                                 ├──<props> handleDelete:@-> handleDelete          |            |                                                                       |
| 54 |         │                                 └──<event> onClick:handleDelete                   |            |                                                                       |
| 55 |         └── useCrudExample                                                                  | 129        | './src/hooks/useCrudExample.tsx'                                      |
| 56 |             ├──<data-storage> formData                                                      |            |                                                                       |
| 57 |             ├──<data-storage> records                                                       |            |                                                                       |
| 58 |             ├──<setter> formData:handleInputChange                                          |            |                                                                       |
| 59 |             ├──<setter> formData:handleSelectChange                                         |            |                                                                       |
| 60 |             ├──<setter> records:handleSubmit                                                |            |                                                                       |
| 61 |             ├──<setter> records:handleEdit                                                  |            |                                                                       |
| 62 |             ├──<setter> records:handleDelete                                                |            |                                                                       |
| 63 |             └──<setter> editingRecord:handleCancelEdit                                      |            |                                                                       |
|    |                                                                                             |            |                                                                       |
|----|---------------------------------------------------------------------------------------------|------------|-----------------------------------------------------------------------|
|    |                                                                      TOTAL CODE LINES       | 541        |                                                                       |
|----|---------------------------------------------------------------------------------------------|------------|-----------------------------------------------------------------------|

## Legend

- `<props>` ➝ Component props/attributes/types passed to components
- `<event>` ➝ Events bound to handlers (onChange, onClick)
- `<data-storage>` ➝ In-memory data managed by the hook
- `<setter>` ➝ Setter functions that update state
- `[ComponentName]` = Library components
- `ComponentName` = Developer components
- `{Description}` = UI element purpose/content
