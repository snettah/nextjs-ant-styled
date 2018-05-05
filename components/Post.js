import React, { Fragment } from 'react';
import fetch from 'isomorphic-unfetch';

export default class Post extends React.Component {
  state = {
    show: null
  };

  fetchMovie = async id => {
    if (!id) return null;
    const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
    const show = await res.json();

    console.log(`Fetched show: ${show.name}`);

    this.setState({ show });
  };

  componentDidMount = async () => {
    if (!this.props.id) return null;
    this.fetchMovie(this.props.id);
  };

  componentDidUpdate = async (n, p) => {
    if (n.id === this.props.id) return null;
    this.fetchMovie(this.props.id);
  };

  render() {
    const { show } = this.state;
    if (show === null) return <h1>No movie selected</h1>;
    return (
      <Fragment>
        <h1>{show.name}</h1>
        <p>{show.summary.replace(/<[/]?p>/g, '')}</p>
        <img src={show.image.medium} />
      </Fragment>
    );
  }
}
