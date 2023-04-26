export const tables = [
    {
        id: 1,
        name: '一级',
        date: '2023-04-26',
        children: [
            {
                id: 2,
                name: '二级',
                date: '2023-04-26',
                children: [
                    {
                        id: 3,
                        name: '三级',
                        date: '2023-04-26',
                        children: [
                            {
                                id: 4,
                                name: '四级',
                                date: '2023-04-26',
                                children: [],
                            },
                        ],
                    },
                ],
            },
            {
                id: 20,
                name: '二级',
                date: '2023-04-26',
                children: [
                    {
                        id: 30,
                        name: '三级',
                        date: '2023-04-26',
                        children: [
                            {
                                id: 40,
                                name: '四级',
                                date: '2023-04-26',
                                children: [],
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: 12,
        name: '一级',
        date: '2023-04-26',
        children: [
            {
                id: 23,
                name: '二级',
                date: '2023-04-26',
                children: [
                    {
                        id: 34,
                        name: '三级',
                        date: '2023-04-26',
                        children: [
                            {
                                id: 45,
                                name: '四级',
                                date: '2023-04-26',
                                children: [],
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: 12,
        name: '一级',
        date: '2023-04-26',
        children: [
            {
                id: 23,
                name: '二级',
                date: '2023-04-26',
                children: [
                    {
                        id: 34,
                        name: '三级',
                        date: '2023-04-26',
                        children: [
                            {
                                id: 45,
                                name: '四级',
                                date: '2023-04-26',
                                children: [],
                            },
                        ],
                    },
                ],
            },
        ],
    },
];
export function indexData(val) {
    val.forEach((item, index) => {
        item.index = index + 1 + '';
        if (item.children.length > 0) {
            _indexData(item, item.index);
        }
    });
    function _indexData(item, oldIndex) {
        if (item.children.length < 0) return;
        if (item.children.length > 0) {
            item.children.forEach((Item, i) => {
                Item.index = oldIndex + '.' + (i + 1);
                _indexData(Item, Item.index);
            });
        }
    }
    return val;
}
