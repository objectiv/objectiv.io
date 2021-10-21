import React, {useState, useEffect} from 'react';

const SphinxPage = (props) => {
    const [data, setData] = useState('loading');

    // map from sphinx css selector to style and/or class in Docusaurus (classic theme)
    const styleMap = {
        'c':  {'class': 'token comment'},                                                           // Comment
        'fm': {'class': 'token function', 'style': 'color: rgb(130, 170, 255);'},                   // class method
        'gh': {'class': 'token plain'},                                                             // generic header (out)
        'go': {'class': 'token comment', 'style': 'color: rgb(105, 112, 152); font-style: italic;'},// generic output
        'gp': {'class': 'token plain'},                                                             // generic prompt (in)
        'k':  {'class': 'token keyword', 'style': 'font-style: italic'},                            // keyword
        'kn': {'class': 'token keyword', 'style': 'font-style: italic'},                            // keyword namespace
        'mi': {'class': 'token number', 'style': 'color: rgb(247, 140, 108);'},                     // literal number integer
        'n':  {'class': 'token plain'},                                                             // name
        'nb': {'class': 'token builtin', 'style': 'color: rgb(130, 170, 255);'},                    // builtin in type
        'nd': {'class': 'token decorator annotation punctuation', 'style': 'color: rgb(199, 146, 234);'}, // decorator
        'nc': {'class': 'token class-name', 'style': 'color: rgb(255, 203, 107);'},                 // class name
        'nf': {'class': 'token function', 'style': 'color: rgb(130, 170, 255);'},                   // function
        'nn': {'class': 'token plain'},                                                             // namespace
        'o':  {'class': 'token operator', 'style': 'color: rgb(137, 221, 255);'},                   // operator
        'ow': {'class': 'token keyword', 'style': 'font-style: italic'},                   // operator word
        'p':  {'class': 'token punctuation', 'style': 'color: rgb(199, 146, 234);'},                // punctuation
        'sd': {'class': 'token triple-quoted-string string', 'style': 'color: rgb(195, 232, 141);'},// triple quoted string
        's1': {'class': 'token string', 'style': 'color: rgb(195, 232, 141);'}                      // string
    };
    
    useEffect(() => {
        const url = props.url;
        
        // first we load the HTML fragment as generated by Sphinx
        fetch(url)
            .then(response => {
                return response.text()
            })
            .then(raw => {
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = raw;
                
                // fix anchors (remove .html)
                Object.values(tempDiv.getElementsByTagName('a')).forEach( a=> {
                    a.href = a.href.replace(/\.html/g, '');
                });

                // map styles of tokens (spans)
                const tokens = tempDiv.querySelectorAll("div.highlight pre span");
                Object.values(tokens).forEach((token: HTMLElement) => {
                    const className = token.className;
                    if ( className in styleMap ){
                        const props = styleMap[className];
                        
                        if ( props != undefined ) {
                            // override class
                            if ( 'class' in props ){
                                token.className = props['class'];
                            }
                            // override style
                            if ( 'style' in props ){
                                const styles = props.style.split(';');
                                Object.values(styles).forEach( (style: string) => {
                                    let [styleName, styleValue] = style.split(':');
                                    token.style.setProperty(styleName, styleValue)
                                });
                            }
                        }
                    }
                });
                
                // code blocks are in a <pre> inside a <div>
                // we keep the old class, and add the Docusaurus ones
                Object.values(tempDiv.querySelectorAll("div.highlight pre")).forEach( (codeBlock: HTMLElement) => {
                    const old = codeBlock.className;
                    codeBlock.className = old + " prism-code language-python codeBlock_node_modules-@docusaurus-theme-classic-lib-next-theme-CodeBlock-styles-module thin-scrollbar";

                    codeBlock.style.setProperty('color', "rgb(191, 199, 213)");
                    codeBlock.style.setProperty('background-color', "rgb(41, 45, 62)");
                    codeBlock.style.setProperty('padding', "var(--ifm-pre-padding)");

                    const code = document.createElement("code");
                    code.className = "codeBlockLines_node_modules-@docusaurus-theme-classic-lib-next-theme-CodeBlock-styles-module";
                    code.style.setProperty("color", "rgb(191, 199, 213)");
                    
                    // get lines
                    const lines = codeBlock.innerHTML.split("\n");
                    
                    /*
                    * Typical structure of a syntax highlighted code fragment is as follow:
                    * <div class="highlight">
                    *   <pre>
                    *      <span>token</span
                    * 
                    * Structure in Docusaurus is slightly different:
                    * <div>
                    *   <pre>
                    *     <code>
                    *       <span class="token-line">
                    *          <span>token</span>
                    * 
                    * Code below transforms the Sphinx structure into the Docusaurus one
                    */
                    Object.values(lines).forEach( line => {
                        const codeLine = document.createElement("span");
                        codeLine.className = 'token-line';
                        if ( line.length == 0 ){
                            // this is simply a span for a newline
                            const emptyLine = document.createElement("span");
                            emptyLine.innerHTML = "\n\n";
                            emptyLine.className = "token plain";
                            emptyLine.style.setProperty("display", "inline-block");
                            codeLine.appendChild(emptyLine);
                        } else {
                            codeLine.innerHTML = line + "\n";
                        }
                        code.appendChild(codeLine);
                    });
                    // remove current lines
                    while ( codeBlock.lastChild ){
                        codeBlock.removeChild(codeBlock.lastChild);
                    }
                    // and replace with new <code> block
                    codeBlock.appendChild(code);
                });

                // map background of code block
                Object.values(tempDiv.querySelectorAll("div.highlight")).forEach( (codeBlockContainer: HTMLElement) => {
                    const old = codeBlockContainer.className;
                    codeBlockContainer.className = old + " codeBlockContent_node_modules-@docusaurus-theme-classic-lib-next-theme-CodeBlock-styles-module python";
                });

                const data = tempDiv.innerHTML;
                setData(data)
            });
    }, [])
    return (<div dangerouslySetInnerHTML={{ __html: data}} />);
}

export default SphinxPage;


