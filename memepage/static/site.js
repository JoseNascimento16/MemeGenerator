//  :: Import native JS :: 
// include('/static/js/index.js');

//  :: Import REACT JS :: 
include_react('/static/js/react/react_data/memes_data.js');
include_react('/static/js/react/header.js');
include_react('/static/js/react/maincontent.js');
include_react('/static/js/react/footer.js');
include_react('/static/js/react/react_page.js');
include_react('/static/js/index.js');

// function include(file) { 
  
//     var script  = document.createElement('script'); 
//     script.src  = file; 
//     script.type = 'text/javascript'; 
//     script.defer = true; 
    
//     document.getElementsByTagName('head').item(0).appendChild(script); 
    
// }

function include_react(file) { 
  
    var script  = document.createElement('script'); 
    script.src  = file; 
    script.type = 'text/babel'; 
    script.defer = true; 
    
    document.getElementsByTagName('head').item(0).appendChild(script); 
    
}

