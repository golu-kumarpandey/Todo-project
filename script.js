let todounorderedlist = document.getElementById("todo-unordered-list")
let listobject = [{
        item: "Learn Html",
        id: 1
    },
    {
        item: "Learn Css",
        id: 2
    },
    {
        item: "Learn JavaScript",
        id: 3
    }
]

function appendAndDelete(item, id) {
    // this code is for list 
    let listid = "list" + id
    let list = document.createElement("li")
    list.id = listid
    list.classList.add("li")
    todounorderedlist.appendChild(list)

    // this code is for checkbox
    let checkbox = document.createElement("input")
    checkbox.type = "checkbox"
    checkbox.id = id
    checkbox.classList.add("check")
    list.appendChild(checkbox)

    // this code is for labelcontainer
    let labelContainer = document.createElement("div")
    // labelContainer.id = id
    labelContainer.classList.add("labelContainer")
    list.appendChild(labelContainer)

    // this code is for create label
    let label = document.createElement("label")
    label.setAttribute("for", id)
    label.textContent = item
    label.classList.add("label")
    labelContainer.appendChild(label)

    // this code is for deleticon container
    let deletecontiner = document.createElement("div")
    deletecontiner.classList.add("deletecontiner")
    deletecontiner.classList.add("delete")
    labelContainer.appendChild(deletecontiner)

    // this code is for delete i 
    let deleteicon = document.createElement("i")
    deleteicon.classList.add("fas", "fa-times", "delete-icon")
    deletecontiner.appendChild(deleteicon)

    // this code is for line strike using function
    checkbox.onclick = function() {
        if (checkbox.checked) {
            label.classList.add("line_thu")
        } else {
            label.classList.remove("line_thu")
        }
    }

    deleteicon.onclick = function() {
        let deletelist = list
        todounorderedlist.removeChild(deletelist)
    }


}




for (let i of listobject) {
    appendAndDelete(i["item"], i["id"])
}

// this code is for deleteicon 
let addbutton = document.getElementById("addTodobtn")
addbutton.onclick = function() {
    let input = document.getElementById("inputText")
    let inputValue = input.value
    let conter = listobject.length + 1
    if (inputValue === "") {
        alert("Enter the value")
    } else {
        let newobject = {
            item: inputValue,
            id: conter

        }
        conter += 1
        appendAndDelete(newobject["item"], newobject["id"])
        input.value = ""
    }

}