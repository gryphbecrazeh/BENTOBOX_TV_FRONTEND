import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
let Episode = (props) => {
	const [video, setEpisode] = useState({});
	const [loaded, setLoaded] = useState(false);
	const { episodeID } = useParams();
	useEffect(() => {
		if (!loaded) {
			axios.get(`/api/episode/?episode=${episodeID}`).then((res) => {
				setEpisode(res.data);
				setLoaded(true);
			});
		}
	});
	return (
		<div>
			<iframe src={`${video.url}`}></iframe>
		</div>
	);
};
export default Episode;
