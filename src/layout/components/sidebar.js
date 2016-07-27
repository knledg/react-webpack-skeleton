import _ from 'lodash';
import React from 'react';
import { Link } from 'react-router';

export class Sidebar extends React.Component {

  static propTypes = {
    location: React.PropTypes.shape({
      pathname: React.PropTypes.string.isRequired,
      query: React.PropTypes.object.isRequired,
    }),
  }

  state = {
    navItems: [
      { pathname: '/', label: 'Home', icon: 'home' },
      { pathname: '/about', label: 'About', icon: 'info' },
      { pathname: '/table-demo', label: 'Tables', icon: 'table' },
      { pathname: '/button-demo', label: 'Buttons', icon: 'dot-circle-o' },
      { pathname: '/progress-bars', label: 'Progress Bars', icon: 'spinner'},
      { pathname: '/modal-demo', label: 'Modals', icon: 'clipboard' },
      { pathname: '/tabs-demo', label: 'Tabs', icon: 'list-ul' },
      { pathname: '/input-demo', label: 'Inputs', icon: 'check-square' },
      { pathname: '/notifications-demo', label: 'Notifications', icon: 'exclamation' },
    ],
  }

  isSelected(navItem) {
    return this.props.location.pathname === navItem.pathname ? 'selected' : '';
  }

  renderLinks() {
    return _.map(this.state.navItems, (navItem) => {
      return (
        <li className={`al-sidebar-list-item ${this.isSelected(navItem)}`} key={navItem.pathname}>
          <Link className="al-sidebar-list-link" to={{ pathname: navItem.pathname, query: navItem.query }}>
            <i className={`fa fa-${navItem.icon}`}></i>
            <span>{navItem.label}</span>
          </Link>
        </li>
      );
    });
  }

  render() {
    // navitems selected, with-sub-menu
    // links - hover
    /*
      <ul ng-if="item.subMenu" className="al-sidebar-sublist"
                ng-className="{expanded: item.expanded, 'slide-right': item.slideRight}">
              <li ng-repeat="subitem in item.subMenu" ng-className="{'selected': subitem.selected, 'with-sub-menu': subitem.subMenu}">
                <a ng-mouseenter="hoverItem($event, item)" ng-if="subitem.subMenu" href ng-click="toggleSubMenu($event, subitem);"
                   className="al-sidebar-list-link subitem-submenu-link"><span>{{ subitem.title }}</span>
                  <b className="fa" ng-className="{'fa-angle-up': subitem.expanded, 'fa-angle-down': !subitem.expanded}"
                     ng-if="subitem.subMenu"></b>
                </a>
                <ul ng-if="subitem.subMenu" className="al-sidebar-sublist subitem-submenu-list"
                    ng-className="{expanded: subitem.expanded, 'slide-right': subitem.slideRight}">
                  <li ng-mouseenter="hoverItem($event, item)" ng-repeat="subSubitem in subitem.subMenu" ng-className="{selected: subitem.selected}">
                    <a  ng-mouseenter="hoverItem($event, item)" href="{{ subSubitem.root }}">{{
                      subSubitem.title }}</a>
                  </li>
                </ul>
                <a  ng-mouseenter="hoverItem($event, item)" target="{{subitem.blank ? '_blank' : '_self'}}" ng-if="!subitem.subMenu" href="{{ subitem.root }}">{{ subitem.title}}</a>
              </li>
            </ul>
     */
    /*
    <div className="sidebar-hover-elem" ng-style="{top: hoverElemTop + 'px', height: hoverElemHeight + 'px'}"
             ng-className="{'show-hover-elem': showHoverElem }"></div>
     */

    // ul - slimscroll="{height: '{{menuHeight}}px'}" slimscroll-watch="menuHeight"
    return (
      <aside className="al-sidebar" ng-swipe-right="menuExpand()" ng-swipe-left="menuCollapse()"
        ng-mouseleave="hoverElemTop=selectElemTop">
        <ul className="al-sidebar-list">
          {this.renderLinks()}
        </ul>
      </aside>
    );
  }
}
