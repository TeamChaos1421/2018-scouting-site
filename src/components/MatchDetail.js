// Library imports
import React from 'react';

export function renderMatchJSON(match) {
	return (
		<div>
			<pre>{JSON.stringify(match, null, 2)}</pre>
		</div>
	);
}

export function MatchDetail(props) {
	return (
		<div>
			{
				props.matchData.map((match, index) => {
					return renderMatchJSON(match);
				})
			}
		</div>
	);
}

export default MatchDetail;
