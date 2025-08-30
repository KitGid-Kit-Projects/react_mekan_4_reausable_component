# CRD Code Line Navigation (STEP_2 vs STEP_3)

This file compares `CRD.md` values taken from the `STEP_2` and `STEP_3` branches. "Code Lines STEP 2" uses numbers from `STEP_2`; "Code Lines STEP 3" uses numbers from `STEP_3`. Other STEP columns are left blank.

No   | Tree                                                                   | Code Lines STEP 2 | Code Lines STEP 3 |     Path                                                                  |
-----+------------------------------------------------------------------------+-------------------+-------------------+---------------------------------------------------------------------------|
01   | App.tsx                                                                | 41                | 41                |     './src/App.tsx'                                                       |
02   | └── [ConfigProvider]                                                   |                   |                   |     'antd'                                                                | 
03   |     └── CrudExample                                                    | 30                | 35                |     './src/pages/CrudExample.tsx'                                         |
04   |         ├── [Row] {Layout Container}                                   |                   |                   |     'antd'                                                                |
05   |         │   ├── [Col] {Form Column}                                    |                   |                   |     'antd'                                                                |
06   |         │   │   └── CreateUpdateCrudExample                            |                   | 47                |     './src/components/CreateUpdateCrudExample.tsx'                        |
07   |         │   │       └── Card {Form Card Container}                     | 25                | 25                |     './src/components/Card.tsx'                                           |
08   |         │   │           ├── Input {Product Name Field}                 |                   | 29                |     './src/components/Input.tsx'                                          |
09   |         │   │           ├── SelectBox {Category Dropdown}              |                   | 36                |     './src/components/SelectBox.tsx'                                      |
10   |         │   │           ├── TextArea {Product Description Field}       |                   | 40                |     './src/components/TextArea.tsx'                                       |
11   |         │   │           └── Button {Create/Update Button}              |                   | 34                |     './src/components/Button.tsx'                                         |
12   |         │   └── [Col] {Table Column}                                   |                   |                   |     'antd'                                                                |
13   |         │       └── TableCrudExample                                   | 24                | 24                |     './src/components/TableCrudExample.tsx'                               |
14   |         │           └── Card {Table Card Container}                    | 25                | 25                |     './src/components/Card.tsx'                                           |
15   |         │               └── Table {CRUD Data Table}                    | 78                | 78                |     './src/components/Table.tsx'                                          |
16   |         │                   ├── [th] {Name Column}                     |                   |                   |     'native HTML element'                                                 |
17   |         │                   ├── [th] {Category Column}                 |                   |                   |     'native HTML element'                                                 |
18   |         │                   ├── [th] {Description Column}              |                   |                   |     'native HTML element'                                                 |
19   |         │                   ├── [th] {Created At Column}               |                   |                   |     'native HTML element'                                                 |
20   |         │                   └── [th] {Actions Column}                  |                   |                   |     'native HTML element'                                                 |
21   |         └── useCrudExample                                             | 45                | 45                |     './src/hooks/useCrudExample.tsx'                                      |
     |                                                                        |                   |                   |                                                                           |
-----+------------------------------------------------------------------------+-------------------+-------------------+---------------------------------------------------------------------------|
     |                                                       TOTAL CODE LINES | 243               | 409               |                                                                           |
-----+------------------------------------------------------------------------+-------------------+-------------------+---------------------------------------------------------------------------|

   
Notes:
- STEP columns populated from `git show STEP_2:CRD.md` (STEP 2) and `git show STEP_3:CRD.md` (STEP 3).
- `types/common.ts` entries are left blank because `CRD.md` in those branches did not list explicit counts; I can count that file and update the table if you want.

Created from repository branches on Aug 27, 2025.
