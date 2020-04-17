import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
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
					{this.state.episodes.map((episode) => {
						return (
							<div key={`${episode._id}`} className="episode">
								<Link to={`/episode/${episode._id}`}>
									<img src={`${episode.image}`} />
								</Link>
								<Link to="/episode">
									<div className="name">{`${episode.name} ${episode.episode}`}</div>
								</Link>
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}

export default Catalog;
