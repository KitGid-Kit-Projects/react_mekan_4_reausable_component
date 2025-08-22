# Component Relation Diagram (CRD)

No   | Tree                                                                   |     Path                                                                  |
-----+------------------------------------------------------------------------+---------------------------------------------------------------------------|
01   | App.tsx                                                                |     './src/App.tsx'                                                       |
02   | └── [ConfigProvider]                                                   |     'antd'                                                                | 
     |                                                                        |                                                                           |
-----|------------------------------------------------------------------------|---------------------------------------------------------------------------|      

## Legend

- `├──<props>` ➝ Component props/attributes/types passed to components
- `[ComponentName]` = Library components
- `ComponentName` = Developer components
- `{Description}` = UI element purpose/content