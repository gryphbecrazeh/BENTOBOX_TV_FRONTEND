import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
let Episode = (props) => {
	const [video, setEpisode] = useState({});
	const { episodeID } = useParams();
	useEffect(() => {
		axios.get(`/api/episode/${episodeID}`).then((res) => {
			console.log(res);
		});
	});
	return <div>test</div>;
};
export default Episode;
