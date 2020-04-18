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
				console.log(res.data);
				setEpisode(res.data);
				setLoaded(true);
			});
		}
	});
	console.log(loaded, video);
	return (
		<div className="episode-container">
			<div className="column-left"></div>
			{(() => {
				if (video.video != null) {
					return (
						<video width="100%" height="auto" controls autoPlay>
							{console.log(video.video)}
							<source src={`${video.video}`}></source>
						</video>
					);
				} else {
					return <div>Loading...</div>;
				}
			})()}
			<div className="column-right"></div>
		</div>
	);
};
export default Episode;
