#!/usr/bin/env python3
import re
from pathlib import Path

FILES = [
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
    ('src/hooks/useCrudExample.tsx','useCrudExample.tsx'),
]

def count_code_lines(path: Path) -> int:
    lines = 0
    in_block = False
    in_jsx_block = False
    with path.open('r', encoding='utf-8') as f:
        for raw in f:
            s = raw.strip()
            if not s:
                continue
            # handle start/end of JS/TS block comments /* ... */
            if not in_block and ('/*' in s and '*/' not in s):
                in_block = True
                # if there's code before the comment start, count that part
                prefix = s.split('/*',1)[0].strip()
                if prefix:
                    lines += 1
                continue
            if in_block:
                if '*/' in s:
                    in_block = False
                    # if there's code after block close, count it
                    suffix = s.split('*/',1)[1].strip()
                    if suffix:
                        lines += 1
                continue
            # JSX comment block {/* ... */}
            if not in_jsx_block and ('{/*' in s and '*/}' not in s):
                in_jsx_block = True
                prefix = s.split('{/*',1)[0].strip()
                if prefix:
                    lines += 1
                continue
            if in_jsx_block:
                if '*/}' in s:
                    in_jsx_block = False
                    suffix = s.split('*/}',1)[1].strip()
                    if suffix:
                        lines += 1
                continue
            # single-line comments
            if s.startswith('//'):
                continue
            if s.startswith('/*') and s.endswith('*/'):
                continue
            if s.startswith('{/*') and s.endswith('*/}'):
                continue
            # leading * in block doc lines
            if s.startswith('*'):
                continue
            # line passes filters -> count
            lines += 1
    return lines

if __name__ == '__main__':
    results = {}
    total = 0
    for p, name in FILES:
        path = Path(p)
        if not path.exists():
            print(f"{name}: MISSING")
            results[name] = None
            continue
        c = count_code_lines(path)
        results[name] = c
        total += c
    for name in [n for _, n in FILES]:
        print(f"{name}: {results.get(name)}")
    print("TOTAL:", total)
