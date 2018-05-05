import React from 'react';
import Layout from '../components/Layout';
import Post from '../components/Post';
import Link from 'next/link';
import Router from 'next/router';
import fetch from 'isomorphic-unfetch';
import { Row, Col } from 'antd';

export default class extends React.Component {
  static async getInitialProps(props) {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
    const data = await res.json();

    return {
      shows: data
    };
  }

  handleSelectMovie = id => {
    if (this.props.url.query.id === id.toString()) return null;
    Router.push({ pathname: '/', query: { id: id } }, `/p/${id}`, {
      shallow: true
    });
  };

  render() {
    const { shows, url } = this.props;
    return (
      <Layout>
        <h1>Batman TV Shows</h1>
        <Row>
          <Col span={8}>
            <ul>
              {this.props.shows.map(({ show }) => (
                <li key={show.id}>
                  <a onClick={() => this.handleSelectMovie(show.id)}>
                    {show.name}
                  </a>
                </li>
              ))}
            </ul>
          </Col>
          <Col span={16}>
            <Post id={url.query.id} />
          </Col>
        </Row>
      </Layout>
    );
  }
}
