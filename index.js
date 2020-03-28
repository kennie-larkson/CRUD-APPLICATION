const createEle=(element)=> document.createElement(element);
const postDiv = createEle('div');

const createApp=()=>{

    const nav = createEle('nav')
    nav.style = " background-color: whitesmoke";
    const links = createEle('li')
    const anchors = createEle('a')
    anchors.setAttribute('href','#');
    anchors.textContent = "Home";
    const navbar = links.appendChild(anchors);
    navbar.style = "background-color: grey";
    nav.appendChild(navbar);
    document.body.append(nav);

    //header component
    const header = createEle('h1');
    header.textContent = 'Create and post your messages';
    header.style = "margin-left:1em";
    document.body.appendChild(header);

    //body component

    const bodyDiv = createEle('div');
    bodyDiv.style = "margin: 2em";
    document.body.appendChild(bodyDiv);

    const label = createEle('label');
    label.textContent = "Enter your message title:"
    label.style = "font-size: 25px; display: block";
    bodyDiv.appendChild(label);
    
    const titleBox = createEle('input');
    titleBox.style = ' width:50%; height:1.5em; font-size:16px; display:block; margin-bottom:1em; border-radius:5px; border-outline: 0';
    titleBox.setAttribute('class','title-box');

    const button = createEle('button');
    button.style = "background-color: skyblue; border: none; width: 100px; height:30px; border-radius: 5px; font-size:16px";
    button.textContent = "Submit";
    
    bodyDiv.appendChild(titleBox);

    const textArea = createEle('textarea');
    textArea.style = " font-size:16px; display: block; margin-bottom: 1em; margin-top: 2em; border-radius: 5px";
    textArea.cols = "100";
    textArea.rows = "10";
    bodyDiv.appendChild(textArea);

    bodyDiv.appendChild(button);
    button.addEventListener('click',function(){ console.log('Title: ',titleBox.value);console.log('Message: ', textArea.value)

            
            postDiv.innerHTML = `
                <h3>Title:</h3><span>${titleBox.value}</span>
                <h3>Message:</h3><span>${textArea.value}</span>

            `;
            postDiv.style = " width:50%; border: 1px solid grey; border-radius:3px; margin: 2em; padding: 2em";
            // bodyDiv.appendChild(postDiv);
            document.body.append(postDiv);
            
} );

}

createApp();