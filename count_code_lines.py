import os

def count_code_lines(path):
    lines = 0
    in_block = False
    with open(path) as f:
        for l in f:
            s = l.strip()
            if not s or s.startswith('//'):
                continue
            if '/*' in s:
                in_block = True
                continue
            if '*/' in s:
                in_block = False
                continue
            if in_block:
                continue
            lines += 1
    return lines

files = [
    ('src/App.tsx','App.tsx'),
    ('src/pages/CrudExample.tsx','CrudExample.tsx'),
    ('src/components/CreateUpdateCrudExample.tsx','CreateUpdateCrudExample.tsx'),
    ('src/components/Card.tsx','Card.tsx'),
    ('src/components/Input.tsx','Input.tsx'),
    ('src/components/SelectBox.tsx','SelectBox.tsx'),
    ('src/components/TextArea.tsx','TextArea.tsx'),
    ('src/components/Button.tsx','Button.tsx'),
    ('src/components/TableCrudExample.tsx','TableCrudExample.tsx'),
    ('src/components/Table.tsx','Table.tsx'),
    ('src/hooks/useCrudExample.tsx','useCrudExample.tsx')
]

result = {name: count_code_lines(path) for path, name in files}
for name, count in result.items():
    print(f'{name}: {count}')
