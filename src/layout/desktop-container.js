import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
    Container,
    Menu,
    Responsive,
    Visibility,
    Dropdown
} from 'semantic-ui-react'
import { NavLink } from 'react-router-dom';

export default class DesktopContainer extends Component {
    state = {}

    hideFixedMenu = () => this.setState({ fixed: false })
    showFixedMenu = () => this.setState({ fixed: true })

    render() {
        const { children } = this.props

        return (
            <Responsive minWidth={Responsive.onlyTablet.minWidth}>
                <Visibility
                    once={false}
                    onBottomPassed={this.showFixedMenu}
                    onBottomPassedReverse={this.hideFixedMenu}
                >
                    <Menu fixed='top' inverted>
                        <Container text>
                            <Menu.Item as={NavLink} header exact to='/'>
                                Cryptee
                            </Menu.Item>
                            <Dropdown item text='Encrypt'>
                                <Dropdown.Menu>
                                    <Dropdown.Item as={NavLink} to='/encrypt/text' exact>Text</Dropdown.Item>
                                    <Dropdown.Item as={NavLink} to="/encrypt/file" exact>File</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Dropdown item text='Decrypt'>
                                <Dropdown.Menu>
                                    <Dropdown.Item as={NavLink} to='/decrypt/text' exact>Text</Dropdown.Item>
                                    <Dropdown.Item as={NavLink} to="/decrypt/file" exact>File</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Menu.Item as={NavLink} to='/faq' exact>FAQ</Menu.Item>
                            <Menu.Item as={NavLink} to='/about'>About</Menu.Item>
                        </Container>
                    </Menu>
                    <Container text style={{ paddingTop: window.location.pathname !== "/" && '5em' }} fluid>
                        {children}
                    </Container>
                </Visibility>
            </Responsive>
        )
    }
}

DesktopContainer.propTypes = {
    children: PropTypes.node,
}