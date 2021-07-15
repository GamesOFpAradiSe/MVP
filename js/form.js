class Form{
constructor(){



}

display(){

    var title = createElement('h2')
title.html("CAR RACING FORM")
title.position(130,100)

var input = createInput("Name")
input.position(250,260)

var button = createButton("RACE")
button.position(250,400)

var name = input.value()

button.mousePressed(function(){

    input.hide()
    button.hide()

var greeting = createElement('h3')
greeting.html("hello racer "+ name)
greeting.position(250,160)

})

}

} 