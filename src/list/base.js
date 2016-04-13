import _ from 'lodash';
import React from 'react';

export class BaseList extends React.Component {

  renderHeaders(headers) {
    if (! headers) {
      return null;
    }

    const headersJSX = _.map(headers, (header) => {
      return (
        <th key={header}>
          {header}
        </th>
      );
    });

    return (
      <thead>
        <tr>
          {headersJSX}
        </tr>
      </thead>
    );
  }

  renderBody(records) {
    if (! records) {
      return null;
    }

    const rows = _.map(records, (record, idx) => {
      const cells = _.map(record, (value, key) => {
        return (
          <td key={key}>
            {value}
          </td>
        );
      });

      return (
        <tr key={idx}>
          {cells}
        </tr>
      );
    });

    return (
      <tbody>
        {rows}
      </tbody>
    );
  }

  /**
   * [renderTable - render a table with headers and records]
   * @param  {object} options { headers, records }
   * @return {jsx}
   */
  renderTable(options) {
    return (
      <table className="table table-striped table-hover table-bordered">
        {this.renderHeaders(options.headers)}
        {this.renderBody(options.records)}
      </table>
    );
  }

}
