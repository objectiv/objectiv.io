import React, {useState, useEffect} from 'react';




const SphinxPage = (props) => {
	const [data, setData] = useState('loading');

        // map from sphinx css selector to style
    const styleMap = {
        '.highlight': '', //block / background
        'c': '',       //Comment
        'err': '',     // error
        'gh': '',      // generic header
        'go': '',      // generic output
        'gp': '',      // generic prompt
        'k': 'token keyword',       // keyword
        'kn': '',      // keyword namespace
        'mi': '',      // literal number integer
        'n': '',       // name
        'nn': '',      // namespace
        'o': '',       // operator
        'p': '',       // punctuation
        
    };
    
	useEffect(() => {
		const url = props.url;
		fetch(url)
			.then(response => {
				return response.text()
			})
			.then(raw => {
                console.log(`fetching ${url}`)
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = raw;
                // fix anchors (remove .html)
                for ( let a of tempDiv.getElementsByTagName('a') ){
                    a.href = a.href.replace(/\.html/g, '');
                }
                
                // map styles of tokens
                const tokens = tempDiv.querySelectorAll("div.highlight pre span");
                for ( let token of tokens ){
                    console.log(`got token: ${token.className}`);
                    const className = token.className;
                    const style = styleMap[className];
                    
                    console.log(`Attempting to set class for ${className} to ${style}`);
                    if ( style != undefined ) {
                        token.className = style;
                        //token.style = style;
                    }
                }
                // put code in <code>
                for ( let codeBlock of tempDiv.querySelectorAll("div.highlight pre") ){
                    codeBlock.className = "prism-code language-python codeBlock_node_modules-@docusaurus-theme-classic-lib-next-theme-CodeBlock-styles-module thin-scrollbar";
                }

                // map background of code block
                for ( let codeBlockContainer of tempDiv.querySelectorAll("div.highlight") ){
                    codeBlockContainer.className = "codeBlockContent_node_modules-@docusaurus-theme-classic-lib-next-theme-CodeBlock-styles-module python";
                }
 
                const data = tempDiv.innerHTML;
                setData({ data })
            });
	}, [])
    return (<div dangerouslySetInnerHTML={{ __html: data.data}} />);
}

export default SphinxPage;

