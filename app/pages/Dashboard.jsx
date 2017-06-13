import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Page from 'pages/Page';
import DashboardContainer from 'containers/Dashboard';

class Dashboard extends Component {
  render() {
    return (
      <Page {...this.getMetaData()}>
        <DashboardContainer {...this.props} />
      </Page>
    );
  }

  getMetaData() {
    return {
      title: this.pageTitle(),
      meta: this.pageMeta(),
      link: this.pageLink()
    };
  }

  pageTitle() {
    return 'Dashboard | reactGo';
  }

  pageMeta() {
    return [
      { name: "description", content: "A reactGo example of a dashboard page" }
    ];
  }

  pageLink() {
    return [];
  }
}

export default Dashboard;

