import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
  Container,
  Icon,
  Menu,
  Responsive,
  Segment,
  Sidebar
} from 'semantic-ui-react'
import { NavLink } from 'react-router-dom';
import { version, dependencies } from '../../package.json'

export default class MobileContainer extends Component {
    state = {}
  
    handlePusherClick = () => {
      const { sidebarOpened } = this.state
  
      if (sidebarOpened) {
        this.setState({ sidebarOpened: false })
      }
    }
  
    handleToggle = () => this.setState(prevState => ({ sidebarOpened: !prevState.sidebarOpened }))
  
    render() {
      const { children } = this.props
      const { sidebarOpened } = this.state
      return (
        <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
          <Sidebar.Pushable>
            <Sidebar as={Menu} animation='push' inverted vertical visible={sidebarOpened}>
              <Menu.Item as={NavLink} to='/' exact>Home</Menu.Item>
              <Menu.Item as={NavLink} to='/encrypt/text' exact>Encrypt text</Menu.Item>
              <Menu.Item as={NavLink} to='/encrypt/file' exact>Encrypt file</Menu.Item>
              <Menu.Item as={NavLink} to='/decrypt/text' exact>Decrypt text</Menu.Item>
              <Menu.Item as={NavLink} to='/decrypt/file' exact>Decrypt file</Menu.Item>
              <Menu.Item as={NavLink} to='/faq' exact>FAQ</Menu.Item>
              <Menu.Item as={NavLink} to='/about' exact>About</Menu.Item>
            </Sidebar>
  
            <Sidebar.Pusher
              dimmed={sidebarOpened}
              onClick={this.handlePusherClick}
              style={{ minHeight: '100vh' }}
            >
              <Segment
                inverted
                textAlign='center'
                style={{ minHeight: 0, padding: '0em 0em' }}
                vertical
              >
                <Container>
                  <Menu inverted pointing secondary size='large'>
                  <Menu.Item onClick={this.handleToggle}>
                      <Icon name='sidebar' />
                    </Menu.Item> 
                    <Menu.Item position='left' as={NavLink} to='/' exact>Cryptee&nbsp;<sub><small>v{version}</small></sub></Menu.Item>                                       
                  </Menu>
                </Container>
              </Segment>
              {children}
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </Responsive>
      )
    }
  }
  
  MobileContainer.propTypes = {
    children: PropTypes.node,
  }