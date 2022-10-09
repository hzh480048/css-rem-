var treeData = [
    {
        name: '音程比较',
        childrens: [
            {
                name: '比较纯音程',
            },
            {
                name: '比较不完全和协音程',
            },
            {
                name: '比较不协和音程',
                childrens: [
                    {
                        name: '大二度&小七度-上行',
                        intervalId: 112,
                        questionType: "bj",
                    },
                    {
                        name: '大二度&小七度-下行',
                        intervalId: 113,
                        questionType: "bj",
                    },
                ],
            },
            {
                name: '比较跨两个八度的复合音程',
            }
        ]
    },
    {
        name: '音程辨认',
        childrens: [
            {
                name: '辨认小二度和大二度音程',
                childrens: [
                    {
                        name: '分辨小二度和大二度音程-上行',
                        intervalId: 1,
                        questionType: "br",
                    },
                    {
                        name: '分辨小二度和大二度音程-下行',
                        intervalId: 2,
                        questionType: "br",
                    },
                    {
                        name: '分辨小二度和大二度音程-和声',
                        intervalId: 3,
                        questionType: "br",
                    },
                    {
                        name: '分辨小二度和大二度音程-上行下行',
                        intervalId: 4,
                        questionType: "br",
                    },
                    {
                        name: '分辨小二度和大二度音程-上行和声',
                        intervalId: 5,
                        questionType: "br",
                    },
                    {
                        name: '分辨小二度和大二度音程-下行和声',
                        intervalId: 6,
                        questionType: "br",
                    }
                ]
            },
            {
                name: '辨认小三度和大三度的音程',
                childrens: [
                    {
                        name: "分辨小三度和大三度音程-上行",
                        intervalId: 7,
                        questionType: "br",
                    },
                    {
                        name: "分辨小三度和大三度音程-下行",
                        intervalId: 8,
                        questionType: "br",
                    },
                    {
                        name: "分辨小三度和大三度音程-和声",
                        intervalId: 9,
                        questionType: "br",
                    },
                    {
                        name: "分辨小三度和大三度音程-上行下行",
                        intervalId: 10,
                        questionType: "br",
                    },
                    {
                        name: "分辨小三度和大三度音程-上行和声",
                        intervalId: 11,
                        questionType: "br",
                    },
                    {
                        name: "分辨小三度和大三度音程-下行和声",
                        intervalId: 12,
                        questionType: "br",
                    }
                ]
            },
        ]
    },
]

window.onload = function () {
    var treeDom = document.getElementById('tree')
    let treeContainer  = initTree(treeData)
    treeContainer.addEventListener('click',function(e){
        var target = e.target
        if(target.tagName == 'DIV'||target.tagName == 'I'){
            target = target.tagName=='I'?target.parentNode:target
            if(target.classList.contains('tree-menu-text')){
                target.nextElementSibling.classList.toggle('tree-close')
                target.lastChild.classList.toggle('tree-ico-open')
                if(target.nextElementSibling.classList.contains('tree-close')){
                    target.nextElementSibling.style.maxHeight = '0px'
                }else{
                    target.nextElementSibling.style.maxHeight = treeDom.offsetHeight+'px'
                }
            }
        }
    },false)
    treeDom.appendChild(treeContainer)
}

function initTree(treeData, config = { label: 'name', childrens: 'childrens' }) {
    let { label, childrens } = config
    let container = buildContain('ul')

    function deep(fragment, menuList, show) {
        for (let menu of menuList) {
            let liDom = buildContain('li')
            let textDom = buildContain('div', { innerText: menu[label],className:'tree-menu-text'})
            let IconDom = menu[childrens]&&menu[childrens].length>0?buildContain('i', {className:'tree-ico'}):buildContain('i')
            // textDom.classList.add('tree-menu-text')
            textDom.appendChild(IconDom)
            liDom.appendChild(textDom)
            
            let children = menu[childrens]

            if (children && children.length > 0) {
                liDom.classList.add('tree-menu')
                let container = buildContain('ul')
                if (!show) {
                    liDom.classList.add('tree-close')
                    container.classList.add('tree-close')
                }
                liDom.appendChild(container)
                fragment.appendChild(liDom)
                deep(container, children, show)
            } else {
                liDom.classList.add('tree-menu-item')
                fragment.appendChild(liDom)
            }
        }
    }
    deep(container, treeData, false)
    return container
}

function buildContain(tag, property) {
    var property = property || {}
    let dom = document.createElement(tag)
    for (var key in property) {
        dom[key] = property[key]
    }
    return dom
}

