import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
	Card,
	CardImg,
	CardBody,
	CardTitle,
	CardSubtitle,
	CardHeader,
	Button,
} from "reactstrap";

class Catalog extends Component {
	state = {
		episodes: [],
		loaded: false,
	};
	componentDidMount() {
		if (!this.state.loaded) {
			axios
				.get("/api/catalog")
				.then((res) =>
					this.setState({ episodes: [...res.data.videos], loaded: true })
				)
				.catch((err) => console.log("Couldn't Connect...", err));
		}
	}
	render() {
		return (
			<div className="catalog-container">
				<strong>Episodes</strong>
				<div className="catalog">
					{this.state.episodes.map((episode, index, episodes) => {
						let nextEpisode = episodes[++index];
						let nextEpisodeId = "";
						if (nextEpisode) {
							nextEpisodeId = nextEpisode._id;
						}
						return (
							<Card
								key={episode._id}
								inverse
								style={{ backgroundColor: "#333", borderColor: "#333" }}
							>
								<CardHeader>
									<Link to={`/episode/${episode._id}/${nextEpisodeId}`}>
										<CardTitle>{`${episode.name} ${episode.episode}`}</CardTitle>
									</Link>
								</CardHeader>
								<Link to={`/episode/${episode._id}/${nextEpisodeId}`}>
									<CardImg top width="100%" src={episode.image} />
								</Link>
								<CardBody>
									<Button>Watch</Button>
								</CardBody>
							</Card>
						);
					})}
				</div>
			</div>
		);
	}
}

export default Catalog;
