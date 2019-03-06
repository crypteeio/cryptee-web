import React, { Component } from 'react'
import {
	Button,
	Container,
	Header,
	Icon,
	Divider,
} from 'semantic-ui-react'
import { Link } from 'react-router-dom';

export default class Home extends Component {
	render() {
		const { mobile } = this.props;
		return (
			<Container text textAlign='center'>
				<Header
					as='h1'
					content='Cryptee'
					style={{
						fontSize: mobile ? '2em' : '4em',
						fontWeight: 'normal',
						marginBottom: 0,
						paddingTop: mobile ? '1.5em' : '3em',
					}}
				/>
				<Header
					as='h2'
					content='Making data encryption easy with Trezor'
					style={{
						fontSize: mobile ? '1.5em' : '1.7em',
						fontWeight: 'normal',
						marginTop: mobile ? '0.5em' : '1.5em'
					}}
				/>				
				<iframe
					id="ytplayer"
					title="Cryptee - Presentation"
					type="text/html"
					height="360"
					style={{ border: "1px solid rgba(0, 0, 0, 0.87)", marginBottom: '1em', width: '100%' }}
					src="https://www.youtube.com/embed/BTTHdwp7gLA?autoplay=0&origin=https://cryptee.io&cc_load_policy=1"
					frameBorder="0">
				</iframe>
				<Button as={Link} to='/faq' secondary size={mobile ? 'small' : 'huge'}>
					Read FAQ&nbsp;&nbsp;<Icon name='file text' />
				</Button>
				{mobile ? <Divider hidden fitted /> : ''}
				<Button as={Link} to='/encrypt/text' primary size={mobile ? 'small' : 'huge'}>
					Get encrypted text<Icon name='right arrow' />
				</Button>
			</Container>
		)
	}
}