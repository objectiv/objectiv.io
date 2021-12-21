import { tagLink } from "@objectiv/tracker-browser";
import React, { useEffect, useState } from 'react';
import { scrollToAnchor } from "../scroll-to-anchor/scrollToAnchor";
import baseUrl from "@generated/docusaurus.config"


const SphinxPage = (props) => {
    const [data, setData] = useState('loading');

    // map from sphinx css selector to style and/or class in Docusaurus (classic theme)
    const styleMap = {
        'c':  {'class': 'token comment', 'style': 'color: rgb(153, 153, 136); font-style: italic;'}, // Comment
        'c1': {'class': 'token comment', 'style': 'color: rgb(153, 153, 136); font-style: italic;'},   // Comment
        'fm': {'class': 'token function', 'style': 'color: rgb(130, 170, 255);'},                   // class method
        'gh': {'class': 'token plain'},                                                             // generic header (out)
        'go': {'class': 'token comment', 'style': 'color: rgb(153, 153, 136); font-style: italic;'},// generic output
        'gp': {'class': 'token plain'},                                                             // generic prompt (in)
        'k':  {'class': 'token keyword', 'style': 'font-style: italic'},                            // keyword
        'kc': {'class': 'token boolean', 'style': 'color: rgb(54, 172, 170);'},                     // boolean
        'kn': {'class': 'token keyword', 'style': 'font-style: italic'},                            // keyword namespace
        'mi': {'class': 'token number', 'style': 'color: rgb(54, 172, 170);'},                     // literal number integer
        'n':  {'class': 'token plain'},                                                             // name
        'nb': {'class': 'token builtin', 'style': 'color: rgb(130, 170, 255);'},                    // builtin in type
        'nd': {'class': 'token decorator annotation punctuation', 'style': 'color: rgb(199, 146, 234);'}, // decorator
        'nc': {'class': 'token class-name', 'style': 'color: rgb(255, 203, 107);'},                 // class name
        'nf': {'class': 'token function', 'style': 'color: rgb(130, 170, 255);'},                   // function
        'nn': {'class': 'token plain'},                                                             // namespace
        'o':  {'class': 'token operator', 'style': 'color: rgb(57, 58, 52);'},                   // operator
        'ow': {'class': 'token keyword', 'style': 'font-style: italic'},                   // operator word
        'p':  {'class': 'token punctuation', 'style': 'color: rgb(199, 146, 234);'},                // punctuation
        'sd': {'class': 'token triple-quoted-string string', 'style': 'color: rgb(195, 232, 141);'},// triple quoted string
        's1': {'class': 'token string', 'style': 'color: rgb(227, 17, 108);'}                      // string
    };

    // map Sphinx admonition classes to docusaurus/ remark admonitions
    // see: https://github.com/elviswolcott/remark-admonitions/blob/master/lib/index.js for svg data
    const admonitionMap = {
        'admonition attention': {
            'class': 'admonition admonition-caution alert alert--warning',
            'icon': '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"/></svg>'
        },
        'admonition caution': {
            'class': 'admonition admonition-caution alert alert--warning',
            'icon': '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"/></svg>'
        },
        'admonition danger': {
            'class': 'admonition admonition-danger alert alert--danger',
            'icon': '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 12 16"><path fill-rule="evenodd" d="M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"/></svg>'
        },
        'admonition error': {
            'class': 'admonition admonition-danger alert alert--danger',
            'icon': '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 12 16"><path fill-rule="evenodd" d="M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"/></svg>'
        },
        'admonition hint': {
            'class': 'admonition admonition-tip alert alert--success',
            'icon': '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 12 16"><path fill-rule="evenodd" d="M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"/></svg>'
        },
        'admonition important': {
            'class': 'admonition admonition-caution alert alert--warning',
            'icon': '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"/></svg>'
        },
        'admonition note': {
            'class': 'admonition admonition-note alert alert--secondary',
            'icon': '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16"><path fill-rule="evenodd" d="M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"/></svg>'
        },
        'admonition tip': {
            'class': 'admonition admonition-tip alert alert--success',
            'icon': '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 12 16"><path fill-rule="evenodd" d="M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"/></svg>'
        },
        'admonition warning': {
            'class': 'admonition admonition-danger alert alert--danger',
            'icon': '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 12 16"><path fill-rule="evenodd" d="M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"/></svg>'
        },
        'admonition seealso': {
            'class': 'admonition admonition-tip alert alert--success',
            'icon': '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 12 16"><path fill-rule="evenodd" d="M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"/></svg>'
        }
    };

    useEffect(() => {
        const url = props.url.replace('modeling', '_modeling');
        // first we load the HTML fragment as generated by Sphinx
        fetch(url)
            .then(response => {
                return response.text()
            })
            .then(raw => {
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = raw;

                // fix admonitions
                // <p class="admonition-title"> ==> <div class="admonition-heading"><h5>[TITLE]</h5></div>
                // <div class="admonition note"> ==> <div class="admonition admonition-tip alert alert--success">
                // <div class="admonition warning"> ==> <div class="admonition admonition-danger alert alert--danger">
                //  add span with svg icon to the header
                Object.values(tempDiv.getElementsByTagName('div')).forEach( (element: HTMLDivElement) => {
                    if ( element.className in admonitionMap ) {
                        const admonition = admonitionMap[element.className]
                        // fix class of content div
                        element.className = admonition['class'];
                        Object.values(element.querySelectorAll('p.admonition-title')).forEach(
                            (title: HTMLParagraphElement) => {
                            // create new heading 5, with content of original paragraph
                            const heading = document.createElement('h5');
                            const span = document.createElement('span');

                            // add icon
                            span.innerHTML = admonition['icon'];
                            span.className = 'admonition-icon';
                            heading.appendChild(span);

                            heading.appendChild(document.createTextNode(title.textContent));

                            // create div container for the heading
                            const container = document.createElement('div');
                            container.appendChild(heading);
                            container.className = 'admonition-heading';
                            const parent = title.parentElement;

                            // swap paragraph with new div
                            parent.replaceChild(container, title);
                        });
                    }
                });

                // get base from window.location, should be something like https://objectiv.io, or http://localhost:3000
                const currentSite = window.location.toString().match(/^(http[s]?:\/\/[a-z0-9.:]+\/).*?$/);

                // fix anchors (remove .html) and fix path
                Object.values(tempDiv.getElementsByTagName('a')).forEach( a => {

                    // a link is internal if the first part matches the current location,
                    // or if it's a relative URL
                    const isInternal = ((currentSite[1] !== undefined && a.href.startsWith(currentSite[1])) ||
                        !a.href.startsWith('http'));

                    if ( isInternal ){
                        // fix the hrefs in the overview/index page in case of missing trailing slash
                        if ( a.href.indexOf('modeling') == -1){
                            // we add the baseURL to the match, to make sure it works in dev and prod mode
                            const regex = `^(http[s]?://[a-z0-9:.]+${baseUrl.baseUrl})(.*?)$`.replace('\\', '\\\/');
                            a.href = a.href.replace(new RegExp(regex), '$1modeling/$2');
                        }

                        // only remove the .html if local links, leave external links alone
                        //  console.log(`Found link to: ${a.href} --> ${currentSite} // ${window.location.toString()}`);
                        a.href = a.href.replace(/\.html/g, '');

                        // try and fix links that are broken in builds do to slashes
                        // we go from http://site/docs/modeling/page/otherpage/#anchor
                        // to
                        // http://site/docs/modeling/otherpage/#anchor
                        const parts = window.location.toString().match(/^(.*?)modeling\/([a-zA-Z0-9-._]*?\/)([a-zA-Z0-9-._]*?\/)(#([a-zA-Z0-9-._])+)?$/);
                        if ( parts !== null ){
                          //  console.log(`Add fixing link (${a.href}) removing ${parts[3]}`);
                            a.href = a.href.replace(parts[3], '');
                        }

                        // fix content of (internal) permalinks, change from ¶ to #
                        if ( a.className == 'headerlink' && a.text == '¶' ){
                            a.text = '#';
                        }
                    } else {
                        // add target="_blank" to the <a> link for non-internal links, such as to pandas docs
                        a.target = '_blank';
                    }
                });

                // fix #anchors
                // we do this, by finding sections with a header
                // and moving the id to the heading rather than the section
                const sections = tempDiv.getElementsByTagName('section');
                Object.values(sections).forEach( (section: HTMLElement) => {

                    const originalId = section.id;
                    // move id's from sections to headers, otherwise # anchors won't work
                    ['h1', 'h2', 'h3'].every(heading_type => {
                        const headings = section.getElementsByTagName(heading_type);
                        if ( headings.length > 0 ){
                            // move ID to the actual heading
                            section.id = '_' + originalId;
                            headings[0].id = originalId;
                            headings[0].className = "sphinxAnchor";

                            // stop the loop if we are successful
                            return false;
                        }
                        return true;
                    });
                });
                // now fix the links/anchors in a <dt id="some_id">
                const dts = tempDiv.getElementsByTagName('dt');
                Object.values(dts).forEach( (dt: HTMLElement) => {
                    if ( dt.id != null ){
                        dt.className = dt.className + " sphinxAnchor";
                    }
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

                    codeBlock.style.setProperty('color', "rgb(57, 58, 52)");
                    codeBlock.style.setProperty('background-color', "rgb(246, 248, 250)");
                    codeBlock.style.setProperty('padding', "var(--ifm-pre-padding)");

                    const code = document.createElement("code");
                    code.className = "codeBlockLines_node_modules-@docusaurus-theme-classic-lib-next-theme-CodeBlock-styles-module";
                    code.style.setProperty("color", "rgb(57, 58, 52)");

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

                // tag dynamically created playground link, if present
                const playgroundLinkElement = tempDiv.querySelector('a[href^="https://notebook.objectiv.io/"]');
                if (playgroundLinkElement) {
                    const playgroundLinkTag = tagLink({
                        id: 'notebook-product-analytics',
                        href: 'https://notebook.objectiv.io/',
                        text: 'sandboxed notebook',
                        options: {
                            trackClicks: {
                                waitUntilTracked: true
                            }
                        }
                    })

                    // Apply attributes manually (Idea to make this in a new API for WP or other old school websites?)
                    for (let [key, value] of Object.entries<string>(playgroundLinkTag)) {
                        playgroundLinkElement.setAttribute(key, value);
                    }
                }

                const data = tempDiv.innerHTML;
                setData(data)
            })
            .then(() => {
                scrollToAnchor();
            });
    }, [])

    return (<div dangerouslySetInnerHTML={{ __html: data}} />);
}
export default SphinxPage;
