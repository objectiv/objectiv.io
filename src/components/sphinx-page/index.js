import React, {useState, useEffect} from 'react';



const SphinxPage = (props) => {
	const [data, setData] = useState('loading');

	useEffect(() => {
		const url = props.url;
		fetch(url)
			.then(response => {
				return response.text();
			})
			.then(raw => {
                console.log(`fetching ${url}`)
                const data = raw.replace(/href=\"(.*?).html(#.*?)?\"/g, 'href="$1$2"');
                setData({ data })
            });
		
    
	}, [])

	return (<div dangerouslySetInnerHTML={{ __html: data.data}} />);
}

export default SphinxPage;

