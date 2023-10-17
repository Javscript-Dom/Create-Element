

// button add div
let button = document.createElement('button');
button.innerHTML = 'Add Div'

// parent div 
let parentDiv = document.createElement('div')
parentDiv.id = 'parent-div'

//Add a div with each click
button.addEventListener('click', () => {

    //child div
    let ChildDiv = document.createElement('div')
    ChildDiv.id = 'child-div'

    parentDiv.append(ChildDiv)

    return ChildDiv
})

document.body.append(button, parentDiv )