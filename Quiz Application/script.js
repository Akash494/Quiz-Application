function init(){
    var question = '[{"question":"Q1. what is apple?", "options":["Fruit","Vegetable"], "answer":"Fruit"},{ "question" :"Q2. what is Brinjal?", "options":["Fruit","Vegetable"], "answer":"Vegetable"}]';

    var dataModel = JSON.parse(question);
    
    // For every element of DataModel we run a loop
    function forEach(dataModel,fn){
        for(i=0; i<dataModel.length; i++){
            fn(dataModel[i]);    
        }       
    }

    forEach(dataModel, (d) => {
        var article = document.createElement('article');
        article.innerHTML = "<p>" + dataModel[i].question + "</p>";

        for(j=0; j<d.options.length; j++){
            var radio = document.createElement('input')
            radio.setAttribute('type','radio')
            radio.setAttribute('id','options'+i+""+j)
            radio.setAttribute('value',i+":"+d.options[j])
            radio.setAttribute('name','options'+i)

            var label = document.createElement('label')
            label.setAttribute('for','options'+i+""+j)
            label.innerHTML = d.options[j]

            var breaktag = document.createElement('br')
            article.append(radio);
            article.append(label)
            article.append(breaktag)
        }
        document.getElementById("questions").append(article)
    })
    
    var breaktag = document.createElement('br');

    // Creating Submit Button
    var button = document.createElement('button');
    button.innerHTML="Submit";

    // Action to be performed when button is clicked
    button.onclick = function(){
        var questionOptions = document.querySelectorAll('[id^=options]');
        var score = 0;
        for(i=0; i<questionOptions.length; i++){
            if(questionOptions[i].checked){
                var options = questionOptions[i].value.split(":")
                
                if(dataModel[options[0]].answer == options[1]){
                    score += 10
                }
            }
        }
        showScore(score);
    }

    function showScore(score){
        var section = document.getElementById("scoreSection");
        removeNodes(section);
        var article = document.createElement('article');
        article.innerHTML = "<p><b> Your score is " + score + "<p><b>";
        section.append(article);
    }

    // To remove duplication of result when answer is resubmitted
    function removeNodes(node){
        while(node.hasChildNodes()){
            node.removeChild(node.lastChild);
        }      
    }

    document.getElementById('questions').append(breaktag)
    document.getElementById('questions').append(button)
}

function removeNodes(node){
    while(node.hasChildNodes())
        node.removeChild(node.lastChild);
}

window.onload = init 