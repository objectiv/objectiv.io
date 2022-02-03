import React, { useEffect } from "react";
import mermaid from "mermaid";
import useBaseUrl from '@docusaurus/useBaseUrl';

mermaid.initialize({
  logLevel: 4,
  securityLevel: 'loose', //enable click functionality
	startOnLoad: true,
  arrowMarkerAbsolute: false,
  flowchart: {
    diagramPadding: 20,
    htmlLabels: true,
    curve:'cardinal',
    useMaxWidth: true,
  },
  dataCookieConsent: 'ignore',
  theme: 'base', 
  themeCSS: `
    .node rect { 
      fill: #abe9feff;
      stroke: rgb(0, 100, 150);
    }
    a:hover {
      cursor: pointer;
    }
    .label {
      font-size: 14px;
    }
    .edgeTerminals {
      font-size: 16px;
    }
    .properties, .requires_context {
      font-size: 0.8em;
      display: block;
    }
    .requires_context .properties {
      border-top: 1px solid #000;
      margin-top: 3px;
      padding-top: 3px;
      font-size: 1em;
    }
`,
});

const Mermaid = ({ chart, caption, baseColor, links}) => {
	useEffect(() => {
		mermaid.contentLoaded();
	}, []);

  if(links && links.length > 0) {
    for (const link of links) {
      if (!link?.to) {
        break;
      }
      // use the base URL for all links
      const linkTo = useBaseUrl(link.to);
      const name = link.name ? link.name : '';
      const tooltip = link?.tooltip ?? 'See details';
      const target = link?.target ?? '_self';
      chart = chart + '\n click ' + name + ' "' + linkTo + '" "' + tooltip + '" ' + target + '';
    }
  }

	return (
    <div className={"diagram-"+baseColor}>
      <div className="mermaid" data-cookieconsent="ignore">{chart}</div>
      <p className="diagram-caption">{caption}</p>
    </div>
  );
};

export default Mermaid;