import React, { Component } from "react";
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
			<div class="catalog-container">
				<strong>Episodes</strong>
				<div className="catalog">
					{this.state.episodes.map((episode) => {
						return (
							<div key={`${episode._ID}`} className="episode">
								<img src={`${episode.image}`} />
								<div className="name">{`${episode.name} ${episode.episode}`}</div>
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}

export default Catalog;
